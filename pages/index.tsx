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
            {/* Info */}
            <div className="min-h-screen py-32 rounded-xl" id="info">
              <p className="standardText text-xl">
                test
              </p>
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
