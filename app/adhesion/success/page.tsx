"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AdhesionSuccessPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl text-center max-w-lg"
      >
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Demande d’adhésion envoyée avec succès 🎉
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Merci d’avoir rejoint le FORDAC. Votre demande a été transmise à la coordination du
          Moungo. Vous serez contacté(e) prochainement.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105"
        >
          Retour à l’accueil
        </Link>
      </motion.div>
    </main>
  );
}
