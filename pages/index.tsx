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
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Shravan Samsi</title>
        <meta name="description" content="" />
      </Head>

      <Navbar />

      <main className="flex h-screen flex-col px-4 text-center sm:px-8 md:px-12 lg:justify-center lg:px-32 lg:text-left xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
        <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="py-auto w-auto lg:w-2/5">
            <h1 className="font-smallcaps mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl">
              Massive Tagline of Some Sort
            </h1>
            <p className="mb-6 text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              Subheading / para - Lorem ipsum dolor sit amet consectetur
              adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien.
            </p>

            <div className="mb-6 flex items-center justify-center gap-4 text-sm sm:text-base md:gap-6 lg:justify-start lg:gap-2 lg:text-lg xl:gap-6 2xl:gap-10 2xl:text-2xl 3xl:text-3xl">
              <Link href="/events">
                <a>
                  <Button
                    type={ButtonTypes.Primary}
                    text="Catch me live"
                    icon={<RightArrow />}
                  />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <Button
                    type={ButtonTypes.Secondary}
                    text="Let's chat"
                    icon={<Chat />}
                  />
                </a>
              </Link>
            </div>

            <div className="flex justify-center gap-2 lg:justify-start lg:gap-8">
              <a
                href="https://youtube.com/shravansamsi"
                className="transition-all hover:text-accent"
                rel="noreferrer"
                target="_blank"
              >
                <div className="h-10 sm:h-12 md:h-14 lg:h-12 xl:h-14 2xl:h-16">
                  <YouTube />
                </div>
              </a>
              <a
                href="https://www.instagram.com/shravansamsi/"
                className="transition-all hover:text-accent"
                rel="noreferrer"
                target="_blank"
              >
                <div className="h-10 sm:h-12 md:h-14 lg:h-12 xl:h-14 2xl:h-16">
                  <Instagram />
                </div>
              </a>
              <a
                href="https://www.facebook.com/shravansamsiofficial/"
                className="transition-all hover:text-accent"
                rel="noreferrer"
                target="_blank"
              >
                <div className="h-10 sm:h-12 md:h-14 lg:h-12 xl:h-14 2xl:h-16">
                  <Facebook />
                </div>
              </a>
            </div>
          </div>

          <div className="3xl:2/5 relative -z-10 aspect-square w-full rounded-full bg-light sm:w-3/4 lg:block lg:w-1/2 2xl:w-1/2">
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
