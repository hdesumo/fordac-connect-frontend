"use client";

import { useEffect, useState } from "react";

export default function MemberDashboard() {
  const [profile, setProfile] = useState<any>(null);
  const [notifications, setNotifications] = useState<any[]>([]);

  async function loadData() {
    const token = localStorage.getItem("memberToken");

    const p = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/members/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setProfile(await p.json());

    const n = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/members/notifications`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setNotifications(await n.json());
  }

  useEffect(() => {
    loadData();
  }, []);

  if (!profile) return <div className="p-6 text-white">Chargement...</div>;

  return (
    <div className="p-6 text-white">

      <h1 className="text-4xl font-bold mb-6">
        Bienvenue, {profile.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* PROFIL */}
        <div className="bg-[#145331] p-6 rounded-xl border border-green-800">
          <h2 className="text-2xl font-bold mb-4">Mes informations</h2>

          <p><b>Email :</b> {profile.email}</p>
          <p><b>Téléphone :</b> {profile.phone}</p>
          <p><b>Quartier :</b> {profile.quartier}</p>
          <p><b>Secteur :</b> {profile.secteur}</p>
          <p><b>Arrondissement :</b> {profile.arrondissement}</p>
          <p><b>Niveau :</b> {profile.membership_level}</p>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-[#145331] p-6 rounded-xl border border-green-800">
          <h2 className="text-2xl font-bold mb-4">Notifications</h2>

          {notifications.length === 0 && <p>Aucune notification.</p>}

          {notifications.map((n, i) => (
            <div key={i} className="border-b border-green-700 py-2">
              <p className="font-bold">{n.title}</p>
              <p className="text-sm">{n.message}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
