"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState([]);

  // Vérifier l'authentification
  useEffect(() => {
    const t = localStorage.getItem("adminToken");
    const a = localStorage.getItem("adminData");

    if (!t || !a) {
      router.push("/admin/login");
      return;
    }

    setToken(t);
    setAdmin(JSON.parse(a));
    setLoading(false);
  }, []);

  // Charger les notifications (compteur + liste)
  useEffect(() => {
    if (!token) return;

    const fetchUnreadCount = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/notifications/unread`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!res.ok) return;
        const data = await res.json();
        setUnreadCount(data.unread ?? 0);
      } catch (e) {
        console.error("Erreur unread count", e);
      }
    };

    const fetchNotifications = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/notifications/list`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!res.ok) return;
        const data = await res.json();
        setNotifications(data.notifications ?? []);
      } catch (e) {
        console.error("Erreur notifications", e);
      }
    };

    fetchUnreadCount();
    fetchNotifications();
  }, [token, pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Chargement...
      </div>
    );
  }

  return (
    <div className="flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#004643] text-white min-h-screen p-6">
        <h2 className="text-2xl font-bold mb-6">FORDAC Admin</h2>

        <nav className="space-y-3">
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/membres">Membres</Link>
          <Link href="/admin/messages">Messages</Link>
          <Link href="/admin/notifications">Notifications</Link>
        </nav>
      </aside>

      {/* CONTENU */}
      <div className="flex-1 p-6">
        {/* TOPBAR */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Espace Admin</h1>

          <div className="flex items-center gap-4">
            {/* Icône Notification */}
            <Link href="/admin/notifications" className="relative">
              <span className="text-2xl">🔔</span>

              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </Link>

            {/* Admin */}
            <div className="font-medium">{admin?.name}</div>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
