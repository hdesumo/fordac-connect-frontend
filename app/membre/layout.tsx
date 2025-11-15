"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MembreLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      router.push("/login");
      return;
    }

    try {
      setUser(JSON.parse(userData));
    } catch {
      router.push("/login");
      return;
    }

    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Chargement...
      </div>
    );
  }

  return (
    <div className="min-h-screen grid grid-cols-[250px_1fr] bg-gray-100">

      {/* SIDEBAR */}
      <aside className="bg-[#111827] text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-8">FORDAC Connect</h1>

          <nav className="space-y-4">
            <Link href="/membre/dashboard" className="block hover:text-[#facc15]">
              🏠 Tableau de bord
            </Link>

            <Link href="/membre/profil" className="block hover:text-[#facc15]">
              👤 Mon profil
            </Link>

            <Link href="/membre/forum" className="block hover:text-[#facc15]">
              💬 Forum des militants
            </Link>

            <Link href="/membre/publications" className="block hover:text-[#facc15]">
              📝 Mes publications
            </Link>
          </nav>
        </div>

        <button
          onClick={() => {
            localStorage.clear();
            router.push("/login");
          }}
          className="text-left text-red-400 hover:text-red-300"
        >
          🚪 Déconnexion
        </button>
      </aside>

      {/* HEADER + CONTENT */}
      <main className="p-6">
        <header className="mb-6 bg-white p-4 rounded shadow flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Bienvenue</h2>
            <p className="text-sm text-gray-600">{user?.name}</p>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div>{children}</div>
      </main>
    </div>
  );
}
