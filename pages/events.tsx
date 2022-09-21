import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Event from "../components/Event";

const Events: NextPage = () => {
  return (
    <>
      <Head>
        <title>Events - Shravan Samsi</title>
        <meta name="description" content="" />
      </Head>

      <Navbar />

      <main className="px-4 pt-16 pb-24 sm:px-8 md:px-12 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
        <h1 className="font-smallcaps mb-16 rounded-lg bg-accent py-8 text-center font-serif text-6xl font-bold text-dark xl:text-9xl">
          Events
        </h1>

        <div className="grid-cols-events grid gap-16">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Events;
