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
    <nav className="sticky top-0 left-0 right-0 flex items-center justify-between bg-dark py-8 px-4 sm:px-8 md:px-12 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
      <h2 className="z-10 text-3xl font-semibold lg:text-2xl xl:text-3xl 2xl:text-4xl">
        Shravan Samsi
      </h2>

      {/* Desktop Nav Links - hidden, flex from lg + */}
      <div className="hidden gap-4 font-light lg:flex lg:gap-6 lg:text-base xl:text-lg 2xl:gap-8 2xl:text-2xl">
        <Link href="/">
          <a
            className={`transition-all hover:text-accent ${
              currentRoute === "/" && "font-medium text-accent"
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`transition-all hover:text-accent ${
              currentRoute === "/about" && "font-medium text-accent"
            }`}
          >
            About
          </a>
        </Link>
        <Link href="/events">
          <a
            className={`transition-all hover:text-accent ${
              currentRoute === "/events" && "font-medium text-accent"
            }`}
          >
            Events
          </a>
        </Link>
        <Link href="/gallery">
          <a
            className={`transition-all hover:text-accent ${
              currentRoute === "/gallery" && "font-medium text-accent"
            }`}
          >
            Gallery
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={`transition-all hover:text-accent ${
              currentRoute === "/contact" && "font-medium text-accent"
            }`}
          >
            Contact
          </a>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <button onClick={handleHamburger} className="z-10 lg:hidden">
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
          <Link href="/">
            <a className="block">Home</a>
          </Link>
          <Link href="/about">
            <a className="block">About</a>
          </Link>
          <Link href="/events">
            <a className="block">Events</a>
          </Link>
          <Link href="/gallery">
            <a className="block">Gallery</a>
          </Link>
          <Link href="/contact">
            <a className="block">Contact</a>
          </Link>
        </div>
        {/* Mobile Socials */}
        <div className="flex lg:hidden">
          <div className="flex  gap-4  md:gap-8">
            <a
              href="https://youtube.com/shravansamsi"
              className="transition-all hover:text-accent"
            >
              <div className="h-12 md:h-14 lg:h-12 xl:h-14 2xl:h-16">
                <YouTube />
              </div>
            </a>
            <a
              href="https://www.instagram.com/shravansamsi/"
              className="transition-all hover:text-accent"
            >
              <div className="h-12 md:h-14 lg:h-12 xl:h-14 2xl:h-16">
                <Instagram />
              </div>
            </a>
            <a
              href="https://www.facebook.com/shravansamsiofficial/"
              className="transition-all hover:text-accent"
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
