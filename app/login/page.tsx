"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // 🚀 Si le membre est déjà connecté → redirection automatique
  useEffect(() => {
    const existingToken = localStorage.getItem("memberToken");
    if (existingToken) {
      router.replace("/membre/dashboard");
    }
  }, [router]);

  const handleLogin = async () => {
    setErrorMsg("");

    if (!phone.trim() || !pin.trim()) {
      return setErrorMsg("Veuillez remplir tous les champs.");
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, pin }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        return setErrorMsg(data.message || "Identifiants incorrects.");
      }

      // ✔ Enregistrement correct des données de session
      localStorage.setItem("memberToken", data.token);
      localStorage.setItem("memberData", JSON.stringify(data.member));

      // ✔ Redirection membre
      router.push("/membre/dashboard");

    } catch (error) {
      console.error("Erreur login :", error);
      setErrorMsg("Une erreur est survenue. Réessayez.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-[#166534] mb-6">
          Connexion Membre
