"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MessageSquare, Users, Lock } from "lucide-react";

export default function ForumPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // 🔐 Vérification de la session utilisateur
  useEffect(() => {
    const token = localStorage.getItem("fordac_token");
    if (!token) {
      setIsAuthenticated(false);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-300 animate-pulse">
          Vérification de votre session...
        </p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-6">
        <Lock className="text-fordacGold w-12 h-12 mb-4" />
        <h1 className="text-2xl font-semibold text-fordacGreen mb-2">
          Accès restreint
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Vous devez être connecté pour accéder au forum des militants.  
          Redirection en cours vers la page de connexion...
        </p>
      </div>
    );
  }

  // ✅ Page forum (après connexion)
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-6">
      <section className="max-w-6xl mx-auto">
        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-fordacGreen mb-4">
            Forum des Militants
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Espace d’échanges, de débats et de partage d’idées entre membres du FORDAC.
          </p>
        </motion.div>

        {/* Catégories principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bloc 1 : Actualité politique */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <MessageSquare className="w-10 h-10 text-fordacGold mb-4" />
            <h2 className="text-xl font-semibold text-fordacGreen mb-2">
              Actualités et Débats
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Partagez vos analyses sur la vie politique nationale et les actions du parti.
            </p>
            <button
              onClick={() => router.push("/forum/actualites")}
              className="bg-fordacGold text-fordacDark font-medium px-4 py-2 rounded-md hover:bg-yellow-400 transition"
            >
              Accéder à la section
            </button>
          </motion.div>

          {/* Bloc 2 : Vie du parti */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <Users className="w-10 h-10 text-fordacGold mb-4" />
            <h2 className="text-xl font-semibold text-fordacGreen mb-2">
              Vie du Parti
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Échanges entre militants, initiatives locales et activités régionales du FORDAC.
            </p>
            <button
              onClick={() => router.push("/forum/vie-du-parti")}
              className="bg-fordacGold text-fordacDark font-medium px-4 py-2 rounded-md hover:bg-yellow-400 transition"
            >
              Rejoindre la discussion
            </button>
          </motion.div>

          {/* Bloc 3 : Propositions et Idées */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <MessageSquare className="w-10 h-10 text-fordacGold mb-4" />
            <h2 className="text-xl font-semibold text-fordacGreen mb-2">
              Propositions citoyennes
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Exprimez vos idées pour faire avancer le parti et contribuer à son programme.
            </p>
            <button
              onClick={() => router.push("/forum/idees")}
              className="bg-fordacGold text-fordacDark font-medium px-4 py-2 rounded-md hover:bg-yellow-400 transition"
            >
              Partager une idée
            </button>
          </motion.div>
        </div>

        {/* Message de clôture */}
        <p className="text-center text-gray-500 dark:text-gray-400 mt-12 text-sm">
          Cet espace est réservé exclusivement aux militants authentifiés du FORDAC.  
          Toute publication doit respecter les valeurs du parti.
        </p>
      </section>
    </main>
  );
}
