"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import Pagination from "@/components/Pagination";

export default function ForumTopicPage() {
  const { id } = useParams();
  const [topic, setTopic] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("memberToken")
      : null;

  useEffect(() => {
    fetchTopic();
    fetchPosts();
  }, [id, page]);

  const fetchTopic = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/forum/topics/${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      const data = await res.json();
      setTopic(data.topic || null);
    } catch (err) {
      console.error("Erreur topic:", err);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/forum/topics/${id}/posts?page=${page}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      const data = await res.json();
      setPosts(data.posts || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("Erreur posts:", err);
    }
  };

  return (
    <ProtectedRoute>
      <div className="w-full bg-white">

        {/* HERO */}
        <section className="bg-[#166534] py-16 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            {topic ? topic.title : "Chargement..."}
          </h1>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto text-lg">
            {topic?.description ||
              "Sélectionnez une publication pour rejoindre les échanges."}
          </p>
        </section>

        {/* POSTS LIST */}
        <section className="max-w-5xl mx-auto px-6 py-14">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#166534]">
              Publications
            </h2>

            <Link
              href={`/forum/sujets/${id}/nouveau`}
              className="bg-[#166534] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#0f4a2c] transition"
            >
              Nouveau post
            </Link>
          </div>

          {posts.length === 0 ? (
            <p className="text-gray-600">Aucune publication dans cette thématique.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post: any) => (
                <Link
                  key={post.id}
                  href={`/forum/post/${post.id}`}
                  className="block bg-white border rounded-xl p-5 shadow-sm hover:shadow-md hover:bg-green-50 transition"
                >
                  <h3 className="text-xl font-semibold text-[#166534]">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mt-2 line-clamp-2">
                    {post.content}
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    Posté le {new Date(post.created_at).toLocaleDateString()}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </section>
      </div>
    </ProtectedRoute>
  );
}
