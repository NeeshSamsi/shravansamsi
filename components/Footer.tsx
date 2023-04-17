import Link from "next/link";
import Button, { ButtonTypes } from "./Button";
import { Chat, Facebook, Instagram, RightArrow, YouTube } from "./Icons";

export default function Footer() {
  return (
    <footer>
      <div
        className="flex flex-col gap-12 py-8 px-4 sm:px-8 md:flex-row md:justify-between md:gap-0 md:px-12 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem]
    3xl:px-0"
      >
        <div className="flex flex-col items-center gap-4 text-lg md:items-start">
          <h3 className="text-3xl font-bold lg:text-3xl xl:text-4xl">
            Shravan Samsi
          </h3>
          <Link href="/events">
            <a>
              <Button
                type={ButtonTypes.Primary}
                text="Catch me live"
                icon={<RightArrow />}
              />
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <Button
                type={ButtonTypes.Secondary}
                text="Let's chat"
                icon={<Chat />}
              />
            </a>
          </Link>
        </div>

        <div>
          <h6 className="mb-6 text-center text-2xl font-medium md:text-left md:text-xl xl:text-2xl">
            Follow me on :
          </h6>

          <div className="flex items-center justify-center gap-4 text-accent md:justify-start">
            <a
              href="https://youtube.com/shravansamsi"
              className="transition-all hover:text-light"
              aria-label="Shravan's YouTube Link"
            >
              <div className="h-12 md:h-10 xl:h-14">
                <YouTube />
              </div>
            </a>
            <a
              href="https://www.instagram.com/shravansamsi/"
              className="transition-all hover:text-light"
              aria-label="Shravan's Instagram Link"
            >
              <div className="h-12 md:h-10 xl:h-14">
                <Instagram />
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
      </div>

      <p className="m-8 text-center text-lg md:text-base xl:text-lg">
        © All Rights Reserved Shravan Samsi {new Date().getFullYear()} |
        Designed & Developed by{" "}
        <a
          className="text-accent hover:underline"
          href="https://instagram.com/neeshsamsi"
        >
          Avaneesh Samsi
        </a>
      </p>
    </footer>
  );
}
