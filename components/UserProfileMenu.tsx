"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function UserProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  // Vérifie si l'utilisateur est connecté
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    // Fermer le menu au clic extérieur
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  if (!isLoggedIn) return null; // n'affiche rien si non connecté

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none"
      >
        <Image
          src="/avatars/default.jpg"
          alt="Profil utilisateur"
          width={40}
          height={40}
          className="rounded-full border-2 border-green-700"
        />
      </button>

      {/* Menu déroulant */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-xl border border-gray-100 z-50"
          >
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <Link
                  href="/profil"
                  className="block px-4 py-2 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Mon profil
                </Link>
              </li>
              <li>
                <Link
                  href="/forum"
                  className="block px-4 py-2 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Forum des Militants
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                >
                  Déconnexion
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
