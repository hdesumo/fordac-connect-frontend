"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Sécurisé : exécution uniquement côté client
    const token = typeof window !== "undefined" ? localStorage.getItem("token_admin") : null;
    const admin = typeof window !== "undefined" ? localStorage.getItem("admin") : null;

    if (!token || !admin) {
      // Redirection propre
      router.replace("/admin/login");
    } else {
      // OK → On peut afficher la page
      setChecking(false);
    }
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700">Chargement de l’espace admin...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
