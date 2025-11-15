"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (!userData) return;

    try {
      setUser(JSON.parse(userData));
    } catch {}

    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Chargement...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* TITRE */}
      <h1 className="text-2xl font-bold text-gray-800">
        Tableau de bord
      </h1>

      {/* CARTE INFO MEMBRE */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Mes informations</h2>

        <p><strong>Nom :</strong> {user?.name}</p>
        <p><strong>Email :</strong> {user?.email}</p>
        <p><strong>Statut :</strong> {user?.status || "En attente"}</p>
      </div>

      {/* RACCOURCIS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        <Link
          href="/membre/profil"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">👤 Mon profil</h3>
          <p className="text-gray-600 text-sm">Voir et modifier mes informations</p>
        </Link>

        <Link
          href="/membre/forum"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">💬 Forum</h3>
          <p className="text-gray-600 text-sm">Participer au forum des militants</p>
        </Link>

        <Link
          href="/membre/publications"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">📝 Publications</h3>
          <p className="text-gray-600 text-sm">Voir ou créer des publications</p>
        </Link>

      </div>

      {/* ACTIVITÉS RÉCENTES (placeholder) */}
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">Activités récentes</h2>

        <ul className="text-gray-600 space-y-2">
          <li>• Aucune activité récente pour le moment.</li>
          <li className="text-sm text-gray-400">
            (Ce module sera connecté plus tard.)
          </li>
        </ul>
      </div>

    </div>
  );
}
