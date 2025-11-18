"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  const [unreadCount, setUnreadCount] = useState(0);

  async function loadUnreadNotifications() {
    const token = localStorage.getItem("memberToken");
    if (!token) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/members/notifications-count`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const data = await res.json();
    setUnreadCount(data.count || 0);
  }

  useEffect(() => {
    loadUnreadNotifications();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f3d24] text-white">

      {/* TOPBAR */}
      <nav className="w-full bg-[#145331] border-b border-green-900 p-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/membre/dashboard" className="text-xl font-bold">
          Espace Membre
        </Link>

        {/* CLOCHE */}
        <Link href="/membre/notifications" className="relative mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white hover:text-gray-200 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405C18.21 14.79 18 13.918 18 13V9a6 6 0 10-12 0v4c0 .918-.21 1.79-.595 2.595L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>

          {/* COMPTEUR */}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full px-2 py-0.5 font-bold">
              {unreadCount}
            </span>
          )}
        </Link>
      </nav>

      {/* CONTENU */}
      <main>{children}</main>
    </div>
  );
}
