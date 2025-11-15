"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfilPage() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) return;

    try {
      const parsed = JSON.parse(userData);
      setUser(parsed);
      setName(parsed.name);
      setPhone(parsed.phone);
      setEmail(parsed.email);
    } catch {}

    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Chargement...
      </div>
    );
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoadingSubmit(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/membre/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name, phone, email }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Erreur lors de la mise à jour.");
        setLoadingSubmit(false);
        return;
      }

      // Mise à jour localStorage
      const updatedUser = { ...user, name, phone, email };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setMessage("Profil mis à jour avec succès ✔");

      setTimeout(() => {
        router.push("/membre/profil");
      }, 1200);
    } catch (error) {
      setMessage("Erreur réseau. Réessayez.");
    }

    setLoadingSubmit(false);
  }

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold text-gray-800">
        Modifier mon profil
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4 max-w-xl"
      >
        {/* NOM */}
        <div>
          <label className="block font-semibold mb-1">Nom complet</label>
          <input
            type="text"
            value={name}
            className="w-full border p-2 rounded"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* TÉLÉPHONE */}
        <div>
          <label className="block font-semibold mb-1">Téléphone</label>
          <input
            type="text"
            value={phone}
            className="w-full border p-2 rounded"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            value={email}
            className="w-full border p-2 rounded"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* MESSAGE */}
        {message && (
          <div className="text-center text-sm text-blue-600">
            {message}
          </div>
        )}

        {/* BOUTON */}
        <button
          type="submit"
          disabled={loadingSubmit}
          className="bg-[#111827] text-white px-4 py-2 rounded hover:bg-black w-full"
        >
          {loadingSubmit ? "Enregistrement..." : "Enregistrer"}
        </button>
      </form>

    </div>
  );
}
