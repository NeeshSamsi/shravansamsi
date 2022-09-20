import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button, { ButtonTypes } from "../components/Button";
import Footer from "../components/Footer";
import Download from "../components/Icons/Download";
import Navbar from "../components/Navbar";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Shravan Samsi</title>
        <meta name="description" content="" />
      </Head>

      <Navbar />

      <main className="px-4 pt-16 pb-24 sm:px-8 md:px-12 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-0">
          <div className="flex w-full flex-col gap-12 md:w-2/5 xl:gap-16">
            <h1 className="font-smallcaps rounded-lg bg-accent py-8 text-center font-serif text-6xl font-bold text-dark xl:text-8xl">
              About
            </h1>

            <div className="relative -z-10 aspect-square w-full rounded-full bg-light lg:block">
              <Image
                className="h-full w-full"
                src="/hero-image.png"
                alt="Hero Image"
                layout="fill"
              />
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-6 text-center text-lg font-light leading-relaxed sm:text-xl md:w-1/2 md:items-start md:text-left md:text-lg lg:text-xl xl:gap-10 xl:text-2xl ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At cursus
              vitae morbi semper lobortis euismod sit. Hendrerit elementum
              tellus diam, libero. Congue a maecenas tincidunt tellus netus.
              Pulvinar sapien, enim sed sapien, morbi nisl nunc nec, leo. Mattis
              nisl eleifend nec accumsan at nullam. Vel mi convallis etiam
              dictum posuere risus.
            </p>
            <p>
              Congue praesent nec aliquet at quam. Sit enim convallis augue
              cursus at eros luctus. Egestas mauris arcu, tellus pulvinar odio
              egestas quis. Interdum quis ac magna lorem integer. Justo netus
              tristique sed ipsum mattis vitae. Tempor tempor fermentum,
              dignissim habitasse feugiat consequat. Non elit ipsum ac, amet,
              tristique tellus leo. Massa netus quis nunc tortor consectetur leo
              a, velit sem.
            </p>
            <p>
              In ipsum fermentum tortor euismod tortor, pretium. Sit consequat
              in faucibus turpis tincidunt. Id pellentesque bibendum eget
              vestibulum pellentesque nunc, sapien. Amet, odio ultrices a sed
              condimentum lobortis eu, elementum. Quam tortor, nulla in
              venenatis sed nibh.
            </p>

            <a href="https://shravansamsi.com/" className="text-lg lg:text-xl">
              <Button
                type={ButtonTypes.Primary}
                text="Download Full Bio"
                icon={<Download />}
              />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
