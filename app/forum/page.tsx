// app/forum/page.tsx
"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ForumPage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-4">
        <section className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-green-700 dark:text-green-400 mb-8"
          >
            Forum des militants
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-10 text-lg text-gray-700 dark:text-gray-300"
          >
            Cet espace est dédié aux échanges entre militants du FORDAC.
            Partagez vos idées, vos propositions et vos initiatives pour faire
            avancer le Parti.
          </motion.p>

          <Link
            href="/forum/espace"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Entrer dans le Forum
          </Link>
        </section>
      </main>
    </ProtectedRoute>
  );
}
