'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white text-gray  shadow px-6 py-1 flex justify-between items-center">
      {/* Logo */}
      <div className="relative w-32 h-10">
        <Link href="/">
          <Image
            src="/assets/Logo.png"
            alt="PVR International Logo"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 font-serif cormorant-xl   tracking-wide text-block font-bold">
  <Link href="/">Home</Link>
  <Link href="#about">About</Link>
  <Link href="#rooms">Rooms</Link>
  <Link href="#amenities">Facilities</Link>
  <Link href="#contact">Contact</Link>
</nav>


      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Enquiry Button (Desktop only) */}
      <button className="hidden md:block ml-4 bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-sm text-white uppercase">
        Book now
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className=" absolute top-full left-0 w-full bg-black/90 text-white flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#rooms" onClick={() => setMenuOpen(false)}>Rooms</Link>
          <Link href="#facilities" onClick={() => setMenuOpen(false)}>Facilities</Link>
          <Link href="#Contactform" onClick={() => setMenuOpen(false)}>Contact</Link>

          {/* Mobile Button */}
          <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-white uppercase">
            Book now
          </button>
        </div>
      )}
    </header>
  )
}
