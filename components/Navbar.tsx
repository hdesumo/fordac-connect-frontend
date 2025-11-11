"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/fordac-logo.png" alt="FORDAC" className="h-10 w-auto" />
          <span
            className={`text-2xl font-bold ${
              scrolled ? "text-green-800" : "text-white"
            }`}
          >
            FORDAC Connect
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className={`font-medium ${
              scrolled ? "text-gray-700" : "text-white"
            } hover:text-green-700 transition`}
          >
            Accueil
          </Link>
          <Link
            href="/a-propos"
            className={`font-medium ${
              scrolled ? "text-gray-700" : "text-white"
            } hover:text-green-700 transition`}
          >
            À propos
          </Link>
          <Link
            href="/actualites"
            className={`font-medium ${
              scrolled ? "text-gray-700" : "text-white"
            } hover:text-green-700 transition`}
          >
            Actualités
          </Link>
          <Link
            href="/contact"
            className={`font-medium ${
              scrolled ? "text-gray-700" : "text-white"
            } hover:text-green-700 transition`}
          >
            Contact
          </Link>

          {/* CTA */}
          <Link
            href="/adhesion"
            className="px-5 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition transform hover:scale-105"
          >
            Adhérer au FORDAC
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-700 text-white flex flex-col items-center space-y-6 py-6">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Accueil
          </Link>
          <Link href="/a-propos" onClick={() => setMenuOpen(false)}>
            À propos
          </Link>
          <Link href="/actualites" onClick={() => setMenuOpen(false)}>
            Actualités
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link
            href="/adhesion"
            className="px-5 py-2 bg-white text-green-700 rounded-full font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Adhérer
          </Link>
        </div>
      )}
    </nav>
  );
}
