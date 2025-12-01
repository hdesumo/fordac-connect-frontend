"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import Pagination from "@/components/Pagination";
import EditorBox from "@/components/EditorBox";
import Link from "next/link";

export default function ForumPostPage() {
  const { id } = useParams();
  const router = useRouter();

  const [post, setPost] = useState<any>(null);
  const [replies, setReplies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [replyText, setReplyText] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [canEdit, setCanEdit] = useState(false);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("memberToken") : null;

  useEffect(() => {
    fetchPost();
  }, [page]);

  const fetchPost = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/forum/posts/${id}?page=${page}`,
      { headers: { Authorization: "Bearer " + token } }
    );

    const data = await res.json();

    setPost(data.post || null);
    setReplies(data.replies || []);
    setTotalPages(data.totalPages || 1);

    // gestion édition 30 min
    if (data.post) {
      const created = new Date(data.post.created_at).getTime();
      const now = Date.now();
      const diff = (now - created) / 60000; // minutes
      setCanEdit(diff < 30);
    }
  };

  const submitReply = async () => {
    if (replyText.trim().length < 5) return alert("Message trop court.");

    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/forum/replies/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ post_id: id, content: replyText }),
      }
    );

    setReplyText("");
    fetchPost();
  };

  return (
    <ProtectedRoute>
      <div className="bg-white w-full">

        {/* HERO */}
        <section className="bg-[#166534] py-16 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Publication
          </h1>
        </section>

        {/* CONTENU */}
        <div className="max-w-4xl mx-auto px-6 py-12">

          {!post ? (
            <p className="text-gray-600">Chargement...</p>
          ) : (
            <>
              {/* POST */}
              <div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
                <h2 className="text-3xl font-bold text-[#166534]">
                  {post.title}
                </h2>

                <p className="text-gray-700 leading-relaxed mt-4 whitespace-pre-wrap">
                  {post.content}
                </p>

                <div className="text-sm text-gray-500 mt-4">
                  Posté le {new Date(post.created_at).toLocaleString()}
                </div>

                {canEdit && (
                  <Link
                    href={`/forum/post/${id}/edit`}
                    className="inline-block text-sm mt-4 text-blue-700 hover:underline"
                  >
                    Modifier votre message (encore {Math.ceil(30 - ((Date.now() - new Date(post.created_at).getTime()) / 60000))} minutes)
                  </Link>
                )}
              </div>

              {/* REPLIES */}
              <h3 className="text-2xl font-bold text-[#166534] mb-4">
                Réponses
              </h3>

              <div className="space-y-5 mb-6">
                {replies.length === 0 && (
                  <p className="text-gray-600">Aucune réponse pour le moment.</p>
                )}

                {replies.map((rep: any) => (
                  <div
                    key={rep.id}
                    className="bg-white border rounded-lg p-5 shadow-sm"
                  >
                    <p className="text-gray-800 whitespace-pre-wrap">
                      {rep.content}
                    </p>
                    <div className="text-sm text-gray-500 mt-3">
                      Posté le {new Date(rep.created_at).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />

              {/* REPLY BOX */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold text-[#166534] mb-2">
                  Répondre à cette publication
                </h4>

                <EditorBox
                  value={replyText}
                  onChange={setReplyText}
                  placeholder="Votre réponse..."
                />

                <button
                  onClick={submitReply}
                  className="mt-4 bg-[#166534] hover:bg-[#0f4a2c] text-white 
                             font-semibold px-6 py-2 rounded-md transition"
                >
                  Publier la réponse
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
