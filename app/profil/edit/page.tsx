"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfilPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    arrondissement: "",
    profession: "",
  });
  const [message, setMessage] = useState("");

  // ✅ Vérifie la session locale
  useEffect(() => {
    const user = localStorage.getItem("fordac_user");
    if (!user) {
      router.push("/login");
    } else {
      setAuthenticated(true);
      const parsed = JSON.parse(user);
      setFormData({
        name: parsed.name || "",
        email: parsed.email || "",
        phone: parsed.phone || "",
        arrondissement: parsed.arrondissement || "",
        profession: parsed.profession || "",
      });
    }
  }, [router]);

  if (!authenticated) return null;

  // ✅ Typage strict du paramètre e
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulation de mise à jour côté client
    localStorage.setItem("fordac_user", JSON.stringify(formData));
    setMessage("✅ Profil mis à jour avec succès !");
    setTimeout(() => setMessage(""), 4000);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 text-center mb-10">
          Modifier mon profil
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 text-green-700 dark:text-green-300"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2 text-green-700 dark:text-green-300"
              >
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold mb-2 text-green-700 dark:text-green-300"
              >
                Téléphone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="arrondissement"
                className="block text-sm font-semibold mb-2 text-green-700 dark:text-green-300"
              >
                Arrondissement
              </label>
              <input
                type="text"
                id="arrondissement"
                name="arrondissement"
                value={formData.arrondissement}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="profession"
                className="block text-sm font-semibold mb-2 text-green-700 dark:text-green-300"
              >
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-[1.02]"
          >
            Enregistrer les modifications
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
