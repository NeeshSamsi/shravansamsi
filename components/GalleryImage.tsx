import Image from "next/image";
import { useState } from "react";

import Download from "./Icons/Download";
import Fullscreen from "./Icons/Fullscreen";
import ImageDialog from "./ImageDialog";

export default function GalleryImage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative aspect-square border border-light">
      <Image
        className="pointer-events-none -z-10 h-full w-full"
        src="/gallery.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="contain"
      />

      <div className="absolute inset-0 z-10 hidden h-full w-full bg-dark/70 p-6 text-light opacity-0 transition-all hover:opacity-100 lg:block">
        <div className="flex justify-between">
          <p className="text-lg 2xl:text-xl">1920 x 1080</p>
          <a
            className="h-8 transition-all hover:text-accent 2xl:h-10"
            href=""
            download
          >
            <Download />
          </a>
        </div>
        <div
          className="2lx:h-12 absolute inset-0 z-20 m-auto aspect-square h-10 cursor-pointer transition-all hover:text-accent"
          onClick={() => setIsOpen(true)}
        >
          <Fullscreen />
        </div>
      </div>

      <ImageDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
