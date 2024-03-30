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
        data-website-id="7be41c8e-6895-4385-acf2-95086f17a1e0"
      />
      <Component {...pageProps} />
    </>
  );
}
