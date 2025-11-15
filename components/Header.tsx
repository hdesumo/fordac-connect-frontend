"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { UserPlus2, KeyRound } from "lucide-react";

export default function Header() {
  const [showGalerieMenu, setShowGalerieMenu] = useState(false);

  return (
    <header className="w-full bg-[#0F3C34] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* ===== Logo ===== */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="FORDAC Logo"
            width={55}
            height={55}
            className="object-contain"
          />
        </Link>

        {/* ===== Navigation ===== */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <Link href="/" className="hover:text-amber-400 transition">
            Accueil
          </Link>
          <Link href="/le-parti" className="hover:text-amber-400 transition">
            Le Parti
          </Link>
          <Link href="/president" className="hover:text-amber-400 transition">
            Le Président
          </Link>
          <Link href="/organes" className="hover:text-amber-400 transition">
            Les Organes
          </Link>

          {/* ===== Galerie avec menu déroulant ===== */}
          <div
            className="relative"
            onMouseEnter={() => setShowGalerieMenu(true)}
            onMouseLeave={() => setShowGalerieMenu(false)}
          >
            <button className="hover:text-amber-400 transition flex items-center space-x-1">
              <span>Galerie</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showGalerieMenu && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-50">
                <Link
                  href="/galerie/photos"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Photos
                </Link>
                <Link
                  href="/galerie/videos"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Vidéos
                </Link>
              </div>
            )}
          </div>

          <Link href="/forum" className="hover:text-amber-400 transition">
            Forum des Militants
          </Link>
        </nav>

        {/* ===== Boutons Adhésion & Connexion ===== */}
        <div className="flex items-center space-x-3">
          <Link href="/adhesion">
            <button className="flex items-center bg-amber-600 hover:bg-amber-500 text-black font-semibold px-4 py-2 rounded-md transition">
              <UserPlus2 size={18} className="mr-1" /> Adhésion
            </button>
          </Link>
          <Link href="/login">
            <button className="flex items-center border border-amber-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-amber-600 hover:text-black transition">
              <KeyRound size={18} className="mr-1" /> Connexion
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
