"use client";
import React from "react";
import Link from "next/link";
import { UserPlus, LogIn } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-fordacDark text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-fordacLight">FORDAC</span>
          <span className="text-fordacGold">Connect</span>
        </Link>

        {/* Navigation principale */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-fordacGold transition-colors">
            Accueil
          </Link>
          <Link href="/le-parti" className="hover:text-fordacGold transition-colors">
            Le Parti
          </Link>
          <Link href="/forum" className="hover:text-fordacGold transition-colors">
            Forum des Militants
          </Link>
        </nav>

        {/* Boutons d'action */}
        <div className="flex items-center gap-3">
          <Link
            href="/adhesion"
            className="flex items-center gap-2 bg-fordacGold text-fordacDark px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
          >
            <UserPlus size={16} />
            Adhésion
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 border border-fordacGold px-4 py-2 rounded-md font-semibold hover:bg-fordacGold hover:text-fordacDark transition-colors"
          >
            <LogIn size={16} />
            Connexion
          </Link>
        </div>
      </div>
    </header>
  );
}
