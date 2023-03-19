import Link from "next/link";
import Layout from "../components/layout";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <div
        className="min-h-screen"
        style={{
          backgroundImage: 'url("/backgrounds/background.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col min-h-screen justify-center items-center">
          <img src="logos/gating_demo.png" className="w-full md:w-1/2" />

          <FontAwesomeIcon
            icon={faArrowDown}
            className="block sm:hidden w-1/12 animate-bounce text-white"
          />
        </div>
      </div>

      <div className="blueBackground">
        <div className="patternBackground">
          <div className="flex flex-col w-5/6 md:w-1/2 mx-auto">
            {/* Instructions */}
  
            <div className="flex flex-col items-center justify-center min-h-screen py-16" id="instructions">
              <div className="max-w-3xl px-6 py-8 bg-white rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800">
                  Welcome to the Demo Token Gating app!
                </h1>
                <p className="mt-4 text-xl text-center text-gray-600">
                  An open source app demonstrating how to token gate using the eps protocol.
                </p>
                <p className="mt-4 text-lg text-center text-gray-500">
                  Please note that this is not production-ready code, but rather provided as an illustration.
                </p>
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-800">
                    How it works
                  </h2>
                  <ul className="mt-4 ml-8 text-lg text-gray-600 list-disc">
                    <li>When a user connects a wallet, the app checks the NFTs on their eps cold wallet.</li>
                    <li>If the user has NFTs on their eps cold wallet, they can create an account.</li>
                    <li>If they do not have NFTs on their eps cold wallet, they cannot.</li>
                    <li>NFTs on the hot (connected) address are ignored.</li>
                    <li>There is no server and nothing is stored.</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Get started
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    The app uses the multi-chain imoo NFT. You can mint them for free at <a href="https://nexus.imoo.io/" target="_blank" rel="noreferrer" className="text-blue-600 underline">nexus.imoo.io</a>. Please mint them to your cold address.
                  </p>
                  <p className="mt-4 text-lg text-gray-600">
                    After that, set up a proxy from your cold to your hot (on Goerli) by following the instructions <a href="https://view-goerli.eternalproxy.com/" target="_blank" rel="noreferrer" className="text-blue-600 underline">here</a>.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-lg text-center text-gray-600">
                    For more information, follow us on Twitter at <a href="https://twitter.com/eternalproxy" target="_blank" rel="noreferrer" className="text-blue-600 underline">@eternalproxy</a>.
                  </p>
                </div>
              </div>
            </div>



          </div>
        </div>

        <a href="https://eternalproxy.com">
          <img
            src="/logos/eps.png"
            className="w-3/4 md:w-1/6 mx-auto my-16"
          />
        </a>
      </div>
    </Layout>
  );
}
