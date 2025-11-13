// app/profil/page.tsx
"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProfilPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("fordac_user");
    if (!data) router.push("/login");
    else setUser(JSON.parse(data));
  }, [router]);

  if (!user) return null;

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gray-100 pt-24 pb-16">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative bg-gradient-to-r from-green-800 to-yellow-400 h-40">
            <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2">
              <Image
                src={user.avatar || "/avatars/default.jpg"}
                alt="Avatar utilisateur"
                width={120}
                height={120}
                className="rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="mt-20 px-6 pb-10 text-center">
            <h1 className="text-3xl font-bold text-green-800 mb-1">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500 mt-1">
              {user.zone} – Arrondissement de {user.arrondissement}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-10 max-w-2xl mx-auto text-gray-700 leading-relaxed"
            >
              <p>
                Membre actif du FORDAC depuis {user.joined}. Engagé(e) pour la
                justice sociale, la cohésion nationale et le développement
                durable. Le changement commence par l’action citoyenne et la solidarité.
              </p>
            </motion.div>

            <div className="mt-14 flex justify-center space-x-4">
              <Link
                href="/mes-publications"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full shadow-md transition"
              >
                Mes publications
              </Link>
              <Link
                href="/profil/edit"
                className="bg-white border border-green-700 text-green-700 px-6 py-2 rounded-full hover:bg-green-50 transition"
              >
                Modifier mon profil
              </Link>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
