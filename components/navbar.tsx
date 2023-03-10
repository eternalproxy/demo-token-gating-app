import Link from "next/link";
import WalletButton from "./walletButton";

export default function Navbar() {
  return (
    <div className="flex w-full fixed px-8 pt-8 justify-between z-100">
      <div className="w-full md:w-1/3 hidden sm:block">
        {/* <Link href="/">
          <img src="logos/emblem.png" className="w-3/4 hover:scale-105" height="40px" />
        </Link> */}
      </div>

      <div className="md:flex md:flex-row gap-8 my-auto mx-auto w-full text-center justify-center hidden">
        <Link
          href="/"
          className="text-center text-white font-bold font-chaney hover:scale-105"
        >
          main
        </Link>
        <Link
          href="/#info"
          className="text-center text-white font-bold font-chaney hover:scale-105"
        >
          info
        </Link>
        <Link
          href="https://view-goerli.eternalproxy.com/"
          target="_blank"
          className="text-center text-white font-bold font-chaney hover:scale-105"
        >
          viewer
        </Link>
        <Link
          href="https://discord.gg/rDasAuNwvh"
          target="_blank"
          className="text-center text-white font-bold font-chaney hover:scale-105"
        >
          discord
        </Link>
        <Link
          href="https://twitter.com/eternalproxy"
          target="_blank"
          className="text-center text-white font-bold font-chaney hover:scale-105"
        >
          twitter
        </Link>
      </div>
      <WalletButton />
    </div>
  );
}
