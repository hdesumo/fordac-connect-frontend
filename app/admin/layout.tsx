"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Sécurité : exécuter uniquement côté client
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("fordac_token");
    const role = localStorage.getItem("fordac_role");

    if (!token || role !== "admin") {
      router.replace("/admin-login"); // 👉 redirection correcte
    } else {
      setAuthorized(true);
    }

    setChecked(true);
  }, []);

  if (!checked) {
    return (
      <div className="p-10 text-center text-white">
        Chargement…
      </div>
    );
  }

  if (!authorized) return null;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-green-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Admin</h2>

        <ul className="space-y-3">
          <li><a href="/admin">Dashboard</a></li>
          <li><a href="/admin/membres">Membres</a></li>
          <li><a href="/admin/notifications">Notifications</a></li>
          <li><a href="/admin/settings">Paramètres</a></li>
        </ul>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
