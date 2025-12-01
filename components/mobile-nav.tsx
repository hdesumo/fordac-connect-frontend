"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function MobileNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [sticky, setSticky] = useState(false);
  const [openedMobileSection, setOpenedMobileSection] = useState<string | null>(null);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSection = (key: string) => {
    setOpenedMobileSection(openedMobileSection === key ? null : key);
  };

  /* -------------------------------
      MEGA MENU COLUMNS (DESKTOP)
  --------------------------------*/
  const megaMenuColumns = [
    {
      title: "Le Parti",
      items: [
        { label: "À propos", href: "/a-propos" },
        { label: "Le Président", href: "/president" },
        { label: "Organes dirigeants", href: "/organes/dirigeants" },
        { label: "Démembrements territoriaux", href: "/organes/demembrements" },
        { label: "Ligues", href: "/organes/ligues" },
      ],
    },
    {
      title: "Organes Associés",
      items: [
        { label: "Presse de la Nation", href: "/presse" },
        { label: "La Mutuelle du FORDAC", href: "/mutuelle" },
      ],
    },
    {
      title: "Activités",
      items: [
        { label: "Actualités", href: "/actualites" },
        { label: "Discours", href: "/discours" },
        { label: "Projets & Actions Sociales", href: "/actions" },
        { label: "Publications", href: "/publications" },
      ],
    },
    {
      title: "Espaces",
      items: [
        { label: "Forum des Militants", href: "/forum" },
        { label: "Connexion", href: "/login" },
        { label: "Adhésion", href: "/adhesion" },
      ],
    },
  ];

  return (
    <>
      {/* ==============================
              NAVBAR DESKTOP + MOBILE
      =============================== */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full z-50 transition-all ${
          sticky ? "fixed top-0 shadow-lg bg-[#166534]" : "absolute bg-[#166534]"
        }`}
      >
        {/* NAVBAR BAR */}
        <div className="w-full px-4 lg:px-10 py-3 flex items-center justify-between text-white">
          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/fordac.png" className="h-12 w-auto" alt="FORDAC" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-8 text-[17px] font-medium">

            <div
              onMouseEnter={() => setHoveredMenu("parti")}
              onMouseLeave={() => setHoveredMenu(null)}
              className="relative cursor-pointer"
            >
              Le Parti
            </div>

            <Link href="/president" className="hover:text-gray-200">
              Le Président
            </Link>

            <div
              onMouseEnter={() => setHoveredMenu("organes")}
              onMouseLeave={() => setHoveredMenu(null)}
              className="relative cursor-pointer"
            >
              Organes
            </div>

            <div
              onMouseEnter={() => setHoveredMenu("activites")}
              onMouseLeave={() => setHoveredMenu(null)}
              className="relative cursor-pointer"
            >
              Activités
            </div>

            <div
              onMouseEnter={() => setHoveredMenu("espaces")}
              onMouseLeave={() => setHoveredMenu(null)}
              className="relative cursor-pointer"
            >
              Espaces
            </div>

            <Link
              href="/adhesion"
              className="px-4 py-1 rounded bg-white text-[#166534] font-semibold"
            >
              Adhésion
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* =======================
              MEGA MENU DESKTOP
        ======================= */}
        <AnimatePresence>
          {hoveredMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hidden lg:block absolute left-0 w-full bg-white text-black shadow-lg py-8"
            >
              <div className="grid grid-cols-4 gap-6 px-10">

                {megaMenuColumns.map((col, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-[#166534] mb-3">{col.title}</h3>
                    <ul className="space-y-2">
                      {col.items.map((item, j) => (
                        <li key={j}>
                          <Link href={item.href} className="hover:underline">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ===================================
              MOBILE FULL SCREEN MENU
      =================================== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 right-0 w-4/5 h-full bg-[#166534] text-white z-[999] p-6 overflow-y-auto lg:hidden"
          >
            <div className="flex justify-end mb-6">
              <X
                size={32}
                className="cursor-pointer"
                onClick={() => setMobileOpen(false)}
              />
            </div>

            {/* Mobile Sections */}
            {megaMenuColumns.map((section, i) => (
              <div key={i} className="border-b border-white/20 pb-4 mb-4">
                <button
                  onClick={() => toggleMobileSection(section.title)}
                  className="flex w-full justify-between text-lg font-semibold"
                >
                  {section.title}
                  <ChevronDown
                    className={`transition ${
                      openedMobileSection === section.title
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openedMobileSection === section.title && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-2"
                    >
                      {section.items.map((item, j) => (
                        <li key={j}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Adhésion / Connexion */}
            <Link
              href="/adhesion"
              className="block w-full text-center bg-white text-[#166534] py-2 font-bold rounded mb-3"
              onClick={() => setMobileOpen(false)}
            >
              Adhésion
            </Link>
            <Link
              href="/login"
              className="block w-full text-center border border-white py-2 font-bold rounded"
              onClick={() => setMobileOpen(false)}
            >
              Connexion
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
