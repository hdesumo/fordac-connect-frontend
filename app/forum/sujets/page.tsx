"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "../../../components/ProtectedRoute";
import IntranetHeader from "../../../components/IntranetHeader";
import ForumNav from "../../../components/ForumNav";
import Pagination from "../../../components/Pagination";
import TagBadge from "../../../components/TagBadge";

export default function ForumSujetsPage() {
  const [topics, setTopics] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<any>(null);

  const [page, setPage] = useState(1);
  const perPage = 8;

  const API = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));

    fetch(`${API}/topics`)
      .then((res) => res.json())
      .then((data) => setTopics(data.topics || []));
  }, [API]);

  const filtered = topics.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <ProtectedRoute>
      <IntranetHeader userName={user?.name || "Utilisateur"} />
      <ForumNav />

      <main className="min-h-screen bg-[#F7F7F7] px-6 pt-10 pb-20">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-extrabold text-[#166534] mb-6">
            Tous les Sujets
          </h1>

          {/* Recherche */}
          <input
            type="text"
            placeholder="Rechercher un sujet..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 border rounded-xl mb-8"
          />

          <div className="space-y-6">
            {paginated.map((topic) => (
              <Link
                key={topic.id}
                href={`/forum/sujets/${topic.id}`}
                className="block bg-white p-6 rounded-xl shadow border hover:bg-gray-50"
              >
                <h2 className="text-2xl font-bold text-[#166534] mb-2">
                  {topic.title}
                </h2>

                <div className="flex items-center gap-2">
                  <span className="text-gray-600 text-sm">
                    par <strong>{topic.author}</strong> ·{" "}
                    {new Date(topic.created_at).toLocaleDateString("fr-FR")}
                  </span>

                  {topic.category_name && (
                    <TagBadge name={topic.category_name} />
                  )}

                  {topic.locked && (
                    <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-lg ml-2">
                      Verrouillé
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <Pagination
            page={page}
            total={totalPages}
            onNext={() => setPage(page + 1)}
            onPrev={() => setPage(page - 1)}
          />
        </div>
      </main>
    </ProtectedRoute>
  );
}
