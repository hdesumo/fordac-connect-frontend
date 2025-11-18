"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MemberLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    setError("");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/members/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Erreur de connexion");
      return;
    }

    localStorage.setItem("memberToken", data.token);
    router.push("/membre/dashboard");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#145331] text-white">
      <div className="bg-[#0f3d24] p-10 rounded-xl w-[380px]">
        <h1 className="text-3xl font-bold mb-6 text-center">Espace Membre</h1>

        <input
          className="w-full p-3 rounded mb-4 text-black"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 rounded mb-4 text-black"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-400 mb-4">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-600 p-3 rounded font-bold"
        >
          Se connecter
        </button>
      </div>
    </div>
  );
}
