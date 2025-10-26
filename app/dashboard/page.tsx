"use client";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("fordac_token");
    if (stored) setToken(stored);
  }, []);

  if (!token)
    return (
      <div className="text-center py-20 text-accent">
        Vous devez vous connecter pour accéder à cette page.
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
