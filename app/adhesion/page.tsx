"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { communes, chartes } from "@/moungoData";

export default function AdhesionPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    arrondissement: "",
    niveau: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de soumission API
    setTimeout(() => setSubmitted(true), 1200);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-center flex flex-col justify-center items-center text-gray-900 dark:text-gray-100 p-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-fordacGreen mb-4"
        >
          Demande d’adhésion envoyée avec succès 🎉
        </motion.h1>
        <p className="max-w-xl text-gray-700 dark:text-gray-300 mb-8">
          Votre demande a bien été transmise à la coordination du FORDAC dans le Mungo.
          Vous serez bientôt contacté pour la validation officielle.
        </p>
        <Link
          href="/"
          className="bg-fordacGreen text-white px-6 py-3 rounded-lg font-semibold hover:bg-fordacDark transition"
        >
          Retour à l’accueil
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-24 px-6 pb-16">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-6 text-fordacGreen"
      >
        Formulaire d’adhésion au FORDAC
      </motion.h1>

      <p className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
        Le FORDAC, sous la direction du Président national, œuvre à renforcer la démocratie,
        la justice sociale et le développement dans le Mungo et au-delà.  
        Remplissez ce formulaire pour rejoindre le Parti selon votre niveau d’engagement.
      </p>

      {/* Lien vers la charte */}
      <div className="text-center mb-10">
        <Link
          href="/charte"
          className="inline-block bg-fordacGreen text-white px-6 py-3 rounded-lg font-semibold hover:bg-fordacDark transition"
        >
          Consulter la charte de la mutuelle
        </Link>
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 border border-gray-200 dark:border-gray-700"
      >
        <div>
          <label className="block text-sm font-semibold mb-2">Nom complet</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Téléphone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Adresse e-mail</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
          />
        </div>

        {/* Sélection dynamique depuis moungoData */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Arrondissement (département du Mungo)
          </label>
          <select
            name="arrondissement"
            required
            value={formData.arrondissement}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
          >
            <option value="">-- Sélectionnez un arrondissement --</option>
            {moungoData.map((arr) => (
              <option key={arr.id} value={arr.name}>
                {arr.name}
              </option>
            ))}
          </select>
        </div>

        {/* Niveau d’adhésion */}
        <div>
          <label className="block text-sm font-semibold mb-2">Niveau d’adhésion</label>
          <select
            name="niveau"
            required
            value={formData.niveau}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
          >
            <option value="">-- Choisissez votre niveau --</option>
            <option value="Bronze">Bronze — Actions locales, formation et solidarité</option>
            <option value="Argent">Argent — Coordination régionale et projets collectifs</option>
            <option value="Or">Or — Leadership, initiatives nationales et internationales</option>
          </select>
        </div>

        {/* Bouton de soumission */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="bg-fordacGreen text-white px-8 py-3 rounded-lg font-semibold hover:bg-fordacDark transition"
          >
            Envoyer ma demande d’adhésion
          </button>
        </div>
      </form>
    </main>
  );
}
