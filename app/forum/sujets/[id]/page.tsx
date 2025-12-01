"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import ProtectedRoute from "../../../../components/ProtectedRoute";
import IntranetHeader from "../../../../components/IntranetHeader";
import ForumNav from "../../../../components/ForumNav";
import Pagination from "../../../../components/Pagination";
import TagBadge from "../../../../components/TagBadge"; // nouveau

export default function TopicDetailsPage() {
  const { id } = useParams();

  const [topic, setTopic] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  const [newPost, setNewPost] = useState("");
  const [editing, setEditing] = useState<number | null>(null);
  const [editContent, setEditContent] = useState("");

  const [page, setPage] = useState(1);
  const perPage = 6;

  const API = process.env.NEXT_PUBLIC_API_URL;

  const reload = () => window.location.reload();

  // Charger user + topic + posts
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));

    fetch(`${API}/topics/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const now = new Date();

        const postsWithTimers = data.posts.map((p: any) => {
          const created = new Date(p.created_at);
          const diff = Math.floor((now.getTime() - created.getTime()) / (1000 * 60));
          p.timeRemaining = Math.max(0, 30 - diff);
          return p;
        });

        setTopic(data.topic);
        setPosts(postsWithTimers);
      });
  }, [API, id]);

  const paginated = posts.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(posts.length / perPage);

  // Publier un nouveau message
  const submitPost = async () => {
    if (!newPost.trim()) return;

    await fetch(`${API}/posts/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        topic_id: id,
        content: newPost,
      }),
    });

    setNewPost("");
    reload();
  };

  // Modifier message
  const saveEdit = async (postId: number) => {
    await fetch(`${API}/posts/${postId}/edit`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: editContent }),
    });

    setEditing(null);
    reload();
  };

  // Supprimer message (admin seulement)
  const deletePost = async (postId: number) => {
    if (!confirm("Supprimer ce message ?")) return;

    await fetch(`${API}/admin/forum/posts/${postId}`, {
      method: "DELETE",
    });

    reload();
  };

  // Signaler un message (nouveau)
  const reportPost = async (postId: number) => {
    const reason = prompt("Motif du signalement :");
    if (!reason) return;

    await fetch(`${API}/report`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post_id: postId, reason }),
    });

    alert("Signalement envoyé.");
  };

  return (
    <ProtectedRoute>
      <IntranetHeader userName={user?.name || "Utilisateur"} />
      <ForumNav />

      <main className="min-h-screen bg-[#F7F7F7] pt-10 pb-20">
        <section className="max-w-6xl mx-auto px-6">
          
          {/* ---- Navig Back ---- */}
          <Link href="/forum/sujets" className="text-[#166534] hover:underline">
            ← Retour aux sujets
          </Link>

          {/* ---- Titre ---- */}
          {topic && (
            <>
              <div className="flex items-center gap-3 mt-4">
                <h1 className="text-4xl font-extrabold text-[#166534]">
                  {topic.title}
                </h1>

                {/* Badge catégorie */}
                {topic.category_name && (
                  <TagBadge name={topic.category_name} />
                )}
              </div>

              <p className="text-gray-600 mt-3 mb-10">
                Sujet lancé par : <strong>{topic.author}</strong>
              </p>

              {/* Sujet verrouillé */}
              {topic.locked && (
                <p className="text-red-600 bg-red-100 border border-red-200 px-4 py-2 rounded-lg mb-6">
                  Ce sujet est verrouillé. Aucune réponse n’est possible.
                </p>
              )}
            </>
          )}

          {/* ---- Nouveau message ---- */}
          {!topic?.locked && (
            <div className="bg-white p-8 rounded-xl shadow-md border mb-12">
              <h2 className="text-2xl font-bold text-[#166534] mb-4">
                Publier un message
              </h2>

              <textarea
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#166534]"
                rows={4}
                placeholder="Votre contribution..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />

              <button
                onClick={submitPost}
                className="mt-5 bg-[#166534] text-white px-8 py-3 rounded-lg hover:bg-[#0f4a2c]"
              >
                Publier
              </button>
            </div>
          )}

          {/* ---- Liste des messages ---- */}
          <h2 className="text-3xl font-bold text-[#166534] mb-6">
            Messages ({posts.length})
          </h2>

          <div className="space-y-8">
            {paginated.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-xl shadow border"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#166534]">
                    {post.author}
                  </h3>

                  <span className="text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleString("fr-FR")}
                  </span>
                </div>

                {/* ---- Mode édition ---- */}
                {editing === post.id ? (
                  <div className="mt-4">
                    <textarea
                      className="w-full p-3 border rounded-lg"
                      rows={4}
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                    ></textarea>

                    <div className="flex gap-4 mt-3">
                      <button
                        onClick={() => saveEdit(post.id)}
                        className="px-6 py-2 bg-[#166534] text-white rounded-lg"
                      >
                        Enregistrer
                      </button>
                      <button
                        onClick={() => setEditing(null)}
                        className="px-6 py-2 text-gray-600"
                      >
                        Annuler
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="mt-3 text-gray-800">{post.content}</p>
                )}

                {/* ---- Informations supplémentaires ---- */}
                <div className="mt-3 text-sm text-gray-500">
                  {post.timeRemaining > 0 &&
                    post.user_id === user?.id && (
                      <p>
                        Encore {post.timeRemaining} minutes pour modifier votre
                        message.
                      </p>
                    )}
                </div>

                {/* ---- Actions ---- */}
                <div className="mt-4 flex gap-4">

                  {/* Modifier : membre auteur + délai */}
                  {post.user_id === user?.id && post.timeRemaining > 0 && (
                    <button
                      onClick={() => {
                        setEditing(post.id);
                        setEditContent(post.content);
                      }}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Modifier
                    </button>
                  )}

                  {/* Supprimer (admin) */}
                  {user?.role === "admin" && (
                    <button
                      onClick={() => deletePost(post.id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Supprimer
                    </button>
                  )}

                  {/* Signaler */}
                  {user?.role === "member" && (
                    <button
                      onClick={() => reportPost(post.id)}
                      className="text-sm text-orange-600 hover:underline"
                    >
                      Signaler
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ---- Pagination ---- */}
          <Pagination
            page={page}
            total={totalPages}
            onNext={() => setPage(page + 1)}
            onPrev={() => setPage(page - 1)}
          />

        </section>
      </main>
    </ProtectedRoute>
  );
}
