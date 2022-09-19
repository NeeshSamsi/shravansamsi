import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-32 py-8 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
      <h2 className="text-2xl font-semibold lg:text-3xl 2xl:text-4xl">
        Shravan Samsi
      </h2>

      <div className="flex gap-4 text-lg font-light lg:gap-6 2xl:gap-8 2xl:text-2xl">
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
