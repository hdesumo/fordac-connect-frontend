// app/page.tsx
"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import PresidentSection from "@/components/PresidentSection";
import MediaGallery from "@/components/MediaGallery";
import Link from "next/link";

export default function HomePage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" as any },
    }),
  };

  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <HeroSection />

      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="relative z-10 px-6 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-green-800 dark:text-green-400">
            Forces Démocratiques pour l’Action et le Changement
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Le FORDAC est un parti politique né de la volonté de bâtir un Cameroun plus juste et
            participatif. Il incarne les valeurs de solidarité, de justice sociale et de développement
            équitable.
          </p>
          <Link
            href="/adhesion"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Adhérer au Parti
          </Link>
        </motion.div>
      </section>

      <PresidentSection />
      <MediaGallery />

      <section className="bg-green-700 text-white text-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ensemble, agissons pour le changement
          </h2>
          <p className="text-lg mb-8 text-green-50 leading-relaxed">
            Chaque adhésion, chaque initiative, chaque action compte.
            <br />
            Rejoignez le FORDAC et portons ensemble une nouvelle vision pour notre pays.
          </p>
          <Link
            href="/adhesion"
            className="inline-block bg-white text-green-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-100 transition-transform transform hover:scale-105"
          >
            Adhérer maintenant
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
