"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { moungoData } from "@/data/moungoData";

export default function AdhererPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zone: "",
    arrondissement: "",
    profession: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/adhesion`,
        formData
      );

      if (res.status === 201) {
        setSuccess(true);
      } else {
        setError(res.data?.message || "Erreur lors de l’envoi du formulaire.");
      }
    } catch (err) {
      console.error(err);
      setError("Erreur de connexion. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Message de confirmation (avec zone + arrondissement)
  if (success) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
        <div className="bg-green-100 dark:bg-green-900 border border-green-500 rounded-2xl p-8 max-w-lg text-center shadow-lg">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-3">
            Adhésion enregistrée avec succès !
          </h1>

          <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
            Merci pour votre engagement envers le{" "}
            <strong>FORDAC (Forces Démocratiques pour l’Action et le Changement)</strong>.
          </p>

          <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
            Votre adhésion a été enregistrée pour la zone{" "}
            <span className="font-semibold text-green-800 dark:text-green-400">
              {formData.zone}
            </span>{" "}
            — arrondissement de{" "}
            <span className="font-semibold text-green-800 dark:text-green-400">
              {formData.arrondissement}
            </span>.
            <br />
            Elle est actuellement{" "}
            <span className="font-semibold text-green-800 dark:text-green-400">
              en cours de validation
            </span>{" "}
            par les équipes locales du FORDAC.
          </p>

          <Link
            href="/"
            className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
          >
            Retour à l’accueil
          </Link>
        </div>
      </section>
    );
  }

  // ✅ Formulaire d’adhésion
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-8">
          Adhérer au FORDAC
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nom complet */}
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

          {/* Adresse email */}
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

          {/* Téléphone */}
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

          {/* Profession */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Profession
            </label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              placeholder="Ex : Enseignant, commerçant, artisan..."
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Zone (secteur Moungo Nord / Sud) */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Zone du Moungo
            </label>
            <select
              name="zone"
              value={formData.zone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            >
              <option value="">Sélectionner</option>
              <option value="Moungo Nord">Moungo Nord</option>
              <option value="Moungo Sud">Moungo Sud</option>
            </select>
          </div>

          {/* Arrondissement */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Arrondissement
            </label>
            <select
              name="arrondissement"
              value={formData.arrondissement}
              onChange={handleChange}
              required
              disabled={!formData.zone}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            >
              <option value="">Sélectionner</option>
              {formData.zone &&
                moungoData[formData.zone]?.map((arr) => (
                  <option key={arr} value={arr}>
                    {arr}
                  </option>
                ))}
            </select>
          </div>

          {error && (
            <p className="text-red-600 text-sm font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            {loading ? "Envoi en cours..." : "Soumettre mon adhésion"}
          </button>
        </form>
      </div>
    </section>
  );
}
