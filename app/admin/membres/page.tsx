"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import adminFetch from "@/utils/adminFetch";
import { Member } from "@/types/Member";

export default function AdminMembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  async function loadMembers() {
    setLoading(true);
    setError(null);

    try {
      const res = await adminFetch("/api/admin/membres", {
        method: "GET",
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Erreur serveur.");
        setMembers([]);
        return;
      }

      if (!Array.isArray(data)) {
        setError("Réponse serveur invalide.");
        setMembers([]);
        return;
      }

      setMembers(data);
    } catch (e) {
      console.error(e);
      setError("Impossible de joindre le serveur.");
      setMembers([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadMembers();
  }, []);

  const filtered = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.email.toLowerCase().includes(search.toLowerCase()) ||
    m.phone.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 text-gray-900">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Liste des membres</h1>

        <Link
          href="/admin/dashboard"
          className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Retour au dashboard
        </Link>
      </div>

      <div className="bg-white p-4 rounded-lg shadow border">
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded border border-red-300">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-gray-700">Chargement...</div>
      ) : (
        <div className="overflow-auto rounded-lg border bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-3">Nom</th>
                <th className="p-3">Email</th>
                <th className="p-3">Téléphone</th>
                <th className="p-3">Niveau</th>
                <th className="p-3">Secteur</th>
                <th className="p-3">Arrondissement</th>
                <th className="p-3">Quartier</th>
                <th className="p-3">Statut</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((m) => (
                <tr key={m.id} className="border-t">
                  <td className="p-3">{m.name}</td>
                  <td className="p-3">{m.email}</td>
                  <td className="p-3">{m.phone}</td>
                  <td className="p-3">{m.membership_level || "-"}</td>
                  <td className="p-3">{m.secteur || "-"}</td>
                  <td className="p-3">{m.arrondissement || "-"}</td>
                  <td className="p-3">{m.quartier || "-"}</td>
                  <td className="p-3 capitalize">{m.status}</td>

                  <td className="p-3">
                    <Link
                      href={`/admin/membres/${m.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Voir
                    </Link>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="p-4 text-center text-gray-500">
                    Aucun membre trouvé.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}
