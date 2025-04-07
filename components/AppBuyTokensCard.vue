<script setup lang="ts">
    import type { IIcoInfoWithKey } from '~/types/Ico';
    import { SolanaIcoLaunchpad } from '~/js/ico';
    import * as web3 from '@solana/web3.js';
    import { Metaplex } from '~/js/metaplex';
    import { useBalanceStore } from '@/store/balances';
    import { formatNumber, IcoStatus } from '~/js/utils';
    import { convertTokenIfAvailableWithFormatting } from '~/js/tokens';

    const balanceStore = useBalanceStore();

    const fetchBalances = () => {
        balanceStore.clearBalances();
        balanceStore.fetchBalances();
    };

    const toast = useToast();

    const { icoInfo, icoPot, evmMemo } = defineProps<{
        icoInfo: IIcoInfoWithKey;
        icoPot: string;
        evmMemo?: boolean;
        status: IcoStatus;
    }>();

    const emits = defineEmits<{
        (e: 'fetch:data'): void;
        (e: 'fetch:purchases'): void;
    }>();

    const isLoading = ref();
    const isPriceLoading = ref();
    const amount = ref<number>();
    const evmChainAddress = ref<string>('');

    const price = ref({
        value: 0,
        availableAmount: 0,
    });

    const minTokenAmount = computed(() => {
        if (!icoInfo.data) return 0.01;
        return 1 / icoInfo.data!.icoDecimals;
    });

    const bonusProgressValue = computed(() => {
        if (!icoInfo.data || !amount.value) return 0;
        return Math.min((amount.value / tokensToPurchase.value) * 100, 100);
    });

    const getPrice = async () => {
        if (amount.value) {
            isPriceLoading.value = true;

            try {
                const p = await SolanaIcoLaunchpad.getPurchaseAmount({
                    icoPot: new web3.PublicKey(icoPot),
                    amount: Number(amount.value * icoInfo.data!.icoDecimals),
                });

                price.value = {
                    availableAmount: p.availableAmount / icoInfo.data!.icoDecimals,
                    value: p.value / icoInfo.data!.icoDecimals,
                };

                if (price.value.availableAmount < amount.value) {
                    amount.value = price.value.availableAmount;
                }
            } finally {
                isPriceLoading.value = false;
            }
        }
    };

    watch(amount, getPrice, { immediate: true });

    const buy = async () => {
        if (!amount.value) return;

        isLoading.value = true;
        try {
            const amountInTokens = Number(amount.value) * icoInfo.data!.icoDecimals;

            toast.add({
                title: 'Preparing transaction',
                icon: 'i-lucide-info',
                description: 'Please wait for the transaction.',
                color: 'info',
            });

            const txSig = await SolanaIcoLaunchpad.buyToken({
                icoPot: new web3.PublicKey(icoPot),
                evmChainAddress: evmMemo ? evmChainAddress.value : undefined,
                amountWithDecimals: amountInTokens,
            });

            toast.add({
                title: 'Confirming transaction',
                icon: 'i-lucide-info',
                description: 'Please wait for the transaction.',
                color: 'info',
            });

            if (txSig) {
                await Metaplex.getInstance().confirmTransaction(txSig);
            }

            toast.add({
                title: 'Success',
                icon: 'i-lucide-check-circle',
                description: 'Your action was completed successfully.',
                color: 'success',
            });

            emits('fetch:data');
            emits('fetch:purchases');
            fetchBalances();
            getPrice();
        } catch (e) {
            toast.add({
                title: 'Uh oh! Something went wrong.',
                description: 'There was a problem with your request.',
                icon: 'i-lucide-alert-circle',
                close: {
                    color: 'primary',
                    variant: 'outline',
                    class: 'rounded-full',
                },
            });
        } finally {
            isLoading.value = false;
        }
    };

    const tokensToPurchase = computed(() => {
        return (icoInfo.data.amount / icoInfo.data.icoDecimals) * (icoInfo.data?.bonusActivator / 100 / 100);
    });
</script>

