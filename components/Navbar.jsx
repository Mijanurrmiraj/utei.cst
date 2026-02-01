"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Top Section: Logo + Title */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="UTEI Logo"
            className="h-12 w-auto"
          />

          {/* Institute Name */}
          <div className="leading-tight">
            <h1 className="font-bold text-lg md:text-xl">
              Upashahar Textile Engineering Institute
            </h1>
            <p className="text-green-100 text-sm md:text-base">
              Computer Department
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-4">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base font-medium">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/courses" className="hover:underline">Courses</Link></li>
            <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link href="/teachers" className="hover:underline">Teachers</Link></li>
            <li><Link href="/students" className="hover:underline">Students</Link></li>
            <li><Link href="/admission" className="hover:underline">Admission</Link></li>
            <li><Link href="/result" className="hover:underline">Result</Link></li>
            <li><Link href="/notice" className="hover:underline">Notice</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
