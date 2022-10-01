import { useEffect, useState } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0xfd454ee145f4f8e5046fed7f3c75f48d87c327a3b065b897e5dd877621544036": true,
};

export const handler = (web3, provider) => () => {


  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    account: {
      data,
      isAdmin: (data && adminAddresses[data]) ?? false,
      mutate,
      ...rest,
    },
  };
};
