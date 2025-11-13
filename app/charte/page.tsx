"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Download } from "lucide-react";

export default function CharteMutuelle() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-24 px-6 md:px-10 pb-20">
      {/* Titre principal */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-fordacGreen"
      >
        Charte de la Mutuelle du FORDAC
      </motion.h1>

      {/* Introduction */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto text-center text-lg mb-10 leading-relaxed"
      >
        La Mutuelle du FORDAC vise à renforcer la solidarité entre ses membres
        par des actions sociales, économiques et éducatives.  
        Avant toute adhésion, chaque militant est invité à lire attentivement la
        présente charte et à choisir le niveau d’engagement qui lui correspond.
      </motion.p>

      {/* Bouton de téléchargement */}
      <div className="text-center mb-12">
        <Link
          href="/documents/charte-mutuelle.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-fordacGreen text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-fordacDark transition-colors duration-300"
        >
          <Download size={20} />
          Télécharger la Charte
        </Link>
      </div>

      {/* Intégration PDF */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 mb-16"
      >
        <iframe
          src="/documents/charte-mutuelle.pdf"
          className="w-full h-[700px] md:h-[900px]"
          title="Charte de la Mutuelle FORDAC"
        />
      </motion.div>

      {/* Niveaux d’adhésion */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {/* Bronze */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 border-t-4 border-amber-500"
        >
          <FileText className="w-10 h-10 mx-auto text-amber-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-amber-600">Niveau Bronze</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Contribue activement aux activités locales du FORDAC.  
            Bénéficie de l’accès aux formations et actions sociales de proximité.
          </p>
        </motion.div>

        {/* Argent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 border-t-4 border-gray-400"
        >
          <FileText className="w-10 h-10 mx-auto text-gray-400 mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-gray-500">Niveau Argent</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Participe aux projets régionaux, à la coordination des cellules et
            aux initiatives de développement communautaire.
          </p>
        </motion.div>

        {/* Or */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 border-t-4 border-yellow-400"
        >
          <FileText className="w-10 h-10 mx-auto text-yellow-400 mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-yellow-500">Niveau Or</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Joue un rôle clé dans la structuration du mouvement au niveau
            national et international.  
            Accès prioritaire aux programmes de leadership et aux missions.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
