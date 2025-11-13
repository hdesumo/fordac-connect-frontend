"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-14 mt-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* =======================
            Colonne 1 : Logo + texte
        ======================= */}
        <div className="flex flex-col items-start">
          <img
            src="/images/logo.png"
            alt="Logo FORDAC"
            className="w-40 mb-4"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            Le FORDAC œuvre pour un avenir fondé sur la justice
            et le progrès partagé.  
            Ensemble, faisons vivre la force de l’action et du changement.
          </p>
        </div>

        {/* =======================
            Colonne 2 : Navigation
        ======================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-fordacGreen transition">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/parti" className="hover:text-fordacGreen transition">
                Le Parti
              </Link>
            </li>
            <li>
              <Link
                href="/activites"
                className="hover:text-fordacGreen transition"
              >
                Activités
              </Link>
            </li>
            <li>
              <Link href="/forum" className="hover:text-fordacGreen transition">
                Forum des Militants
              </Link>
            </li>
            <li>
              <Link
                href="/adhesion"
                className="hover:text-fordacGreen transition"
              >
                Adhésion
              </Link>
            </li>
          </ul>
        </div>

        {/* =======================
            Colonne 3 : Liens utiles
        ======================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Liens utiles</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/login"
                className="hover:text-fordacGreen transition"
              >
                Connexion Super Admin
              </Link>
            </li>
            <li>
              <Link
                href="/admin"
                className="hover:text-fordacGreen transition"
              >
                Connexion Admins
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-fordacGreen transition"
              >
                Nous Contacter
              </Link>
            </li>
          </ul>
        </div>

        {/* =======================
            Colonne 4 : Mentions
        ======================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Informations légales
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/mentions-legales"
                className="hover:text-fordacGreen transition"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/politique-de-confidentialite"
                className="hover:text-fordacGreen transition"
              >
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* =======================
          Bas de page
      ======================= */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FORDAC – Forces Démocratiques pour l’Action et le Changement.  
        Tous droits réservés.
      </div>
    </footer>
  );
}
