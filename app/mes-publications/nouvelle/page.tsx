"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NouvellePublicationPage() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Protection basique : si pas de session, redirige vers /login
  useEffect(() => {
    const user = localStorage.getItem("fordac_user");
    if (!user) {
      router.push("/login");
    }
  }, [router]);

  // ✅ Fonction corrigée avec typage explicite
  const handlePublish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content.trim()) {
      setMessage("⚠️ Veuillez saisir un texte avant de publier.");
      return;
    }

    // Simulation d’une publication réussie
    setMessage("✅ Votre message a été publié avec succès !");
    setContent("");
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 text-center mb-10">
          Nouvelle publication
        </h1>

        <form
          onSubmit={handlePublish}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <label
            htmlFor="content"
            className="block text-lg font-semibold mb-3 text-green-700 dark:text-green-300"
          >
            Exprimez-vous 🗣️
          </label>

          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            placeholder="Partagez vos idées, vos réflexions ou vos actions locales..."
            className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 mb-4"
          />

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-[1.02]"
          >
            Publier
          </button>

          {message && (
            <p
              className={`mt-4 text-center font-medium ${
                message.startsWith("⚠️")
                  ? "text-yellow-600 dark:text-yellow-400"
                  : "text-green-700 dark:text-green-400"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
