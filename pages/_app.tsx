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
        data-website-id="69e401e2-1f13-4a8a-8f4f-c2ba6d75bc3e"
      />
      <Component {...pageProps} />
    </>
  );
}
