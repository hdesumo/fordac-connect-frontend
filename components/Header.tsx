"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0B6623] text-white shadow z-50">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold tracking-wide">
            FORDAC
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/demembrements" className="hover:text-gray-200">Démembrements</Link>
            <Link href="/ligues" className="hover:text-gray-200">Ligues</Link>
            <Link href="/organes-dirigeants" className="hover:text-gray-200">Organes Dirigeants</Link>
            <Link href="/organes-associes" className="hover:text-gray-200">Organes Associés</Link>
            <Link href="/galerie" className="hover:text-gray-200">Galerie</Link>
            <Link href="/forum" className="hover:text-gray-200">Forum des Militants</Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <nav className="md:hidden bg-[#0B6623] border-t border-white/10 animate-slideDown">
          <ul className="flex flex-col py-4 px-6 text-base font-medium space-y-4">
            <li><Link href="/demembrements" onClick={() => setOpen(false)}>Démembrements</Link></li>
            <li><Link href="/ligues" onClick={() => setOpen(false)}>Ligues</Link></li>
            <li><Link href="/organes-dirigeants" onClick={() => setOpen(false)}>Organes Dirigeants</Link></li>
            <li><Link href="/organes-associes" onClick={() => setOpen(false)}>Organes Associés</Link></li>
            <li><Link href="/galerie" onClick={() => setOpen(false)}>Galerie</Link></li>
            <li><Link href="/forum" onClick={() => setOpen(false)}>Forum des Militants</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
