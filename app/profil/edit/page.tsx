"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EditProfilPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [message, setMessage] = useState("");

  // Données fictives initiales (à remplacer par données locales si disponibles)
  const [formData, setFormData] = useState({
    name: "Clarisse Nguimfack",
    email: "clarisse.nguimfack@fordac.org",
    avatar: "/avatars/clarisse.jpg",
    zone: "Moungo Sud",
    arrondissement: "Loum",
  });

  const zones = {
    "Moungo Nord": [
      "Nkongsamba 1er",
      "Nkongsamba 2e",
      "Nkongsamba 3e",
      "Manjo",
      "Bare-Bakem",
    ],
    "Moungo Sud": ["Loum", "Njombé-Penja", "Dibombari", "Mbanga", "Mommb"],
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
    else setAuthenticated(true);

    // Si des infos de localisation ont été stockées lors de l'inscription
    const storedProfile = localStorage.getItem("fordac_profile");
    if (storedProfile) {
      const parsed = JSON.parse(storedProfile);
      setFormData((prev) => ({ ...prev, ...parsed }));
    }
  }, [router]);

  if (!authenticated) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleZoneChange = (e) => {
    const selectedZone = e.target.value;
    const firstArrondissement = zones[selectedZone][0];
    setFormData((prev) => ({
      ...prev,
      zone: selectedZone,
      arrondissement: firstArrondissement,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, avatar: url }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("fordac_profile", JSON.stringify(formData));
    setMessage("✅ Votre profil a été mis à jour avec succès !");
    setTimeout(() => {
      router.push("/profil");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-100 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-green-800 text-center mb-8">
          Modifier mon profil
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <Image
              src={formData.avatar}
              alt="Avatar utilisateur"
              width={120}
              height={120}
              className="rounded-full mb-3 border-4 border-green-700 shadow-lg"
            />
            <label className="cursor-pointer bg-green-700 text-white px-4 py-2 rounded-full text-sm hover:bg-green-800 transition">
              Changer la photo
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Nom complet */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adresse e-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Zone géographique */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Zone géographique
            </label>
            <select
              name="zone"
              value={formData.zone}
              onChange={handleZoneChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {Object.keys(zones).map((zone) => (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              ))}
            </select>
          </div>

          {/* Arrondissement */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Arrondissement
            </label>
            <select
              name="arrondissement"
              value={formData.arrondissement}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {zones[formData.zone].map((arr) => (
                <option key={arr} value={arr}>
                  {arr}
                </option>
              ))}
            </select>
          </div>

          {/* Bouton de validation */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded-full shadow-md transition"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>

        {message && (
          <p className="text-green-700 text-center mt-6 font-medium">{message}</p>
        )}

        <div className="text-center mt-8">
          <Link
            href="/profil"
            className="text-sm text-green-700 hover:underline font-medium"
          >
            ← Retour au profil
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
