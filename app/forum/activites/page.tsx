"use client";

import { motion } from "framer-motion";

export default function ActivitesPage() {
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
            Activités du Parti
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Découvrez les actions, événements et initiatives menées par le FORDAC.
          </p>
        </motion.div>

        {/* Exemple de section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold text-fordacGreen mb-2">
            Rencontre régionale des sections du Littoral
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Un rassemblement des responsables régionaux pour planifier les actions du trimestre.
          </p>
          <span className="text-sm text-fordacGold">Publié le 12 novembre 2025</span>
        </div>

        {/* Placeholder pour l’avenir */}
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8 italic">
          Les nouvelles activités du parti seront publiées ici prochainement.
        </p>
      </section>
    </main>
  );
}
