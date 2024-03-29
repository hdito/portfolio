import { AppProps } from "next/app";
import Head from "next/head";
import { notoSans } from "@/components/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Портфолио</title>
        <meta name="description" content="Персональное портфолио" />
      </Head>
      <main className={notoSans.variable}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