<template>
    <div class="bg-white shadow-sm py-6 px-4 space-y-3">
        <AppSubtitle class="mb-5" title="Buy token" />

        <p class="text-sm text-black/60 dark:text-white/50">Please specify the amount of tokens you wish to purchase</p>

        <div
            v-if="status === IcoStatus.SoldOut"
            class="text-sm text-white bg-gradient-to-r mt-3 flex items-center space-x-1.5 -mx-4 from-primary-500 via-transparent to-transparent py-3 px-6 font-bold"
        >
            <Icon name="lucide:octagon-x" class="text-white text-xl w-4 h-4" />
            <span>Tokens are sold out</span>
        </div>

        <div
            v-else-if="status === IcoStatus.Ended"
            class="text-sm text-white bg-gradient-to-r mt-3 flex items-center space-x-1.5 -mx-4 from-primary-500 to-white py-3 px-6 font-bold"
        >
            <Icon name="lucide:octagon-x" class="text-white text-xl w-4 h-4" />
            <span>Sale has ended</span>
        </div>

        <div
            v-else-if="status === IcoStatus.Upcoming"
            class="text-sm text-white bg-gradient-to-r mt-3 flex items-center space-x-1.5 -mx-4 from-primary-500 to-white py-3 px-6 font-bold"
        >
            <Icon name="lucide:octagon-x" class="text-white text-xl w-4 h-4" />
            <span>Sale has not started yet</span>
        </div>

        <div
            v-else-if="status === IcoStatus.Closed"
            class="text-sm text-white bg-gradient-to-r mt-3 flex items-center space-x-1.5 -mx-4 from-primary-500 to-white py-3 px-6 font-bold"
        >
            <Icon name="lucide:octagon-x" class="text-white text-xl w-4 h-4" />
            <span>Sale is closed</span>
        </div>

        <div v-else class="w-full md:items-end md:grid flex flex-col grid-cols-3 gap-3">
            <UFormField label="Amount" required number>
                <UInputNumber class="w-full" :step="minTokenAmount" :min="minTokenAmount" v-model="amount">
                    <template #decrement>
                        <span></span>
                    </template>

                    <template #increment>
                        <span class="px-3">{{ convertTokenIfAvailableWithFormatting(icoInfo.data.icoMint) }}</span>
                    </template>
                </UInputNumber>
            </UFormField>
            <UFormField label="Price">
                <UInputNumber
                    class="w-full text-center"
                    :format-options="{
                        roundingMode: 'expand',
                        roundingPriority: 'morePrecision',
                    }"
                    :loading="true"
                    variant="subtle"
                    readonly
                    v-model="price.value"
                >
                    <template #decrement>
                        <AppSpinner v-if="isPriceLoading" :size="2" class="ml-2" />
                        <span v-else />
                    </template>

                    <template #increment>
                        <span class="px-3">{{ convertTokenIfAvailableWithFormatting(icoInfo.data.costMint) }}</span>
                    </template>
                </UInputNumber>
            </UFormField>
            <UFormField v-if="evmMemo" required label="EVM Chain Address">
                <UInput
                    class="w-full text-center"
                    v-model="evmChainAddress"
                />
            </UFormField>
            <UButton
                :class="!amount || (isLoading && 'cursor-not-allowed')"
                :loading="isLoading"
                class="w-fit max-h-[48px] h-[36px] px-6 dark:text-white"
                :disabled="!amount || isLoading || (evmMemo && evmChainAddress === '')"
                @click="buy"
                >Buy token</UButton
            >
        </div>

        <div
            v-if="status === IcoStatus.Live && icoInfo.data?.bonusReserve && icoInfo.data.bonusReserve > 0"
            class="mt-6 w-full md:w-1/2"
        >
            <p class="text-sm text-black/60 dark:text-white/50 mb-2">Bonus activation progress</p>
            <UProgress v-model="bonusProgressValue" />

            <p v-if="!amount || amount < tokensToPurchase" class="text-sm mt-2 text-primary-500">
                You need
                {{ Intl.NumberFormat('en-us', { style: 'decimal' }).format(tokensToPurchase - (amount ?? 0)) }}
                tokens more to activate the bonus.
            </p>

            <p v-else class="text-sm mt-1 text-primary-500">
                You will receive
                {{
                    Intl.NumberFormat('en-us', { style: 'decimal' }).format(
                        amount * (icoInfo.data.bonusPercentage / 100 / 100),
                    )
                }}
                bonus tokens!
            </p>
        </div>
    </div>
</template>

<style scoped></style>
