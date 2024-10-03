import { NextPage } from "next";
import Image from "next/image";
import Button, { ButtonTypes } from "../components/Button";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";
import { RightArrow } from "../components/Icons";
import Download from "../components/Icons/Download";
import Navbar from "../components/Navbar";
import client from "../lib/prismicio";

const About: NextPage<{ biodataPdf: string }> = ({ biodataPdf }) => {
  return (
    <>
      <HeadComponent
        title="About - Shravan Samsi"
        description=""
        imageUrl=""
        path="about"
      />

      <Navbar />

      <main className="px-4 pt-16 pb-24 sm:px-8 md:px-12 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-0">
          <div className="flex w-full flex-col gap-12 md:w-2/5 xl:gap-16">
            <h1 className="font-smallcaps rounded-lg bg-accent py-8 text-center font-serif text-6xl font-bold text-dark xl:text-9xl">
              About
            </h1>

            <div className="relative -z-10 aspect-square w-full rounded-full bg-light lg:block">
              <Image
                className="h-full w-full"
                src="/about.webp"
                alt="Shravan Samsi"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-6 text-center text-lg font-light leading-relaxed sm:text-xl md:w-1/2 md:items-start md:text-left md:text-xl lg:text-2xl xl:gap-10 xl:text-3xl ">
            <p>
              Shravan has brought about a perfect balance between his roots in Indian and passion for Western Rhythm, converging multiple schools of thought and incorporating nuances and aesthetics of repertoire throughout his performance and production. He is training under tabla phenomenon, Pandit Yogesh Samsi, Maestro Ranjit Barot and Maestro Trilok Gurtu.
            </p>
            <p>
              His unique outlook and love for music has sparked many experiences of musical explorations and brought him to share the stage with stalwarts such as Maestro Trilok Gurtu, Maestro Ranjit Barot,  Sanjay Divecha, Purbayan Chatterjee, Louis Banks, Viveick Rajagopalan, Ustad Fazal Qureshi, Pandit Ravindra Chary and his father, Pandit Yogesh Samsi, to name but a few.
            </p>
            <p>
              His captivating stage presence and command over his instrument has led him to perform at prestigious musical gatherings all over india and abroad such as Drum Festivals, International Jazz Day, Piano Day, NCPA and NMACC Mumbai, Midlands Arts Centre Birmingham, ACC World Music Festival in South Korea
            </p>

            <div className="flex gap-6">
              <a
                className="text-xl lg:text-2xl"
                href={`/api/download?url=${biodataPdf}`}
                rel="noreferrer"
                target="_blank"
              >
                <Button
                  type={ButtonTypes.Primary}
                  text="Download full Bio"
                  icon={<Download />}
                />
              </a>
              <div className="text-xl lg:text-2xl">
                <Button
                  type={ButtonTypes.Secondary}
                  text="Gallery"
                  icon={<RightArrow />}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const biodataPdf = await client.getAllByType("biodata_pdf");

  return { props: { biodataPdf: biodataPdf[0].data.pdf.url } };
}

export default About;
