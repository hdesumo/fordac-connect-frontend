"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);

  const toggleSection = (key: string) => {
    setSection(section === key ? null : key);
  };

  return (
    <>
      {/* Button */}
      <button onClick={() => setOpen(true)} className="md:hidden p-2 text-[#166534]">
        <Menu size={28} />
      </button>

      {/* Overlay & Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setOpen(false)}
          >
            <motion.div
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 80 }}
              className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                  <Image src="/images/logo.png" width={40} height={40} alt="Fordac logo" />
                  <span className="text-xl font-semibold text-[#166534]">FORDAC</span>
                </Link>

                <button onClick={() => setOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              {/* TOP NAV LINKS */}
              <div className="space-y-3 mb-6">
                <Link href="/" className="block text-[#166534] font-medium" onClick={() => setOpen(false)}>Accueil</Link>
                <Link href="/a-propos" className="block text-[#166534] font-medium" onClick={() => setOpen(false)}>À propos</Link>
                <Link href="/president" className="block text-[#166534] font-medium" onClick={() => setOpen(false)}>Le Président</Link>
                <Link href="/organes-dirigeants" className="block text-[#166534] font-medium" onClick={() => setOpen(false)}>
                  Organes Dirigeants
                </Link>
              </div>

              {/* MAIN SECTIONS */}
              <div className="space-y-4">
                {/* Accordion Builder */}
                {[
                  {
                    key: "dem",
                    title: "Démembrements Territoriaux",
                    items: [
                      { label: "Fédérations", href: "/dembrements/federations" },
                      { label: "Sections", href: "/dembrements/sections" },
                      { label: "Sous-sections", href: "/dembrements/sous-sections" },
                      { label: "Cellules", href: "/dembrements/cellules" },
                    ],
                  },
                  {
                    key: "ligues",
                    title: "Ligues",
                    items: [
                      { label: "Jeunesse", href: "/ligues/jeunesse" },
                      { label: "Femmes", href: "/ligues/femmes" },
                      { label: "Experts", href: "/ligues/experts" },
                    ],
                  },
                  {
                    key: "associes",
                    title: "Organes Associés",
                    items: [
                      { label: "Presse de la Nation", href: "/organes-associes/presse" },
                      { label: "Mutuelle", href: "/organes-associes/mutuelle" },
                    ],
                  },
                  {
                    key: "galerie",
                    title: "Galerie",
                    items: [
                      { label: "Photos", href: "/galerie/photos" },
                      { label: "Vidéos", href: "/galerie/videos" },
                    ],
                  },
                  {
                    key: "forum",
                    title: "Forum des Militants",
                    items: [
                      { label: "Accueil du forum", href: "/forum" },
                      { label: "Espace membre", href: "/forum/espace" },
                    ],
                  },
                ].map((sec) => (
                  <div key={sec.key}>
                    <button
                      onClick={() => toggleSection(sec.key)}
                      className="w-full flex justify-between items-center text-[#166534] font-semibold text-left"
                    >
                      {sec.title}
                      <ChevronDown size={18} className={`${section === sec.key ? "rotate-180" : ""} transition`} />
                    </button>

                    {/* Items */}
                    {section === sec.key && (
                      <div className="mt-2 ml-4 space-y-2">
                        {sec.items.map((i) => (
                          <Link
                            key={i.href}
                            href={i.href}
                            className="block text-gray-700 text-sm"
                            onClick={() => setOpen(false)}
                          >
                            {i.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <hr className="my-5 border-gray-200" />

              <Link href="/adhesion" onClick={() => setOpen(false)} className="block mb-4 font-medium text-[#166534]">
                Adhésion
              </Link>

              <Link href="/login" onClick={() => setOpen(false)} className="block font-medium text-[#166534]">
                Connexion
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
