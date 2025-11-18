"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import adminFetch from "@/utils/adminFetch";

export default function MessageTargetsPage() {
  const { id } = useParams();
  const [targets, setTargets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadTargets() {
    setLoading(true);

    try {
      const res = await adminFetch(`/api/admin/messages/targets/${id}`);
      const data = await res.json();

      if (Array.isArray(data)) setTargets(data);

    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadTargets();
  }, []);

  if (loading) return <p>Chargement…</p>;

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Membres ciblés</h1>

        <Link
          href={`/admin/messages/${id}`}
          className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Retour au message
        </Link>
      </div>

      <div className="bg-white rounded shadow p-4 overflow-auto">

        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Nom</th>
              <th className="p-2">Email</th>
              <th className="p-2">Téléphone</th>
              <th className="p-2">Département</th>
              <th className="p-2">Statut</th>
            </tr>
          </thead>

          <tbody>
            {targets.map((m) => (
              <tr key={m.id} className="border-t">
                <td className="p-2">{m.name}</td>
                <td className="p-2">{m.email}</td>
                <td className="p-2">{m.phone}</td>
                <td className="p-2">{m.departement}</td>
                <td className="p-2 capitalize">{m.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
