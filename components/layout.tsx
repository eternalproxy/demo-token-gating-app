import Head from "next/head";
import Navbar from "./navbar";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <Head>
        <title>eps token gating test site</title>
        <meta
          name="description"
          content=""
        />
        <link rel="icon" href="/logos/menu.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Navbar />
        <div className="min-h-screen">{props.children}</div>
      </main>
    </div>
  );
}
