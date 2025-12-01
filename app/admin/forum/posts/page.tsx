"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";
import Link from "next/link";

export default function AdminForumPosts() {
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [posts, setPosts] = useState<any[]>([]);

  const load = async () => {
    const res = await fetch(`${API}/admin/forum/posts`);
    const data = await res.json();
    setPosts(data.posts || []);
  };

  useEffect(() => {
    load();
  }, []);

  const deletePost = async (id: number) => {
    if (!confirm("Supprimer ce message ?")) return;

    await fetch(`${API}/admin/forum/posts/${id}`, {
      method: "DELETE",
    });

    load();
  };

  return (
    <ProtectedRoute adminOnly>
      <main className="min-h-screen p-10 bg-[#F7F7F7]">
        
        <h1 className="text-4xl font-extrabold text-[#166534] mb-8">
          Tous les Messages du Forum
        </h1>

        <div className="bg-white shadow rounded-xl border p-8">
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
                    {p.author}
                  </td>

                  <td className="py-3 max-w-lg">{p.content}</td>

                  <td className="py-3">
                    <Link
                      href={`/admin/forum/topics/${p.topic_id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Voir le sujet
                    </Link>
                  </td>

                  <td className="py-3 text-sm">
                    {new Date(p.created_at).toLocaleString("fr-FR")}
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

          {posts.length === 0 && (
            <p className="text-gray-600">Aucun message pour le moment.</p>
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}
