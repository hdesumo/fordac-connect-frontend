"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function MainNavbar() {
  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <MobileMenu />
      </div>

      {/* DESKTOP */}
      <nav className="hidden md:block w-full bg-white border-b border-gray-200 shadow-sm">
        <ul className="max-w-7xl mx-auto flex items-center space-x-10 px-6 py-3 text-[#166534] font-medium">
          <li><Link href="/dembrements/federations">Démembrements</Link></li>
          <li><Link href="/ligues/jeunesse">Ligues</Link></li>
          <li><Link href="/organes-associes/presse">Organes Associés</Link></li>
          <li><Link href="/galerie/photos">Galerie</Link></li>
          <li><Link href="/forum">Forum des Militants</Link></li>
        </ul>
      </nav>
    </>
  );
}
