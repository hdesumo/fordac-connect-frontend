"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

/**
 * 🔐 ProtectedRoute étendu
 * - Vérifie la présence du token
 * - Vérifie le rôle si adminOnly ou memberOnly est activé
 */

interface ProtectedRouteProps {
  children: ReactNode;
  adminOnly?: boolean;
  memberOnly?: boolean;
}

export default function ProtectedRoute({
  children,
  adminOnly = false,
  memberOnly = false,
}: ProtectedRouteProps) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("token") || sessionStorage.getItem("token")
          : null;

      if (!token) {
        setIsAuthorized(false);
        router.push("/login");
        return;
      }

      // 🌟 Vérification du rôle
      const userData =
        typeof window !== "undefined"
          ? localStorage.getItem("fordac_user")
          : null;

      if (!userData) {
        setIsAuthorized(false);
        router.push("/login");
        return;
      }

      const user = JSON.parse(userData);

      // 🔐 Admin seulement
      if (adminOnly && user.role !== "admin") {
        setIsAuthorized(false);
        router.push("/login");
        return;
      }

      // 👤 Membre seulement
      if (memberOnly && user.role !== "member") {
        setIsAuthorized(false);
        router.push("/login");
        return;
      }

      // ✔ Si toutes les conditions sont réunies
      setIsAuthorized(true);
    } catch (error) {
      console.error("Erreur dans ProtectedRoute :", error);
      setIsAuthorized(false);
      router.push("/login");
    }
  }, [adminOnly, memberOnly, router]);

  // État de vérification
  if (isAuthorized === null) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0c2e25] text-white">
        <div className="animate-pulse text-center">
          <p className="text-2xl font-semibold text-[#c8a45d]">
            Vérification de votre session...
          </p>
          <div className="mt-4 w-16 h-16 border-4 border-t-[#c8a45d] border-gray-600 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  // Si non autorisé → redirection
  if (!isAuthorized) return null;

  // Autorisé
  return <>{children}</>;
}
