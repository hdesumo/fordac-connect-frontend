"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminMembresPage() {
  const [loaded, setLoaded] = useState(false);

  // Recherche simple
  const [search, setSearch] = useState("");

  // Filtres territoriaux
  const [secteur, setSecteur] = useState("");
  const [arrondissement, setArrondissement] = useState("");
  const [quartier, setQuartier] = useState("");

  // Filtres organisationnels
  const [niveau, setNiveau] = useState("");
  const [statut, setStatut] = useState("");

  // Secteurs & arrondissements dynamiques
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
    "Moungo Sud": [
      "Melong",
      "Njombé-Penja",
      "Mbanga",
      "Santchou",
    ],
  };

  // Niveaux d'adhésion OFFICIELS FORDAC
  const niveauxAdhesion = ["Bronze", "Argent", "Or"];

  // Données factices réalistes
  const [membres, setMembres] = useState<any[]>([]);

  useEffect(() => {
    const fakeMembres = [
      {
        id: 1,
        name: "Marie Adeline Nguea",
        phone: "+237699112233",
        secteur: "Moungo Nord",
        arrondissement: "Nkongsamba 1er",
        quartier: "Bonangoh",
        niveau: "Bronze",
        statut: "pending",
      },
      {
        id: 2,
        name: "Jean Moumi",
        phone: "+237677889900",
        secteur: "Moungo Sud",
        arrondissement: "Melong",
        quartier: "Dschang Road",
        niveau: "Argent",
        statut: "approved",
      },
      {
        id: 3,
        name: "Rosine Ngassa",
        phone: "+237690554433",
        secteur: "Moungo Nord",
        arrondissement: "Loum",
        quartier: "Congo",
        niveau: "Or",
        statut: "blocked",
      },
      {
        id: 4,
        name: "Pierre Mebongo",
        phone: "+237654889977",
        secteur: "Moungo Sud",
        arrondissement: "Njombé-Penja",
        quartier: "Mboussa",
        niveau: "Bronze",
        statut: "approved",
      },
    ];

    setMembres(fakeMembres);
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <div className="p-6">Chargement...</div>;
  }

  // FILTRAGE
  const filtered = membres.filter((m) => {
    const matchesSearch =
      search === "" ||
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.phone.includes(search);

    const matchesSecteur =
      secteur === "" || m.secteur === secteur;

    const matchesArr =
      arrondissement === "" || m.arrondissement === arrondissement;

    const matchesQuartier =
      quartier === "" ||
      m.quartier.toLowerCase().includes(quartier.toLowerCase());

    const matchesNiveau =
      niveau === "" || m.niveau === niveau;

    const matchesStatut =
      statut === "" || m.statut === statut;

    return (
      matchesSearch &&
      matchesSecteur &&
      matchesArr &&
      matchesQuartier &&
      matchesNiveau &&
      matchesStatut
    );
  });

  // ACTIONS (placeholder)
  function approve(id: number) {
    alert("Validation du membre ID " + id);
  }
  function block(id: number) {
    alert("Blocage du membre ID " + id);
  }
  function supprimer(id: number) {
    if (confirm("Supprimer définitivement ce membre ?")) {
      alert("Membre supprimé : " + id);
    }
  }

  return (
    <div className="space-y-6">

      {/* TITRE */}
      <h1 className="text-2xl font-bold text-gray-800">
        Gestion des membres – Département du Moungo
      </h1>

      {/* FILTRES */}
      <div className="bg-white p-5 rounded-lg shadow space-y-4">

        {/* Ligne 1 */}
        <div className="flex flex-wrap gap-4">

          <input
            type="text"
            placeholder="Nom ou téléphone"
            className="border p-2 rounded flex-1 min-w-[250px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

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
              <option key={s} value={s}>{s}</option>
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
                <option key={a} value={a}>{a}</option>
              ))}
          </select>

        </div>

        {/* Ligne 2 */}
        <div className="flex flex-wrap gap-4">

          <input
            type="text"
            placeholder="Quartier"
            className="border p-2 rounded flex-1 min-w-[200px]"
            value={quartier}
            onChange={(e) => setQuartier(e.target.value)}
          />

          <select
            value={niveau}
            onChange={(e) => setNiveau(e.target.value)}
            className="border p-2 rounded min-w-[200px]"
          >
            <option value="">Niveau d’adhésion</option>
            {niveauxAdhesion.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>

          <select
            value={statut}
            onChange={(e) => setStatut(e.target.value)}
            className="border p-2 rounded min-w-[200px]"
          >
            <option value="">Statut</option>
            <option value="pending">En attente</option>
            <option value="approved">Validé</option>
            <option value="blocked">Bloqué</option>
          </select>

        </div>
      </div>

      {/* TABLEAU */}
      <div className="bg-white rounded-lg shadow overflow-auto">
        <table className="w-full">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 text-left">Nom</th>
              <th className="p-3 text-center">Téléphone</th>
              <th className="p-3 text-center">Secteur</th>
              <th className="p-3 text-center">Arrondissement</th>
              <th className="p-3 text-left">Quartier</th>
              <th className="p-3 text-center">Niveau</th>
              <th className="p-3 text-center">Statut</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((m) => (
              <tr key={m.id} className="border-b hover:bg-gray-50">

                <td className="p-3">{m.name}</td>
                <td className="p-3 text-center">{m.phone}</td>
                <td className="p-3 text-center">{m.secteur}</td>
                <td className="p-3 text-center">{m.arrondissement}</td>
                <td className="p-3">{m.quartier}</td>
                <td className="p-3 text-center">{m.niveau}</td>

                <td className="p-3 text-center">
                  {m.statut === "pending" && (
                    <span className="text-yellow-600 font-semibold">En attente</span>
                  )}
                  {m.statut === "approved" && (
                    <span className="text-green-600 font-semibold">Validé</span>
                  )}
                  {m.statut === "blocked" && (
                    <span className="text-red-600 font-semibold">Bloqué</span>
                  )}
                </td>

                <td className="p-3 flex gap-2 justify-center">

                  {/* DETAIL */}
                  <Link
                    href={`/admin/membres/${m.id}`}
                    className="px-2 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  >
                    Voir
                  </Link>

                  {m.statut === "pending" && (
                    <button
                      onClick={() => approve(m.id)}
                      className="px-2 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                    >
                      ✓
                    </button>
                  )}

                  {m.statut !== "blocked" && (
                    <button
                      onClick={() => block(m.id)}
                      className="px-2 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700"
                    >
                      ⚠
                    </button>
                  )}

                  <button
                    onClick={() => supprimer(m.id)}
                    className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                  >
                    🗑
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
