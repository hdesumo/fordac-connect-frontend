// app/admin/layout.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("fordac_token");

    if (!token) {
      router.push("/admin-login");
      return;
    }

    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="text-center text-white p-10">
        Vérification de votre session...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#043A37]">

      {/* Sidebar */}
      <aside className="w-56 bg-[#064C48] text-white p-5 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Admin</h2>

        <nav className="space-y-4">
          <a href="/admin/dashboard" className="block hover:underline">
            Dashboard
          </a>
          <a href="/admin/membres" className="block hover:underline">
            Membres
          </a>
          <a href="/admin/notifications" className="block hover:underline">
            Notifications
          </a>
          <a href="/admin/settings" className="block hover:underline">
            Paramètres
          </a>
        </nav>
      </aside>

      {/* CONTENU */}
      <main className="flex-1 p-6">
        {children}
      </main>

    </div>
  );
}
