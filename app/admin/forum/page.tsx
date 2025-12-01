"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute"; // ✅ Correction IMPORT
import { useEffect, useState } from "react";

export default function AdminForumDashboard() {
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [stats, setStats] = useState({
    topics: 0,
    posts: 0,
    reports: 0,
    categories: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch(`${API}/admin/forum/stats`, {
          cache: "no-store",
        });
        const data = await res.json();
        setStats(data);
      } catch (e) {
        console.error("Erreur chargement stats forum admin:", e);
      }
    }

    loadStats();
  }, [API]);

  return (
    <ProtectedRoute adminOnly>
      <main className="min-h-screen p-10 bg-[#F7F7F7]">

        <h1 className="text-4xl font-extrabold text-[#166534] mb-10">
          Tableau de bord du Forum
        </h1>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white p-6 rounded-xl shadow border text-center">
            <p className="text-5xl font-bold text-[#166534]">{stats.topics}</p>
            <p className="text-gray-600 mt-2">Sujets</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border text-center">
            <p className="text-5xl font-bold text-[#166534]">{stats.posts}</p>
            <p className="text-gray-600 mt-2">Messages</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border text-center">
            <p className="text-5xl font-bold text-[#166534]">
              {stats.reports}
            </p>
            <p className="text-gray-600 mt-2">Signalements</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border text-center">
            <p className="text-5xl font-bold text-[#166534]">
              {stats.categories}
            </p>
            <p className="text-gray-600 mt-2">Catégories</p>
          </div>

        </div>

        {/* Liens rapides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Link
            href="/admin/forum/topics"
            className="bg-white p-8 rounded-xl shadow border hover:bg-gray-50"
          >
            <h3 className="text-2xl font-bold text-[#166534]">Gérer les Sujets</h3>
            <p className="text-gray-600 mt-2">Voir, modérer, verrouiller…</p>
          </Link>

          <Link
            href="/admin/forum/posts"
            className="bg-white p-8 rounded-xl shadow border hover:bg-gray-50"
          >
            <h3 className="text-2xl font-bold text-[#166534]">Tous les Messages</h3>
            <p className="text-gray-600 mt-2">Liste globale des messages.</p>
          </Link>

          <Link
            href="/admin/forum/signalements"
            className="bg-white p-8 rounded-xl shadow border hover:bg-gray-50"
          >
            <h3 className="text-2xl font-bold text-[#166534]">Signalements</h3>
            <p className="text-gray-600 mt-2">Messages signalés par les membres.</p>
          </Link>

          <Link
            href="/admin/forum/categories"
            className="bg-white p-8 rounded-xl shadow border hover:bg-gray-50"
          >
            <h3 className="text-2xl font-bold text-[#166534]">Catégories</h3>
            <p className="text-gray-600 mt-2">Créer et gérer les catégories.</p>
          </Link>

        </div>

      </main>
    </ProtectedRoute>
  );
}
