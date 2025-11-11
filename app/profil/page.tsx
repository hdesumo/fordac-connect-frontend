"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProfilPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "/avatars/default.jpg",
    zone: "",
    arrondissement: "",
    joined: "",
    posts: 0,
    likes: 0,
    events: 0,
  });

  // ✅ Vérifie la connexion et charge le profil depuis le localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    setAuthenticated(true);

    const stored = localStorage.getItem("fordac_profile");
    if (stored) {
      const data = JSON.parse(stored);
      setUser((prev) => ({
        ...prev,
        name: data.name || "Militant FORDAC",
        email: data.email || "contact@fordac.org",
        avatar: data.avatar || "/avatars/default.jpg",
        zone: data.zone || "Moungo Sud",
        arrondissement: data.arrondissement || "Loum",
        joined: "Mars 2024",
        posts: 12,
        likes: 47,
        events: 5,
      }));
    } else {
      setUser({
        name: "Clarisse Nguimfack",
        email: "clarisse.nguimfack@fordac.org",
        avatar: "/avatars/clarisse.jpg",
        zone: "Moungo Sud",
        arrondissement: "Loum",
        joined: "Mars 2024",
        posts: 12,
        likes: 47,
        events: 5,
      });
    }
  }, [router]);

  if (!authenticated) return null;

  return (
    <main className="min-h-screen bg-gray-100 pt-24 pb-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Bande supérieure */}
        <div className="relative bg-gradient-to-r from-green-800 to-yellow-400 h-40">
          <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2">
            <Image
              src={user.avatar}
              alt="Avatar utilisateur"
              width={120}
              height={120}
              className="rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="mt-20 px-6 pb-10 text-center">
          <h1 className="text-3xl font-bold text-green-800 mb-1">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500 mt-1">
            {user.zone} – Arrondissement de {user.arrondissement}
          </p>

          {/* Statistiques principales */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-green-800">{user.posts}</p>
              <p className="text-gray-600 text-sm">Publications</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-800">{user.likes}</p>
              <p className="text-gray-600 text-sm">Mentions J’aime</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-800">{user.events}</p>
              <p className="text-gray-600 text-sm">Événements suivis</p>
            </div>
          </div>

          {/* Description personnelle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 max-w-2xl mx-auto text-gray-700 leading-relaxed"
          >
            <p>
              Membre actif du FORDAC depuis {user.joined}. Engagé(e) pour la
              justice sociale, la cohésion nationale et le développement
              durable. Je crois profondément que le changement commence par
              l’action citoyenne et la solidarité.
            </p>
          </motion.div>

          {/* --- STATISTIQUES DE PARTICIPATION --- */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Statistiques de participation
            </h2>
            <div className="grid md:grid-cols-3 gap-8 justify-items-center">
              {/* Cercle Publications */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-40 h-40 rounded-full bg-green-100 flex items-center justify-center shadow-inner"
              >
                <svg
                  className="absolute top-0 left-0"
                  width="160"
                  height="160"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#166534"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={`${(user.posts / 20) * 314},314`}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                  />
                </svg>
                <div className="relative z-10">
                  <p className="text-3xl font-bold text-green-800">
                    {user.posts}
                  </p>
                  <p className="text-sm text-gray-600">Posts</p>
                </div>
              </motion.div>

              {/* Cercle Likes */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-40 h-40 rounded-full bg-yellow-100 flex items-center justify-center shadow-inner"
              >
                <svg
                  className="absolute top-0 left-0"
                  width="160"
                  height="160"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#F5C542"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={`${(user.likes / 100) * 314},314`}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                  />
                </svg>
                <div className="relative z-10">
                  <p className="text-3xl font-bold text-yellow-600">
                    {user.likes}
                  </p>
                  <p className="text-sm text-gray-600">J’aime</p>
                </div>
              </motion.div>

              {/* Cercle Événements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-40 h-40 rounded-full bg-green-50 flex items-center justify-center shadow-inner"
              >
                <svg
                  className="absolute top-0 left-0"
                  width="160"
                  height="160"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#2e7d32"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={`${(user.events / 10) * 314},314`}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                  />
                </svg>
                <div className="relative z-10">
                  <p className="text-3xl font-bold text-green-700">
                    {user.events}
                  </p>
                  <p className="text-sm text-gray-600">Événements</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* --- HISTORIQUE D’ACTIVITÉ --- */}
          <section className="mt-16 text-left">
            <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
              Historique d’activité
            </h2>
            <div className="relative border-l-2 border-green-200 max-w-2xl mx-auto pl-6">
              {[
                {
                  icon: "🟩",
                  date: "11 novembre 2025",
                  text: "Mise à jour du profil et de la localisation (Moungo Sud – Loum).",
                },
                {
                  icon: "💬",
                  date: "9 novembre 2025",
                  text: "Publication d’un message sur le Forum des Militants : « Le changement commence localement ! »",
                },
                {
                  icon: "📅",
                  date: "4 novembre 2025",
                  text: "Participation à la rencontre citoyenne de Njombé-Penja.",
                },
                {
                  icon: "👍",
                  date: "28 octobre 2025",
                  text: "Réaction positive à la publication du Président du FORDAC.",
                },
                {
                  icon: "📝",
                  date: "12 mars 2024",
                  text: "Adhésion officielle au FORDAC – Moungo Sud.",
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="mb-6 ml-2"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{event.icon}</div>
                    <div>
                      <p className="text-gray-800 font-medium">{event.text}</p>
                      <p className="text-gray-500 text-sm mt-1">{event.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* --- Boutons d’action --- */}
          <div className="mt-14 flex justify-center space-x-4">
            <Link
              href="/forum"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full shadow-md transition"
            >
              Voir mes publications
            </Link>
            <Link
              href="/profil/edit"
              className="bg-white border border-green-700 text-green-700 px-6 py-2 rounded-full hover:bg-green-50 transition"
            >
              Modifier mon profil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
