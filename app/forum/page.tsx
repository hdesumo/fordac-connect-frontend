"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Lock } from "lucide-react";

export default function ForumIntro() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-24 px-6 pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <Users className="w-16 h-16 mx-auto text-fordacGreen mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-fordacGreen mb-4">
          Forum des Militants du FORDAC
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          Le <strong>Forum des Militants</strong> est un espace d’échanges réservé aux membres du Parti.
          Il permet à chaque adhérent de partager ses idées, de débattre des orientations et de
          contribuer à l’action collective du FORDAC sous la direction du Président national.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-10">
          L’accès est limité aux militants disposant d’un compte actif.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-fordacGreen text-white px-6 py-3 rounded-lg font-semibold hover:bg-fordacDark transition"
          >
            <Lock size={20} />
            Se connecter au forum
          </Link>

          <Link
            href="/adhesion"
            className="inline-flex items-center gap-2 border border-fordacGreen text-fordacGreen px-6 py-3 rounded-lg font-semibold hover:bg-fordacGreen hover:text-white transition"
          >
            Rejoindre le FORDAC
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
