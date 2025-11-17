"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import adminFetch from "@/utils/adminFetch";
import { Member } from "@/types/Member";

export default function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadMember() {
    setLoading(true);
    setError(null);

    try {
      const res = await adminFetch(`/api/admin/membres/${id}`, {
        method: "GET",
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Erreur serveur.");
        return;
      }

      setMember(data);
    } catch (e) {
      console.error(e);
      setError("Impossible de joindre le serveur.");
    }

    setLoading(false);
  }

  useEffect(() => {
    if (id) loadMember();
  }, [id]);

  async function updateStatus(newStatus: string) {
    try {
      await adminFetch(`/api/admin/membres/${id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status: newStatus }),
      });

      loadMember();
    } catch (e) {
      console.error(e);
      alert("Erreur lors du changement de statut.");
    }
  }

  if (loading) return <div className="p-6">Chargement...</div>;
  if (error)
    return <div className="p-6 text-red-600 bg-red-100 border">{error}</div>;
  if (!member) return <div className="p-6">Membre introuvable.</div>;

  return (
    <div className="p-6 space-y-6">

      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Profil membre</h1>
        <Link
          href="/admin/membres"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Retour
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-xl font-semibold mb-4">{member.name}</h2>

        <div className="space-y-2">
          <p>Email : <strong>{member.email}</strong></p>
          <p>Téléphone : <strong>{member.phone}</strong></p>
          <p>Niveau : {member.membership_level || "-"}</p>
          <p>Secteur : {member.secteur || "-"}</p>
          <p>Arrondissement : {member.arrondissement || "-"}</p>
          <p>Quartier : {member.quartier || "-"}</p>
          <p>Profession : {member.profession || "-"}</p>
          <p>Date de naissance : {member.birthdate || "-"}</p>
          <p>Statut : <strong className="capitalize">{member.status}</strong></p>
          <p>Inscription : {member.created_at}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-lg font-semibold mb-4">Actions</h2>

        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-green-700 text-white rounded"
            onClick={() => updateStatus("approved")}
          >
            Approuver
          </button>

          <button
            className="px-4 py-2 bg-yellow-600 text-white rounded"
            onClick={() => updateStatus("pending")}
          >
            Remettre en attente
          </button>

          <button
            className="px-4 py-2 bg-red-700 text-white rounded"
            onClick={() => updateStatus("blocked")}
          >
            Bloquer
          </button>

          <button
            className="px-4 py-2 bg-gray-700 text-white rounded"
            onClick={() => updateStatus("deleted")}
          >
            Supprimer (soft delete)
          </button>
        </div>
      </div>

    </div>
  );
}
