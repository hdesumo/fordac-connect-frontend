"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AdhesionPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    region: "",
    arrondissement: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données soumises :", formData);
    // 🔒 TODO : intégrer appel API POST /adhesion
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      {/* ===============================
           🟢 En-tête
         =============================== */}
      <section className="bg-gradient-to-b from-fordacGreen to-fordacDark text-white py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Adhésion au FORDAC
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-gray-100"
        >
          Rejoignez les Forces Démocratiques pour l’Action et le Changement.
          Ensemble, bâtissons un Cameroun plus juste, solidaire et prospère.
        </motion.p>
      </section>

      {/* ===============================
           🧾 Formulaire d'adhésion
         =============================== */}
      <main className="flex-grow flex items-center justify-center py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-2xl"
        >
          <h2 className="text-2xl font-bold text-center text-fordacGreen mb-8">
            Formulaire d’adhésion
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:ring-2 focus:ring-fordacGold"
                placeholder="Entrez votre nom complet"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Adresse e-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:ring-2 focus:ring-fordacGold"
                placeholder="exemple@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:ring-2 focus:ring-fordacGold"
                placeholder="+237 6xx xxx xxx"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Région
              </label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:ring-2 focus:ring-fordacGold"
              >
                <option value="">Sélectionnez une région</option>
                <option value="Centre">Centre</option>
                <option value="Littoral">Littoral</option>
                <option value="Nord">Nord</option>
                <option value="Sud">Sud</option>
                <option value="Ouest">Ouest</option>
                <option value="Est">Est</option>
                <option value="Adamaoua">Adamaoua</option>
                <option value="Extrême-Nord">Extrême-Nord</option>
                <option value="Nord-Ouest">Nord-Ouest</option>
                <option value="Sud-Ouest">Sud-Ouest</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Arrondissement
              </label>
              <input
                type="text"
                name="arrondissement"
                value={formData.arrondissement}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:ring-2 focus:ring-fordacGold"
                placeholder="Votre arrondissement"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:ring-2 focus:ring-fordacGold"
                placeholder="********"
              />
            </div>

            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-fordacGold text-fordacDark font-semibold px-10 py-3 rounded-md hover:bg-yellow-400 transition-colors"
              >
                Soumettre ma demande
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-8">
            Déjà membre ?{" "}
            <a href="/login" className="text-fordacGold hover:underline font-semibold">
              Connectez-vous ici
            </a>
          </p>
        </motion.div>
      </main>
    </div>
  );
}
