"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * 🔐 ProtectedRoute
 * Ce composant vérifie si l’utilisateur est authentifié via un token (localStorage ou cookie).
 * Si aucun token n’est trouvé, il redirige vers la page /login.
 * Sinon, il rend le contenu protégé.
 */
export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      // Vérifie la présence du token (localStorage ou cookie)
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("token") || sessionStorage.getItem("token")
          : null;

      if (!token) {
        setIsAuthenticated(false);
        router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Erreur lors de la vérification de session :", error);
      setIsAuthenticated(false);
      router.push("/login");
    }
  }, [router]);

  // Affiche un écran de chargement pendant la vérification
  if (isAuthenticated === null) {
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

  // Si non connecté → redirection
  if (!isAuthenticated) return null;

  // Si connecté → accès autorisé
  return <>{children}</>;
}
