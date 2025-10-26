"use client";
import { motion } from "framer-motion";

export default function MarqueeBanner() {
  const slogans = [
    "Démocratie",
    "Transparence",
    "Progrès",
    "Action citoyenne",
    "Engagement collectif",
    "Innovation politique",
    "Solidarité nationale"
  ];

  return (
    <div className="bg-primary text-light overflow-hidden py-4 shadow-inner border-t-2 border-secondary">
      <motion.div
        className="flex space-x-12 text-lg font-semibold uppercase tracking-wide whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
      >
        {slogans.concat(slogans).map((text, i) => (
          <span key={i} className="text-secondary">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
