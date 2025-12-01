"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProtectedRoute from "../../../../components/ProtectedRoute";

export default function AdminPostDetails() {
  const { id } = useParams();
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [post, setPost] = useState<any>(null);
  const [reports, setReports] = useState<any[]>([]);

  const load = async () => {
    const res = await fetch(`${API}/admin/forum/posts/${id}`);
    const data = await res.json();

    setPost(data.post);
    setReports(data.reports || []);
  };

  useEffect(() => {
    load();
  }, []);

  const deletePost = async () => {
    if (!confirm("Supprimer ce message ?")) return;

    await fetch(`${API}/admin/forum/posts/${id}`, { method: "DELETE" });

    window.location.href = "/admin/forum/posts";
  };

  const deleteReport = async (rid: number) => {
    await fetch(`${API}/admin/reports/${rid}`, { method: "DELETE" });
    load();
  };

  if (!post) return <div>Chargement…</div>;

  return (
    <ProtectedRoute adminOnly>
      <main className="p-10 bg-[#F7F7F7] min-h-screen">

        <Link href="/admin/forum/posts" className="text-[#166534] hover:underline">
          ← Retour aux messages
        </Link>

        <h1 className="text-3xl font-bold text-[#166534] mt-6 mb-4">
          Détail du message
        </h1>

        <div className="bg-white p-8 rounded-xl shadow border mb-10">
          <p className="text-lg text-[#166534] font-semibold">{post.author}</p>
          <p className="text-sm text-gray-600">
            {new Date(post.created_at).toLocaleString("fr-FR")}
          </p>

          <p className="mt-4">{post.content}</p>

          <button
            onClick={deletePost}
            className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            Supprimer le message
          </button>
        </div>

        <h2 className="text-2xl font-bold text-[#166534] mb-4">Signalements</h2>

        <div className="bg-white p-8 rounded-xl shadow border">
          {reports.length === 0 ? (
            <p className="text-gray-600">Aucun signalement.</p>
          ) : (
            <ul className="space-y-6">
              {reports.map((r) => (
                <li key={r.id} className="border p-4 rounded-xl">
                  <p>
                    <strong>Signalé par :</strong> {r.reporter}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">{r.reason}</p>

                  <button
                    onClick={() => deleteReport(r.id)}
                    className="mt-3 text-red-600 hover:underline text-sm"
                  >
                    Supprimer le signalement
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}
