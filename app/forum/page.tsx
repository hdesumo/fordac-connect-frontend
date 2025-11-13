"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MessageSquare, Users, Lock } from "lucide-react";

export default function ForumPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // 🔐 Vérification de la session utilisateur
  useEffect(() => {
    const token = localStorage.getItem("fordac_token");
    if (!token) {
      setIsAuthenticated(false);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-300 animate-pulse">
          Vérification de votre session...
        </p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-6">
        <Lock className="text-fordacGold w-12 h-12 mb-4" />
        <h1 className="text-2xl font-semibold text-fordacGreen mb-2">
          Accès restreint
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Vous devez être connecté pour accéder au forum des militants.  
          Redirection en cours vers la page de connexion...
        </p>
      </div>
    );
  }

  // ✅ Page forum (après connexion)
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-
