"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { moungoData } from "@/data/moungoData";
import { motion } from "framer-motion";

export default function AdhesionPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    profession: "",
    quartier: "",
    membership_level: "Bronze",
    departement: moungoData.departement,
    secteur: "",
    arrondissement: "",
    terms_accepted: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (field: string, value: any) => {
    setForm((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.birthdate ||
      !form.profession ||
      !form.quartier ||
      !form.secteur ||
      !form.arrondissement ||
      form.terms_accepted !== true
    ) {
      setError("Veuillez remplir tous les champs et accepter la charte.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/members/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        setError(data.error || "Erreur lors de l’envoi du formulaire.");
        return;
      }

      router.push("/adhesion/success");
    } catch (err) {
      setLoading(false);
      setError("Une erreur est survenue. Vérifiez votre connexion internet.");
    }
  };

  const secteurs = Object.keys(moungoData.secteurs);
  const arrondissements =
    form.secteur ? moungoData.secteurs[form.secteur] : [];

  return (
    <main className="max-w-3xl mx-auto py-24 px-6 text-fordacDark">
      <motion.h1
        className="text-4xl font-bold text-center text-fordacGreen mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Formulaire d’adhésion au FORDAC
      </motion.h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-card space-y-6"
      >
        <div>
          <label className="font-semibold">Nom complet</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-fordacGreen outline-none"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold">Adresse e-mail</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-fordacGreen outline-none"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold">Téléphone</label>
          <input
            type="tel"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-fordacGreen outline-none"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold">Date de naissance</label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={form.birthdate}
            onChange={(e) => updateField("birthdate", e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold">Profession</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={form.profession}
            onChange={(e) => updateField("profession", e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold">Quartier</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={form.quartier}
            onChange={(e) => updateField("quartier", e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold">Département</label>
          <input
            type="text"
            disabled
            value={form.departement}
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>

        <div>
          <label className="font-semibold">Secteur</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={form.secteur}
            onChange={(e) => updateField("secteur", e.target.value)}
          >
            <option value="">Sélectionner…</option>
            {secteurs.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold">Arrondissement / Commune</label>
          <select
            disabled={!form.secteur}
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={form.arrondissement}
            onChange={(e) => updateField("arrondissement", e.target.value)}
          >
            <option value="">Sélectionner…</option>
            {arrondissements.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold">Niveau d’adhésion</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={form.membership_level}
            onChange={(e) => updateField("membership_level", e.target.value)}
          >
            <option value="Bronze">Bronze — 1 000 FCFA</option>
            <option value="Argent">Argent — 3 000 FCFA</option>
            <option value="Or">Or — 5 000 FCFA</option>
          </select>
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={form.terms_accepted}
            onChange={(e) => updateField("terms_accepted", e.target.checked)}
          />
          <span>
            J’ai lu et j’accepte les termes de la{" "}
            <a
              href="/charte-mutuelle.pdf"
              target="_blank"
              className="text-fordacGreen underline"
            >
              charte de la Mutuelle du Moungo
            </a>.
          </span>
        </div>

        {error && (
          <p className="text-red-600 text-center font-semibold">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full text-center py-3 rounded-lg text-lg"
        >
          {loading ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>
      </form>
    </main>
  );
}
