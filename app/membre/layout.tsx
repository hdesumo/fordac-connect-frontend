"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MembreLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("fordac_token");
    const role = localStorage.getItem("fordac_role");

    if (!token) {
      router.push("/login");
      return;
    }

    if (role !== "membre") {
      router.push("/login");
      return;
    }

    setLoading(false);
  }, []);

  if (loading) return <div className="p-10">Chargement...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header simple pour les membres */}
      <header className="bg-green-900 text-white p-4 mb-4 rounded">
        <h2 className="text-xl font-semibold">Espace Militant</h2>
      </header>

      {children}
    </div>
  );
}
