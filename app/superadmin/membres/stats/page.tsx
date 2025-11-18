"use client";

import { useEffect, useState } from "react";
import {
  LineChart, Line,
  PieChart, Pie,
  BarChart, Bar,
  XAxis, YAxis, Tooltip, Legend,
  ResponsiveContainer, Cell,
} from "recharts";

const COLORS = ["#2ecc71", "#27ae60", "#1abc9c", "#16a085", "#f1c40f", "#e67e22"];

export default function MemberStatsPage() {
  const [stats, setStats] = useState<any>(null);

  async function loadStats() {
    const token = localStorage.getItem("superadminToken");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/members/stats`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const data = await res.json();
    setStats(data);
  }

  useEffect(() => {
    loadStats();
  }, []);

  if (!stats) {
    return (
      <div className="p-6 text-white">
        <p>Chargement des statistiques...</p>
      </div>
    );
  }

  return (
    <div className="p-6 text-white">

      <h1 className="text-4xl font-bold mb-8">Statistiques des Membres</h1>

      {/* ============================================================
          1. ÉVOLUTION MENSUELLE
      ============================================================ */}
      <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 mb-10">
        <h2 className="text-2xl font-bold mb-4">Évolution des Inscriptions (12 derniers mois)</h2>
        
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stats.monthly}>
            <XAxis dataKey="month" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#2ecc71" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ============================================================
          2. RÉPARTITION PAR SECTEUR
      ============================================================ */}
      <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 mb-10">
        <h2 className="text-2xl font-bold mb-4">Répartition par Secteur du Moungo</h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={stats.secteurs}
              dataKey="count"
              nameKey="secteur"
              outerRadius={120}
              fill="#2ecc71"
              label
            >
              {stats.secteurs.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* ============================================================
          3. RÉPARTITION PAR ARRONDISSEMENT
      ============================================================ */}
      <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 mb-10">
        <h2 className="text-2xl font-bold mb-4">Répartition par Arrondissement</h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={stats.arrondissements}>
            <XAxis dataKey="arrondissement" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#27ae60" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ============================================================
          4. RÉPARTITION NIVEAU ADHÉSION
      ============================================================ */}
      <div className="bg-[#145331] p-6 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Niveaux d’Adhésion (Bronze / Argent / Or)</h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={stats.levels}
              dataKey="count"
              nameKey="membership_level"
              outerRadius={120}
              label
            >
              {stats.levels.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
