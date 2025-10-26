"use client";

import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/lib/api";
import Link from "next/link";
import { moungoData } from "@/data/moungoData";

export default function AdhererPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membership_level: "Bronze",
    secteur: "",
    departement: "Moungo",
    arrondissement: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ Typage explicite de l’événement pour éviter l’erreur TypeScript
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(`${API_BASE_URL}/api/members`, formData);
      if (res.status === 201) {
        setSuccess(true);
      }
    } catch (err: any) {
      setError("Erreur lors de l’envoi du formulaire. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-6">
        <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">
          🎉 Adhésion enregistrée !
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md">
          Merci pour votre confiance. Votre demande d’adhésion au FORDAC est
          actuellement en cours de validation. Vous recevrez un e-mail de
          confirmation dès qu’elle sera approuvée.
        </p>
        <Link
          href="/"
          className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
        >
          Retour à l’accueil
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-8">
          Adhérer au FORDAC
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* --- Informations personnelles --- */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Adresse e-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Téléphone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* --- Niveau d’adhésion --- */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Niveau d’adhésion
            </label>
            <select
              name="membership_level"
              value={formData.membership_level}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            >
              <option value="Bronze">Bronze</option>
              <option value="Argent">Argent</option>
              <option value="Or">Or</option>
            </select>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Chaque niveau d’adhésion correspond à une catégorie de
              contribution et de couverture de la mutuelle.  
              📜{" "}
              <Link
                href="/documents/charte-mutuelle.pdf"
                target="_blank"
                className="text-green-700 hover:underline"
              >
                Consulter la Charte du FORDAC
              </Link>
            </p>
          </div>

          {/* --- Localisation (Moungo uniquement) --- */}
          <div className="space-y-5">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Département
              </label>
              <input
                type="text"
                value="Moungo"
                readOnly
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Secteur du Moungo
              </label>
              <select
                name="secteur"
                value={formData.secteur}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="">Sélectionner</option>
                <option value="Moungo Nord">Moungo Nord</option>
                <option value="Moungo Sud">Moungo Sud</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Arrondissement
              </label>
              <select
                name="arrondissement"
                value={formData.arrondissement}
                onChange={handleChange}
                required
                disabled={!formData.secteur}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
              >
                <option value="">Sélectionner</option>
                {formData.secteur &&
                  moungoData[formData.secteur]?.map((arr) => (
                    <option key={arr} value={arr}>
                      {arr}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* --- Erreur éventuelle --- */}
          {error && (
            <p className="text-red-600 text-sm font-medium">{error}</p>
          )}

          {/* --- Bouton d’envoi --- */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            {loading ? "Envoi en cours..." : "Soumettre ma demande  d'adhésion"}
          </button>
        </form>
      </div>
    </section>
  );
}
