"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute"; // ✅ Import corrigé

export default function AdminForumPosts() {
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const res = await fetch(`${API}/admin/forum/posts`, {
        cache: "no-store", // ✅ Important pour Vercel / SSR
      });

      const data = await res.json();

      setPosts(Array.isArray(data.posts) ? data.posts : []);
    } catch (e) {
      console.error("Erreur chargement messages admin forum:", e);
      setPosts([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const deletePost = async (id: number) => {
    if (!confirm("Supprimer ce message ?")) return;

    try {
      await fetch(`${API}/admin/forum/posts/${id}`, {
        method: "DELETE",
      });

      load(); // reload après suppression
    } catch (e) {
      console.error("Erreur suppression message:", e);
    }
  };

  return (
    <ProtectedRouteAdmin>
      <main className="min-h-screen p-10 bg-[#F7F7F7]">

        <h1 className="text-4xl font-extrabold text-[#166534] mb-8">
          Tous les Messages du Forum
        </h1>

        <div className="bg-white shadow rounded-xl border p-8">

          {/* Loader */}
          {loading && (
            <p className="text-gray-500 italic">Chargement des messages…</p>
          )}

          {/* Tableau */}
          {!loading && (
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-3">Auteur</th>
                  <th className="py-3">Message</th>
                  <th className="py-3">Sujet</th>
                  <th className="py-3">Date</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {posts.map((p) => (
                  <tr key={p.id} className="border-b">

                    <td className="py-3 font-semibold text-[#166534]">
                      {p.author || "—"}
                    </td>

                    <td className="py-3 max-w-lg">
                      {p.content || "—"}
                    </td>

                    <td className="py-3">
                      {p.topic_id ? (
                        <Link
                          href={`/admin/forum/topics/${p.topic_id}`}
                          className="text-blue-600 hover:underline"
                        >
                          Voir le sujet
                        </Link>
                      ) : (
                        <span className="text-gray-500">—</span>
                      )}
                    </td>

                    <td className="py-3 text-sm">
                      {p.created_at
                        ? new Date(p.created_at).toLocaleString("fr-FR")
                        : "—"}
                    </td>

                    <td className="py-3">
                      <button
                        onClick={() => deletePost(p.id)}
                        className="text-red-600 hover:underline"
                      >
                        Supprimer
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {!loading && posts.length === 0 && (
            <p className="text-gray-600 mt-3">Aucun message pour le moment.</p>
          )}
        </div>
      </main>
    </ProtectedRouteAdmin>
  );
}
