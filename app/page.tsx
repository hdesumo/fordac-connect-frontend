"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
          Forces Démocratiques pour l’Action et le Changement — un parti au
          service du peuple, de la justice et du progrès.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Link
            href="/adhesion"
            className="inline-block bg-white text-fordacGreen font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300"
          >
            Adhérez maintenant
          </Link>

          <Link
            href="/charte"
            className="inline-block bg-transparent border border-white px-6 py-3 rounded-lg text-white font-semibold hover:bg-white hover:text-fordacGreen transition-colors duration-300"
          >
            Lire la charte de la mutuelle
          </Link>
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
              Président national du FORDAC
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Le FORDAC incarne la volonté d’unir les citoyens autour des
              valeurs de démocratie, d’équité et de développement durable.
              Sous la direction de Romaric Yebchue Semenou, le mouvement défend
              une vision claire : celle d’un avenir fondé sur la
              solidarité et le progrès partagé.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===============================
          🖼️ Trois Sections Illustrées
        =============================== */}
      <section id="activites" className="bg-white dark:bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">
          {/* Bloc 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl shadow-lg overflow-hidden bg-gray-50 dark:bg-gray-900"
          >
            <Image
              src="/images/hero1.jpeg"
              alt="Engagement citoyen"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-fordacGreen mb-2">
                Engagement citoyen
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Les militants du FORDAC s’investissent dans des actions
                solidaires, éducatives et communautaires au service du
                développement local.
              </p>
            </div>
          </motion.div>

          {/* Bloc 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl shadow-lg overflow-hidden bg-gray-50 dark:bg-gray-900"
          >
            <Image
              src="/images/hero2.jpeg"
              alt="Innovation et jeunesse"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-fordacGreen mb-2">
                Innovation et jeunesse
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                La jeunesse est au cœur du projet FORDAC, porteuse d’idées et
                de solutions pour un avenir équitable et numérique.
              </p>
            </div>
          </motion.div>

          {/* Bloc 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl shadow-lg overflow-hidden bg-gray-50 dark:bg-gray-900"
          >
            <Image
              src="/images/hero3.jpeg"
              alt="Solidarité et action"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-fordacGreen mb-2">
                Solidarité et action
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Une dynamique collective fondée sur la solidarité 
                et le progrès social au service du peuple.
              </p>
            </div>
          </motion.div>
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
          Rejoignez le FORDAC
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Ensemble, nous pouvons transformer nos idées en actions concrètes.
          Adhérez dès aujourd’hui et participez activement à la construction
          d’une société plus juste.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/adhesion"
            className="inline-block bg-white text-fordacGreen font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300"
          >
            Formulaire d’adhésion
          </Link>
          <Link
            href="/charte"
            className="inline-block bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-fordacGreen transition-colors duration-300"
          >
            Lire la charte de la mutuelle
          </Link>
        </div>
      </section>
    </div>
  );
}
