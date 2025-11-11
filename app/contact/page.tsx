"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erreur lors de l’envoi du message");

      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Impossible d’envoyer votre message. Réessayez plus tard.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <div className="bg-green-100 dark:bg-green-900 border border-green-500 rounded-xl p-8 text-center max-w-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-3">
            Message envoyé avec succès ✅
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Merci de nous avoir contactés. Nous reviendrons vers vous dans les plus brefs délais.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition"
          >
            Envoyer un autre message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-8">
          Contactez le FORDAC
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Nom complet</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Objet</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Ex : Renseignement sur l’adhésion"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            {loading ? "Envoi en cours..." : "Envoyer le message"}
          </button>
        </form>
      </div>
    </section>
  );
}
