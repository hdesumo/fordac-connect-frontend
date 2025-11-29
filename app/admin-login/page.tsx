
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        setError("Identifiants incorrects ou erreur serveur.");
        return;
      }

      const data = await response.json();

      // 🔐 Stockage du token
      localStorage.setItem("adminToken", data.token);

      // 🚀 Redirection
      router.push("/admin");

    } catch (err) {
      setError("Impossible de contacter le serveur.");
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Connexion Admin</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Mot de passe</label>
          <input
            type="password"
            className="w-full p-3 border rounded bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-600"
        >
          Se connecter
        </button>

      </form>
    </div>
  );
}
