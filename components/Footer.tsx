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
            <Button
              type={ButtonTypes.Primary}
              text="Catch me live"
              icon={<RightArrow />}
            />
          </Link>
          <Link href="/contact">
            <Button
              type={ButtonTypes.Secondary}
              text="Let's chat"
              icon={<Chat />}
            />
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
          <Link href="/" className="block transition-all hover:text-accent">
            Home
          </Link>
          <Link
            href="/about"
            className="block transition-all hover:text-accent"
          >
            About
          </Link>
          <Link
            href="/events"
            className="block transition-all hover:text-accent"
          >
            Events
          </Link>
          <Link
            href="/gallery"
            className="block transition-all hover:text-accent"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="block transition-all hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </div>

      <p className="m-8 text-center text-lg md:text-base xl:text-lg">
        © All Rights Reserved Shravan Samsi {new Date().getFullYear()} |
        Designed & Developed by{" "}
        <a
          className="text-accent hover:underline"
          href="https://neeshsamsi.com"
        >
          Avaneesh Samsi
        </a>
      </p>
    </footer>
  );
}
