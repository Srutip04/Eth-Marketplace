import { handler as createUseAccount } from "./useAccount";
import { handler as createAccountHook } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";
export const setupHooks = (...deps) => {
  return {
    useAccount: createUseAccount(...deps),
  };
};
