"use client";

import { useEffect, useState } from "react";
import adminFetch from "@/utils/adminFetch";
import Link from "next/link";
import { AdminMessage } from "@/types/AdminMessage";

export default function MessagesAdminPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [targetType, setTargetType] = useState<"global"|"targeted"|"member">("global");

  const [departement, setDepartement] = useState("");
  const [secteur, setSecteur] = useState("");
  const [arrondissement, setArrondissement] = useState("");
  const [quartier, setQuartier] = useState("");
  const [memberId, setMemberId] = useState("");

  const [history, setHistory] = useState<AdminMessage[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadHistory() {
    setLoading(true);

    try {
      const res = await adminFetch("/api/admin/messages/history");
      const data = await res.json();

      if (Array.isArray(data)) setHistory(data);
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadHistory();
  }, []);

  async function sendMessage() {
    if (!title || !content) {
      alert("Veuillez remplir le titre et le message.");
      return;
    }

    let payload: any = { title, content };

    let url = "/api/admin/messages/broadcast";

    if (targetType === "targeted") {
      url = "/api/admin/messages/targeted";
      payload = {
        title,
        content,
        departement,
        secteur,
        arrondissement,
        quartier
      };
    }

    if (targetType === "member") {
      if (!memberId) {
        alert("Veuillez entrer l’ID du membre.");
        return;
      }
      url = `/api/admin/messages/member/${memberId}`;
    }

    try {
      const res = await adminFetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Erreur lors de l’envoi.");
        return;
      }

      alert("Message envoyé avec succès !");
      loadHistory();

    } catch (e) {
      alert("Erreur réseau.");
      console.error(e);
    }
  }

  return (
    <div className="p-6 space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Communication du Parti</h1>

        <Link
          href="/admin/dashboard"
          className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Retour au dashboard
        </Link>
      </div>

      {/* Formulaire d’envoi */}
      <div className="bg-white p-6 rounded-lg shadow border space-y-4">
        <h2 className="text-xl font-semibold">Envoyer un message</h2>

        <div className="flex gap-6">
          <label>
            <input
              type="radio"
              value="global"
              checked={targetType === "global"}
              onChange={() => setTargetType("global")}
            />
            &nbsp; Tous les militants
          </label>

          <label>
            <input
              type="radio"
              value="targeted"
              checked={targetType === "targeted"}
              onChange={() => setTargetType("targeted")}
            />
            &nbsp; Ciblé (zone)
          </label>

          <label>
            <input
              type="radio"
              value="member"
              checked={targetType === "member"}
              onChange={() => setTargetType("member")}
            />
            &nbsp; Membre individuel
          </label>
        </div>

        {/* Formulaire global */}
        {targetType === "global" && (
          <p className="text-gray-700">Ce message sera envoyé à tous les membres approuvés.</p>
        )}

        {/* Formulaire ciblé */}
        {targetType === "targeted" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Département"
              value={departement}
              onChange={(e) => setDepartement(e.target.value)}
              className="border px-3 py-2 rounded"
            />

            <input
              type="text"
              placeholder="Secteur"
              value={secteur}
              onChange={(e) => setSecteur(e.target.value)}
              className="border px-3 py-2 rounded"
            />

            <input
              type="text"
              placeholder="Arrondissement"
              value={arrondissement}
              onChange={(e) => setArrondissement(e.target.value)}
              className="border px-3 py-2 rounded"
            />

            <input
              type="text"
              placeholder="Quartier"
              value={quartier}
              onChange={(e) => setQuartier(e.target.value)}
              className="border px-3 py-2 rounded"
            />

          </div>
        )}

        {/* Formulaire membre individuel */}
        {targetType === "member" && (
          <input
            type="text"
            placeholder="ID du membre"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            className="border px-3 py-2 rounded"
          />
        )}

        <input
          type="text"
          placeholder="Titre du message"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />

        <textarea
          placeholder="Contenu du message…"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border px-3 py-2 rounded w-full h-32"
        ></textarea>

        <button
          onClick={sendMessage}
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Envoyer
        </button>
      </div>

      {/* Historique */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-xl font-semibold mb-4">Historique des envois</h2>

        {loading ? (
          <p>Chargement…</p>
        ) : (
          <div className="overflow-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="p-3">Titre</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Cible</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>

              <tbody>
                {history.map((msg) => (
                  <tr key={msg.id} className="border-t">
                    <td className="p-3">{msg.title}</td>
                    <td className="p-3 capitalize">{msg.target_type}</td>
                    <td className="p-3">{msg.target_value || "-"}</td>
                    <td className="p-3">{msg.created_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>

    </div>
  );
}
