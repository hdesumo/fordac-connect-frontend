"use client";

import { useState } from "react";
import axios from "axios";

export default function AdhererPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    arrondissement: "",
    departement: "",
    region: "",
    membership_level: "Bronze",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(
        "https://api.fordac-connect.org/api/members",
        formData
      );
      if (res.status === 201) {
        setSuccess(true);
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">
          🎉 Votre adhésion est enregistrée !
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-lg">
          Merci pour votre confiance. Votre dossier est en cours de validation.
          Vous recevrez un e-mail de confirmation dès son approbation.
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700 dark:text-green-400 mb-10">
          Adhérez au FORDAC
        </h1>

        {/* 🟢 Explication des niveaux d’adhésion et mutuelle */}
        <section className="bg-green-700/10 dark:bg-green-900/30 rounded-2xl p-8 mb-10 shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-6 text-center">
            Choisissez votre niveau d’adhésion
          </h2>

          <p className="text-center text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Chaque niveau d’adhésion vous donne accès à la{" "}
            <span className="font-semibold text-green-700 dark:text-green-400">
              Mutuelle de Solidarité FORDAC
            </span>, qui soutient ses membres dans les domaines de la santé,
            l’éducation, la solidarité et la prévention sociale.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Bronze */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-green-200 dark:border-green-700 shadow-sm hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🥉</div>
              <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">
                Niveau Bronze
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Adhésion de base — participation citoyenne.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 text-left list-disc list-inside space-y-1">
                <li>Accès aux activités locales du mouvement</li>
                <li>Couverture mutuelle <strong>de base</strong> (soins courants, assistance)</li>
                <li>Participation à la vie associative</li>
              </ul>
            </div>

            {/* Argent */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-green-200 dark:border-green-700 shadow-sm hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🥈</div>
              <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">
                Niveau Argent
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Adhésion renforcée — engagement régional.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 text-left list-disc list-inside space-y-1">
                <li>Participation aux programmes régionaux</li>
                <li>Couverture mutuelle <strong>étendue</strong> (soins, maternité, éducation)</li>
                <li>Formations citoyennes et leadership</li>
              </ul>
            </div>

            {/* Or */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-green-200 dark:border-green-700 shadow-sm hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🥇</div>
              <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">
                Niveau Or
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Adhésion bienfaiteur — solidarité élargie.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 text-left list-disc list-inside space-y-1">
                <li>Participation aux instances nationales</li>
                <li>Couverture mutuelle <strong>complète</strong> (santé, éducation, décès)</li>
                <li>Reconnaissance officielle comme bienfaiteur</li>
              </ul>
            </div>
          </div>

          {/* 📘 Lien vers la charte de la mutuelle */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8">
            📘 Consultez la{" "}
            <a
              href="/documents/charte-mutuelle.pdf"
              target="_blank"
              className="text-green-700 dark:text-green-400 font-medium underline hover:no-underline"
            >
              Charte de la Mutuelle FORDAC
            </a>{" "}
            pour connaître le détail des garanties, conditions et avantages.
          </p>
        </section>

        {/* 🟩 Formulaire d’adhésion */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100"
            />
            <input
              type="email"
              name="email"
              placeholder="Adresse e-mail"
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100"
            />
            <input
              type="text"
              name="phone"
              placeholder="Téléphone"
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100"
            />
            <input
              type="text"
              name="arrondissement"
              placeholder="Arrondissement"
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100"
            />
            <input
              type="text"
              name="departement"
              placeholder="Département"
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100"
            />
            <input
              type="text"
              name="region"
              placeholder="Région"
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Niveau d’adhésion
            </label>
            <select
              name="membership_level"
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100"
            >
              <option value="Bronze">Bronze</option>
              <option value="Argent">Argent</option>
              <option value="Or">Or</option>
            </select>
          </div>

          {error && (
            <p className="text-red-600 dark:text-red-400 mt-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-500 text-white py-3 rounded-lg font-semibold transition-all"
          >
            {loading ? "Envoi en cours..." : "Soumettre ma demande d’adhésion"}
          </button>
        </form>
      </div>
    </main>
  );
}
