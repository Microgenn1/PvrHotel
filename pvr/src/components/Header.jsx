'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Rooms', href: '/#rooms' },
    { name: 'Facilities', href: '/#amenities' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white text-gray-800 shadow px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="relative w-32 h-10">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="PVR International Logo"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 font-serif tracking-wide font-bold text-gray-800">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-indigo-600 transition"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? '✖' : '☰'}
      </button>

      {/* Enquiry Button (Desktop only) */}
      <Link
        href="/book-now"
        className="hidden md:block ml-4 bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-sm text-white uppercase"
      >
        Book now
      </Link>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 text-white flex flex-col items-center space-y-4 py-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-indigo-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Enquiry Button */}
          <Link
            href="/book-now"
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-white uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Book now
          </Link>
        </div>
      )}
    </header>
  )
}
