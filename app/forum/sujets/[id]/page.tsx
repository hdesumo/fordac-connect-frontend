"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function TopicDetails() {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTopic() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/forum/topics/${id}`
        );
        const data = await res.json();
        setTopic(data.topic);
        setPosts(data.posts);
      } catch (error) {
        console.error("Erreur topic :", error);
      } finally {
        setLoading(false);
      }
    }
    loadTopic();
  }, [id]);

  const handleSubmit = async () => {
    if (!newPost.trim()) return;

    const user = JSON.parse(localStorage.getItem("user"));
    const author = user?.name || "Militant";

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/forum/posts/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic_id: id,
          author,
          content: newPost,
        }),
      });

      setNewPost("");
      alert("Votre message a été envoyé avec succès.");
    } catch (error) {
      console.error("Erreur publication :", error);
    }
  };

  return (
    <ProtectedRoute>
      <main className="bg-[#0c2e25] min-h-screen text-white pt-24 pb-16">
        <section className="max-w-5xl mx-auto px-6">

          {loading && (
            <p className="text-center text-lg text-gray-300">Chargement...</p>
          )}

          {topic && (
            <>
              <h1 className="text-4xl font-bold mb-4 text-[#c8a45d]">
                {topic.title}
              </h1>

              <p className="text-gray-200 mb-10">{topic.description}</p>

              {/* Formulaire de post */}
              <div className="bg-[#154933] p-6 rounded-lg shadow-lg mb-12">
                <textarea
                  placeholder="Votre message..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="w-full p-4 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c8a45d]"
                  rows={4}
                ></textarea>

                <button
                  onClick={handleSubmit}
                  className="mt-4 bg-[#c8a45d] text-[#0c2e25] font-semibold px-6 py-3 rounded-md hover:bg-[#d8b36d] transition"
                >
                  Envoyer
                </button>

                <p className="text-sm text-gray-300 mt-2">
                  Votre message sera visible bientôt.
                </p>
              </div>

              {/* Liste des posts approuvés */}
              <h2 className="text-3xl font-bold text-[#c8a45d] mb-6">
                Messages approuvés
              </h2>

              {posts.length === 0 ? (
                <p className="text-gray-300">Aucun message pour le moment.</p>
              ) : (
                <div className="space-y-6">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-[#123f2f] p-6 rounded-lg shadow-md border border-[#1d6047]"
                    >
                      <h3 className="text-lg font-semibold text-[#c8a45d]">
                        {post.author}
                      </h3>
                      <p className="text-gray-100 leading-relaxed mt-2">{post.content}</p>
                      <span className="text-sm text-gray-400">
                        {new Date(post.created_at).toLocaleDateString("fr-FR")}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </section>
      </main>
    </ProtectedRoute>
  );
}
