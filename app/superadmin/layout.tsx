"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { API_BASE_URL } from "@/utils/constants";

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("superadminToken");

    if (!token) {
      router.push("/superadmin/login");
      return;
    }

    async function fetchUnread() {
      try {
        const res = await fetch(`${API_BASE_URL}/superadmin/notifications/unread`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (res.ok) {
          const data = await res.json();
          setUnread(data.unread || 0);
        }
      } catch (e) {
        console.error("Unread error:", e);
      }
    }

    fetchUnread();
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-white text-xl">
        Chargement...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#052d23] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#064130] p-4 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Super Admin</h2>

        <nav className="flex flex-col space-y-2">
          <Link href="/superadmin/dashboard" className="hover:text-yellow-400">Dashboard</Link>
          <Link href="/superadmin/admins" className="hover:text-yellow-400">Gestion des Admins</Link>
          <Link href="/superadmin/membres" className="hover:text-yellow-400">Membres</Link>
          <Link href="/superadmin/notifications" className="hover:text-yellow-400">
            Notifications {unread > 0 && <span className="ml-2 text-yellow-500">({unread})</span>}
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
