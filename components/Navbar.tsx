import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 flex items-center justify-between py-8 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
      <h2 className="font-semibold lg:text-2xl xl:text-3xl 2xl:text-4xl">
        Shravan Samsi
      </h2>

      <div className="flex gap-4 font-light lg:gap-6 lg:text-base xl:text-lg 2xl:gap-8 2xl:text-2xl">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/events">
          <a>Events</a>
        </Link>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
}
