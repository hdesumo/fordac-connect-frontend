"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ForumPage() {
  const [user, setUser] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  // Future: discussions récupérées depuis /api/forum
  const [topics] = useState([
    {
      id: 1,
      title: "Bienvenue sur le Forum des militants",
      author: "Modérateur FORDAC",
      date: "2025-01-10",
      replies: 12,
    },
    {
      id: 2,
      title: "Idées pour renforcer l'action locale",
      author: "Jean Dupont",
      date: "2025-01-11",
      replies: 3,
    },
    {
      id: 3,
      title: "Propositions pour la jeunesse",
      author: "Fatou Ndiaye",
      date: "2025-01-12",
      replies: 7,
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
        Forum des militants
      </h1>

      {/* BANNER */}
      <div className="bg-white p-4 rounded-lg shadow border-l-4 border-[#111827]">
        <p className="text-gray-700">
          Bienvenue sur l’espace d’échange des membres du FORDAC.  
          Partagez vos idées, discutez des actions, proposez vos initiatives.
        </p>
      </div>

      {/* BOUTON CREER UNE PUBLICATION */}
      <div>
        <Link
          href="/membre/publications/create"
          className="bg-[#111827] text-white px-4 py-2 rounded hover:bg-black"
        >
          📝 Créer une publication
        </Link>
      </div>

      {/* LISTE DES DISCUSSIONS */}
      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="text-left p-3">Sujet</th>
              <th className="p-3">Auteur</th>
              <th className="p-3">Réponses</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((topic) => (
              <tr key={topic.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium text-blue-600 hover:underline cursor-pointer">
                  {topic.title}
                </td>
                <td className="p-3">{topic.author}</td>
                <td className="p-3 text-center">{topic.replies}</td>
                <td className="p-3 text-gray-500">{topic.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
