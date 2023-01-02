import { NextPage } from "next";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import CarouselImage from "../components/CarouselImage";
import Footer from "../components/Footer";
import GalleryImage from "../components/GalleryImage";
import CircleCaret from "../components/Icons/CircleCaret";
import Navbar from "../components/Navbar";
import HeadComponent from "../components/HeadComponent";
import client, { GalleryImageType, YouTubeVideoType } from "../lib/prismicio";

interface GalleryProps {
  featuredImages: GalleryImageType[];
  gridImages: GalleryImageType[];
  youtubeVideos: YouTubeVideoType[];
}

const Gallery: NextPage<GalleryProps> = ({
  featuredImages,
  gridImages,
  youtubeVideos,
}) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeadComponent
        title="Gallery - Shravan Samsi"
        description=""
        imageUrl=""
        path="gallery"
      />

      <Navbar />

      <main className="px-4 pt-16 pb-24 sm:px-8 md:px-12 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
        <h1 className="font-smallcaps 2xl:9xl mb-16 rounded-lg bg-accent py-8 text-center font-serif text-6xl font-bold text-dark xl:text-8xl">
          Gallery
        </h1>

        <section
          role="Image carousel slideshow"
          className="mb-10 flex items-center justify-between md:mb-16 xl:mb-20 2xl:mb-24"
        >
          <div
            className="hidden rotate-180 cursor-pointer transition-all hover:text-accent lg:block lg:h-16 2xl:h-20"
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
            {featuredImages.map((image) => {
              const { dimensions, url, alt } = image;
              return (
                <SwiperSlide key={image.id}>
                  <CarouselImage dimensions={dimensions} url={url} alt={alt} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div
            className="hidden cursor-pointer transition-all hover:text-accent lg:block lg:h-16 2xl:h-20"
            ref={nextRef}
          >
            <CircleCaret />
          </div>
        </section>

        <section
          role="YouTube Video Gallery"
          className="mb-10 grid gap-4 md:mb-16 md:gap-8 lg:grid-cols-2 lg:gap-6 xl:mb-20 xl:gap-10 2xl:mb-24 2xl:gap-20"
        >
          {youtubeVideos.map((video) => (
            <div className="border-2 border-light" key={video.id}>
              <iframe
                className="aspect-video"
                width="100%"
                height="100%"
                src={video.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </section>

        <section
          role="Image Gallery"
          className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3 lg:gap-6 xl:gap-10 2xl:gap-20"
        >
          {featuredImages.map((image) => {
            const { id, dimensions, url, alt } = image;
            return (
              <GalleryImage
                key={id}
                dimensions={dimensions}
                url={url}
                alt={alt}
              />
            );
          })}
          {gridImages.map((image) => {
            const { id, dimensions, url, alt } = image;
            return (
              <GalleryImage
                key={id}
                dimensions={dimensions}
                url={url}
                alt={alt}
              />
            );
          })}
        </section>
      </main>

      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const images = await client.getAllByType("gallery_images", {
    orderings: [{ field: "document.last_publication_date" }],
  });

  const galleryImages = images.map((image) => {
    const galleryImage: GalleryImageType = {
      id: image.id,
      featured: image.data.featured,
      dimensions: `${image.data.image.dimensions.width} × ${image.data.image.dimensions.height}`,
      url: image.data.image.url,
      alt: image.data.image.alt,
    };

    return galleryImage;
  });

  const featuredImages = galleryImages.filter((image) => image.featured);
  const gridImages = galleryImages.filter((image) => !image.featured);

  const links = await client.getAllByType("youtube_videos");

  const youtubeVideos: YouTubeVideoType[] = links.map((link) => {
    return {
      id: link.id,
      url: link.data.youtube_embed_link.url,
    };
  });

  return { props: { featuredImages, gridImages, youtubeVideos } };
}

export default Gallery;
