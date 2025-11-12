"use client";

import Link from "next/link";
import { Facebook, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 🏛️ Colonne 1 : présentation */}
        <div>
          <h2 className="text-xl font-bold mb-3">FORDAC Connect</h2>
          <p className="text-sm text-gray-100 leading-relaxed">
            Les <span className="font-semibold">Forces Démocratiques pour l’Action et le Changement</span> œuvrent pour
            une société plus juste, solidaire et tournée vers l’avenir.  
            Rejoignez le mouvement et contribuez à la construction d’un Cameroun meilleur.
          </p>
        </div>

        {/* 🔗 Colonne 2 : liens rapides */}
        <div>
          <h2 className="text-xl font-bold mb-3">Navigation</h2>
          <ul className="space-y-2 text-gray-100 text-sm">
            <li><Link href="/" className="hover:underline">Accueil</Link></li>
            <li><Link href="/a-propos" className="hover:underline">À propos</Link></li>
            <li><Link href="/actualites" className="hover:underline">Actualités</Link></li>
            <li><Link href="/forum" className="hover:underline">Forum des militants</Link></li>
            <li><Link href="/adhesion" className="hover:underline">Adhésion</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover:underline">Mentions légales</Link></li>
          </ul>
        </div>

        {/* 🌍 Colonne 3 : contact & réseaux */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact & Réseaux</h2>
          <ul className="text-sm text-gray-100 space-y-2">
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <span>contact@fordac-connect.org</span>
            </li>
            <li className="flex items-center space-x-4 mt-3">
              <a href="#" className="hover:text-yellow-400" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="hover:text-yellow-400" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" className="hover:text-yellow-400" aria-label="YouTube"><Youtube size={18} /></a>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔹 Ligne inférieure */}
      <div className="border-t border-green-700 mt-10 pt-6 text-center text-sm text-gray-100">
        <p>
          © {new Date().getFullYear()} FORDAC Connect — Tous droits réservés.
        </p>
        <p className="text-xs mt-2 text-gray-200">
          Une initiative citoyenne portée par les Forces Démocratiques pour l’Action et le Changement.
        </p>
      </div>
    </footer>
  );
}
