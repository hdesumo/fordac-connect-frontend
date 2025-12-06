"use client";
<MembreTopbar />

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function PublicationDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [post, setPost] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // ⚠️ Placeholder – plus tard: fetch depuis API
    const fakePosts = [
      {
        id: "1",
        title: "Proposition pour renforcer la mobilisation locale",
        content:
          "Voici quelques idées pour dynamiser nos actions au niveau des sections locales...",
        date: "2025-01-12",
        comments: 4,
        image: null,
      },
      {
        id: "2",
        title: "Compte rendu de la rencontre régionale",
        content:
          "Retour sur les échanges forts et déterminants lors de la dernière réunion régionale...",
        date: "2025-01-10",
        comments: 2,
        image: null,
      },
    ];

    const found = fakePosts.find((p) => p.id === id);
    setPost(found || null);
    setLoaded(true);
  }, [id]);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Chargement...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="p-6">
        <p className="text-red-600">Publication introuvable.</p>
        <Link href="/membre/publications" className="text-blue-600 underline">
          ← Retour
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold text-gray-800">{post.title}</h1>

      {/* IMAGE */}
      {post.image && (
        <img
          src={post.image}
          alt="Illustration"
          className="w-96 rounded shadow mb-4"
        />
      )}

      {/* CONTENU */}
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 whitespace-pre-line">{post.content}</p>

        <div className="mt-4 text-sm text-gray-500">
          📅 Publié le {post.date}  
          <br />
          💬 {post.comments} commentaires
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href={`/membre/publications/${id}/edit`}
          className="bg-[#111827] text-white px-4 py-2 rounded hover:bg-black"
        >
          ✏️ Modifier
        </Link>

        <Link
          href="/membre/publications"
          className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100"
        >
          ← Retour aux publications
        </Link>
      </div>

    </div>
  );
}
