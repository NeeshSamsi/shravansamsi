import { useState } from "react";

import Image from "next/image";
import Download from "./Icons/Download";
import Fullscreen from "./Icons/Fullscreen";
import ImageDialog from "./ImageDialog";

interface CarouselImageProps {
  dimensions: string;
  url: string;
  alt: string;
}

export default function CarouselImage({
  dimensions,
  url,
  alt,
}: CarouselImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(dimensions, url, alt);

  return (
    <>
      <Image
        className="pointer-events-none -z-10 h-full w-full"
        src={url}
        alt={alt}
        layout="fill"
        objectFit="contain"
      />
      <div className="absolute inset-0 z-10 hidden h-full w-full cursor-grab bg-dark/70 p-6 text-light opacity-0 transition-all hover:opacity-100 lg:block">
        <div className="flex justify-between">
          <p className="text-xl xl:text-2xl">{dimensions}</p>
          <a
            className="h-9 transition-all hover:text-accent xl:h-12"
            href={url}
            download
          >
            <Download />
          </a>
        </div>
        <div
          className="absolute inset-0 z-20 m-auto aspect-square h-12 cursor-pointer transition-all hover:text-accent xl:h-16"
          onClick={() => setIsOpen(true)}
        >
          <Fullscreen />
        </div>

        <ImageDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
