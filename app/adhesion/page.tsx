"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import "@/data/moungoData"; // assure-toi que ton fichier est dans /data/moungoData.ts

export default function AdhesionPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    arrondissement: "",
    niveau: "Bronze",
    charteAgree: false,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.charteAgree) {
      setMessage("⚠️ Vous devez accepter la charte avant de valider.");
      return;
    }
    localStorage.setItem("adhesion_form", JSON.stringify(formData));
    router.push("/adhesion/success");
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 text-gray-900 dark:text-gray-100">
      <section className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-green-700 dark:text-green-400 mb-10"
        >
          Adhésion au FORDAC – Section du Moungo
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire d’adhésion */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Nom complet</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border dark:bg-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Adresse e-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border dark:bg-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Téléphone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border dark:bg-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Arrondissement</label>
                <input
                  type="text"
                  name="arrondissement"
                  value={formData.arrondissement}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border dark:bg-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Niveau d’adhésion</label>
                <select
                  name="niveau"
                  value={formData.niveau}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border dark:bg-gray-900"
                >
                  <option value="Bronze">Bronze – 1 000 FCFA</option>
                  <option value="Argent">Argent – 3 000 FCFA</option>
                  <option value="Or">Or – 5 000 FCFA</option>
                </select>
              </div>

              <div className="flex items-start space-x-2 mt-4">
                <input
                  type="checkbox"
                  name="charteAgree"
                  checked={formData.charteAgree}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label className="text-sm">
                  J’ai lu et j’accepte les termes de la{" "}
                  <Link href="#charte" className="text-green-600 underline">
                    charte de la Mutuelle du Moungo
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg"
              >
                Envoyer ma demande d’adhésion
              </button>

              {message && (
                <p className="mt-4 text-center text-yellow-500 dark:text-yellow-300">
                  {message}
                </p>
              )}
            </div>
          </form>

          {/* Aperçu de la charte */}
          <div id="charte" className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Charte de la Mutuelle</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Consultez la charte complète avant d’adhérer. Elle définit les droits et devoirs
              des membres du FORDAC dans le Moungo.
            </p>
            <iframe
              src="/charte-mutuelle.pdf"
              title="Charte Mutuelle"
              className="w-full h-[600px] rounded-lg border border-gray-300"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
