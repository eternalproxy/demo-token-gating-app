import {
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
  WALLET_ADAPTERS,
} from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AccountContextType, AccountData } from "../utils/dataTypes";
import RPC from "../utils/web3RPC";

const AccountContextDefaultValues: AccountContextType = {
  walletAddress: "",
  userAuth: null,
  provider: null,
  tokenIds: [],
  accountData: null,
  loadingUser: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  createUser: () => {},
};

const AccountContext = createContext<AccountContextType>(
  AccountContextDefaultValues
);

type AccountWrapperProps = {
  children: ReactNode;
};

export function AccountProvider({ children }: AccountWrapperProps) {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [userAuth, setUserAuth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );
  const [tokenIds, setTokenIds] = useState<string[]>([]);
  const [accountData, setAccountData] = useState<AccountData | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(false);
  const clientId =
    "BPdhg2v57VMTQwQijeBM5m2ORUapyUD0tJZQcn2R1otCJKw4_sCDAHORfHBn0qj8g_1z9a21qpfTErd6vFCkIxA";

  const init = async () => {
    const w3Auth = new Web3Auth({
      clientId,
      authMode: "DAPP",
      uiConfig: {
        theme: "dark",
      },
      chainConfig: {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0x5",
        rpcTarget:
          "https://goerli.infura.io/v3/776218ac4734478c90191dde8cae483c",
      },
    });

    setUserAuth(w3Auth);
    await w3Auth.initModal({
      modalConfig: {
        [WALLET_ADAPTERS.OPENLOGIN]: {
          label: "openlogin",
          showOnModal: false,
        },
      },
    });
    setProvider(w3Auth.provider);
  };

  const login = async () => {
    if (!userAuth) {
      return;
    }

    setLoadingUser(true);

    const web3Provider = await userAuth.connect();
    setProvider(web3Provider);

    if (!web3Provider) {
      return;
    }

    const rpc = new RPC(web3Provider);
    const address = await rpc.getAccounts();
    setWalletAddress(address);

    await rpc.getNFTHolding().then((tokenIds) => setTokenIds(tokenIds));

    await fetchUser(address);
    setLoadingUser(false);
  };


  const fetchUser = async (address: string) => {

  };

  const createUser = async (accountName: string, repTokenId: string) => {
    setAccountData({name: accountName, repTokenId: repTokenId});
  };

  const logout = async () => {
    if (!userAuth) {
      return;
    }
    await userAuth.logout();
    setAccountData({name: "", repTokenId: ""})
    setWalletAddress("");
    setProvider(null);
  };

  useEffect(() => {
    init();
  }, []);

  const sharedState = {
    walletAddress,
    userAuth,
    provider,
    tokenIds,
    accountData,
    loadingUser,
    login,
    logout,
    setAccountData,
    createUser,
  };

  return (
    <AccountContext.Provider value={sharedState}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  return useContext(AccountContext);
}
