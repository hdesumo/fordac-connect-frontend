"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ThumbsUp, MessageSquare, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function MesPublicationsPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: "",
    avatar: "/avatars/default.jpg",
  });
  const [posts, setPosts] = useState([]);

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

    // 🔁 Charger les publications locales (ajoutées via la page "nouvelle publication")
    const storedPosts = JSON.parse(localStorage.getItem("fordac_posts") || "[]");

    // 🧩 Fallback : publications fictives si aucune publication locale
    const samplePosts = [
      {
        id: 1,
        content:
          "Le développement du Moungo passe par la mobilisation locale et la transparence dans nos actions.",
        date: "11 novembre 2025",
        likes: 24,
        comments: 3,
      },
      {
        id: 2,
        content:
          "Je salue la nouvelle initiative du FORDAC pour la formation des jeunes en leadership communautaire.",
        date: "6 novembre 2025",
        likes: 42,
        comments: 7,
      },
      {
        id: 3,
        content:
          "Très honorée d’avoir participé à la rencontre citoyenne de Loum ! Ensemble, faisons bouger les lignes.",
        date: "28 octobre 2025",
        likes: 37,
        comments: 5,
      },
    ];

    setPosts(storedPosts.length > 0 ? storedPosts : samplePosts);
  }, [router]);

  if (!authenticated) return null;

  return (
    <main className="min-h-screen bg-gray-100 pt-24 pb-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-800">
            Mes publications
          </h1>
          <Link
            href="/mes-publications/nouvelle"
            className="flex items-center bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            <PlusCircle size={18} className="mr-2" /> Nouvelle publication
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600">
            Vous n’avez encore publié aucun message.
          </p>
        ) : (
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="border border-gray-200 rounded-xl p-6 shadow-sm bg-gray-50 hover:bg-white transition"
              >
                <div className="flex items-start space-x-4">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={50}
                    height={50}
                    className="rounded-full border border-gray-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-green-800">
                          {user.name}
                        </h3>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-800 leading-relaxed">
                      {post.content}
                    </p>

                    <div className="mt-4 flex items-center space-x-6 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <ThumbsUp size={16} />
                        <span>{post.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MessageSquare size={16} />
                        <span>{post.comments}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
