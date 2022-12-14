import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Shravan Samsi" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Poppins:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="bg-dark font-sans text-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
