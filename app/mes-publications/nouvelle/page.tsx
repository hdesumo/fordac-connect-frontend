"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NouvellePublicationPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: "",
    avatar: "/avatars/default.jpg",
  });
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    setAuthenticated(true);

    const stored = localStorage.getItem("fordac_profile");
    const profile = stored
      ? JSON.parse(stored)
      : { name: "Clarisse Nguimfack", avatar: "/avatars/clarisse.jpg" };
    setUser(profile);
  }, [router]);

  const handlePublish = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setMessage("⚠️ Veuillez saisir un texte avant de publier.");
      return;
    }

    // Simulation d’enregistrement du post
    const newPost = {
      id: Date.now(),
      author: user.name,
      avatar: user.avatar,
      content,
      date: new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      likes: 0,
      comments: 0,
    };

    // Enregistrer temporairement dans le localStorage
    const existingPosts = JSON.parse(localStorage.getItem("fordac_posts") || "[]");
    localStorage.setItem("fordac_posts", JSON.stringify([newPost, ...existingPosts]));

    setMessage("✅ Publication envoyée avec succès !");
    setTimeout(() => router.push("/mes-publications"), 1500);
  };

  if (!authenticated) return null;

  return (
    <main className="min-h-screen bg-gray-100 pt-24 pb-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
          Nouvelle publication
        </h1>

        <div className="flex items-center space-x-3 mb-6">
          <Image
            src={user.avatar}
            alt={user.name}
            width={50}
            height={50}
            className="rounded-full border border-gray-300"
          />
          <div>
            <p className="font-semibold text-green-800">{user.name}</p>
            <p className="text-gray-500 text-sm">Publie un message</p>
          </div>
        </div>

        <form onSubmit={handlePublish}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Exprimez vos idées, partagez vos réflexions..."
            className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
          ></textarea>

          {message && (
            <p className="text-center mt-4 text-green-700 font-medium">
              {message}
            </p>
          )}

          <div className="mt-6 flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded-full shadow-md transition"
            >
              Publier
            </button>
            <Link
              href="/mes-publications"
              className="border border-green-700 text-green-700 px-8 py-2 rounded-full hover:bg-green-50 transition"
            >
              Annuler
            </Link>
          </div>
        </form>

        <p className="text-xs text-gray-400 text-center mt-8">
          Une fois publiée, votre publication ne pourra plus être modifiée ni supprimée.  
          Seul l’administrateur du forum peut intervenir.
        </p>
      </div>
    </main>
  );
}
