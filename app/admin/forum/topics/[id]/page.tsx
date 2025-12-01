"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProtectedRoute from "../../../../components/ProtectedRoute";

export default function AdminTopicDetails() {
  const { id } = useParams();

  const API = process.env.NEXT_PUBLIC_API_URL;

  const [topic, setTopic] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);

  const load = async () => {
    const res = await fetch(`${API}/topics/${id}`);
    const data = await res.json();

    setTopic(data.topic);
    setPosts(data.posts || []);
  };

  useEffect(() => {
    load();
  }, []);

  const lockTopic = async () => {
    await fetch(`${API}/admin/forum/topics/${id}/lock`, {
      method: "PUT",
    });
    load();
  };

  const unlockTopic = async () => {
    await fetch(`${API}/admin/forum/topics/${id}/unlock`, {
      method: "PUT",
    });
    load();
  };

  const deleteTopic = async () => {
    if (!confirm("Supprimer définitivement ce sujet ?")) return;

    await fetch(`${API}/admin/forum/topics/${id}`, {
      method: "DELETE",
    });

    window.location.href = "/admin/forum/topics";
  };

  const deletePost = async (postId: number) => {
    if (!confirm("Supprimer ce message ?")) return;

    await fetch(`${API}/admin/forum/posts/${postId}`, { method: "DELETE" });
    load();
  };

  return (
    <ProtectedRoute adminOnly>
      <main className="min-h-screen p-10 bg-[#F7F7F7]">
        
        <Link
          href="/admin/forum/topics"
          className="text-[#166534] hover:underline"
        >
          ← Retour à la liste des sujets
        </Link>

        <h1 className="text-4xl font-extrabold text-[#166534] mt-6 mb-4">
          Modération du Sujet
        </h1>

        {topic && (
          <div className="bg-white shadow p-8 rounded-xl border mb-10">
            <h2 className="text-2xl font-bold text-[#166534] mb-2">
              {topic.title}
            </h2>

            <p className="text-gray-600 mb-4">
              Auteur : <strong>{topic.author}</strong>
            </p>

            <div className="flex gap-4">
              {topic.locked ? (
                <button
                  onClick={unlockTopic}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                >
                  Déverrouiller le sujet
                </button>
              ) : (
                <button
                  onClick={lockTopic}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg"
                >
                  Verrouiller le sujet
                </button>
              )}

              <button
                onClick={deleteTopic}
                className="bg-red-700 text-white px-6 py-3 rounded-lg"
              >
                Supprimer le sujet
              </button>
            </div>
          </div>
        )}

        <h3 className="text-2xl font-bold text-[#166534] mb-4">
          Messages ({posts.length})
        </h3>

        <div className="space-y-6">
          {posts.map((p: any) => (
            <div
              key={p.id}
              className="bg-white p-6 rounded-xl shadow border"
            >
              <p className="font-semibold text-[#166534]">{p.author}</p>
              <p className="text-sm text-gray-500">
                {new Date(p.created_at).toLocaleString("fr-FR")}
              </p>
              <p className="mt-3">{p.content}</p>

              <button
                onClick={() => deletePost(p.id)}
                className="mt-4 text-red-600 hover:underline text-sm"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>

      </main>
    </ProtectedRoute>
  );
}
