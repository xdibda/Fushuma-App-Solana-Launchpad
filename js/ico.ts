import type { Wallet } from '@coral-xyz/anchor';
import { PublicKey } from '@solana/web3.js';
import log from 'loglevel';
import { useAnchorWallet, useWallet } from 'solana-wallets-vue';
import { web3 } from '@coral-xyz/anchor';
import type { IIcoInfo, IIcoInfoWithKey, IPurchaseAmount, IUserPurchase, IUserPurchaseWithKey } from '~/types/Ico';
import {
    buyToken,
    claim,
    getAllICOs,
    setClusterConfig,
    getAllPurchases,
    getCostInfo,
    getUserPurchaseInfo,
    getIcoInfo,
} from '~/submodules/solana-ico-launchpad/cli/scripts';

export class SolanaIcoLaunchpad {
    private static async setConnection() {
        const anchorWallet = useAnchorWallet();

        if (!anchorWallet.value) {
            throw new Error('not defined: publicKey');
        }

        await setClusterConfig(
            import.meta.env.VITE_BLOCKCHAIN_CLUSTER,
            anchorWallet.value as Wallet,
            import.meta.env.VITE_BLOCKCHAIN_RPC,
        );
    }

    public static async getAllIco(params?: {
        owner?: PublicKey;
        icoMint?: PublicKey;
        costMint?: PublicKey;
    }): Promise<IIcoInfoWithKey[]> {
        try {
            await this.setConnection();

            return await getAllICOs({
                owner: params?.owner,
                icoMint: params?.icoMint,
                costMint: params?.costMint,
            });
        } catch (error) {
            log.error('ico failed', error);
            throw error;
        }
    }

    public static async buyToken({
        icoPot,
        amountWithDecimals,
        isIco2022,
        isCost2022,
    }: {
        icoPot: web3.PublicKey;
        amountWithDecimals: number;
        isIco2022?: boolean;
        isCost2022?: boolean;
    }) {
        const { publicKey } = useWallet();

        if (!publicKey.value) {
            throw new Error('not defined: publicKey');
        }

        await this.setConnection();

        try {
            return await buyToken(icoPot, String(amountWithDecimals), isIco2022 ?? false, isCost2022 ?? false);
        } catch (error) {
            log.error('ico failed', error);
            throw error;
        }
    }

    public static async claimTokens({
        icoPot,
        userPurchase,
        isIco2022,
    }: {
        icoPot: web3.PublicKey;
        userPurchase: web3.PublicKey;
        isIco2022?: boolean;
    }) {
        const { publicKey } = useWallet();

        if (!publicKey.value) {
            throw new Error('not defined: publicKey');
        }

        try {
            await this.setConnection();

            return await claim(icoPot, userPurchase, isIco2022 ?? false);
        } catch (error) {
            log.error('ico failed', error);
            throw error;
        }
    }

    public static async getIcoInfo({ icoPot }: { icoPot: web3.PublicKey }): Promise<IIcoInfo> {
        try {
            await this.setConnection();
            return await getIcoInfo(icoPot);
        } catch (error) {
            log.error('ico failed', error);
            throw error;
        }
    }

    public static async getAllPurchases({
        buyer,
        ico,
    }: {
        buyer?: web3.PublicKey;
        ico?: web3.PublicKey;
    }): Promise<IUserPurchaseWithKey[]> {
        const { publicKey } = useWallet();

        if (!publicKey.value) {
            throw new Error('not defined: publicKey');
        }

        try {
            await this.setConnection();
            return await getAllPurchases({
                buyer,
                ico,
            });
        } catch (error) {
            log.error('ico failed', error);
            throw error;
        }
    }

    public static async getUserPurchaseInfo({
        userPurchase,
    }: {
        userPurchase: web3.PublicKey;
    }): Promise<IUserPurchase> {
        const { publicKey } = useWallet();

        if (!publicKey.value) {
            throw new Error('not defined: publicKey');
        }

        try {
            await this.setConnection();
            return await getUserPurchaseInfo(userPurchase);
        } catch (error) {
            log.error('ico failed', error);
            throw error;
        }
    }

    public static async getPurchaseAmount({
        icoPot,
        amount,
    }: {
        icoPot: web3.PublicKey;
        amount: number;
    }): Promise<IPurchaseAmount> {
        const { publicKey } = useWallet();

        if (!publicKey.value) {
            throw new Error('not defined: publicKey');
        }

        try {
            await this.setConnection();
            return await getCostInfo(icoPot, String(amount));
        } catch (error) {
            log.error('ico failed', error);
            throw error;
        }
    }
}
