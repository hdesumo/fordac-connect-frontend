"use client";

import Link from "next/link";
import { Mail, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#166534] text-white pt-16 pb-10 mt-20 border-t border-green-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Colonne 1 – Identité du Parti */}
        <div>
          <h3 className="text-xl font-extrabold mb-4">FORDAC Connect</h3>
          <p className="text-sm leading-relaxed text-white/80">
            Les Forces Démocratiques pour l’Action et le Changement œuvrent pour
            une société juste, solidaire et centrée sur le progrès humain.
          </p>
          <p className="text-sm leading-relaxed text-white/80 mt-3">
            Rejoignez le mouvement et contribuez à la transformation du Cameroun.
          </p>
        </div>

        {/* Colonne 2 – Liens essentiels */}
        <div>
          <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/a-propos" className="hover:text-yellow-400">
                À propos du Parti
              </Link>
            </li>
            <li>
              <Link href="/president" className="hover:text-yellow-400">
                Le Président
              </Link>
            </li>
            <li>
              <Link href="/adhesion" className="hover:text-yellow-400">
                Adhésion
              </Link>
            </li>
            <li>
              <Link href="/forum" className="hover:text-yellow-400">
                Forum des Militants
              </Link>
            </li>

            {/* Mentions officielles */}
            <li className="mt-4">
              <Link href="/mentions-legales" className="hover:text-yellow-400">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-yellow-400">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 – Contact & Réseaux */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>

          <div className="flex items-center space-x-2 text-sm">
            <Mail size={18} />
            <a
              href="mailto:contact@fordac-connect.org"
              className="hover:text-yellow-400"
            >
              contact@fordac-connect.org
            </a>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Youtube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-12 pt-6 border-t border-green-900 text-center text-sm text-white/70">
        <p>© {new Date().getFullYear()} FORDAC Connect — Tous droits réservés.</p>
        <p className="mt-2">
          Une initiative citoyenne portée par les Forces Démocratiques pour l’Action et le Changement.
        </p>
      </div>
    </footer>
  );
}
