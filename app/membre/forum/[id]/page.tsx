"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ForumTopicPage() {
  const params = useParams();
  const { id } = params;

  const [topic, setTopic] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [commentText, setCommentText] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    // ⚠️ Placeholder avant connexion API
    const fakeTopics = [
      {
        id: "1",
        title: "Proposition pour renforcer la mobilisation locale",
        content:
          "Voici quelques idées pour dynamiser nos actions au niveau des sections locales...",
        image: null,
        date: "2025-01-12",
        author: "Admin FORDAC",
      },
      {
        id: "2",
        title: "Idées pour améliorer la participation des jeunes",
        content:
          "La jeunesse doit être au cœur du projet FORDAC. Voici quelques pistes pour avancer...",
        image: null,
        date: "2025-01-11",
        author: "Fatou Ndiaye",
      },
    ];

    const fakeComments = [
      {
        id: 1,
        author: "Jean Dupont",
        content: "Très bonne idée ! Je pense qu’on pourrait lancer une campagne régionale.",
        date: "2025-01-12",
      },
      {
        id: 2,
        author: "Marie Nguema",
        content: "Je valide totalement. L’action locale est vraiment essentielle.",
        date: "2025-01-12",
      },
    ];

    const found = fakeTopics.find((t) => t.id === id);
    setTopic(found || null);
    setComments(fakeComments);
    setLoaded(true);
  }, [id]);

  async function handleCommentSubmit(e: any) {
    e.preventDefault();
    setMessage("");

    if (!commentText.trim()) {
      setMessage("Veuillez écrire un commentaire.");
      return;
    }

    setSending(true);

    try {
      const token = localStorage.getItem("token");

      // ⚠️ Placeholder avant API réelle
      setTimeout(() => {
        const newComment = {
          id: comments.length + 1,
          author: "Vous",
          content: commentText,
          date: new Date().toISOString().substring(0, 10),
        };

        setComments([newComment, ...comments]);
        setCommentText("");
        setMessage("Commentaire publié ✔");
        setSending(false);
      }, 800);
    } catch (error) {
      setMessage("Erreur lors de l'envoi.");
      setSending(false);
    }
  }

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Chargement...
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="p-6 text-red-600">
        Sujet introuvable.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* TITRE DU SUJET */}
      <h1 className="text-2xl font-bold text-gray-800">{topic.title}</h1>

      {/* CARTE DU SUJET */}
      <div className="bg-white p-6 rounded-lg shadow">

        {/* Image si elle existe */}
        {topic.image && (
          <img src={topic.image} className="w-96 rounded mb-4 shadow" />
        )}

        <p className="text-gray-700 whitespace-pre-line">{topic.content}</p>

        <div className="mt-4 text-sm text-gray-500">
          📅 Publié le {topic.date} — par {topic.author}
        </div>
      </div>

      {/* FORMULAIRE COMMENTAIRE */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Ajouter un commentaire</h2>

        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full border p-3 rounded h-32"
            placeholder="Votre commentaire..."
          ></textarea>

          {message && <p className="text-blue-600 text-sm">{message}</p>}

          <button
            type="submit"
            disabled={sending}
            className="bg-[#111827] text-white px-4 py-2 rounded hover:bg-black"
          >
            {sending ? "Publication..." : "Publier le commentaire"}
          </button>
        </form>
      </div>

      {/* LISTE DES COMMENTAIRES */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Commentaires</h2>

        {comments.length === 0 && (
          <p className="text-gray-600">Aucun commentaire pour l'instant.</p>
        )}

        <div className="space-y-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="border-b pb-3"
            >
              <p className="font-semibold">{c.author}</p>
              <p className="text-gray-700">{c.content}</p>
              <p className="text-sm text-gray-500">📅 {c.date}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
