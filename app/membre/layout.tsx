"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../../globals.css";
import { API_BASE_URL } from "@/utils/constants";

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("memberToken");

    if (!token) {
      router.push("/membre/login");
      return;
    }

    async function loadUnread() {
      try {
        const res = await fetch(`${API_BASE_URL}/members/notifications/unread`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (res.ok) {
          const data = await res.json();
          setUnread(data.unread || 0);
        }
      } catch (e) {
        console.error("Member unread error:", e);
      }
    }

    loadUnread();
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-xl text-white">
        Chargement...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#052d23] text-white">

      {/* Topbar */}
      <header className="w-full bg-[#064130] p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Espace Membre</h2>

        <div>
          <Link href="/membre/notifications" className="hover:text-yellow-400">
            Notifications {unread > 0 && <span className="text-yellow-500 ml-1">({unread})</span>}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
