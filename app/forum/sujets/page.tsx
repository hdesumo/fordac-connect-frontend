"use client";

import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";

export default function AdminTopics() {
  const [topics, setTopics] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchTopics();
  }, [page]);

  const fetchTopics = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/forum/topics?page=${page}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("adminToken"),
          },
        }
      );

      const data = await res.json();
      setTopics(data.topics || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Erreur fetch topics:", error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          Sujets du Forum
        </h1>

        <div className="space-y-4">
          {topics.length === 0 && (
            <p className="text-gray-600">Aucun sujet pour le moment.</p>
          )}

          {topics.map((topic: any) => (
            <Link
              key={topic.id}
              href={`/admin/forum/sujets/${topic.id}`}
              className="block p-4 bg-white rounded-lg border hover:bg-green-50 transition"
            >
              <h3 className="text-lg font-semibold text-green-700">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-600">
                {topic.total_posts} publications
              </p>
            </Link>
          ))}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </ProtectedRoute>
  );
}
