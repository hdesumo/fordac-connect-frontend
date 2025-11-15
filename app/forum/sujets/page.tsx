"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

// 👉 Définition du type
interface Topic {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

export default function ForumTopicsPage() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTopics() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/forum/topics`
        );
        const data = await res.json();

        // Assurer que data.topics est un tableau
        setTopics(Array.isArray(data.topics) ? data.topics : []);
      } catch (error) {
        console.error("Erreur topics :", error);
        setTopics([]);
      } finally {
        setLoading(false);
      }
    }

    loadTopics();
  }, []);

  return (
    <ProtectedRoute>
      <main className="bg-[#0c2e25] min-h-screen text-white pt-24 pb-16">
        <section className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-10 text-[#c8a45d]">
            Forum des militants
          </h1>

          {loading ? (
            <p className="text-gray-300">Chargement...</p>
          ) : topics.length === 0 ? (
            <p className="text-gray-300">Aucun sujet pour le moment.</p>
          ) : (
            <div className="space-y-6">
              {topics.map((topic: Topic) => (
                <div
                  key={topic.id}
                  className="bg-[#123f2f] p-6 rounded-lg shadow-md border border-[#1d6047]"
                >
                  <h2 className="text-2xl font-semibold text-[#c8a45d] mb-2">
                    {topic.title}
                  </h2>

                  <p className="text-gray-200 mb-4">{topic.description}</p>

                  <Link
                    href={`/forum/sujets/${topic.id}`}
                    className="inline-block bg-[#c8a45d] text-[#0c2e25] px-4 py-2 rounded font-semibold hover:bg-[#d8b36d] transition"
                  >
                    Ouvrir le sujet →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </ProtectedRoute>
  );
}
