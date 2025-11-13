"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo seul, agrandi */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt=""
            width={160}
            height={80}
            priority
            className="object-contain hover:opacity-90 transition"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-800 dark:text-gray-100">
          <Link href="/" className="hover:text-fordacGreen transition">
            Accueil
          </Link>
          <Link href="/parti" className="hover:text-fordacGreen transition">
            Le Parti
          </Link>
          <Link href="/activites" className="hover:text-fordacGreen transition">
            Activités
          </Link>
          <Link href="/forum" className="hover:text-fordacGreen transition">
            Forum des Militants
          </Link>
          <Link href="/adhesion" className="hover:text-fordacGreen transition">
            Adhésion
          </Link>
          <Link
            href="/login"
            className="bg-fordacGreen text-white px-4 py-2 rounded-lg hover:bg-fordacDark transition"
          >
            Connexion
          </Link>
        </nav>
      </div>
    </header>
  );
}
