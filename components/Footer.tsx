"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Youtube, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-primary dark:bg-[#0b1a0b] text-light dark:text-gray-300 py-12 mt-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        {/* 🟩 Colonne 1 : Logo et message */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image
            src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
            alt="FORDAC Connect"
            width={160}
            height={40}
            priority
            className="transition-opacity duration-500"
          />
          <p className="text-sm leading-relaxed max-w-xs">
            <span className="font-semibold">FORDAC Connect</span> — plateforme
            citoyenne pour promouvoir la démocratie participative, la
            transparence et l’action collective au service du développement.
          </p>
        </div>

        {/* 📄 Colonne 2 : Liens institutionnels */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-sm">
          <h3 className="text-secondary text-lg font-semibold mb-2">
            Liens utiles
          </h3>
          <Link href="/adherer" className="hover:text-secondary transition">
            Adhérer au FORDAC
          </Link>
          <Link href="/contact" className="hover:text-secondary transition">
            Nous contacter
          </Link>
          <Link href="/mentions-legales" className="hover:text-secondary transition">
            Mentions légales
          </Link>
          <Link
            href="/politique-de-confidentialite"
            className="hover:text-secondary transition"
          >
            Politique de confidentialité
          </Link>
        </div>

        {/* 🌍 Colonne 3 : Réseaux sociaux */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-secondary text-lg font-semibold mb-3">
            Suivez-nous
          </h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-secondary transition"
            >
              <Facebook size={22} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter / X"
              className="hover:text-secondary transition"
            >
              <Twitter size={22} />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              aria-label="YouTube"
              className="hover:text-secondary transition"
            >
              <Youtube size={22} />
            </Link>
            <Link
              href="https://wa.me/237620000000"
              target="_blank"
              aria-label="WhatsApp"
              className="hover:text-secondary transition"
            >
              <MessageCircle size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-secondary/40 mt-10 pt-6 text-center text-xs text-light/80 dark:text-gray-400">
        © {new Date().getFullYear()} FORDAC Connect — Tous droits réservés.
      </div>
    </footer>
  );
}
