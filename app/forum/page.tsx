"use client";

import { useState } from "react";
import Image from "next/image";

export default function ForumPage() {
  const [posts] = useState([
    {
      id: 1,
      name: "Clarisse Nguimfack",
      avatar: "/avatars/clarisse.jpg",
      content:
        "Heureuse de participer à ce grand mouvement ! Ensemble, nous ferons du FORDAC une force du renouveau citoyen 💚",
      likes: 24,
      comments: 5,
      time: "Il y a 2 heures",
    },
    {
      id: 2,
      name: "Blaise Mbarga",
      avatar: "/avatars/blaise.jpg",
      content:
        "Le développement local commence par l'engagement collectif. Fier d’être militant du FORDAC ! 🇨🇲",
      likes: 18,
      comments: 2,
      time: "Il y a 4 heures",
    },
    {
      id: 3,
      name: "Rosine Nkoa",
      avatar: "/avatars/rosine.jpg",
      content:
        "Merci au Président pour sa vision claire. L’action locale est le moteur du changement durable 💪",
      likes: 33,
      comments: 6,
      time: "Hier à 20h",
    },
    {
      id: 4,
      name: "André Tchoumi",
      avatar: "/avatars/andre.jpg",
      content:
        "La jeunesse doit s’impliquer activement dans la transformation politique et sociale du pays.",
      likes: 41,
      comments: 9,
      time: "Il y a 1 jour",
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 text-center mb-10">
          Forum des Militants
        </h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-3">
                <Image
                  src={post.avatar}
                  alt={post.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-300">
                    {post.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.time}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                {post.content}
              </p>

              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>👍 {post.likes} J’aime</span>
                <span>💬 {post.comments} commentaires</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
