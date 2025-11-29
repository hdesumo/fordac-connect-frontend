"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { SUPERADMIN_API } from "../../../utils/constants";
import { API_BASE_URL } from "../../../utils/constants";

const ResponsiveContainer = dynamic(
  () => import("recharts").then((mod) => mod.ResponsiveContainer),
  { ssr: false }
);

const PieChart = dynamic(
  () => import("recharts").then((mod) => mod.PieChart),
  { ssr: false }
);

const Pie = dynamic(
  () => import("recharts").then((mod) => mod.Pie),
  { ssr: false }
);

const Cell = dynamic(
  () => import("recharts").then((mod) => mod.Cell),
  { ssr: false }
);

export default function SuperAdminStatsPage() {
  const [loading, setLoading] = useState(true);
  const [sectorStats, setSectorStats] = useState([]);

  const COLORS = ["#166534", "#22C55E"];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // 🔥 CORRECTION ICI
        const res = await fetch(`${SUPERADMIN_API}/stats`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("superadmin_token")}`,
          },
        });

        const data = await res.json();

        console.log("STATS REÇUES :", data);

        if (res.ok && data.secteurs) {
          setSectorStats(
            data.secteurs.map((s) => ({
              name: s.secteur,
              value: Number(s.count),
            }))
          );
        }
      } catch (error) {
        console.error("Erreur lors du chargement des stats :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Statistiques des membres</h1>

      {loading ? (
        <p>Chargement des statistiques...</p>
      ) : (
        <div className="w-full h-96 bg-white rounded-lg shadow p-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sectorStats}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {sectorStats.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
