"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex flex-wrap items-center gap-4">
      <img src="/logo.png" alt="UTEI Logo" className="h-12" />

      <div>
        <h1 className="font-bold text-lg">
          Upashahar Textile Engineering Institute
        </h1>
        <p className="text-sm">Computer Department</p>
      </div>

      <div className="ml-auto flex flex-wrap gap-4 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/teachers">Teachers</Link>
        <Link href="/students">Students</Link>
        <Link href="/admission">Admission</Link>
        <Link href="/result">Result</Link>
        <Link href="/notice">Notice</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
