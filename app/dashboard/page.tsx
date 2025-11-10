"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("fordac_token");
    if (stored) {
      setToken(stored);
    } else {
      // Redirection vers /login si pas de token
      router.push("/login");
    }
  }, [router]);

  if (!token)
    return (
      <div className="text-center py-20 text-accent">
        Redirection vers la page de connexion...
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto py-20 px-6 text-center">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Espace membre FORDAC
      </h1>
      <p className="text-lg">
        🎉 Bienvenue ! Votre session est active.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        Jeton (abrégé) : {token.slice(0, 25)}…
      </p>
    </div>
  );
}
