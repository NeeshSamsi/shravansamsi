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

      <main className="mx-auto flex h-screen flex-col justify-center lg:px-32 xl:px-44 2xl:px-56 3xl:max-w-[144rem] 3xl:px-0">
        <div className="flex items-center justify-between gap-6">
          <div className="py-auto w-2/5">
            <h1 className="font-smallcaps mb-4 font-serif font-bold lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl">
              Massive Tagline of Some Sort
            </h1>
            <p className="mb-6 lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              Subheading / para - Lorem ipsum dolor sit amet consectetur
              adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien.
            </p>

            <div className="mb-6 flex text-base lg:gap-2 lg:text-sm xl:gap-6 2xl:gap-10 2xl:text-xl 3xl:text-2xl">
              <Button
                type={ButtonTypes.Primary}
                text="Catch me live"
                icon={<RightArrow />}
              />
              <Button
                type={ButtonTypes.Secondary}
                text="Let's chat"
                icon={<Chat />}
              />
            </div>

            <div className="flex gap-8">
              <a
                href="https://youtube.com/shravansamsi"
                className="transition-all hover:text-accent"
              >
                <div className="lg:h-12 xl:h-14 2xl:h-16">
                  <YouTube size={4} />
                </div>
              </a>
              <a
                href="https://www.instagram.com/shravansamsi/"
                className="transition-all hover:text-accent"
              >
                <div className="lg:h-12 xl:h-14 2xl:h-16">
                  <Instagram />
                </div>
              </a>
              <a
                href="https://www.facebook.com/shravansamsiofficial/"
                className="transition-all hover:text-accent"
              >
                <div className="lg:h-12 xl:h-14 2xl:h-16">
                  <Facebook />
                </div>
              </a>
            </div>
          </div>

          <div className="3xl:2/5 relative -z-10 aspect-square w-1/2 rounded-full bg-light lg:block 2xl:w-1/2">
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
