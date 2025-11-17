"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// API sécurisée
async function adminFetch(endpoint: string, options: any = {}) {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("adminToken")
      : null;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });

  // Si le token est invalide → retour login
  if (res.status === 401) {
    window.location.href = "/admin/login";
    return;
  }

  return res.json();
}

export default function AdminDashboardPage() {
  const router = useRouter();

  const [admin, setAdmin] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  // -----------------------------
  // STATS DYNAMIQUES (remplacent les fake data)
  // -----------------------------
  const [stats, setStats] = useState({
    totalMembres: 0,
    adherentsEnAttente: 0,
    sujetsForum: 0,
    commentaires: 0,
    publications: 0,
  });

  const [statsTerritoire, setStatsTerritoire] = useState({
    moungoNord: 0,
    moungoSud: 0,
    arrondissementsActifs: 0,
  });

  const [alertes, setAlertes] = useState({
    sujetsSignales: 0,
    commentairesSignales: 0,
    publicationsSignalees: 0,
  });

  const [activities, setActivities] = useState<any[]>([]);

  // Charger les stats depuis le backend
  async function loadStats() {
    const data = await adminFetch("/admin/dashboard/stats");

    if (!data) return;

    setStats({
      totalMembres: data.totalMembres ?? 0,
      adherentsEnAttente: data.adherentsEnAttente ?? 0,
      sujetsForum: data.sujetsForum ?? 0,
      commentaires: data.commentaires ?? 0,
      publications: data.publications ?? 0,
    });

    setStatsTerritoire({
      moungoNord: data.moungoNord ?? 0,
      moungoSud: data.moungoSud ?? 0,
      arrondissementsActifs: data.arrondissementsActifs ?? 0,
    });

    setAlertes({
      sujetsSignales: data.sujetsSignales ?? 0,
      commentairesSignales: data.commentairesSignales ?? 0,
      publicationsSignalees: data.publicationsSignalees ?? 0,
    });

    setActivities(data.activities ?? []);
  }

  useEffect(() => {
    const a = localStorage.getItem("admin");
    const t = localStorage.getItem("adminToken");

    if (!a || !t) {
      router.push("/admin/login");
      return;
    }

    try {
      setAdmin(JSON.parse(a));
    } catch {
      router.push("/admin/login");
      return;
    }

    loadStats();
    setLoaded(true);
  }, []);

  if (!loaded) return <div className="p-6">Chargement...</div>;

  return (
    <div className="space-y-10">

      {/* TITRE */}
      <h1 className="text-2xl font-bold text-gray-800">
        Tableau de bord — Administration FORDAC
      </h1>

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
        <h2 className="text-xl font-semibold mb-4">
          Territoire — Département du Moungo
        </h2>

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
            href="/admin/forum?statut=signale"
            className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-2">🚩</div>
            <h3 className="text-xl font-semibold">{alertes.sujetsSignales}</h3>
            <p className="text-gray-600">Sujets signalés</p>
          </Link>

          <Link
            href="/admin/forum?filter=commentaires-signales"
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
              Voir, valider et gérer les adhésions.
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
              Modération des publications des militants.
            </p>
          </Link>
        </div>
      </div>

      {/* ACTIVITÉS RÉCENTES */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Activités récentes</h2>

        {activities.length === 0 ? (
          <p className="text-gray-600">Aucune activité récente.</p>
        ) : (
          <ul className="space-y-3">
            {activities.map((a: any, i: number) => (
              <li key={i} className="border-b pb-2">
                <p className="text-gray-700">{a.text}</p>
                <p className="text-sm text-gray-500">📅 {a.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}
