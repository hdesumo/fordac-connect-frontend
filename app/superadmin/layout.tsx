"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [superadmin, setSuperadmin] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // ==========
  //  VERIFY SESSION
  // ==========
  useEffect(() => {
    const token = localStorage.getItem("superadminToken");
    const info = localStorage.getItem("superadminInfo");

    if (!token || !info) {
      router.push("/superadmin/login");
      return;
    }

    setSuperadmin(JSON.parse(info));
    setLoading(false);

    loadNotifications();
    loadUnread();
  }, []);

  // ==========
  // FETCH WITH TOKEN
  // ==========
  async function superFetch(url: string, options: any = {}) {
    const token = localStorage.getItem("superadminToken");

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(options.headers || {})
      }
    });
  }

  async function loadNotifications() {
    try {
      const res = await superFetch("/api/superadmin/notifications");
      const data = await res.json();
      setNotifications(data);
    } catch (e) {
      console.error("Erreur loadNotifications:", e);
    }
  }

  async function loadUnread() {
    try {
      const res = await superFetch("/api/superadmin/notifications/unread-count");
      const data = await res.json();
      setUnreadCount(data.unread);
    } catch (e) {
      console.error("Erreur loadUnread:", e);
    }
  }

  async function markAsRead(id: number) {
    try {
      await superFetch(`/api/superadmin/notifications/mark-read/${id}`, {
        method: "PATCH",
      });

      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, is_read: true } : n))
      );

      setUnreadCount((c) => (c > 0 ? c - 1 : 0));
    } catch (e) {
      console.error("Erreur markAsRead:", e);
    }
  }

  function logout() {
    localStorage.removeItem("superadminToken");
    localStorage.removeItem("superadminInfo");
    router.push("/superadmin/login");
  }

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Chargement...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#0A1A30] text-white">

      {/* ============= SIDEBAR ============= */}
      <aside className="w-64 bg-[#0D264A] p-6 space-y-8 shadow-lg">

        <h2 className="text-xl font-bold tracking-wide">
          FORDAC SuperAdmin
        </h2>

        <nav className="space-y-4 text-gray-200">
          <Link href="/superadmin/dashboard" className="block hover:text-white">
            🏠 Tableau de bord
          </Link>

          <Link href="/superadmin/admins" className="block hover:text-white">
            👤 Gestion des Admins
          </Link>

          <Link href="/superadmin/activities" className="block hover:text-white">
            📊 Activités des Admins
          </Link>

          <Link href="/superadmin/logs" className="block hover:text-white">
            📁 Journaux & Sécurité
          </Link>

          <Link href="/superadmin/system" className="block hover:text-white">
            ⚙️ Paramètres du Système
          </Link>
        </nav>
      </aside>

      {/* ============= MAIN CONTENT ============= */}
      <main className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="bg-[#0D264A] px-8 py-4 flex justify-between items-center border-b border-[#1B4C88]">

          {/* SuperAdmin identity */}
          <div>
            <p className="font-semibold">
              {superadmin?.name}
            </p>
            <p className="text-sm text-gray-300">
              Super Administrateur National
            </p>
          </div>

          <div className="flex items-center space-x-6">

            {/* NOTIFICATION BELL */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="relative text-2xl"
              >
                🔔
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-xs px-2 py-0.5 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* DROPDOWN */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white text-black rounded shadow-lg max-h-96 overflow-auto z-50">

                  <div className="p-3 border-b font-bold bg-gray-100">
                    Notifications
                  </div>

                  {notifications.length === 0 ? (
                    <p className="p-4 text-center text-sm text-gray-500">
                      Aucune notification
                    </p>
                  ) : (
                    notifications.slice(0, 7).map((n) => (
                      <div
                        key={n.id}
                        onClick={() => {
                          markAsRead(n.id);
                          if (n.link) router.push(n.link);
                          setDropdownOpen(false);
                        }}
                        className={`p-3 border-b cursor-pointer hover:bg-gray-50 ${
                          !n.is_read ? "bg-blue-50" : ""
                        }`}
                      >
                        <p className="font-semibold">{n.title}</p>
                        <p className="text-xs text-gray-600">{n.message}</p>
                        <p className="text-[10px] text-gray-400 mt-1">
                          {new Date(n.created_at).toLocaleString()}
                        </p>
                      </div>
                    ))
                  )}

                  <div className="p-3 text-center">
                    <Link
                      href="/superadmin/notifications"
                      className="text-blue-600 font-semibold hover:underline"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Voir tout →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* LOGOUT */}
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
            >
              Déconnexion
            </button>
          </div>

        </header>

        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
