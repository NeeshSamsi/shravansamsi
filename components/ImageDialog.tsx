import Image from "next/image";

import { Dialog } from "@headlessui/react";

import Download from "./Icons/Download";
import Cross from "./Icons/Cross";

interface ImageDialogProps {
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
}

export default function ImageDialog({ isOpen, setIsOpen }: ImageDialogProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50 hidden lg:block"
    >
      <Dialog.Panel className="fixed inset-0 flex h-screen w-full flex-col gap-6 bg-light py-6 px-8 text-dark">
        <div className="flex justify-between">
          <p className="text-2xl font-medium xl:text-3xl">1920 x 1080</p>
          <div className="flex gap-10">
            <a
              className="h-10 transition-all hover:text-accent xl:h-14"
              href=""
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
            src="/gallery.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
