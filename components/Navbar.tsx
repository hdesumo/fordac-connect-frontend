"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* 🟩 Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo-dark.png"
            alt="FORDAC Connect logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-green-800 dark:text-green-400">
            FORDAC Connect
          </span>
        </Link>

        {/* 🟩 Menu desktop */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-800 dark:text-gray-200">
          <Link
            href="/"
            className="hover:text-green-700 dark:hover:text-green-400 transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/mouvement"
            className="hover:text-green-700 dark:hover:text-green-400 transition-colors"
          >
            Le Mouvement
          </Link>
          <Link
            href="/organisation"
            className="hover:text-green-700 dark:hover:text-green-400 transition-colors"
          >
            Organisation
          </Link>
          <Link
            href="/actualites"
            className="hover:text-green-700 dark:hover:text-green-400 transition-colors"
          >
            Actualités
          </Link>
          <Link
            href="/adherer"
            className="hover:text-green-700 dark:hover:text-green-400 transition-colors"
          >
            Adhérer
          </Link>
          <Link
            href="/contact"
            className="hover:text-green-700 dark:hover:text-green-400 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* 🟩 Bouton mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Menu"
        >
          {menuOpen ? (
            <X className="text-green-800 dark:text-green-300" size={26} />
          ) : (
            <Menu className="text-green-800 dark:text-green-300" size={26} />
          )}
        </button>
      </div>

      {/* 🟩 Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col space-y-3 py-4 px-6 text-gray-800 dark:text-gray-200">
            <Link
              href="/"
              className="hover:text-green-700 dark:hover:text-green-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/mouvement"
              className="hover:text-green-700 dark:hover:text-green-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Le Mouvement
            </Link>
            <Link
              href="/organisation"
              className="hover:text-green-700 dark:hover:text-green-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Organisation
            </Link>
            <Link
              href="/actualites"
              className="hover:text-green-700 dark:hover:text-green-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Actualités
            </Link>
            <Link
              href="/adherer"
              className="hover:text-green-700 dark:hover:text-green-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Adhérer
            </Link>
            <Link
              href="/contact"
              className="hover:text-green-700 dark:hover:text-green-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
