import Image from "next/image";

import { Dialog } from "@headlessui/react";

import Download from "./Icons/Download";
import Cross from "./Icons/Cross";

interface ImageDialogProps {
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
  dimensions: string;
  url: string;
  alt: string;
}

export default function ImageDialog({
  isOpen,
  setIsOpen,
  dimensions,
  url,
  alt,
}: ImageDialogProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50 hidden lg:block"
    >
      <Dialog.Panel className="fixed inset-0 flex h-screen w-full flex-col gap-6 bg-light py-6 px-8 text-dark">
        <div className="flex justify-between">
          <p className="text-2xl font-medium xl:text-3xl">{dimensions}</p>
          <div className="flex gap-10">
            <a
              className="h-10 transition-all hover:text-accent xl:h-14"
              href={url}
              download
            >
              <Download />
            </a>
            <div
              className="h-10 cursor-pointer transition-all hover:text-accent xl:h-14"
              onClick={() => setIsOpen(false)}
            >
              <Cross />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            className="-z-10 h-full w-full bg-dark"
            src={url}
            alt={alt}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
