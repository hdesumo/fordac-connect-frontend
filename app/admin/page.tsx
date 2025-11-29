"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("fordac_token");

    if (!token) {
      setErrorMsg("Token non trouvé. Veuillez vous reconnecter.");
      setLoading(false);
      return;
    }

    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/dashboard/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          const err = await res.json();
          setErrorMsg(err.message || "Impossible de charger les statistiques.");
          setLoading(false);
          return;
        }

        const data = await res.json();
        setStats(data);
      } catch (error) {
        setErrorMsg("Erreur serveur lors du chargement des statistiques.");
      }
      setLoading(false);
    };

    fetchStats();
  }, []);

  if (loading)
    return <div className="p-5 text-center text-gray-600">Chargement...</div>;

  if (errorMsg)
    return (
      <div className="p-5 bg-red-100 text-red-700 rounded text-center">
        {errorMsg}
      </div>
    );

  if (!stats)
    return (
      <div className="p-5 bg-yellow-100 text-yellow-700 rounded text-center">
        Aucune donnée disponible pour le moment.
      </div>
    );

  return (
    <div className="space-y-6">

      <h1 className="text-2xl md:text-3xl font-bold text-green-900 text-center md:text-left">
        Tableau de bord Admin
      </h1>

      {/* GRID RESPONSIVE : smartphone = 1 colonne, tablette = 2, desktop = 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

        <div className="bg-white shadow p-5 rounded-lg hover:shadow-md transition">
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">
            Membres inscrits
          </h3>
          <p className="text-3xl font-bold text-green-700">
            {stats.totalMembers}
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg hover:shadow-md transition">
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">
            Notifications non lues
          </h3>
          <p className="text-3xl font-bold text-green-700">
            {stats.unreadNotifications}
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg hover:shadow-md transition">
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">
            Adhésions validées
          </h3>
          <p className="text-3xl font-bold text-green-700">
            {stats.approvedMemberships}
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg hover:shadow-md transition">
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">
            En attente
          </h3>
          <p className="text-3xl font-bold text-green-700">
            {stats.pendingMemberships}
          </p>
        </div>

      </div>
    </div>
  );
}
