"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Agenda from "@/components/Agenda";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      {/* 🟩 Section Hero */}
      <HeroSection />

      {/* 🟩 Section principale : Président + Agenda */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pt-16 md:pt-24">
        {/* Colonne gauche : Président */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-green-700 shadow-lg">
            <Image
              src="/president.png"
              alt="Romaric Yebchue Semenou"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400">
              Romaric Yebchue Semenou
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Président national du FORDAC
            </p>
          </div>

          <blockquote className="border-l-4 border-green-600 dark:border-green-400 pl-4 italic text-gray-700 dark:text-gray-200 text-base leading-relaxed">
            “Notre engagement est celui d’une génération qui choisit l’action,
            la dignité et la responsabilité pour construire un Cameroun juste
            et uni.”
          </blockquote>
        </div>

        {/* Colonne centrale : Message ou visuel institutionnel */}
        <div className="md:col-span-1 flex flex-col justify-center items-center text-center space-y-6">
          <img
            src="/hero/hero2.jpeg"
            alt="FORDAC actions citoyennes"
            className="rounded-2xl shadow-lg w-full max-w-md border border-green-100 dark:border-green-800"
          />
          <p className="text-gray-700 dark:text-gray-300 text-base px-4 leading-relaxed">
            Le FORDAC agit pour une société fondée sur l’équité, le travail et
            la justice sociale, au service de toutes les communautés.
          </p>
        </div>

        {/* Colonne droite : Agenda dynamique */}
        <div className="md:col-span-1">
          <Agenda />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-400 mt-16 border-t border-gray-200 dark:border-gray-800">
        © {new Date().getFullYear()} FORDAC Connect — Mouvement Citoyen pour un Cameroun Juste et Responsable.
      </footer>
    </main>
  );
}
