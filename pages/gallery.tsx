import { NextPage } from "next";
import { useRef } from "react";
import Head from "next/head";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import CarouselImage from "../components/CarouselImage";
import Footer from "../components/Footer";
import GalleryImage from "../components/GalleryImage";
import CircleCaret from "../components/Icons/CircleCaret";
import Navbar from "../components/Navbar";

const Gallery: NextPage = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Gallery - Shravan Samsi</title>
        <meta name="description" content="" />
      </Head>

      <Navbar />

      <main className="px-4 pt-16 pb-24 sm:px-8 md:px-12 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
        <h1 className="font-smallcaps 2xl:9xl mb-16 rounded-lg bg-accent py-8 text-center font-serif text-6xl font-bold text-dark xl:text-8xl">
          Gallery
        </h1>

        <section
          role="Image carousel slideshow"
          className="mb-10 flex items-center justify-between md:mb-16 xl:mb-20 2xl:mb-24"
        >
          {/* <SwiperButtonPrev /> */}
          <div
            className="hidden rotate-180 cursor-pointer transition-all hover:text-accent lg:block lg:h-16 2xl:h-20"
            // onClick={() => swiper.slidePrev()}
            ref={prevRef}
          >
            <CircleCaret />
          </div>
          <Swiper
            className="relative aspect-video w-full border-2 border-light lg:w-3/4"
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3500,
              pauseOnMouseEnter: true,
            }}
            speed={600}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              <CarouselImage />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselImage />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselImage />
            </SwiperSlide>
          </Swiper>
          {/* <SwiperButtonNext /> */}
          <div
            className="hidden cursor-pointer transition-all hover:text-accent lg:block lg:h-16 2xl:h-20"
            // onClick={() => swiper.slideNext()}
            ref={nextRef}
          >
            <CircleCaret />
          </div>
        </section>

        <section
          role="Gallery"
          className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3 lg:gap-6 xl:gap-10 2xl:gap-20"
        >
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
