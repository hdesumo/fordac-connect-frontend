"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }: any) {
  const [unread, setUnread] = useState(0);

  async function loadUnread() {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/notifications/unread-count`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const data = await res.json();
      setUnread(data.unread || 0);
    } catch (err) {
      console.error("Erreur unread count", err);
    }
  }

  useEffect(() => {
    loadUnread();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a472a] text-white">

      {/* HEADER */}
      <header className="px-6 py-4 bg-[#0f5735] border-b border-gray-700 flex justify-between items-center">

        <h1 className="text-xl font-bold">FORDAC — Admin</h1>

        <div className="flex items-center gap-6">

          {/* Icône de notification */}
          <Link href="/admin/notifications" className="relative">
            🔔
            {unread > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-700 text-xs px-2 py-1 rounded-full">
                {unread}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* PAGE */}
      <main className="p-6 flex-1">{children}</main>
    </div>
  );
}
