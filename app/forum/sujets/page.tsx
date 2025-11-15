"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ForumTopics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTopics() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/forum/topics/published`
        );
        const data = await res.json();
        setTopics(data);
      } catch (error) {
        console.error("Erreur chargement topics :", error);
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

          <h1 className="text-4xl font-bold mb-10 text-center text-[#c8a45d]">
            Sujets du Forum
          </h1>

          {loading && (
            <p className="text-center text-lg text-gray-300">Chargement...</p>
          )}

          {!loading && topics.length === 0 && (
            <p className="text-center text-lg text-gray-300">
              Aucun sujet publié pour le moment.
            </p>
          )}

          <div className="space-y-6">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-[#123f2f] p-6 rounded-lg shadow-md border border-[#1d6047]"
              >
                <h2 className="text-2xl font-semibold text-[#c8a45d] mb-2">
                  {topic.title}
                </h2>

                <p className="text-gray-100 leading-relaxed mb-4">
                  {topic.description}
                </p>

                <Link
                  href={`/forum/sujets/${topic.id}`}
                  className="inline-block bg-[#c8a45d] text-[#0c2e25] font-semibold px-5 py-2 rounded-md hover:bg-[#d8b36d] transition"
                >
                  Voir le sujet →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}
