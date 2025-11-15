"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const [admin, setAdmin] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  // -----------------------------
  // STATISTIQUES GÉNÉRALES (FAKE)
  // -----------------------------
  const stats = {
    totalMembres: 128,
    adherentsEnAttente: 12,
    sujetsForum: 19,
    commentaires: 87,
    publications: 42,
  };

  // -----------------------------
  // STATISTIQUES TERRITORIALES
  // -----------------------------
  const statsTerritoire = {
    moungoNord: 68,
    moungoSud: 60,
    arrondissementsActifs: 9,
  };

  // -----------------------------
  // SIGNALEMENTS
  // -----------------------------
  const alertes = {
    sujetsSignales: 1,
    commentairesSignales: 3,
    publicationsSignalees: 2,
  };

  // -----------------------------
  // ACTIVITÉS RÉCENTES
  // -----------------------------
  const activities = [
    {
      id: 1,
      text: "Nouvelle demande d’adhésion : Pierre M.",
      date: "2025-01-12",
    },
    {
      id: 2,
      text: "Publication signalée pour vérification.",
      date: "2025-01-11",
    },
    {
      id: 3,
      text: "Nouveau sujet sur le forum : 'Mobilisation régionale'",
      date: "2025-01-11",
    },
    {
      id: 4,
      text: "Membre validé : Rosine N.",
      date: "2025-01-10",
    },
  ];

  useEffect(() => {
    const adminData = localStorage.getItem("admin");
    if (adminData) {
      try {
        setAdmin(JSON.parse(adminData));
      } catch {}
    }
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <div className="text-center p-6">Chargement...</div>;
  }

  return (
    <div className="space-y-10">

      {/* TITRE */}
      <h1 className="text-2xl font-bold text-gray-800">Tableau de bord — Administration FORDAC</h1>

      {/* STATISTIQUES GÉNÉRALES */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Total membres */}
        <Link
          href="/admin/membres"
          className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
        >
          <div className="text-4xl mb-2">👥</div>
          <h3 className="text-xl font-semibold">{stats.totalMembres}</h3>
          <p className="text-gray-600">Membres inscrits</p>
        </Link>

        {/* Adhésions en attente */}
        <Link
          href="/admin/membres?statut=pending"
          className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
        >
          <div className="text-4xl mb-2">⏳</div>
          <h3 className="text-xl font-semibold">{stats.adherentsEnAttente}</h3>
          <p className="text-gray-600">En attente de validation</p>
        </Link>

        {/* Sujets forum */}
        <Link
          href="/admin/forum"
          className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
        >
          <div className="text-4xl mb-2">💬</div>
          <h3 className="text-xl font-semibold">{stats.sujetsForum}</h3>
          <p className="text-gray-600">Sujets forum</p>
        </Link>

        {/* Commentaires */}
        <Link
          href="/admin/forum"
          className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
        >
          <div className="text-4xl mb-2">🗨️</div>
          <h3 className="text-xl font-semibold">{stats.commentaires}</h3>
          <p className="text-gray-600">Commentaires</p>
        </Link>
      </div>

      {/* TERRITOIRE MOUNGO */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Territoire — Département du Moungo</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-4xl mb-2">🗺️</div>
            <h3 className="text-xl font-semibold">{statsTerritoire.moungoNord}</h3>
            <p className="text-gray-600">Membres Moungo Nord</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-4xl mb-2">🗺️</div>
            <h3 className="text-xl font-semibold">{statsTerritoire.moungoSud}</h3>
            <p className="text-gray-600">Membres Moungo Sud</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-4xl mb-2">📍</div>
            <h3 className="text-xl font-semibold">{statsTerritoire.arrondissementsActifs}</h3>
            <p className="text-gray-600">Arrondissements actifs</p>
          </div>

        </div>
      </div>

      {/* ALERTES & SIGNALEMENTS */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Alertes & Signalements</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link
            href="/admin/forum?statut=signalé"
            className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-2">🚩</div>
            <h3 className="text-xl font-semibold">{alertes.sujetsSignales}</h3>
            <p className="text-gray-600">Sujets signalés</p>
          </Link>

          <Link
            href="/admin/forum?filtres=commentaires-signales"
            className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-2">⚠️</div>
            <h3 className="text-xl font-semibold">{alertes.commentairesSignales}</h3>
            <p className="text-gray-600">Commentaires signalés</p>
          </Link>

          <Link
            href="/admin/publications?statut=signale"
            className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-2">🛑</div>
            <h3 className="text-xl font-semibold">{alertes.publicationsSignalees}</h3>
            <p className="text-gray-600">Publications signalées</p>
          </Link>
        </div>
      </div>

      {/* ACCÈS RAPIDE */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Accès rapide</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/admin/membres"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">👥 Gérer les membres</h3>
            <p className="text-gray-600 text-sm">
              Voir, valider, gérer les adhésions et les secteurs.
            </p>
          </Link>

          <Link
            href="/admin/forum"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">💬 Modérer le Forum</h3>
            <p className="text-gray-600 text-sm">
              Sujets, commentaires et signalements.
            </p>
          </Link>

          <Link
            href="/admin/publications"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">📝 Publications</h3>
            <p className="text-gray-600 text-sm">
              Contrôle et validation des publications des militants.
            </p>
          </Link>
        </div>
      </div>

      {/* ACTIVITÉS RÉCENTES */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Activités récentes</h2>

        <ul className="space-y-3">
          {activities.map((a) => (
            <li key={a.id} className="border-b pb-2">
              <p className="text-gray-700">{a.text}</p>
              <p className="text-sm text-gray-500">📅 {a.date}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
