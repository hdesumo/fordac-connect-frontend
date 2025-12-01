"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, LogIn } from "lucide-react";

export default function TopNavbar() {
  return (
    <nav className="w-full bg-[#166534] text-white py-3 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LEFT LINKS */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-400 transition">Accueil</Link>
          <Link href="/a-propos" className="hover:text-yellow-400 transition">À propos</Link>
          <Link href="/president" className="hover:text-yellow-400 transition">Le Président</Link>
          <Link href="/organes-dirigeants" className="hover:text-yellow-400 transition">
            Organes Dirigeants
          </Link>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center space-x-4">
          <Link
            href="/adhesion"
            className="bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition flex items-center space-x-1"
          >
            <User size={16} />
            <span>Adhésion</span>
          </Link>

          <Link
            href="/login"
            className="border border-white text-white hover:bg-white hover:text-[#166534] px-4 py-2 rounded-md text-sm font-semibold transition flex items-center space-x-1"
          >
            <LogIn size={16} />
            <span>Connexion</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
