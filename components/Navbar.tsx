import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-[20rem] py-8">
      <h2 className="text-4xl font-semibold">Shravan Samsi</h2>

      <div className="flex gap-8 text-xl">
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
