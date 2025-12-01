"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { adminFetch } from "@/utils/adminFetch";

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadMessages() {
    setLoading(true);

    try {
      // 🔥 Correction TypeScript : ajout du 2ᵉ argument {}
      const res = await adminFetch("/api/admin/messages/history", {});
      const data = await res.json();

      if (Array.isArray(data)) setMessages(data);

    } catch (e) {
      console.error("Erreur chargement messages:", e);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadMessages();
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Historique des messages</h1>

        <Link
          href="/admin/messages/new"
          className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Nouveau message
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg p-4 overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Titre</th>
              <th className="p-2">Type</th>
              <th className="p-2">Date</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((m) => (
              <tr key={m.id} className="border-t">
                <td className="p-2">{m.title}</td>
                <td className="p-2 capitalize">{m.target_type}</td>
                <td className="p-2">
                  {new Date(m.created_at).toLocaleString("fr-FR")}
                </td>

                <td className="p-2">
                  <Link
                    href={`/admin/messages/${m.id}`}
                    className="text-blue-700 underline"
                  >
                    Voir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
