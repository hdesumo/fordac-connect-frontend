"use client";

import { useEffect, useState } from "react";
import { getDashboardStats } from "@/lib/adminApi";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) return;

    async function load() {
      const data = await getDashboardStats(token);

      if (!data) {
        console.error("⚠ Impossible de charger les statistiques");
      } else {
        setStats(data);
      }

      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Chargement du tableau de bord…
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>

      {!stats ? (
        <p className="text-red-500">Impossible de charger les statistiques</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 shadow bg-white rounded">
            <h2 className="font-bold">Membres</h2>
            <p>{stats.total_members ?? 0}</p>
          </div>

          <div className="p-4 shadow bg-white rounded">
            <h2 className="font-bold">Publications</h2>
            <p>{stats.total_posts ?? 0}</p>
          </div>

          <div className="p-4 shadow bg-white rounded">
            <h2 className="font-bold">Notifications</h2>
            <p>{stats.total_notifications ?? 0}</p>
          </div>
        </div>
      )}
    </div>
  );
}
