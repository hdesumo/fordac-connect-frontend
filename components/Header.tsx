"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/le-parti", label: "Le Parti" },
    { href: "/forum", label: "Forum des Militants" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled
          ? "shadow-lg bg-fordac-dark/95"
          : "bg-gradient-to-r from-fordac-dark to-fordac-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl lg:text-2xl font-extrabold text-white tracking-tight"
        >
          FORDAC<span className="text-fordac-light">Connect</span>
        </Link>

        {/* Bouton menu mobile */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Menu navigation */}
        <nav
          className={`${
            menuOpen
              ? "absolute top-14 left-0 right-0 bg-gradient-to-b from-fordac-dark to-fordac-primary lg:bg-transparent"
              : "hidden"
          } lg:block`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-2 text-white hover:text-fordac-light transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Boutons à droite */}
            <li className="flex flex-col lg:flex-row lg:items-center lg:ml-4 mt-2 lg:mt-0 gap-2">
              <Link
                href="/adhesion"
                className="bg-white text-fordac-dark font-semibold px-4 py-2 rounded-lg hover:bg-fordac-light hover:text-white transition-all"
              >
                Adhésion
              </Link>
              <Link
                href="/connexion"
                className="border border-white text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:text-fordac-dark transition-all"
              >
                Connexion
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
