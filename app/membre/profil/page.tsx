"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfilPage() {
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
        Mon profil
      </h1>

      {/* CARD PROFIL */}
      <div className="bg-white p-6 rounded-lg shadow space-y-3">
        <p><strong>Nom :</strong> {user?.name}</p>
        <p><strong>Email :</strong> {user?.email}</p>
        <p><strong>Téléphone :</strong> {user?.phone}</p>
        <p><strong>Statut :</strong> {user?.status || "En attente"}</p>
        <p><strong>Niveau d’adhésion :</strong> {user?.membership_level || "Non défini"}</p>
        <p><strong>Date d'inscription :</strong> {user?.created_at?.substring(0, 10)}</p>

        <Link
          href="/membre/profil/edit"
          className="mt-4 inline-block bg-[#111827] text-white px-4 py-2 rounded hover:bg-black"
        >
          Modifier mon profil
        </Link>
      </div>

    </div>
  );
}
