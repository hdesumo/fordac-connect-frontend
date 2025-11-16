"use client";

import "./globals.css";
import { useState } from "react";
import Link from "next/link";

import MarqueeBanner from "@/components/MarqueeBanner";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="fr">
      <body className="has-navbar bg-[#0c2e25] text-white">

        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 bg-[#061a14] border-b border-[#1b3a2e]">

          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="FORDAC Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold tracking-wide"></span>
            </Link>

            {/* MENU DESKTOP */}
            <nav className="hidden lg:flex space-x-8 text-[15px] font-medium">
              <Link href="/" className="hover:text-[#c8a45d]">Accueil</Link>
              <Link href="/le-parti" className="hover:text-[#c8a45d]">Le Parti</Link>
              <Link href="/president" className="hover:text-[#c8a45d]">Le Président</Link>
              <Link href="/organes" className="hover:text-[#c8a45d]">Les Organes</Link>

              <div className="group relative">
                <span className="cursor-pointer hover:text-[#c8a45d]">Galerie ▾</span>
                <div className="hidden group-hover:block absolute top-full left-0 bg-[#0f3a2d] border border-[#1d6047] rounded-lg shadow-lg py-3 w-40">
                  <Link href="/galerie/photos" className="block px-4 py-2 hover:bg-[#14533f]">
                    Photos
                  </Link>
                  <Link href="/galerie/videos" className="block px-4 py-2 hover:bg-[#14533f]">
                    Vidéos
                  </Link>
                </div>
              </div>

              <Link href="/forum/sujets" className="hover:text-[#c8a45d]">
                Forum des Militants
              </Link>

              <Link
                href="/adhesion"
                className="px-4 py-2 rounded-md bg-[#c8a45d] text-[#0c2e25] font-semibold hover:bg-[#d9b97a] transition flex items-center space-x-2"
              >
                <span>👤</span>
                <span>Adhésion</span>
              </Link>

              <Link
                href="/login"
                className="px-4 py-2 rounded-md border border-[#c8a45d] text-[#c8a45d] font-semibold hover:bg-[#c8a45d] hover:text-[#0c2e25] transition"
              >
                Connexion
              </Link>
            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* BANDE BLANCHE */}
        <div className="w-full h-2 bg-white/90 mt-[72px]"></div>

        {/* MARQUEE */}
        <MarqueeBanner />

        {/* CONTENU → pt-4 APPLIQUÉ ICI */}
        <main className="pt-4">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
