"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LeParti() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* ===============================
           🌿 Section Introduction
         =============================== */}
      <section className="relative bg-gradient-to-b from-fordacGreen to-fordacDark text-white py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Le Parti <span className="text-fordacGold">FORDAC</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-100"
        >
          Les Forces Démocratiques pour l’Action et le Changement portent une
          vision claire : construire un Cameroun nouveau, fondé sur la justice,
          la solidarité et le progrès partagé.
        </motion.p>
      </section>

      {/* ===============================
           💡 Vision et Mission
         =============================== */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-fordacGreen mb-12"
        >
          Notre Vision et Notre Mission
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-left"
          >
            <h3 className="text-xl font-semibold text-fordacGold mb-4">
              🌍 Vision
            </h3>
            <p className="leading-relaxed">
              Le FORDAC aspire à un Cameroun démocratique, juste et prospère,
              où chaque citoyen peut contribuer au développement du pays sans
              discrimination ni exclusion.  
              Notre vision repose sur un engagement collectif et une
              gouvernance participative.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-left"
          >
            <h3 className="text-xl font-semibold text-fordacGold mb-4">
              🎯 Mission
            </h3>
            <p className="leading-relaxed">
              La mission du FORDAC est de promouvoir l’action citoyenne et de
              proposer des alternatives politiques concrètes pour un
              développement durable, inclusif et solidaire.  
              Nous croyons à la force du collectif pour transformer la société.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===============================
           ⚖️ Nos Valeurs
         =============================== */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-fordacGreen mb-12"
        >
          Nos Valeurs Fondamentales
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Démocratie",
              text: "Chaque voix compte. Nous œuvrons pour un État de droit garantissant la participation et la liberté de tous.",
            },
            {
              title: "Solidarité",
              text: "La fraternité est notre boussole : personne ne doit être laissé de côté dans la construction nationale.",
            },
            {
              title: "Transparence",
              text: "La gestion publique doit être exemplaire, éthique et orientée vers le bien commun.",
            },
          ].map((valeur, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8"
            >
              <h3 className="text-xl font-semibold text-fordacGold mb-3">
                {valeur.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {valeur.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===============================
           👥 Organigramme
         =============================== */}
      <section className="py-20 text-center px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-fordacGreen mb-12"
        >
          Organisation du Parti
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Présidence",
              desc: "Dirige le mouvement et veille à la mise en œuvre de la vision politique du FORDAC.",
            },
            {
              title: "Secrétariat Général",
              desc: "Assure la coordination entre les différentes structures et la bonne exécution des décisions.",
            },
            {
              title: "Bureaux Régionaux",
              desc: "Représentent le parti sur l’ensemble du territoire et organisent les actions locales.",
            },
          ].map((org, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
            >
              <h3 className="text-xl font-semibold text-fordacGold mb-3">
                {org.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {org.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===============================
           ✊ Appel final
         =============================== */}
      <section className="py-16 bg-fordacGreen text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ensemble pour le Changement
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-100">
          Rejoignez un mouvement engagé, ancré dans les valeurs démocratiques,
          et prêt à relever les défis du Cameroun d’aujourd’hui et de demain.
        </p>
        <button className="bg-fordacGold text-fordacDark font-semibold px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors">
          Devenir Membre
        </button>
      </section>
    </div>
  );
}
