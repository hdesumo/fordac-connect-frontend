"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Détection du token de session (connexion)
  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthenticated(!!token);
  }, []);

  // Effet au scroll → opacité + ombre
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    window.location.href = "/login";
  };

  const navLinks = [
    { href: "/", label: "Accueil", alwaysVisible: true },
    { href: "/a-propos", label: "À propos", alwaysVisible: true },
    { href: "/actualites", label: "Actualités", alwaysVisible: true },
    { href: "/evenements", label: "Événements", alwaysVisible: true },
    { href: "/mouvement", label: "Le Mouvement", alwaysVisible: true },
    { href: "/organisation", label: "Organisation", alwaysVisible: true },
    { href: "/adhesion", label: "Adhésion", alwaysVisible: true },
    { href: "/forum", label: "Forum des Militants", authOnly: true },
    { href: "/mes-publications", label: "Mes Publications", authOnly: true },
    { href: "/profil", label: "Mon Profil", authOnly: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 shadow-lg py-2"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-fordacGreen tracking-tight"
        >
          FORDAC<span className="text-fordacLight">Connect</span>
        </Link>

        {/* Bouton menu mobile */}
        <button
          className="lg:hidden text-gray-700 dark:text-gray-100"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Navigation principale */}
        <nav
          className={`${
            menuOpen
              ? "block absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg"
              : "hidden"
          } lg:block`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
            {navLinks
              .filter(
                (link) =>
                  link.alwaysVisible || (authenticated && link.authOnly)
              )
              .map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-fordacGreen transition-colors ${
                      pathname === link.href
                        ? "font-semibold text-fordacGreen"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

            {/* Connexion / Déconnexion */}
            <li className="mt-2 lg:mt-0">
              {authenticated ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <LogOut size={18} /> Déconnexion
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="flex items-center gap-2 text-fordacGreen hover:text-fordacLight transition-colors"
                >
                  <User size={18} /> Connexion
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
