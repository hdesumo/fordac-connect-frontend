"use client";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-secondary text-light text-xs md:text-sm font-semibold tracking-wide py-2 px-4 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left gap-1">
        <span className="uppercase">
          FORDAC Connect — La démocratie en mouvement
        </span>
        <span className="text-white/80 hidden md:block">
          #Participation #Transparence #Action
        </span>
      </div>
    </motion.div>
  );
}
