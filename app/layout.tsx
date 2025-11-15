import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: "FORDAC Connect",
  description: "Plateforme officielle du FORDAC",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      {/* ⚠️ SUPPRESSION DE bg-white QUI ÉCRASAIT TOUT */}
      <body className="min-h-screen bg-[var(--fordac-bg)] text-[var(--fordac-text)]">

        {/* HEADER / TOPBAR */}
        <header className="w-full bg-fordacDark text-white shadow-sm">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

            {/* LOGO */}
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt=""
                className="h-10 w-auto"
              />
              <span className="text-xl font-semibold"></span>
            </Link>

            {/* MENU */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-fordacGold">Accueil</Link>
              <Link href="/le-parti" className="hover:text-fordacGold">Le Parti</Link>
              <Link href="/president" className="hover:text-fordacGold">Le Président</Link>
              <Link href="/organes" className="hover:text-fordacGold">Les Organes</Link>

              <div className="relative group">
                <span className="cursor-pointer hover:text-fordacGold">Galerie ▾</span>
                <div className="absolute hidden group-hover:block bg-white text-black shadow-lg py-2 w-40">
                  <Link href="/galerie/photos" className="block px-4 py-2 hover:bg-gray-200">Photos</Link>
                  <Link href="/galerie/videos" className="block px-4 py-2 hover:bg-gray-200">Vidéos</Link>
                </div>
              </div>

              <Link href="/forum" className="hover:text-fordacGold">Forum des Militants</Link>
            </div>

            {/* BOUTONS DROITE */}
            <div className="flex items-center space-x-4">
              <Link
                href="/adhesion"
                className="bg-fordacGold text-fordacDark px-4 py-2 rounded-md font-medium hover:bg-yellow-400"
              >
                👤 Adhésion
              </Link>

              <Link
                href="/login"
                className="border border-fordacGold text-fordacGold px-4 py-2 rounded-md font-medium hover:bg-fordacGold hover:text-fordacDark"
              >
                🔐 Connexion
              </Link>
            </div>
          </nav>
        </header>

        {/* CONTENU */}
        <main className="min-h-screen w-full pt-10 pb-20">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-fordacDark text-gray-200 py-12 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">

            <div>
              <h4 className="text-lg font-semibold mb-4">FORDAC Connect</h4>
              <p>
                Les Forces Démocratiques pour l’Action et le Changement œuvrent
                pour une société plus juste et tournée vers l’avenir.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/le-parti">Le Parti</Link></li>
                <li><Link href="/forum">Forum des Militants</Link></li>
                <li><Link href="/adhesion">Adhésion</Link></li>
                <li><Link href="/connexion">Connexion</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Liens utiles</h4>
              <ul className="space-y-2">
                <li><Link href="/contact">Nous Contacter</Link></li>
                <li><Link href="/mentions-legales">Mentions Légales</Link></li>
                <li><Link href="/connexion-superadmin">Connexion Super Admin</Link></li>
                <li><Link href="/connexion-admins">Connexion Admins</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p>📧 contact@fordac-connect.org</p>
            </div>
          </div>

          <div className="text-center mt-10 text-sm text-gray-400">
            © 2025 FORDAC Connect — Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  );
}
