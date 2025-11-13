"use client";

import { motion } from "framer-motion";

export default function IdeesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-6">
      <section className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-fordacGreen mb-4">
            Propositions et Idées
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Partagez vos suggestions pour faire avancer les initiatives et renforcer le programme du FORDAC.
          </p>
        </motion.div>

        {/* Exemple d’idée */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-fordacGreen mb-2">
            Programme de mentorat pour les jeunes militants
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Mettre en place un réseau de mentors pour accompagner la nouvelle génération de leaders.
          </p>
          <span className="text-sm text-fordacGold">Proposée par : Aminata D. — 10 novembre 2025</span>
        </div>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-8 italic">
          Vos propositions seront validées par l’administrateur avant publication.
        </p>
      </section>
    </main>
  );
}
