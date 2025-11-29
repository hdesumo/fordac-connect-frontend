"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Échec de connexion.");
        setLoading(false);
        return;
      }

      // Stockage Token + rôle + id utilisateur
      localStorage.setItem("fordac_token", data.token);
      localStorage.setItem("fordac_role", data.user.role);
      localStorage.setItem("fordac_user_id", data.user.id);

      // Redirection selon rôle
      switch (data.user.role) {
        case "superadmin":
          router.push("/superadmin");
          break;
        case "admin":
          router.push("/admin");
          break;
        case "membre":
          router.push("/membre");
          break;
        default:
          router.push("/login");
      }
    } catch (error) {
      setErrorMsg("Erreur de connexion au serveur.");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h1 className="text-2xl font-semibold text-center text-green-800 mb-6">
          Connexion
        </h1>

        {errorMsg && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full border px-3 py-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mot de passe</label>
            <input
              type="password"
              required
              className="w-full border px-3 py-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-700 transition"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

      </div>
    </div>
  );
}
