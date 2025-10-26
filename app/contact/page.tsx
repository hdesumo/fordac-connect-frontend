"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.fordac-connect.org/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Erreur lors de l’envoi du message :", err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
        {/* 🟩 Bloc texte et carte */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-6">
            📞 Contactez le FORDAC
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Vous souhaitez adhérer, poser une question ou proposer une
            initiative ? N’hésitez pas à nous écrire.  
            Notre équipe vous répondra dans les plus brefs délais.
          </p>

          <div className="mt-8">
            <iframe
              title="Carte Douala FORDAC"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.2071874583413!2d9.70837!3d4.05106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610df9b7aeb7cd%3A0x772dbba8b7a95c1!2sDouala%2C%20Cameroun!5e0!3m2!1sfr!2s!4v1704312310553!5m2!1sfr!2s"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
              className="rounded-xl border-0 shadow-md"
            ></iframe>
          </div>

          <div className="pt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>📍 Siège : Douala, Cameroun</p>
            <p>📧 Email : contact@fordac-connect.org</p>
            <p>🌐 Site : www.fordac-connect.org</p>
          </div>
        </div>

        {/* 🟩 Formulaire */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-6">
            Envoyer un message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
            >
              {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            {status === "success" && (
              <p className="text-green-700 dark:text-green-400 text-sm mt-2">
                ✅ Message envoyé avec succès ! Merci pour votre contact.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                ❌ Une erreur est survenue. Veuillez réessayer plus tard.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
