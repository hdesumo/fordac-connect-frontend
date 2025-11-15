"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminForumPage() {
  const [loaded, setLoaded] = useState(false);

  // Filtres
  const [search, setSearch] = useState("");
  const [statut, setStatut] = useState("");
  const [secteur, setSecteur] = useState("");
  const [arrondissement, setArrondissement] = useState("");

  // Territoire FORDAC
  const secteurs = ["Moungo Nord", "Moungo Sud"];

  const arrondissementsParSecteur: any = {
    "Moungo Nord": [
      "Nkongsamba 1er",
      "Nkongsamba 2e",
      "Nkongsamba 3e",
      "Loum",
      "Manjo",
      "Baré-Bakem",
    ],
    "Moungo Sud": ["Melong", "Njombé-Penja", "Mbanga", "Santchou"],
  };

  const [sujets, setSujets] = useState<any[]>([]);

  useEffect(() => {
    const fakeSujets = [
      {
        id: 1,
        titre: "Réunion du Moungo Nord le 28 février",
        auteur: "Marie Nguema",
        secteur: "Moungo Nord",
        arrondissement: "Nkongsamba 1er",
        date: "2025-02-05",
        statut: "actif",
      },
      {
        id: 2,
        titre: "Proposition d’activité pour Njombé-Penja",
        auteur: "Pierre Mebongo",
        secteur: "Moungo Sud",
        arrondissement: "Njombé-Penja",
        date: "2025-02-02",
        statut: "signalé",
      },
      {
        id: 3,
        titre: "Questions sur les cartes de membre",
        auteur: "Jean Dupont",
        secteur: "Moungo Sud",
        arrondissement: "Melong",
        date: "2025-01-28",
        statut: "fermé",
      },
    ];

    setSujets(fakeSujets);
    setLoaded(true);
  }, []);

  if (!loaded) return <div className="p-6">Chargement...</div>;

  // FILTRAGE
  const filtered = sujets.filter((s) => {
    const matchesSearch =
      search === "" ||
      s.titre.toLowerCase().includes(search.toLowerCase()) ||
      s.auteur.toLowerCase().includes(search.toLowerCase());

    const matchesStatut =
      statut === "" || s.statut === statut;

    const matchesSecteur =
      secteur === "" || s.secteur === secteur;

    const matchesArr =
      arrondissement === "" || s.arrondissement === arrondissement;

    return (
      matchesSearch && matchesStatut && matchesSecteur && matchesArr
    );
  });

  // Placeholders actions
  function fermer(id: number) {
    alert("Sujet fermé ID " + id);
  }
  function ouvrir(id: number) {
    alert("Sujet réouvert ID " + id);
  }
  function supprimer(id: number) {
    if (confirm("Supprimer ce sujet ?")) {
      alert("Sujet supprimé ID " + id);
    }
  }

  return (
    <div className="space-y-8">

      {/* TITRE */}
      <h1 className="text-2xl font-bold text-gray-800">
        Modération du forum
      </h1>

      {/* FILTRES */}
      <div className="bg-white p-5 rounded-lg shadow space-y-4">

        {/* Ligne 1 */}
        <div className="flex flex-wrap gap-4">

          <input
            type="text"
            placeholder="Recherche (titre ou auteur)"
            className="border p-2 rounded flex-1 min-w-[250px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={statut}
            onChange={(e) => setStatut(e.target.value)}
            className="border p-2 rounded min-w-[200px]"
          >
            <option value="">Statut</option>
            <option value="actif">Actif</option>
            <option value="fermé">Fermé</option>
            <option value="signalé">Signalé</option>
          </select>

        </div>

        {/* Ligne 2 */}
        <div className="flex flex-wrap gap-4">

          <select
            value={secteur}
            onChange={(e) => {
              setSecteur(e.target.value);
              setArrondissement("");
            }}
            className="border p-2 rounded min-w-[200px]"
          >
            <option value="">Secteur</option>
            {secteurs.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <select
            value={arrondissement}
            onChange={(e) => setArrondissement(e.target.value)}
            className="border p-2 rounded min-w-[200px]"
            disabled={!secteur}
          >
            <option value="">Arrondissement</option>
            {secteur &&
              arrondissementsParSecteur[secteur].map((a: string) => (
                <option key={a}>{a}</option>
              ))}
          </select>
        </div>
      </div>

      {/* TABLEAU SUJETS */}
      <div className="bg-white rounded-lg shadow overflow-auto">
        <table className="w-full">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 text-left">Titre</th>
              <th className="p-3 text-center">Auteur</th>
              <th className="p-3 text-center">Secteur</th>
              <th className="p-3 text-center">Arrondissement</th>
              <th className="p-3 text-center">Date</th>
              <th className="p-3 text-center">Statut</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b hover:bg-gray-50">

                <td className="p-3">{s.titre}</td>
                <td className="p-3 text-center">{s.auteur}</td>
                <td className="p-3 text-center">{s.secteur}</td>
                <td className="p-3 text-center">{s.arrondissement}</td>
                <td className="p-3 text-center">{s.date}</td>

                <td className="p-3 text-center">
                  {s.statut === "actif" && (
                    <span className="text-green-600 font-semibold">Actif</span>
                  )}
                  {s.statut === "fermé" && (
                    <span className="text-red-600 font-semibold">Fermé</span>
                  )}
                  {s.statut === "signalé" && (
                    <span className="text-yellow-600 font-semibold">Signalé</span>
                  )}
                </td>

                {/* ACTIONS */}
                <td className="p-3 flex gap-2 justify-center">

                  {/* Voir détails */}
                  <Link
                    href={`/admin/forum/${s.id}`}
                    className="px-2 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  >
                    Voir
                  </Link>

                  {s.statut === "actif" && (
                    <button
                      onClick={() => fermer(s.id)}
                      className="px-2 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700"
                    >
                      ⚠ Fermer
                    </button>
                  )}

                  {s.statut === "fermé" && (
                    <button
                      onClick={() => ouvrir(s.id)}
                      className="px-2 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                    >
                      ✓ Ouvrir
                    </button>
                  )}

                  <button
                    onClick={() => supprimer(s.id)}
                    className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                  >
                    🗑 Suppr.
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
