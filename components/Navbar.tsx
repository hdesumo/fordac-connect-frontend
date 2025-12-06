"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  export function logoutMembre() {
  localStorage.removeItem("memberToken");
  localStorage.removeItem("memberData");
}


  // Vérification du token pour Forum des Militants
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token_militant");
      setIsLoggedIn(!!token);
    }
  }, []);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <nav className="bg-[#062b26] text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="FORDAC"
            className="h-12 cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium">

          <li>
            <Link href="/" className="hover:text-yellow-400 transition">
              Accueil
            </Link>
          </li>

          <li>
            <Link href="/a-propos" className="hover:text-yellow-400 transition">
              À propos
            </Link>
          </li>

          <li>
            <Link href="/president" className="hover:text-yellow-400 transition">
              Le Président
            </Link>
          </li>

          {/* ORGANES DIRIGEANTS */}
          <li className="group relative cursor-pointer">
            <span>Organes Dirigeants</span>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black w-72 rounded shadow-lg py-2">
              <li><Link href="/organes/congres" className="block px-4 py-2 hover:bg-gray-100">Congrès</Link></li>
              <li><Link href="/organes/cps" className="block px-4 py-2 hover:bg-gray-100">Comité Politique Stratégique (CPS)</Link></li>
              <li><Link href="/organes/bpn" className="block px-4 py-2 hover:bg-gray-100">Bureau Politique National (BPN)</Link></li>
              <li><Link href="/organes/sen" className="block px-4 py-2 hover:bg-gray-100">Secrétariat Exécutif National (SEN)</Link></li>
              <li><Link href="/organes/ethique" className="block px-4 py-2 hover:bg-gray-100">Comité d’Éthique</Link></li>
              <li><Link href="/organes/controle-audit" className="block px-4 py-2 hover:bg-gray-100">Comité de Contrôle & Audit</Link></li>
            </ul>
          </li>

          {/* DÉMEMBREMENTS */}
          <li className="group relative cursor-pointer">
            <span>Démembrements Territoriaux</span>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black w-60 rounded shadow-lg py-2">
              <li><Link href="/territoires/federations" className="block px-4 py-2 hover:bg-gray-100">Fédérations</Link></li>
              <li><Link href="/territoires/sections" className="block px-4 py-2 hover:bg-gray-100">Sections</Link></li>
              <li><Link href="/territoires/sous-sections" className="block px-4 py-2 hover:bg-gray-100">Sous-sections</Link></li>
              <li><Link href="/territoires/cellules" className="block px-4 py-2 hover:bg-gray-100">Cellules</Link></li>
            </ul>
          </li>

          {/* LIGUES */}
          <li className="group relative cursor-pointer">
            <span>Ligues</span>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black w-56 rounded shadow-lg py-2">
              <li><Link href="/ligues/jeunes" className="block px-4 py-2 hover:bg-gray-100">Ligue des Jeunes</Link></li>
              <li><Link href="/ligues/femmes" className="block px-4 py-2 hover:bg-gray-100">Ligue des Femmes</Link></li>
              <li><Link href="/ligues/experts" className="block px-4 py-2 hover:bg-gray-100">Ligue des Experts</Link></li>
            </ul>
          </li>

          {/* ORGANES ASSOCIÉS */}
          <li className="group relative cursor-pointer">
            <span>Organes Associés</span>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black w-60 rounded shadow-lg py-2">
              <li><Link href="/organes-associes/presse" className="block px-4 py-2 hover:bg-gray-100">Presse de la Nation</Link></li>
              <li><Link href="/organes-associes/mutuelle" className="block px-4 py-2 hover:bg-gray-100">La Mutuelle du FORDAC</Link></li>
            </ul>
          </li>

          {/* GALERIE */}
          <li className="group relative cursor-pointer">
            <span>Galerie</span>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black w-40 rounded shadow-lg py-2">
              <li><Link href="/galerie/photos" className="block px-4 py-2 hover:bg-gray-100">Photos</Link></li>
              <li><Link href="/galerie/videos" className="block px-4 py-2 hover:bg-gray-100">Vidéos</Link></li>
            </ul>
          </li>

          {/* FORUM (protégé) */}
          <li>
            <Link
              href={isLoggedIn ? "/forum" : "/login"}
              className="hover:text-yellow-400 transition"
            >
              Forum des Militants
            </Link>
          </li>

          {/* BOUTONS */}
          <li>
            <Link
              href="/adhesion"
              className="bg-yellow-600 px-4 py-2 rounded hover:bg-yellow-700 transition flex items-center space-x-2"
            >
              <span>Adhésion</span>
            </Link>
          </li>

          <li>
            <Link
              href="/login"
              className="border border-yellow-600 px-4 py-2 rounded hover:bg-yellow-600 hover:text-black transition"
            >
              Connexion
            </Link>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#083a34] text-white px-6 py-4 space-y-4 shadow-lg">

          <Link href="/" onClick={toggleMobileMenu}>Accueil</Link>
          <Link href="/a-propos" onClick={toggleMobileMenu}>À propos</Link>
          <Link href="/president" onClick={toggleMobileMenu}>Le Président</Link>

          {/* Organes dirigeants */}
          <details className="group">
            <summary className="cursor-pointer">Organes Dirigeants</summary>
            <ul className="ml-4 mt-2 space-y-2 text-sm">
              <li><Link href="/organes/congres" onClick={toggleMobileMenu}>Congrès</Link></li>
              <li><Link href="/organes/cps" onClick={toggleMobileMenu}>CPS</Link></li>
              <li><Link href="/organes/bpn" onClick={toggleMobileMenu}>BPN</Link></li>
              <li><Link href="/organes/sen" onClick={toggleMobileMenu}>SEN</Link></li>
              <li><Link href="/organes/ethique" onClick={toggleMobileMenu}>Comité d’Éthique</Link></li>
              <li><Link href="/organes/controle-audit" onClick={toggleMobileMenu}>Contrôle & Audit</Link></li>
            </ul>
          </details>

          {/* Démembrements */}
          <details className="group">
            <summary className="cursor-pointer">Démembrements Territoriaux</summary>
            <ul className="ml-4 mt-2 space-y-2 text-sm">
              <li><Link href="/territoires/federations" onClick={toggleMobileMenu}>Fédérations</Link></li>
              <li><Link href="/territoires/sections" onClick={toggleMobileMenu}>Sections</Link></li>
              <li><Link href="/territoires/sous-sections" onClick={toggleMobileMenu}>Sous-sections</Link></li>
              <li><Link href="/territoires/cellules" onClick={toggleMobileMenu}>Cellules</Link></li>
            </ul>
          </details>

          {/* Ligues */}
          <details className="group">
            <summary className="cursor-pointer">Ligues</summary>
            <ul className="ml-4 mt-2 space-y-2 text-sm">
              <li><Link href="/ligues/jeunes" onClick={toggleMobileMenu}>Ligue des Jeunes</Link></li>
              <li><Link href="/ligues/femmes" onClick={toggleMobileMenu}>Ligue des Femmes</Link></li>
              <li><Link href="/ligues/experts" onClick={toggleMobileMenu}>Ligue des Experts</Link></li>
            </ul>
          </details>

          {/* Organes associés */}
          <details className="group">
            <summary className="cursor-pointer">Organes Associés</summary>
            <ul className="ml-4 mt-2 space-y-2 text-sm">
              <li><Link href="/organes-associes/presse" onClick={toggleMobileMenu}>Presse de la Nation</Link></li>
              <li><Link href="/organes-associes/mutuelle" onClick={toggleMobileMenu}>Mutuelle du FORDAC</Link></li>
            </ul>
          </details>

          {/* Galerie */}
          <details className="group">
            <summary className="cursor-pointer">Galerie</summary>
            <ul className="ml-4 mt-2 space-y-2 text-sm">
              <li><Link href="/galerie/photos" onClick={toggleMobileMenu}>Photos</Link></li>
              <li><Link href="/galerie/videos" onClick={toggleMobileMenu}>Vidéos</Link></li>
            </ul>
          </details>

          {/* Forum */}
          <Link
            href={isLoggedIn ? "/forum" : "/login"}
            onClick={toggleMobileMenu}
          >
            Forum des Militants
          </Link>

          <Link
            href="/adhesion"
            onClick={toggleMobileMenu}
            className="block bg-yellow-600 px-4 py-2 rounded text-center"
          >
            Adhésion
          </Link>

          <Link
            href="/login"
            onClick={toggleMobileMenu}
            className="block border border-yellow-600 px-4 py-2 rounded text-center"
          >
            Connexion
          </Link>
        </div>
      )}
    </nav>
  );
}
