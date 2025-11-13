"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Forum() {
  const topics = [
    {
      id: 1,
      title: "Quelle place pour la jeunesse dans la gouvernance du Cameroun ?",
      author: "Marie T.",
      date: "12 novembre 2025",
      comments: 24,
    },
    {
      id: 2,
      title: "Comment renforcer la solidarité entre les militants dans les régions ?",
      author: "Alain D.",
      date: "10 novembre 2025",
      comments: 15,
    },
    {
      id: 3,
      title: "FORDAC et le développement local : quelles priorités ?",
      author: "Nadine K.",
      date: "9 novembre 2025",
      comments: 32,
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* ===============================
           🗣️ En-tête du Forum
         =============================== */}
      <section className="relative bg-gradient-to-b from-fordacGreen to-fordacDark text-white py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Forum des Militants
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-100"
        >
          Un espace d’échanges, d’idées et d’engagement pour tous les membres
          du FORDAC. Partagez vos opinions, vos propositions et vos initiatives.
        </motion.p>
      </section>

      {/* ===============================
           💬 Liste des sujets
         =============================== */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-fordacGreen mb-12 text-center"
        >
          Discussions récentes
        </motion.h2>

        <div className="space-y-6">
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-fordacGold mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Par <span className="font-medium">{topic.author}</span> •{" "}
                  {topic.date}
                </p>
              </div>
              <span className="mt-3 sm:mt-0 text-gray-500 text-sm">
                💬 {topic.comments} commentaires
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-fordacGold text-fordacDark font-semibold px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors">
            Voir plus de discussions
          </button>
        </div>
      </section>

      {/* ===============================
           🤝 Connexion / Inscription
         =============================== */}
      <section className="py-20 bg-fordacGreen text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Participez au débat !
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-100">
          Pour publier un sujet ou commenter, connectez-vous à votre espace
          militant ou créez un compte dès maintenant.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="bg-white text-fordacGreen font-semibold px-8 py-3 rounded-md shadow hover:bg-gray-100 transition-colors duration-300"
          >
            Se connecter
          </Link>
          <Link
            href="/adhesion"
            className="border border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-fordacGreen transition-colors duration-300"
          >
            Créer un compte
          </Link>
        </div>
      </section>

      {/* ===============================
           🧩 Section visuelle
         =============================== */}
      <section className="py-16 bg-white dark:bg-gray-800 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-fordacGreen mb-8"
        >
          Un espace d’unité et d’expression libre
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {["forum1", "forum2", "forum3"].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={`/images/forum/${img}.jpg`}
                alt={`Forum ${i + 1}`}
                width={400}
                height={250}
                className="object-cover w-full h-64"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
