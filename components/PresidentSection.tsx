"use client";
import { motion } from "framer-motion";

export default function PresidentSection() {
  return (
    <section className="relative bg-neutral py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Colonne gauche : Photo + texte */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 blur-xl bg-green-500/40 rounded-full w-64 h-64 md:w-72 md:h-72"></div>
            <img
              src="/president.jpg"
              alt="Romaric Yebchue Semenou"
              className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-primary shadow-lg z-10"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary mb-3">
            Mot du Président national
          </h2>
          <p className="text-dark leading-relaxed max-w-md">
            Le FORDAC, c’est avant tout une vision partagée : bâtir une société
            plus juste, plus unie et plus participative. Ensemble, nous faisons
            le pari de l’action concrète, de la transparence et de la
            responsabilité citoyenne.
          </p>
          <div className="mt-6 text-primary text-center md:text-left">
            <p className="font-semibold text-lg">Romaric Yebchue Semenou</p>
            <p className="text-sm text-dark/80 font-medium">
              Président national
            </p>
          </div>
        </motion.div>

        {/* Colonne droite : Image institutionnelle */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/hero/hero1.jpg"
            alt="FORDAC Connect"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-primary/70"></div>

          {/* Citation en haut à droite */}
          <motion.blockquote
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute top-6 right-6 bg-primary/90 text-white p-5 rounded-xl max-w-sm text-sm italic shadow-lg border-l-4 border-secondary"
          >
            « La technologie n’a de sens que lorsqu’elle sert la démocratie,
            renforce la transparence et rapproche le citoyen de l’action publique. »
            <br />
            <span className="block mt-3 text-right font-semibold text-secondary">
              — Romaric Yebchue Semenou
            </span>
            <span className="block text-right text-xs text-white/80">
              Président national
            </span>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
