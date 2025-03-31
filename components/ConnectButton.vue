<template>
    <div
        :class="[left ? 'justify-left' : 'justify-center', hasConnectedWallet && 'flex flex-1']"
        class="parent relative duration-500 rounded-md"
    >
        <Icon name="heroicons:wallet" class="mr-2 z-10 absolute left-2 -translate-y-1/2 top-1/2 text-white w-5 h-5" />

        <WalletMultiButton />
        <div
            v-if="hasConnectedWallet && balanceStore.balanceSol.fetched"
            class="flex bg-[#da342e] pl-2 pr-2 rounded-r-md -ml-1.5 z-[2] items-center"
        >
            <img :src="solanaCurrency" alt="SOL" class="h-4 bg-white p-1 md:h-5 mr-1.5 rounded-full" />
            <span
                class="text-white text-base text-ellipsis md:text-clip overflow-hidden w-12 md:whitespace-normal md:break-words md:overflow-visible md:text-sm md:w-auto mr-1.5"
            >
                {{ balanceStore.balanceSol.getFormattedAmount() }}
            </span>
        </div>
        <div
            v-else-if="hasConnectedWallet"
            class="flex bg-[#DA342E] px-2 rounded-r-md w-fit -ml-1.5 z-[2] items-center"
        >
            <AppSpinner :size="2" class="mx-4" />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import solanaCurrency from '@/assets/img/solana.png';

    import { useBalanceStore } from '@/store/balances';
    import { useWallet, WalletMultiButton } from 'solana-wallets-vue';

    const colorMode = useColorMode();

    defineProps<{
        left?: boolean;
    }>();
    const { publicKey } = useWallet();
    const balanceStore = useBalanceStore();
    const hasConnectedWallet = computed(() => {
        return publicKey.value;
    });
</script>

<style>
    @media (max-width: 767px) {
        .swv-dropdown,
        .swv-button-trigger {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        .parent div:first-child {
            width: 100%;
        }
    }
</style>
