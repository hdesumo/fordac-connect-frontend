"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Pagination from "@/components/Pagination";
import { useParams } from "next/navigation";

export default function AdminTopicDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const token = typeof window !== "undefined"
    ? localStorage.getItem("adminToken")
    : null;

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/forum/posts/${id}?page=${page}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const data = await res.json();
    setPost(data.post || null);
    setReplies(data.replies || []);
    setTotalPages(data.totalPages || 1);
  };

  const handleApprove = async (replyId: number) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/forum/replies/${replyId}/approve`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    fetchData();
  };

  const handleDelete = async (replyId: number) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/forum/replies/${replyId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    fetchData();
  };

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto py-10 px-4">
        {!post ? (
          <p className="text-gray-600">Chargement...</p>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-green-700 mb-4">
              {post.title}
            </h1>

            <div className="bg-white p-4 rounded-lg border mb-6">
              <p className="text-gray-800">{post.content}</p>
            </div>

            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Réponses
            </h2>

            <div className="space-y-4">
              {replies.map((reply: any) => (
                <div
                  key={reply.id}
                  className="p-4 bg-white rounded-lg border shadow-sm"
                >
                  <p className="text-gray-800 mb-3">{reply.content}</p>

                  <div className="flex gap-3">
                    {!reply.approved && (
                      <button
                        onClick={() => handleApprove(reply.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded"
                      >
                        Approuver
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(reply.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </div>
    </ProtectedRoute>
  );
}
