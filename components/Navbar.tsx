'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="w-full bg-[#004225] text-white border-b border-gray-800">
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold">
          FORDAC
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">

          <Link href="/">Accueil</Link>

          <Link href="/a-propos">À propos</Link>

          {/* ORGANES DIRIGEANTS */}
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>Organes Dirigeants</span>
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link href="/organes-dirigeants/congres" className="block px-4 py-2 hover:bg-gray-100">Congrès</Link>
              <Link href="/organes-dirigeants/cps" className="block px-4 py-2 hover:bg-gray-100">Comité Politique Stratégique</Link>
              <Link href="/organes-dirigeants/sen" className="block px-4 py-2 hover:bg-gray-100">SEN</Link>
              <Link href="/organes-dirigeants/ethique" className="block px-4 py-2 hover:bg-gray-100">Éthique</Link>
              <Link href="/organes-dirigeants/controle-audit" className="block px-4 py-2 hover:bg-gray-100">Contrôle & Audit</Link>
            </div>
          </div>

          {/* DÉMEMBREMENTS */}
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>Démembrements</span>
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link href="/demembrements/federations" className="block px-4 py-2 hover:bg-gray-100">Fédérations</Link>
              <Link href="/demembrements/sections" className="block px-4 py-2 hover:bg-gray-100">Sections</Link>
              <Link href="/demembrements/sous-sections" className="block px-4 py-2 hover:bg-gray-100">Sous-sections</Link>
              <Link href="/demembrements/cellules" className="block px-4 py-2 hover:bg-gray-100">Cellules</Link>
            </div>
          </div>

          {/* LIGUES */}
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>Ligues</span>
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link href="/ligues/jeunes" className="block px-4 py-2 hover:bg-gray-100">Jeunes</Link>
              <Link href="/ligues/femmes" className="block px-4 py-2 hover:bg-gray-100">Femmes</Link>
              <Link href="/ligues/experts" className="block px-4 py-2 hover:bg-gray-100">Experts</Link>
            </div>
          </div>

          {/* ORGANES ASSOCIÉS */}
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>Organes Associés</span>
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link href="/organes-associes/presse" className="block px-4 py-2 hover:bg-gray-100">Presse de la Nation</Link>
              <Link href="/organes-associes/mutuelle" className="block px-4 py-2 hover:bg-gray-100">Mutuelle du FORDAC</Link>
            </div>
          </div>

          {/* GALERIE */}
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>Galerie</span>
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link href="/galerie/photos" className="block px-4 py-2 hover:bg-gray-100">Photos</Link>
              <Link href="/galerie/videos" className="block px-4 py-2 hover:bg-gray-100">Vidéos</Link>
            </div>
          </div>

          <Link href="/forum">Forum</Link>
          <Link href="/adhesion">Adhésion</Link>

          <Link
            href="/membre/login"
            className="px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-200"
          >
            Connexion
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden p-2"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setOpenMenu(null);
          }}
        >
          <ChevronDown
            size={28}
            className={`transition-transform ${mobileOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <nav className="md:hidden bg-[#00321c] border-t border-gray-700 text-white px-4 py-4 space-y-2 font-medium">

          <Link href="/" onClick={() => setMobileOpen(false)}>Accueil</Link>
          <Link href="/a-propos" onClick={() => setMobileOpen(false)}>À propos</Link>

          {/* MOBILE SUBMENU — ORGANES DIRIGEANTS */}
          <div>
            <button
              onClick={() => toggleSubMenu('dirigeants')}
              className="w-full flex items-center justify-between"
            >
              Organes Dirigeants
              <ChevronDown size={18} className={`transition ${openMenu === 'dirigeants' ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`overflow-hidden transition-all ${
                openMenu === 'dirigeants' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="pl-4 mt-2 space-y-1">
                <Link href="/organes-dirigeants/congres">Congrès</Link>
                <Link href="/organes-dirigeants/cps">Comité Politique Stratégique</Link>
                <Link href="/organes-dirigeants/sen">SEN</Link>
                <Link href="/organes-dirigeants/ethique">Éthique</Link>
                <Link href="/organes-dirigeants/controle-audit">Contrôle & Audit</Link>
              </div>
            </div>
          </div>

          {/* MOBILE SUBMENU — DEMEMBREMENTS */}
          <div>
            <button
              onClick={() => toggleSubMenu('demembrements')}
              className="w-full flex items-center justify-between"
            >
              Démembrements
              <ChevronDown size={18} className={`transition ${openMenu === 'demembrements' ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all ${
                openMenu === 'demembrements' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="pl-4 mt-2 space-y-1">
                <Link href="/demembrements/federations">Fédérations</Link>
                <Link href="/demembrements/sections">Sections</Link>
                <Link href="/demembrements/sous-sections">Sous-sections</Link>
                <Link href="/demembrements/cellules">Cellules</Link>
              </div>
            </div>
          </div>

          {/* MOBILE SUBMENU — LIGUES */}
          <div>
            <button
              onClick={() => toggleSubMenu('ligues')}
              className="w-full flex items-center justify-between"
            >
              Ligues
              <ChevronDown size={18} className={`transition ${openMenu === 'ligues' ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all ${
                openMenu === 'ligues' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="pl-4 mt-2 space-y-1">
                <Link href="/ligues/jeunes">Jeunes</Link>
                <Link href="/ligues/femmes">Femmes</Link>
                <Link href="/ligues/experts">Experts</Link>
              </div>
            </div>
          </div>

          {/* MOBILE SUBMENU — ORGANES ASSOCIÉS */}
          <div>
            <button
              onClick={() => toggleSubMenu('associes')}
              className="w-full flex items-center justify-between"
            >
              Organes Associés
              <ChevronDown size={18} className={`transition ${openMenu === 'associes' ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all ${
                openMenu === 'associes' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="pl-4 mt-2 space-y-1">
                <Link href="/organes-associes/presse">Presse de la Nation</Link>
                <Link href="/organes-associes/mutuelle">Mutuelle du FORDAC</Link>
              </div>
            </div>
          </div>

          {/* GALERIE */}
          <div>
            <button
              onClick={() => toggleSubMenu('galerie')}
              className="w-full flex items-center justify-between"
            >
              Galerie
              <ChevronDown size={18} className={`transition ${openMenu === 'galerie' ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all ${
                openMenu === 'galerie' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="pl-4 mt-2 space-y-1">
                <Link href="/galerie/photos">Photos</Link>
                <Link href="/galerie/videos">Vidéos</Link>
              </div>
            </div>
          </div>

          <Link href="/forum">Forum</Link>
          <Link href="/adhesion">Adhésion</Link>

          <Link
            href="/membre/login"
            className="block px-4 py-2 bg-white text-black rounded shadow text-center mt-2"
          >
            Connexion
          </Link>
        </nav>
      )}
    </header>
  );
}
