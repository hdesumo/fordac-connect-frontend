"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MainNavbar() {
  return (
    <nav className="w-full bg-white sticky top-0 z-40 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        <ul className="flex items-center space-x-8 text-[#166534] font-semibold text-sm py-3">
          <li>
            <Link href="/demembrements" className="hover:text-yellow-600 transition">
              Démembrements Territoriaux
            </Link>
          </li>
          <li>
            <Link href="/ligues" className="hover:text-yellow-600 transition">
              Ligues
            </Link>
          </li>
          <li>
            <Link href="/organes-associes" className="hover:text-yellow-600 transition">
              Organes Associés
            </Link>
          </li>
          <li>
            <Link href="/galerie" className="hover:text-yellow-600 transition">
              Galerie
            </Link>
          </li>
          <li>
            <Link href="/forum" className="hover:text-yellow-600 transition">
              Forum des Militants
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
