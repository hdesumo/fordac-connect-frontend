"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function AdminForumDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loaded, setLoaded] = useState(false);
  const [sujet, setSujet] = useState<any>(null);
  const [commentaires, setCommentaires] = useState<any[]>([]);

  useEffect(() => {
    // ------- SUJET (FAKE DATA)
    const fakeSujet = {
      id: "1",
      titre: "Réunion du Moungo Nord le 28 février",
      contenu:
        "Bonjour chers camarades. Une réunion préparatoire se tiendra le 28 février à Nkongsamba 1er afin d'organiser les activités du mois de mars. Vos propositions sont les bienvenues.",
      auteur: "Marie Nguema",
      secteur: "Moungo Nord",
      arrondissement: "Nkongsamba 1er",
      date: "2025-02-05",
      statut: "actif", // actif | fermé | signalé
    };

    // ------- COMMENTAIRES (FAKE DATA)
    const fakeCommentaires = [
      {
        id: 1,
        auteur: "Jean Dupont",
        date: "2025-02-05 08:12",
        texte: "Bonne initiative. Je propose qu'on ajoute une session sur les cartes de membre.",
        statut: "normal", // normal | masque | signale
      },
      {
        id: 2,
        auteur: "Rosine Ngassa",
        date: "2025-02-05 09:01",
        texte: "Je peux m’occuper de la logistique.",
        statut: "normal",
      },
      {
        id: 3,
        auteur: "Pierre Mebongo",
        date: "2025-02-05 09:30",
        texte: "Propos inappropriés signalés.",
        statut: "signale",
      },
    ];

    setSujet(fakeSujet);
    setCommentaires(fakeCommentaires);
    setLoaded(true);
  }, [id]);

  if (!loaded) return <div className="p-6">Chargement...</div>;
  if (!sujet)
    return <div className="p-6 text-red-600">Sujet introuvable.</div>;

  // ------- ACTIONS MODÉRATION SUJET
  function fermerSujet() {
    alert("Sujet fermé : ID " + sujet.id);
  }

  function ouvrirSujet() {
    alert("Sujet rouvert : ID " + sujet.id);
  }

  function signalerSujet() {
    alert("Sujet marqué comme signalé : ID " + sujet.id);
  }

  function supprimerSujet() {
    if (confirm("Supprimer définitivement ce sujet ?")) {
      alert("Sujet supprimé");
      router.push("/admin/forum");
    }
  }

  // ------- ACTIONS COMMENTAIRES
  function supprimerCommentaire(id: number) {
    if (confirm("Supprimer ce commentaire ?")) {
      alert("Commentaire supprimé ID " + id);
    }
  }

  function masquerCommentaire(id: number) {
    alert("Commentaire masqué ID " + id);
  }

  function afficherCommentaire(id: number) {
    alert("Commentaire réaffiché ID " + id);
  }

  function signalerCommentaire(id: number) {
    alert("Commentaire signalé ID " + id);
  }

  return (
    <div className="space-y-10">

      {/* TITRE */}
      <h1 className="text-2xl font-bold text-gray-800">
        Sujet forum : {sujet.titre}
      </h1>

      {/* INFO SUJET */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <p><strong>Auteur :</strong> {sujet.auteur}</p>
            <p><strong>Date :</strong> {sujet.date}</p>
            <p><strong>Secteur :</strong> {sujet.secteur}</p>
            <p><strong>Arrondissement :</strong> {sujet.arrondissement}</p>
          </div>

          <div className="mt-4 md:mt-0">
            <p>
              <strong>Statut :</strong>{" "}
              <span
                className={
                  sujet.statut === "actif"
                    ? "text-green-600 font-semibold"
                    : sujet.statut === "fermé"
                    ? "text-red-600 font-semibold"
                    : "text-yellow-600 font-semibold"
                }
              >
                {sujet.statut}
              </span>
            </p>
          </div>
        </div>

        {/* CONTENU */}
        <div className="bg-gray-50 p-4 rounded border text-gray-800">
          {sujet.contenu}
        </div>

        {/* ACTIONS ADMIN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4">

          {sujet.statut === "actif" && (
            <button
              onClick={fermerSujet}
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
            >
              ⚠ Fermer le sujet
            </button>
          )}

          {sujet.statut === "fermé" && (
            <button
              onClick={ouvrirSujet}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              ✓ Ouvrir le sujet
            </button>
          )}

          <button
            onClick={signalerSujet}
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            🚩 Signaler
          </button>

          <button
            onClick={supprimerSujet}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            🗑 Supprimer
          </button>
        </div>
      </div>

      {/* COMMENTAIRES */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Commentaires ({commentaires.length})
        </h2>

        <div className="space-y-4">

          {commentaires.map((c) => (
            <div
              key={c.id}
              className={`p-4 border rounded ${
                c.statut === "masque"
                  ? "bg-gray-200 text-gray-500"
                  : c.statut === "signale"
                  ? "bg-yellow-100 border-yellow-500"
                  : "bg-gray-50"
              }`}
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">{c.auteur}</p>
                  <p className="text-sm text-gray-600">{c.date}</p>
                </div>
                <p className="text-sm italic text-gray-700">
                  {c.statut === "masque" && "Masqué"}
                  {c.statut === "signale" && "⚠ Signalé"}
                </p>
              </div>

              <p className="mt-3">{c.texte}</p>

              {/* ACTIONS COMMENTAIRE */}
              <div className="flex gap-3 mt-4">

                {c.statut !== "masque" && (
                  <button
                    onClick={() => masquerCommentaire(c.id)}
                    className="text-yellow-700 hover:underline"
                  >
                    Masquer
                  </button>
                )}

                {c.statut === "masque" && (
                  <button
                    onClick={() => afficherCommentaire(c.id)}
                    className="text-green-700 hover:underline"
                  >
                    Réafficher
                  </button>
                )}

                <button
                  onClick={() => signalerCommentaire(c.id)}
                  className="text-orange-700 hover:underline"
                >
                  Signaler
                </button>

                <button
                  onClick={() => supprimerCommentaire(c.id)}
                  className="text-red-700 hover:underline"
                >
                  Supprimer
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
