import { SafeEventEmitterProvider } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";

export interface AccountData {
  id?: number;
  name: string;
  role?: string;
  repTokenId?: string;
}

export type AccountContextType = {
  walletAddress: string;
  userAuth: Web3Auth | null;
  provider: SafeEventEmitterProvider | null;
  tokenIds: string[];
  accountData: AccountData | null;
  loadingUser: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  createUser: (accountName: string, repTokenId: string) => void;
};

export interface UserResponse {
  success: boolean;
  message: string;
  data?: AccountData;
}

export interface UsersResponse {
  success: boolean;
  message: string;
  data?: AccountData[];
}
