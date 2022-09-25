import Image from "next/image";
import Download from "./Icons/Download";
import Fullscreen from "./Icons/Fullscreen";

export default function CarouselImage() {
  return (
    <>
      <Image
        className="pointer-events-none -z-10 h-full w-full"
        src="/carousel.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="contain"
      />
      <div className="absolute inset-0 z-10 h-full w-full cursor-grab bg-dark/70 p-6 text-light opacity-0 transition-all hover:opacity-100">
        <div className="flex justify-between">
          <p className="text-2xl">1920 x 1080</p>
          <a className="h-12 transition-all hover:text-accent" href="" download>
            <Download />
          </a>
        </div>
        <div className="absolute inset-0 z-20 m-auto aspect-square h-16 cursor-pointer transition-all hover:text-accent">
          <Fullscreen />
        </div>
      </div>
    </>
  );
}
