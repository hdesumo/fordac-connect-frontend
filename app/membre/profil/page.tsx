"use client";

<MembreTopbar />

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfilPage() {
  const [profile, setProfile] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  async function loadProfile() {
    const token = localStorage.getItem("memberToken");

    if (!token) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/members/profile`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await res.json();
    setProfile(data);
    setLoaded(true);
  }

  useEffect(() => {
    loadProfile();
  }, []);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Chargement...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="p-6 text-white">
        Impossible de charger votre profil.
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 text-white">

      {/* TITRE */}
      <h1 className="text-3xl font-bold">
        Mon profil
      </h1>

      {/* PROFIL CARD */}
      <div className="bg-[#145331] p-6 rounded-xl border border-green-800 space-y-3">

        <p><strong>Nom :</strong> {profile.name}</p>
        <p><strong>Email :</strong> {profile.email}</p>
        <p><strong>Téléphone :</strong> {profile.phone}</p>

        <p>
          <strong>Quartier :</strong>{" "}
          {profile.quartier || "Non renseigné"}
        </p>

        <p>
          <strong>Secteur :</strong>{" "}
          {profile.secteur || "Non renseigné"}
        </p>

        <p>
          <strong>Arrondissement :</strong>{" "}
          {profile.arrondissement || "Non renseigné"}
        </p>

        <p>
          <strong>Niveau d’adhésion :</strong>{" "}
          {profile.membership_level || "Non défini"}
        </p>

        <p>
          <strong>Date d'inscription :</strong>{" "}
          {profile.created_at?.substring(0, 10)}
        </p>

        <Link
          href="/membre/profil/edit"
          className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold"
        >
          Modifier mon profil
        </Link>

      </div>

    </div>
  );
}
