"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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

export default function StatsChart({ SUPERADMIN_API }) {
  const [sectorStats, setSectorStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const COLORS = ["#166534", "#22C55E"];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${SUPERADMIN_API}/stats`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("superadmin_token")}`,
          },
        });

        const data = await res.json();

        if (res.ok && data.secteurs) {
          setSectorStats(
            data.secteurs.map((s) => ({
              name: s.secteur,
              value: Number(s.count),
            }))
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Chargement des statistiques...</p>;

  return (
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
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
