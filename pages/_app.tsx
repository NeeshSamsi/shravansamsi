import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script
        strategy="lazyOnload"
        src="https://umami.neeshsamsi.com/script.js"
        data-website-id="c6000030-43f6-4e74-9f49-5ed4408b561f"
      />
      <Component {...pageProps} />
    </>
  );
}
