"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";
import IntranetHeader from "../../../components/IntranetHeader";
import ForumNav from "../../../components/ForumNav";

export default function ForumEspacePage() {
  const [user, setUser] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const API = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const submitTopic = async () => {
    if (!title.trim()) return alert("Veuillez renseigner un titre");

    await fetch(`${API}/topics/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, category_id: category }),
    });

    window.location.href = "/forum/sujets";
  };

  return (
    <ProtectedRoute>
      <IntranetHeader userName={user?.name || "Utilisateur"} />
      <ForumNav />

      <main className="min-h-screen bg-[#F7F7F7] py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white p-10 shadow rounded-xl border">

          <h1 className="text-3xl font-bold text-[#166534] mb-8">
            Créer un Nouveau Sujet
          </h1>

          <select
            className="w-full border p-4 rounded-xl mb-6"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Choisir une catégorie</option>
            <option value="1">Actualités</option>
            <option value="2">Organisation interne</option>
            <option value="3">Débats politiques</option>
            <option value="4">Développement communautaire</option>
          </select>

          <input
            type="text"
            placeholder="Titre du sujet"
            className="w-full p-4 border rounded-xl mb-6"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            onClick={submitTopic}
            className="w-full bg-[#166534] text-white py-4 rounded-xl"
          >
            Publier le sujet
          </button>

        </div>
      </main>
    </ProtectedRoute>
  );
}
