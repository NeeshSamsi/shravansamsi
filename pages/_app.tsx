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
        src="https://neesh-umami.vercel.app/script.js"
        data-website-id="cc681e71-31cf-4b34-8101-c5926a8fef1f"
      />
      <Component {...pageProps} />
    </>
  );
}
