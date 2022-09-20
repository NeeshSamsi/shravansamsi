import Link from "next/link";
import Button, { ButtonTypes } from "./Button";
import { Chat, Facebook, Instagram, RightArrow, YouTube } from "./Icons";

export default function Footer() {
  return (
    <footer
      className="flex flex-col gap-12 py-8 px-4 sm:px-8 md:flex-row md:justify-between md:gap-0 md:px-12 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem]
    3xl:px-0"
    >
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-3xl font-bold lg:text-3xl xl:text-4xl">
          Shravan Samsi
        </h3>
        <Button
          type={ButtonTypes.Primary}
          text="Catch me live"
          icon={<RightArrow />}
        />
        <Button
          type={ButtonTypes.Secondary}
          text="Let's chat"
          icon={<Chat />}
        />
      </div>

      <div>
        <h6 className="mb-6 text-center text-2xl font-medium md:text-left md:text-xl xl:text-2xl">
          Follow me on :
        </h6>

        <div className="flex items-center justify-center gap-4 text-accent md:justify-start">
          <a
            href="https://youtube.com/shravansamsi"
            className="transition-all hover:text-light"
          >
            <div className="h-12 md:h-10 xl:h-14">
              <YouTube />
            </div>
          </a>
          <a
            href="https://www.instagram.com/shravansamsi/"
            className="transition-all hover:text-light"
          >
            <div className="h-12 md:h-10 xl:h-14">
              <Instagram />
            </div>
          </a>
          <a
            href="https://www.facebook.com/shravansamsiofficial/"
            className="transition-all hover:text-light"
          >
            <div className="h-12 md:h-10 xl:h-14">
              <Facebook />
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-6 text-center text-xl md:text-lg xl:text-2xl ">
        <Link href="/">
          <a className="block transition-all hover:text-accent">Home</a>
        </Link>
        <Link href="/about">
          <a className="block transition-all hover:text-accent">About</a>
        </Link>
        <Link href="/events">
          <a className="block transition-all hover:text-accent">Events</a>
        </Link>
        <Link href="/gallery">
          <a className="block transition-all hover:text-accent">Gallery</a>
        </Link>
        <Link href="/contact">
          <a className="block transition-all hover:text-accent">Contact</a>
        </Link>
      </div>
    </footer>
  );
}
