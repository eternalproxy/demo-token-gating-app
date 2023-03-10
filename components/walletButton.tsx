import { useRouter } from "next/router";
import React from "react";
import { useAccountContext } from "../context/AccountContext";
import { shortenAddress } from "../utils/wallet";

const WalletButton = ({}: {}) => {
  const { login, logout, loadingUser, walletAddress, provider, accountData } =
    useAccountContext();

  const router = useRouter();

  const handleClick = async () => {
    if (walletAddress!== "") {
      logout();
      router.push("/");
      return; 
    }

    await login().then((_) => router.push("/account"));
  };

  return (
    <button
      onClick={handleClick}
      className="epsButton w-1/3 h-12 my-auto text-center text-md hover:scale-105 hidden sm:block"
    >
      {loadingUser
        ? "Loading..."
        : walletAddress === ""
        ? "Connect Wallet"
        : shortenAddress(walletAddress)}
    </button>
  );
};

export default WalletButton;
