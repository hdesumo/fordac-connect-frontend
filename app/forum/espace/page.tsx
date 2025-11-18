"use client";

import { useState, useEffect } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";

export default function ForumEspace() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Jean-Paul Kalla",
      content:
        "Je propose que nous renforcions les activités du FORDAC dans les arrondissements ruraux pour mieux mobiliser la jeunesse.",
      date: "13 novembre 2025",
    },
    {
      id: 2,
      author: "Rosine Nguetchoua",
      content:
        "Excellente idée ! On pourrait aussi lancer des ateliers de formation sur la citoyenneté et l’économie solidaire.",
      date: "13 novembre 2025",
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (!newPost.trim()) return;
    const newEntry = {
      id: posts.length + 1,
      author: "Moi (Militant connecté)",
      content: newPost,
      date: new Date().toLocaleDateString("fr-FR"),
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
  };

  return (
    <ProtectedRoute>
      <main className="bg-[#0c2e25] min-h-screen text-white pt-24 pb-16">
        <section className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center text-[#c8a45d]">
            Espace des Militants – Forum Restreint
          </h1>

          <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
            Cet espace est réservé aux membres connectés du FORDAC.  
            Ici, vous pouvez partager vos réflexions ou vos
            expériences pour faire avancer notre parti.
          </p>

          {/* Zone de publication */}
          <div className="bg-[#154933] p-6 rounded-lg shadow-lg mb-12">
            <textarea
              placeholder="Partagez votre idée, proposition ou commentaire..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="w-full p-4 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c8a45d]"
              rows={4}
            ></textarea>
            <button
              onClick={handlePost}
              className="mt-4 bg-[#c8a45d] text-[#0c2e25] font-semibold px-6 py-3 rounded-md hover:bg-[#d8b36d] transition"
            >
              Publier
            </button>
          </div>

          {/* Liste des publications */}
          <div className="space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-[#123f2f] p-6 rounded-lg shadow-md border border-[#1d6047]"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-[#c8a45d]">
                    {post.author}
                  </h3>
                  <span className="text-sm text-gray-300">{post.date}</span>
                </div>
                <p className="text-gray-100 leading-relaxed">{post.content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}
