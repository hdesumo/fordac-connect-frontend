"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PresidentPage() {
  const quotes = [
    "Servir le peuple, c’est croire en sa force et agir pour son avenir.",
    "La justice n’est pas un idéal lointain, c’est une exigence quotidienne.",
    "Notre devoir est d’unir, non de diviser, pour construire un destin commun.",
    "L’action publique n’a de sens que si elle élève la dignité de chaque citoyen.",
    "Le changement véritable commence par le courage de dire la vérité et d’agir pour elle.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 6000); // changement toutes les 6 secondes
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <main className="bg-white text-gray-800">
      {/* --- Section 1 : Bannière --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/president.jpg"
          alt="Président du FORDAC"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            Président du FORDAC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl font-light italic"
          >
            “Unir, Agir, Transformer.”
          </motion.p>
        </div>
      </section>

      {/* --- Section 2 : Citations en carrousel --- */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1 }}
              className="bg-white shadow-xl rounded-2xl p-10 text-xl italic leading-relaxed border-t-4 border-green-700 relative"
            >
              <span className="text-green-700 text-5xl absolute -top-6 left-6 font-serif">“</span>
              {quotes[index]}
              <span className="text-green-700 text-5xl absolute -bottom-6 right-6 font-serif">”</span>
            </motion.blockquote>
          </AnimatePresence>

          {/* Indicateurs de progression */}
          <div className="flex justify-center mt-10 space-x-2">
            {quotes.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-8 rounded-full transition-all ${
                  i === index ? "bg-green-700 w-10" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3 : Signature --- */}
      <section className="text-center py-16 bg-green-800 text-white">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl font-semibold tracking-wide uppercase"
        >
          — Président du FORDAC
        </motion.p>
      </section>
    </main>
  );
}
