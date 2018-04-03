import { ZeroEx, ZeroExConfig } from '0x.js';
import { Web3ProviderEngine } from 'web3-provider-engine';
import { isNullOrUndefined } from 'util';

export class ZeroExClient {

    private static zeroEx: ZeroEx;

    public static getInstance(): ZeroEx {
        return this.zeroEx;
    }

    public static createInstance(web3providerEngine: Web3ProviderEngine, zeroExConfig: ZeroExConfig): ZeroEx {
        if (isNullOrUndefined(this.zeroEx)) {
            this.zeroEx = new ZeroEx(web3providerEngine, zeroExConfig);
        }
        return this.zeroEx;
    }

    private constructor() { }
}