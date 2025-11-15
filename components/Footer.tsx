"use client";

import Link from "next/link";
import { Facebook, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-10 border-t border-emerald-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ===================== Colonne 1 : Présentation ===================== */}
        <div>
          <h2 className="text-lg font-semibold text-amber-400 mb-3">
            FORDAC Connect
          </h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            <span className="font-semibold">
              Les Forces Démocratiques pour l’Action et le Changement
            </span>{" "}
            œuvrent pour une société plus juste, plus solidaire et tournée vers
            l’avenir. <br />
            Rejoignez le mouvement et participez à la construction d’un
            Cameroun meilleur.
          </p>
        </div>

        {/* ===================== Colonne 2 : Navigation ===================== */}
        <div>
          <h2 className="text-lg font-semibold text-amber-400 mb-3">
            Navigation
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-amber-400 transition">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/le-parti" className="hover:text-amber-400 transition">
                Le Parti
              </Link>
            </li>
            <li>
              <Link href="/president" className="hover:text-amber-400 transition">
                Le Président
              </Link>
            </li>
            <li>
              <Link href="/organes" className="hover:text-amber-400 transition">
                Les Organes
              </Link>
            </li>
            <li>
              <Link href="/forum" className="hover:text-amber-400 transition">
                Forum des Militants
              </Link>
            </li>
          </ul>
        </div>

        {/* ===================== Colonne 3 : Liens utiles ===================== */}
        <div>
          <h2 className="text-lg font-semibold text-amber-400 mb-3">
            Liens utiles
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact" className="hover:text-amber-400 transition">
                Nous Contacter
              </Link>
            </li>
            <li>
              <Link
                href="/politique-de-confidentialite"
                className="hover:text-amber-400 transition"
              >
                Politique de Confidentialité
              </Link>
            </li>
            <li>
              <Link
                href="/mentions-legales"
                className="hover:text-amber-400 transition"
              >
                Mentions Légales
              </Link>
            </li>
            <li>
              <Link
                href="/superadmin"
                className="hover:text-amber-400 transition"
              >
                Connexion Super Admin
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:text-amber-400 transition">
                Connexion Admins
              </Link>
            </li>
          </ul>
        </div>

        {/* ===================== Colonne 4 : Contact ===================== */}
        <div>
          <h2 className="text-lg font-semibold text-amber-400 mb-3">
            Contact
          </h2>
          <ul className="text-sm text-gray-200 space-y-3">
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <span>contact@fordac-connect.org</span>
            </li>
            <li className="flex items-center space-x-4">
              <a
                href="#"
                className="hover:text-amber-400 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="hover:text-amber-400 transition"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="hover:text-amber-400 transition"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ===================== Ligne inférieure ===================== */}
      <div className="border-t border-emerald-700 mt-10 pt-6 text-center text-sm text-gray-300">
        <p>© 2025 FORDAC Connect — Tous droits réservés.</p>
        <p className="text-xs mt-2 text-gray-400">
          Une initiative citoyenne portée par les Forces Démocratiques pour
          l’Action et le Changement.
        </p>
      </div>
    </footer>
  );
}
