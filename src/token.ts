import type { InjectionKey } from "vue";
import AuthVueClient from "./AuthClient.ts";

/**
 * @ignore
 */
export const CUSTOS_TOKEN = '$custos';

// make AuhVueClient as an Injection key to inject into Vue components
export const CUSTOS_INJECTION_KEY: InjectionKey<AuthVueClient> =
    Symbol(CUSTOS_TOKEN);