"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAdminAuth from "@/hooks/useAdminAuth";

export default function ProtectedRouteAdmin({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, loaded } = useAdminAuth();

  useEffect(() => {
    if (loaded && !isAuthenticated) {
      router.replace("/admin-login");
    }
  }, [loaded, isAuthenticated, router]);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Vérification de la session admin...
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return <>{children}</>;
}
