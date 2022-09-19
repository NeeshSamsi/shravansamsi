import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Shravan Samsi" />
        <link rel="icon" href="/favicon.ico" />

        <title>Home - Shravan Samsi</title>
        <meta name="description" content="" />
      </Head>

      <main>
        <h1 className="text-3xl text-center font-bold text-gray-800 font-serif">Welcome to Shravan Samsi</h1>
      </main>

      <footer></footer>
    </>
  )
}

export default Home
