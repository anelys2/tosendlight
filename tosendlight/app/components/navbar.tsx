import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      {/* LOGO - links to About page */}
      <Link href="/about">
        <Image
          src="/images/logo.jpeg" // replace with your actual logo path
          alt="Your business name"
          width={120}
          height={40}
          className="object-contain"
        />
      </Link>

      {/* NAV TABS */}
      <div className="flex gap-6">
        <Link href="/booking" className="text-gray-700 hover:text-black">
          Booking
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-black">
          Contact
        </Link>
      </div>
    </nav>
  );
}
