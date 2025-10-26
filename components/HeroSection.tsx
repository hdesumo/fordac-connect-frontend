"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-green-700 text-white py-24 md:py-32 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-green-700 via-green-800 to-green-900 opacity-95"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center md:text-left grid md:grid-cols-2 gap-10 items-center">
        {/* Texte principal */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            FORDAC Connect
          </h1>
          <p className="text-lg md:text-xl mb-8 text-green-100 max-w-lg">
            Le Mouvement Citoyen pour un Cameroun Juste et Responsable.  
            Ensemble, construisons l’avenir sur les valeurs d’action, de dignité et de solidarité.
          </p>
          <Link
            href="/adherer"
            className="inline-block bg-white text-green-800 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-green-100 transition-all duration-300"
          >
            Adhérer maintenant
          </Link>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="/hero/hero1.jpeg"
            alt="FORDAC illustration"
            className="rounded-2xl shadow-2xl w-full max-w-md border-4 border-white/30"
          />
        </motion.div>
      </div>
    </section>
  );
}
