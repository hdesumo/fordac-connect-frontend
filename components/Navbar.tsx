"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // ✅ Ordre protocolaire : Accueil → Président → Le Parti → Organisation → ...
  const links = [
    { name: "Accueil", href: "/" },
    { name: "Le Président", href: "/president" },
    { name: "Le Parti", href: "/mouvement" }, // renommé depuis "Mouvement"
    { name: "Organisation", href: "/organisation" },
    { name: "Actualités", href: "/actualites" },
    { name: "Événements", href: "/evenements" },
    { name: "Adhérer", href: "/adherer" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* --- Logo et nom --- */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo-dark.png"
              alt="FORDAC Logo"
              className="w-9 h-9 rounded-md"
            />
            <span className="text-green-700 dark:text-green-400 font-bold text-lg tracking-wide">
              FORDAC Connect
            </span>
          </div>

          {/* --- Menu Desktop --- */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- Bouton Mobile --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 focus:outline-none"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Menu Mobile --- */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3 space-y-2 shadow-md">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
