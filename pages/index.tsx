import type { NextPage } from "next";
import { ButtonTypes } from "../components/Button";
import Head from "next/head";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import {
  RightArrow,
  Chat,
  YouTube,
  Instagram,
  Facebook,
} from "../components/Icons";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Shravan Samsi</title>
        <meta name="description" content="" />
      </Head>

      <Navbar />

      <main className="flex h-screen flex-col justify-center px-[20rem]">
        <div className="flex items-center justify-between gap-6">
          <div className="py-auto w-2/5">
            <h1 className="mb-8 font-serif text-8xl">
              Massive Tagline of Some Sort
            </h1>
            <p className="mb-10 text-3xl">
              Subheading / para - Lorem ipsum dolor sit amet consectetur
              adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien.
            </p>

            <div className="mb-10 flex gap-10">
              <Button
                type={ButtonTypes.Primary}
                text="Catch me live"
                icon={<RightArrow size={2} />}
              />
              <Button
                type={ButtonTypes.Secondary}
                text="Let's chat"
                icon={<Chat size={2} />}
              />
            </div>

            <div className="flex gap-8">
              <a
                href="https://youtube.com/shravansamsi"
                className="transition-all hover:text-accent"
              >
                <YouTube size={4} />
              </a>
              <a
                href="https://www.instagram.com/shravansamsi/"
                className="transition-all hover:text-accent"
              >
                <Instagram size={4} />
              </a>
              <a
                href="https://www.facebook.com/shravansamsiofficial/"
                className="transition-all hover:text-accent"
              >
                <Facebook size={4} />
              </a>
            </div>
          </div>

          <div className="relative aspect-square w-1/2 rounded-full bg-light 2xl:w-3/5">
            <Image
              className="h-full w-full"
              src="/hero-image.png"
              alt="Hero Image"
              layout="fill"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
