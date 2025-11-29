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
            <div className="hidden group-hover:block absolute top-full left-0 bg-[#0B3D2E] border border-[#11503D] rounded-lg shadow-lg py-3 w-40 z-50">
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

      {/* MENU MOBILE FULLSCREEN FIXED */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0B3D2E] z-[999] px-6 py-6 overflow-y-auto">
          
          {/* BOUTON FERMER */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-right w-full text-xl mb-4"
          >
            ✖
          </button>

          <div className="space-y-4 text-white text-lg">

            <Link onClick={() => setMobileMenuOpen(false)} href="/" className="block">Accueil</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/le-parti" className="block">Le Parti</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/president" className="block">Le Président</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/organes" className="block">Les Organes</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/galerie/photos" className="block">Photos</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/galerie/videos" className="block">Vidéos</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/forum/sujets" className="block">Forum des Militants</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/nous-contacter" className="block">Nous Contacter</Link>

            <Link
              href="/adhesion"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-md bg-[#c8a45d] text-[#0B3D2E] font-semibold"
            >
              Adhésion
            </Link>

            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-md border border-[#c8a45d] text-[#c8a45d]"
            >
              Connexion
            </Link>

          </div>
        </div>
      )}

    </nav>
  );
}
