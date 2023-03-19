import type { SafeEventEmitterProvider } from "@web3auth/base";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../data/contract";
import { epsAbi, epsAddress, epsUsageType } from "../data/eps";

export default class EthereumRpc {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  async getNFTHolding(): Promise<{tokenId: string, imageData: string}[]> {
    try {
  
      const ethersProvider = new ethers.providers.Web3Provider(this.provider);
      const signer = ethersProvider.getSigner();
  
      // Get user's Ethereum public address
      const address = await signer.getAddress();
  
      const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        ethersProvider
      );
  
      const eps = new ethers.Contract(
        epsAddress,
        epsAbi,
        ethersProvider
      );
  
      const epsAddresses = await eps.getAddresses(address, contractAddress, epsUsageType, false, true);
  
      let holdings: string[] = [];
  
      for (let i = 0; i < epsAddresses.length; i++) {
        holdings = holdings.concat(await contract.addressHoldings(epsAddresses[i]));
      }

      const nftData = [];
  
      for (let i = 0; i < holdings.length; i++) {
        const tokenURI = await contract.tokenURI(holdings[i]);

        const json = JSON.parse(atob(tokenURI.split(',')[1]));

        const imageData = json['image_data'];
        nftData.push({tokenId: holdings[i].toString(), imageData: imageData});
      }

      return nftData;
    } catch (error) {
      return [];
    }
  }
  
  async getAccounts(): Promise<any> {
    try {
      const ethersProvider = new ethers.providers.Web3Provider(this.provider);
      const signer = ethersProvider.getSigner();

      // Get user's Ethereum public address
      const address = await signer.getAddress();

      return address;
    } catch (error) {
      return error;
    }
  }
}
