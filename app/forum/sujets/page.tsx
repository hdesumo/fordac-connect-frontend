"use client";

import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import { adminFetch } from "@/lib/adminApi"; // ou membreFetch selon ton backend

export default function ForumTopicsPage() {
  const [topics, setTopics] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  async function loadTopics() {
    setLoading(true);

    try {
      const res = await adminFetch(`/api/forum/topics?page=${page}`);
      const data = await res.json();

      setTopics(data.items || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Erreur chargement des sujets :", error);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadTopics();
  }, [page]);

  if (loading) {
    return (
      <main className="p-10">
        <p>Chargement des sujets…</p>
      </main>
    );
  }

  return (
    <main className="p-10 max-w-4xl mx-auto space-y-10">
      <header>
        <h1 className="text-3xl font-bold text-[#166534]">Sujets du Forum</h1>
        <p className="text-gray-600 mt-2">Explorez les discussions en cours.</p>
      </header>

      <section className="space-y-4">
        {topics.length === 0 ? (
          <p>Aucun sujet pour l’instant.</p>
        ) : (
          topics.map((topic) => (
            <a
              key={topic.id}
              href={`/forum/sujets/${topic.id}`}
              className="block bg-white shadow rounded-lg p-4 hover:bg-gray-50 transition"
            >
              <h2 className="text-xl font-semibold">{topic.title}</h2>
              <p className="text-gray-600 text-sm mt-1">
                Par {topic.author_name} — {topic.created_at}
              </p>
            </a>
          ))
        )}
      </section>

      {/* Pagination */}
      <div className="pt-6">
        <Pagination
          page={page}
          total={totalPages}
          onNext={() => {
            if (page < totalPages) setPage(page + 1);
          }}
          onPrev={() => {
            if (page > 1) setPage(page - 1);
          }}
        />
      </div>
    </main>
  );
}
