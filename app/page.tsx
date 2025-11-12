"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* ===============================
           🌟 Section Hero
         =============================== */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center bg-gradient-to-br from-fordacGreen to-fordacLight text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          FORDAC Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl"
        >
          Forces Démocratiques pour l’Action et le Changement — Un parti au
          service du peuple, de la justice et du progrès.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex gap-4"
        >
          <a href="#adhesion" className="btn-primary">
            Adhérez maintenant
          </a>
          <a href="#actualites" className="btn-secondary">
            Voir les actualités
          </a>
        </motion.div>
      </section>

      {/* ===============================
           👤 Section Président
         =============================== */}
      <section
        id="president"
        className="py-20 bg-gray-50 dark:bg-gray-900 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-title"
        >
          Le Président du FORDAC
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6"
        >
          <Image
            src="/images/president.png"
            alt="Président Romaric Yebchue Semenou"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-1 text-fordacGreen">
              Romaric Yebchue Semenou
            </h3>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
              Président du FORDAC
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Le FORDAC incarne la volonté d’unir les citoyens autour des
              valeurs de démocratie, d’équité et de développement durable.
              Sous la direction de Romaric Yebchue Semenou, le mouvement
              défend une vision claire : celle d’un avenir fondé sur la justice,
              la solidarité et le progrès partagé pour toutes les générations.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===============================
           🖼️ Galerie Média
         =============================== */}
      <section
        id="medias"
        className="py-20 bg-white dark:bg-gray-950 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-title"
        >
          Galerie d’images
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {["1", "2", "3", "4", "5", "6"].map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={`/images/gallery/${num}.jpg`}
                alt={`Galerie ${num}`}
                width={400}
                height={250}
                className="object-cover w-full h-64"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===============================
           🤝 Appel à l’adhésion
         =============================== */}
      <section
        id="adhesion"
        className="py-20 bg-fordacGreen text-white text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Rejoignez le mouvement FORDAC
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Ensemble, nous pouvons transformer nos idées en actions concrètes.
          Adhérez dès aujourd’hui et participez activement à la construction
          d’une société plus juste.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-fordacGreen font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300"
        >
          Formulaire d’adhésion
        </a>
      </section>
    </div>
  );
}
