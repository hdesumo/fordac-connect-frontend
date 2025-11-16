"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B3D2E] border-b border-[#11503D]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="FORDAC" className="h-10 w-auto" />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex space-x-8 text-[15px] font-medium text-white">

          <Link href="/" className="hover:text-[#c8a45d]">Accueil</Link>
          <Link href="/le-parti" className="hover:text-[#c8a45d]">Le Parti</Link>
          <Link href="/president" className="hover:text-[#c8a45d]">Le Président</Link>
          <Link href="/organes" className="hover:text-[#c8a45d]">Les Organes</Link>

          {/* Galerie */}
          <div className="group relative cursor-pointer">
            <span className="hover:text-[#c8a45d]">Galerie</span>
            <div className="hidden group-hover:block absolute top-full left-0 bg-[#0B3D2E] border border-[#11503D] rounded-lg shadow-lg py-3 w-40">
              <Link href="/galerie/photos" className="block px-4 py-2 hover:bg-[#11503D]">Photos</Link>
              <Link href="/galerie/videos" className="block px-4 py-2 hover:bg-[#11503D]">Vidéos</Link>
            </div>
          </div>

          <Link href="/forum/sujets" className="hover:text-[#c8a45d]">
            Forum des Militant(e)s
          </Link>

          <Link href="/nous-contacter" className="hover:text-[#c8a45d]">
            Nous Contacter
          </Link>

          <Link
            href="/adhesion"
            className="px-4 py-2 rounded-md bg-[#c8a45d] text-[#0B3D2E] font-semibold hover:bg-[#d9b97a] transition flex items-center space-x-2"
          >
            <span>👤</span>
            <span>Adhésion</span>
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 rounded-md border border-[#c8a45d] text-[#c8a45d] hover:bg-[#c8a45d] hover:text-[#0B3D2E] transition"
          >
            Connexion
          </Link>
        </div>

        {/* BOUTON MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B3D2E] border-t border-[#11503D] px-6 py-4 space-y-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-right w-full"
          >
            ✖ Fermer
          </button>

          <Link href="/" className="block hover:text-[#c8a45d]">Accueil</Link>
          <Link href="/le-parti" className="block hover:text-[#c8a45d]">Le Parti</Link>
          <Link href="/president" className="block hover:text-[#c8a45d]">Le Président</Link>
          <Link href="/organes" className="block hover:text-[#c8a45d]">Les Organes</Link>
          <Link href="/galerie/photos" className="block hover:text-[#c8a45d]">Photos</Link>
          <Link href="/galerie/videos" className="block hover:text-[#c8a45d]">Vidéos</Link>
          <Link href="/forum/sujets" className="block hover:text-[#c8a45d]">Forum des Militants</Link>
          <Link href="/nous-contacter" className="block hover:text-[#c8a45d]">Nous Contacter</Link>

          <Link
            href="/adhesion"
            className="block px-4 py-2 rounded-md bg-[#c8a45d] text-[#0B3D2E] font-semibold"
          >
            Adhésion
          </Link>

          <Link
            href="/login"
            className="block px-4 py-2 rounded-md border border-[#c8a45d] text-[#c8a45d]"
          >
            Connexion
          </Link>
        </div>
      )}

    </nav>
  );
}
