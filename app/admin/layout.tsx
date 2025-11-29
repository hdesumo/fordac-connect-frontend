"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Code 100% client-side : OK
    const token = typeof window !== "undefined"
      ? localStorage.getItem("fordac_token")
      : null;

    const role = typeof window !== "undefined"
      ? localStorage.getItem("fordac_role")
      : null;

    if (!token || role !== "admin") {
      router.replace("/admin-login");
      return;
    }

    setAuthorized(true);
  }, []);

  if (!authorized)
    return (
      <div className="p-10 text-center text-white">
        Vérification des accès...
      </div>
    );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* MENU ADMIN */}
      <aside className="w-64 bg-green-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Admin</h2>

        <ul className="space-y-3">
          <li><a href="/admin" className="hover:underline">Dashboard</a></li>
          <li><a href="/admin/membres" className="hover:underline">Membres</a></li>
          <li><a href="/admin/notifications" className="hover:underline">Notifications</a></li>
          <li><a href="/admin/settings" className="hover:underline">Paramètres</a></li>
        </ul>
      </aside>

      {/* CONTENU */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
