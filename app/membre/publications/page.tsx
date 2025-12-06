"use client";
<MembreTopbar />

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PublicationsPage() {
  const [user, setUser] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  // Placeholder : futures publications depuis backend
  const [posts] = useState([
    {
      id: 1,
      title: "Proposition pour renforcer la mobilisation locale",
      excerpt: "Voici quelques idées pour dynamiser nos actions au niveau des sections locales...",
      date: "2025-01-12",
      comments: 4,
    },
    {
      id: 2,
      title: "Compte rendu de la rencontre régionale",
      excerpt: "Retour sur les échanges forts et déterminants lors de la dernière réunion régionale...",
      date: "2025-01-10",
      comments: 2,
    },
    {
      id: 3,
      title: "Réflexion sur l'avenir de la jeunesse au FORDAC",
      excerpt: "La participation active de la jeunesse est un pilier essentiel pour l’avenir du parti...",
      date: "2025-01-08",
      comments: 7,
    },
  ]);

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (!userData) return;

    try {
      setUser(JSON.parse(userData));
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

  return (
    <div className="space-y-6">

      {/* TITRE */}
      <h1 className="text-2xl font-bold text-gray-800">
        Mes publications
      </h1>

      {/* INTRO */}
      <div className="bg-white p-5 rounded-lg shadow border-l-4 border-[#111827]">
        <p className="text-gray-700">
          Retrouvez ici toutes les publications que vous avez partagées sur le FORDAC Connect.
          Vous pouvez en créer de nouvelles, les consulter ou les modifier.
        </p>
      </div>

      {/* BOUTON CREER */}
      <div>
        <Link
          href="/membre/publications/create"
          className="bg-[#111827] text-white px-4 py-2 rounded hover:bg-black"
        >
          📝 Créer une nouvelle publication
        </Link>
      </div>

      {/* LISTE DES PUBLICATIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {post.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              {post.excerpt}
            </p>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>📅 {post.date}</span>
              <span>💬 {post.comments} commentaires</span>
            </div>

            <Link
              href={`/membre/publications/${post.id}`}
              className="block mt-4 text-blue-600 hover:underline text-sm"
            >
              Lire plus →
            </Link>
          </div>
        ))}

      </div>

    </div>
  );
}
