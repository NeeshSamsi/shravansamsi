import { NextPage } from "next";

import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import CarouselImage from "../components/CarouselImage";
import Footer from "../components/Footer";
import GalleryImage from "../components/GalleryImage";
import CircleCaret from "../components/Icons/CircleCaret";
import Navbar from "../components/Navbar";
import { useRef } from "react";

const SwiperButtonPrev = () => {
  const swiper = useSwiper();

  return (
    <div
      className="h-20 rotate-180 cursor-pointer transition-all hover:text-accent"
      onClick={() => swiper.slidePrev()}
    >
      <CircleCaret />
    </div>
  );
};
const SwiperButtonNext = () => {
  const swiper = useSwiper();

  return (
    <div
      className="h-20 cursor-pointer transition-all hover:text-accent"
      onClick={() => swiper.slideNext()}
    >
      <CircleCaret />
    </div>
  );
};

const Gallery: NextPage = () => {
  const swiper = useSwiper();

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar />

      <main className="px-4 pt-16 pb-24 sm:px-8 md:px-12 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
        <h1 className="font-smallcaps mb-16 rounded-lg bg-accent py-8 text-center font-serif text-6xl font-bold text-dark xl:text-9xl">
          Gallery
        </h1>

        <section
          role="Image carousel slideshow"
          className="mb-24 flex items-center justify-between"
        >
          {/* <SwiperButtonPrev /> */}
          <div
            className="h-20 rotate-180 cursor-pointer transition-all hover:text-accent"
            // onClick={() => swiper.slidePrev()}
            ref={prevRef}
          >
            <CircleCaret />
          </div>
          <Swiper
            className="relative aspect-video w-3/4 border-2 border-light"
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            // navigation={{
            //   prevEl: prevRef.current ? prevRef.current : undefined,
            //   nextEl: nextRef.current ? nextRef.current : undefined,
            // }}
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
            className="h-20 cursor-pointer transition-all hover:text-accent"
            // onClick={() => swiper.slideNext()}
            ref={nextRef}
          >
            <CircleCaret />
          </div>
        </section>

        <section role="Gallery" className="grid grid-cols-3 gap-20">
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
