"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function AdminMembreDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [loaded, setLoaded] = useState(false);
  const [membre, setMembre] = useState<any>(null);

  useEffect(() => {
    // ⚠️ Données de test — seront remplacées par API /api/admin/membres/:id
    const fakeMembres = [
      {
        id: "1",
        name: "Marie Adeline Nguea",
        phone: "+237699112233",
        secteur: "Moungo Nord",
        arrondissement: "Nkongsamba 1er",
        quartier: "Bonangoh",
        niveau: "Bronze",
        statut: "pending",
        email: "marie.nguema@example.com",
        date_inscription: "2025-01-10",
      },
      {
        id: "2",
        name: "Jean Mbomio",
        phone: "+237677889900",
        secteur: "Moungo Sud",
        arrondissement: "Melong",
        quartier: "Muyuka Road",
        niveau: "Argent",
        statut: "approved",
        email: "jean.dupont@example.com",
        date_inscription: "2025-01-05",
      },
    ];

    const found = fakeMembres.find((m) => m.id === id);
    setMembre(found || null);
    setLoaded(true);
  }, [id]);

  if (!loaded) return <div className="p-6">Chargement...</div>;

  if (!membre) {
    return (
      <div className="p-6 text-red-600">
        Membre introuvable.
      </div>
    );
  }

  // ACTIONS (placeholder)
  function approve() {
    alert("Validation du membre ID " + membre.id);
  }
  function block() {
    alert("Blocage du membre ID " + membre.id);
  }
  function supprimer() {
    if (confirm("Supprimer définitivement ce membre ?")) {
      alert("Membre supprimé : " + membre.id);
      router.push("/admin/membres");
    }
  }

  return (
    <div className="space-y-8">

      {/* TITRE */}
      <h1 className="text-2xl font-bold text-gray-800">
        Fiche membre : {membre.name}
      </h1>

      {/* CARTE PRINCIPALE */}
      <div className="bg-white p-6 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* INFORMATIONS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Informations générales</h2>

          <p><strong>Nom :</strong> {membre.name}</p>
          <p><strong>Email :</strong> {membre.email}</p>
          <p><strong>Téléphone :</strong> {membre.phone}</p>
          <p><strong>Date d'inscription :</strong> {membre.date_inscription}</p>

          <h2 className="text-xl font-semibold text-gray-700 mt-6">Localisation</h2>
          <p><strong>Secteur :</strong> {membre.secteur}</p>
          <p><strong>Arrondissement :</strong> {membre.arrondissement}</p>
          <p><strong>Quartier :</strong> {membre.quartier}</p>

          <h2 className="text-xl font-semibold text-gray-700 mt-6">Adhésion</h2>
          <p><strong>Niveau :</strong> {membre.niveau}</p>

          <p>
            <strong>Statut :</strong>{" "}
            <span
              className={
                membre.statut === "pending"
                  ? "text-yellow-600"
                  : membre.statut === "approved"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {membre.statut}
            </span>
          </p>
        </div>

        {/* ACTIONS ADMIN */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Actions administratives</h2>

          {membre.statut === "pending" && (
            <button
              onClick={approve}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
            >
              ✓ Valider l’adhésion
            </button>
          )}

          {membre.statut !== "blocked" && (
            <button
              onClick={block}
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 w-full"
            >
              ⚠ Bloquer le membre
            </button>
          )}

          <button
            onClick={supprimer}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
          >
            🗑 Supprimer définitivement
          </button>
        </div>
        
      </div>

      {/* ACTIVITÉS */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Activités du membre</h2>

        <div>
          <h3 className="font-semibold text-gray-600 mb-2">Sujets forum</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>(Placeholder) Aucun sujet enregistré.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-600 mb-2">Publications</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>(Placeholder) Aucune publication pour le moment.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
