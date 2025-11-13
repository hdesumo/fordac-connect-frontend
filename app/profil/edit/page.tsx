// app/profil/edit/page.tsx
"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfilPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    arrondissement: "",
    profession: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("fordac_user");
    if (!user) router.push("/login");
    else setFormData(JSON.parse(user));
  }, [router]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("fordac_user", JSON.stringify(formData));
    setMessage("✅ Profil mis à jour avec succès !");
    setTimeout(() => setMessage(""), 4000);
  };

  return (
    <ProtectedRoute>
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
              <input name="name" placeholder="Nom complet" value={formData.name} onChange={handleChange} className="p-3 rounded-lg border dark:bg-gray-900" />
              <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-3 rounded-lg border dark:bg-gray-900" />
              <input name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleChange} className="p-3 rounded-lg border dark:bg-gray-900" />
              <input name="arrondissement" placeholder="Arrondissement" value={formData.arrondissement} onChange={handleChange} className="p-3 rounded-lg border dark:bg-gray-900" />
              <input name="profession" placeholder="Profession" value={formData.profession} onChange={handleChange} className="p-3 rounded-lg border dark:bg-gray-900 md:col-span-2" />
            </div>

            <button type="submit" className="mt-8 w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg">
              Enregistrer
            </button>
            {message && (
              <p className="mt-4 text-center text-green-600 dark:text-green-400">
                {message}
              </p>
            )}
          </form>
        </section>
      </main>
    </ProtectedRoute>
  );
}
