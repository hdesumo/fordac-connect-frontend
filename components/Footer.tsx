"use client";
import React from "react";
import Link from "next/link";
import { Mail, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-fordacDark text-white py-12 mt-12 border-t border-fordacGreen/40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Bloc 1 */}
        <div>
          <h3 className="text-xl font-semibold text-fordacGold mb-4">
            FORDAC Connect
          </h3>
          <p className="text-sm leading-relaxed text-gray-100">
            <strong>Les Forces Démocratiques pour l’Action et le Changement</strong> œuvrent pour une société plus juste, solidaire et tournée vers l’avenir.  
            <br />
            Rejoignez le mouvement et participez à la construction d’un Cameroun meilleur.
          </p>
        </div>

        {/* Bloc 2 */}
        <div>
          <h4 className="font-semibold text-fordacGold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-fordacGold">Accueil</Link></li>
            <li><Link href="/le-parti" className="hover:text-fordacGold">Le Parti</Link></li>
            <li><Link href="/forum" className="hover:text-fordacGold">Forum des Militants</Link></li>
            <li><Link href="/adhesion" className="hover:text-fordacGold">Adhésion</Link></li>
            <li><Link href="/login" className="hover:text-fordacGold">Connexion</Link></li>
          </ul>
        </div>

        {/* Bloc 3 */}
        <div>
          <h4 className="font-semibold text-fordacGold mb-3">Liens utiles</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-fordacGold">Nous Contacter</Link></li>
            <li><Link href="/politique-de-confidentialite" className="hover:text-fordacGold">Politique de Confidentialité</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-fordacGold">Mentions Légales</Link></li>
            <li><Link href="/superadmin" className="hover:text-fordacGold">Connexion Super Admin</Link></li>
            <li><Link href="/admin" className="hover:text-fordacGold">Connexion Admins</Link></li>
          </ul>
        </div>

        {/* Bloc 4 */}
        <div>
          <h4 className="font-semibold text-fordacGold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> contact@fordac-connect.org
            </li>
            <li className="flex gap-3 mt-3">
              <Facebook className="hover:text-fordacGold cursor-pointer" size={18} />
              <Twitter className="hover:text-fordacGold cursor-pointer" size={18} />
              <Youtube className="hover:text-fordacGold cursor-pointer" size={18} />
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-300 border-t border-gray-600/40 pt-4">
        <p>© 2025 FORDAC Connect — Tous droits réservés.</p>
        <p className="mt-1 text-gray-400">
          Une initiative citoyenne portée par les Forces Démocratiques pour l’Action et le Changement.
        </p>
      </div>
    </footer>
  );
}
