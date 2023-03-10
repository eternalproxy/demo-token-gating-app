import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout";
import { useAccountContext } from "../context/AccountContext";

export default function Account() {
  const [showSignUp, setShowSignup] = useState<boolean>();
  const { provider, walletAddress, tokenIds, accountData, createUser } =
    useAccountContext();
  const [selectedToken, setSelectedToken] = useState<string>("");

  const registeredView = () => {
    if (!accountData) {
      return (
        <>
          <h1 className="font-mukta text-white text-5xl font-bold text-center">
            Something went wrong...
          </h1>
        </>
      );
    }
    return (
      <>
        <h1 className="font-mukta text-white text-5xl font-bold text-center">
          Token Gated Access Granted!
        </h1>

        <h1 className="text-white font-chaney text-4xl font-bold text-center">
          User name: {accountData.name}
        </h1>

        <div className="flex flex-row mx-auto gap-8">
          <img
            src={`https://composethis.art/img/?base=https://arweave.net/-HWRbVWBXFrepBjB0usL4BWooqkqHYFnwbvG7DA_6sI/odd.png&t1=epsdemo%20${accountData.repTokenId}.png`}
            className="w-1/2 rounded-xl"
          />
          <div className="w-1/2 flex flex-col gap-4">
            <h1 className="text-white font-chaney text-2xl font-bold">
              eps token gating demo nft
            </h1>
            <p className="text-white font-mukta text-xl text-left">
              Token ID: #{accountData.repTokenId}
            </p>
          </div>
        </div>
      </>
    );
  };

  const handleSubmit = async (event: any) => {

    const accountName = event.target.name.value;

    createUser(accountName, selectedToken);
  };

  const unregisteredView = (
    <>
      {!showSignUp && (
        <>
          <h1 className="text-white font-chaney text-5xl font-bold text-center">
            Create token gated account
          </h1>
          <div className="flex flex-col mx-auto gap-8 text-center">
            <p className="text-white font-mukta text-xl">
              You do not currently have an account. Sign up below.
            </p>
            <button
              className="epsButton px-4 py-2 text-center text-2xl hover:scale-105 mx-auto"
              onClick={() => {
                setSelectedToken(tokenIds[0]);
                setShowSignup(true);
              }}
            >
              Sign Up
            </button>
          </div>
        </>
      )}
      {showSignUp && (
        <div className="text-center">
          <h1 className="text-white font-chaney text-5xl font-bold text-center mb-8">
            Account Creation
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full text-white font-mukta mx-auto gap-4 text-xl"
          >
            <label>account name:</label>

            <input
              type="text"
              id="name"
              name="name"
              className="text-black text-center w-1/3 mx-auto"
              required
              minLength={3}
              maxLength={20}
            />

            <label>Token to gate with:</label>

            <div className="grid grid-cols-4 gap-8">
              {tokenIds.map((tokenId: string) => (
                <img
                  key={tokenId}
                  src={`https://composethis.art/img/?base=https://arweave.net/-HWRbVWBXFrepBjB0usL4BWooqkqHYFnwbvG7DA_6sI/odd.png&t1=epsdemo%20${tokenId}.png`}
                  className={`rounded-xl hover:scale-105 cursor-pointer ${
                    selectedToken === tokenId ? "border-4 border-red-500" : ""
                  }`}
                  onClick={() => {
                    setSelectedToken(tokenId);
                  }}
                />
              ))}
            </div>

            <button
              type="submit"
              className="epsButton px-4 py-2 text-center text-2xl hover:scale-105 mx-auto mt-4"
              onClick={() => {
                setShowSignup(true);
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      )}
    </>
  );

  const getView = () => {
    
    if (!provider) {
      return;
    }

    if (!walletAddress) {
      return;
    }

    if (!accountData || accountData.name == "") {
      if (!tokenIds || tokenIds.length == 0) {
        return (
          <div className="space-y-4">
            <h1 className="text-center font-chaney text-3xl text-white">
              No eps found on this address...
            </h1>
            <p className="text-center font-mukta text-xl text-white">
              Ensure you have setup{" "}
              <a
                href="https://www.eternalproxy.com/setting-up-a-proxy/"
                className="text-blue-400"
              >
                EPS (Eternal Proxy Service)
              </a>
            </p>
          </div>
        );
      }
      return unregisteredView;
    }

    return registeredView();

  };

  return (
    <Layout>
      <div className="blueBackground">
        <div className="accountBackground">
          <div className="md:flex md:flex-col w-5/6 md:w-1/2 mx-auto hidden">
            <div className="min-h-screen rounded-xl space-y-8 py-32 mt-8">
              {getView()}
            </div>
          </div>

          <div className="flex md:hidden min-h-screen">
            <h1 className="text-white font-chaney mx-auto my-auto">
              Open on desktop to register
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
