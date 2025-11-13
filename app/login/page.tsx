"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tentative de connexion :", { email, password });
    // 👉 Intégration API de connexion ici (future connexion au backend)
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      {/* ===============================
           🟩 En-tête
         =============================== */}
      <section className="bg-gradient-to-b from-fordacGreen to-fordacDark text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Connexion à l’Espace Militant
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-gray-100"
        >
          Accédez à votre espace personnel pour suivre vos activités,
          participer aux débats et rester informé des actions du FORDAC.
        </motion.p>
      </section>

      {/* ===============================
           🔐 Formulaire de connexion
         =============================== */}
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center text-fordacGreen mb-8">
            Se connecter
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Adresse e-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fordacGold"
                placeholder="exemple@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fordacGold"
                placeholder="********"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-fordacGold text-fordacDark font-semibold py-3 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Connexion
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-6">
            Vous n’avez pas encore de compte ?{" "}
            <Link
              href="/adhesion"
              className="text-fordacGold hover:underline font-semibold"
            >
              Créez votre compte
            </Link>
          </p>
        </motion.div>
      </main>
    </div>
  );
}
