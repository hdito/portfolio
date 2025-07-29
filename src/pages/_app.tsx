import { notoSans } from "@/fonts";
import "@/styles/globals.css";
import { ComponentWithProps } from "@/types/componentWithProps";
import { AppProps } from "next/app";
import Head from "next/head";

const App: ComponentWithProps<AppProps> = ({ Component, pageProps }) => {
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
};

export default App;
