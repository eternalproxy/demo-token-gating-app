import { ethers } from "ethers";
import Web3Modal from "web3modal";

export const connectWallet = async () => {
  try {
    const web3Modal = new Web3Modal({ cacheProvider: true });
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    return provider;
  } catch (e) {
    return null;
  }
};

export const getTokensIdsOfContractByOwner = async (
  contract: any,
  ownerAddress: any
) => {
  try {
    let balance = await contract.balanceOf(ownerAddress);

    if (!balance.toNumber()) return [];

    const holdings = await contract.addressHoldings(ownerAddress);

    return holdings.map((address: any) => address.toNumber());
  } catch (e) {
    return [];
  }
};

export const shortenAddress = (address: any) => {
  const addressStr = address.toString();

  return `${addressStr.substring(0, 5)}...${addressStr.substring(
    addressStr.length - 4,
    addressStr.length
  )}`;
};
