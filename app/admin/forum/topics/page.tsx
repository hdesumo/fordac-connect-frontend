"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import ProtectedRoute from "@/components/ProtectedRoute";      // 🔥 Import corrigé
import Pagination from "@/components/Pagination";              // 🔥 Import corrigé

export default function AdminTopicsPage() {
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [topics, setTopics] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const load = async () => {
    try {
      const res = await fetch(`${API}/admin/forum/topics`, {
        cache: "no-store", // 🔥 indispensable pour Railway
      });
      const data = await res.json();
      setTopics(Array.isArray(data.topics) ? data.topics : []);
    } catch (e) {
      console.error("Erreur chargement sujets admin :", e);
      setTopics([]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = topics.filter((t) =>
    t.title?.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  const deleteTopic = async (id: number) => {
    if (!confirm("Supprimer ce sujet définitivement ?")) return;

    try {
      await fetch(`${API}/admin/forum/topics/${id}`, {
        method: "DELETE",
      });
      load();
    } catch (e) {
      console.error("Erreur suppression sujet :", e);
    }
  };

  const lock = async (id: number) => {
    try {
      await fetch(`${API}/admin/forum/topics/${id}/lock`, { method: "PUT" });
      load();
    } catch (e) {
      console.error("Erreur verrouillage :", e);
    }
  };

  const unlock = async (id: number) => {
    try {
      await fetch(`${API}/admin/forum/topics/${id}/unlock`, { method: "PUT" });
      load();
    } catch (e) {
      console.error("Erreur déverrouillage :", e);
    }
  };

  return (
    <ProtectedRouteAdmin>
      <main className="p-10 bg-[#F7F7F7] min-h-screen">
        <h1 className="text-4xl font-extrabold text-[#166534] mb-8">
          Gestion des Sujets du Forum
        </h1>

        {/* Barre de recherche */}
        <input
          type="text"
          placeholder="Rechercher un sujet..."
          className="w-full p-4 border rounded-xl mb-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="bg-white shadow rounded-xl border p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3">Titre</th>
                <th className="py-3">Auteur</th>
                <th className="py-3">Catégorie</th>
                <th className="py-3">Statut</th>
                <th className="py-3">Création</th>
                <th className="py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginated.map((t) => (
                <tr key={t.id} className="border-b">
                  <td className="py-3 font-semibold text-[#166534]">{t.title}</td>

                  <td className="py-3">{t.author}</td>

                  <td className="py-3">
                    {t.category_name || <span className="text-gray-500">—</span>}
                  </td>

                  <td className="py-3">
                    {t.locked ? (
                      <span className="text-red-600 font-semibold">Verrouillé</span>
                    ) : (
                      <span className="text-green-600 font-semibold">Actif</span>
                    )}
                  </td>

                  <td className="py-3 text-sm">
                    {new Date(t.created_at).toLocaleString("fr-FR")}
                  </td>

                  <td className="py-3 flex gap-4">
                    <Link
                      href={`/admin/forum/topics/${t.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Ouvrir
                    </Link>

                    {t.locked ? (
                      <button
                        onClick={() => unlock(t.id)}
                        className="text-orange-600 hover:underline"
                      >
                        Déverrouiller
                      </button>
                    ) : (
                      <button
                        onClick={() => lock(t.id)}
                        className="text-orange-600 hover:underline"
                      >
                        Verrouiller
                      </button>
                    )}

                    <button
                      onClick={() => deleteTopic(t.id)}
                      className="text-red-600 hover:underline"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <p className="text-gray-600 mt-4">Aucun sujet trouvé.</p>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          page={page}
          total={totalPages}
          onNext={() => page < totalPages && setPage(page + 1)}
          onPrev={() => page > 1 && setPage(page - 1)}
        />
      </main>
    </ProtectedRouteAdmin>
  );
}
