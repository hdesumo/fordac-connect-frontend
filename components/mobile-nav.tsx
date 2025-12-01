"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BURGER BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 text-[#166534]"
      >
        <Menu size={30} />
      </button>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-40 z-50"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="w-64 h-full bg-white p-6 shadow-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#166534]">Menu</h2>
                <button onClick={() => setOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              {/* TOP MENU */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">Navigation principale</h3>
                <nav className="flex flex-col space-y-3 text-[#166534] font-medium">
                  <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
                  <Link href="/a-propos" onClick={() => setOpen(false)}>À propos</Link>
                  <Link href="/president" onClick={() => setOpen(false)}>Le Président</Link>
                  <Link href="/organes-dirigeants" onClick={() => setOpen(false)}>
                    Organes Dirigeants
                  </Link>
                </nav>
              </div>

              {/* MAIN MENU */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">Sections</h3>
                <nav className="flex flex-col space-y-3 text-[#166534] font-medium">
                  <Link href="/demembrements" onClick={() => setOpen(false)}>Démembrements</Link>
                  <Link href="/ligues" onClick={() => setOpen(false)}>Ligues</Link>
                  <Link href="/organes-associes" onClick={() => setOpen(false)}>Organes Associés</Link>
                  <Link href="/galerie" onClick={() => setOpen(false)}>Galerie</Link>
                  <Link href="/forum" onClick={() => setOpen(false)}>Forum des Militants</Link>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
