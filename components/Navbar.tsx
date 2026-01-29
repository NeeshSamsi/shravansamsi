import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Facebook, Instagram, YouTube } from "./Icons";

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburger = ({}) => {
    setIsHamburgerOpen((prevState) => !prevState);
  };

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className="sticky top-0 left-0 right-0 z-40 flex items-center justify-between bg-dark py-8 px-4 sm:px-8 md:px-12 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
      <h2 className="z-10 text-3xl font-semibold lg:text-2xl xl:text-3xl 2xl:text-4xl">
        <Link href="/">
          Shravan Samsi
        </Link>
      </h2>

      {/* Desktop Nav Links - hidden, flex from lg + */}
      <div className="hidden gap-4 font-light lg:flex lg:gap-6 lg:text-base xl:text-lg 2xl:gap-8 2xl:text-2xl">
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/events">
          Events
        </Link>
        <Link href="/gallery">
          Gallery
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={handleHamburger}
        className="z-10 lg:hidden"
        aria-label="Hamburger Button to Open Navigation Menu"
      >
        <div
          className={`tham ${
            isHamburgerOpen && "tham-active"
          } display tham-e-spin tham-w-8`}
        >
          <div className="tham-box">
            <div className="tham-inner bg-light"></div>
          </div>
        </div>
      </button>

      {/* Mobile Nav Menu */}
      <div
        className={`${
          isHamburgerOpen ? "fixed" : "hidden"
        } top-0 left-0 right-0 z-0 flex h-screen w-full flex-col items-center gap-16 bg-dark pt-32 text-2xl md:pt-40 lg:hidden`}
      >
        {/* Mobile Nav Links */}
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className={`block transition-all ${
              currentRoute === "/" && "font-medium text-accent"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block transition-all ${
              currentRoute === "/about" && "font-medium text-accent"
            }`}
          >
            About
          </Link>
          <Link
            href="/events"
            className={`block transition-all ${
              currentRoute === "/events" && "font-medium text-accent"
            }`}
          >
            Events
          </Link>
          <Link
            href="/gallery"
            className={`block transition-all ${
              currentRoute === "/gallery" && "font-medium text-accent"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`block transition-all ${
              currentRoute === "/contact" && "font-medium text-accent"
            }`}
          >
            Contact
          </Link>
        </div>
        {/* Mobile Socials */}
        <div className="flex lg:hidden">
          <div className="flex  gap-4  md:gap-8">
            <a
              href="https://youtube.com/shravansamsi"
              className="transition-all hover:text-accent"
              rel="noreferrer"
              target="_blank"
              aria-label="Shravan's YouTube Link"
            >
              <div className="h-12 md:h-14 lg:h-12 xl:h-14 2xl:h-16">
                <YouTube />
              </div>
            </a>
            <a
              href="https://www.instagram.com/shravansamsi/"
              className="transition-all hover:text-accent"
              rel="noreferrer"
              target="_blank"
              aria-label="Shravan's Instagram Link"
            >
              <div className="h-12 md:h-14 lg:h-12 xl:h-14 2xl:h-16">
                <Instagram />
              </div>
            </a>
            <a
              href="https://www.facebook.com/shravansamsiofficial/"
              className="transition-all hover:text-accent"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-12 md:h-14 lg:h-12 xl:h-14 2xl:h-16">
                <Facebook />
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
