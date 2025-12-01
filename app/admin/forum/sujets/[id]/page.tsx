"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import ProtectedRoute from "../../../../components/ProtectedRoute";
import Pagination from "../../../../components/Pagination";

export default function AdminTopicModerationPage() {
  const { id } = useParams();

  const [topic, setTopic] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  const API = process.env.NEXT_PUBLIC_API_URL;

  const loadData = async () => {
    const res = await fetch(`${API}/topics/${id}`);
    const data = await res.json();

    setTopic(data.topic || null);
    setPosts(data.posts || []);
  };

  useEffect(() => {
    loadData();
  }, [id]);

  const paginated = posts.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(posts.length / perPage);

  const deletePost = async (postId: number) => {
    if (!confirm("Supprimer ce message ?")) return;

    await fetch(`${API}/admin/forum/posts/${postId}`, {
      method: "DELETE",
    });

    loadData(); // refresh page
  };

  return (
    <ProtectedRoute adminOnly>
      <main className="min-h-screen bg-[#F7F7F7] p-10">

        {/* Bouton retour */}
        <Link
          href="/admin/forum"
          className="text-[#166534] hover:underline text-lg"
        >
          ← Retour à la liste des sujets
        </Link>

        {/* Titre */}
        {topic && (
          <h1 className="text-4xl font-extrabold text-[#166534] mt-6 mb-4">
            Sujet : {topic.title}
          </h1>
        )}

        <p className="text-gray-600 mb-10">
          Messages : {posts.length}
        </p>

        {/* Liste des messages */}
        <div className="bg-white p-8 rounded-xl border shadow-sm">
          {paginated.length === 0 ? (
            <p className="text-gray-600 text-center">Aucun message.</p>
          ) : (
            <div className="space-y-8">
              {paginated.map((post) => (
                <div
                  key={post.id}
                  className="border rounded-xl p-6 bg-white shadow-sm"
                >
                  <div className="flex justify-between">
                    <h3 className="text-xl font-semibold text-[#166534]">
                      {post.author || "Membre"}
                    </h3>

                    <span className="text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleString("fr-FR")}
                    </span>
                  </div>

                  <p className="mt-3 text-gray-800">{post.content}</p>

                  {post.edited_by_user && (
                    <p className="text-sm text-gray-500 mt-2 italic">
                      (Message modifié par l'utilisateur)
                    </p>
                  )}

                  {/* Actions admin */}
                  <div className="mt-4 flex gap-4">
                    <button
                      onClick={() => deletePost(post.id)}
                      className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 text-sm"
                    >
                      Supprimer le message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
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
