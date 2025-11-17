"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [adminLoaded, setAdminLoaded] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") {
      setAdminLoaded(true);
      return;
    }

    const admin = localStorage.getItem("admin");
    const token = localStorage.getItem("adminToken");

    if (!admin || !token) {
      router.replace("/admin/login");
      return;
    }

    setAdminLoaded(true);
  }, [pathname, router]);

  if (!adminLoaded) {
    return <div className="p-6">Vérification des accès...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* NAVIGATION ISOLÉE */}
      {pathname !== "/admin/login" && (
        <div className="w-full bg-[#0f3a2d] text-white shadow">
          <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
            <div className="font-bold text-xl">FORDAC — Administration</div>

            <div className="flex space-x-6">
              <Link href="/admin/dashboard" className="hover:underline">Dashboard</Link>
              <Link href="/admin/membres" className="hover:underline">Membres</Link>
              <Link href="/admin/contacts" className="hover:underline">Contacts</Link>
            </div>

            <button
              onClick={() => {
                localStorage.removeItem("admin");
                localStorage.removeItem("adminToken");
                router.push("/admin/login");
              }}
              className="bg-red-600 px-4 py-1 rounded hover:bg-red-700"
            >
              Déconnexion
            </button>
          </nav>
        </div>
      )}

      {/* CONTENU */}
      <main className="p-6 max-w-7xl mx-auto text-gray-900">
        {children}
      </main>
    </div>
  );
}
