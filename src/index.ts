import { inject } from 'vue';
import {CUSTOS_TOKEN, CUSTOS_INJECTION_KEY} from './token';
import AuthVueClient from "./AuthClient.ts";
import type {Config }from "./AuthClient.ts";

export { CUSTOS_INJECTION_KEY } from './token';

// declare this interface to ensure CUSTOS_TOKEN is a global property within Vue components
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        [CUSTOS_TOKEN]: AuthVueClient;
    }
}

export function createAuth(
    config: Config,
) {
    return new AuthVueClient(config);
}

//returns an instance of AuthVueClient, instead of calling injection everytime, calling useAuth is faster
export function useAuth(): AuthVueClient {
    return inject(CUSTOS_INJECTION_KEY) as AuthVueClient;
}
