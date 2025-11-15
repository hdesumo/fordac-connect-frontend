"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e: any) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admins/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Identifiants incorrects.");
        setLoading(false);
        return;
      }

      // Enregistrement session admin
      localStorage.setItem("token_admin", data.token);
      localStorage.setItem("admin", JSON.stringify(data.admin));

      router.push("/admin/dashboard");
    } catch (error) {
      setMessage("Erreur réseau. Réessayez.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="bg-white p-8 rounded-lg shadow max-w-md w-full">

        <h1 className="text-2xl font-bold text-center mb-6">
          Connexion Administrateur
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          {/* EMAIL */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              className="w-full border p-2 rounded"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* MOT DE PASSE */}
          <div>
            <label className="block font-semibold mb-1">Mot de passe</label>
            <input
              type="password"
              value={password}
              className="w-full border p-2 rounded"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* MESSAGE ERREUR */}
          {message && (
            <p className="text-red-600 text-sm text-center">{message}</p>
          )}

          {/* BOUTON */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#111827] text-white w-full py-2 rounded hover:bg-black"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

      </div>
    </div>
  );
}
