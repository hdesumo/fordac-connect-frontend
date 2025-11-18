"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SuperAdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.message || "Erreur de connexion.");
        setLoading(false);
        return;
      }

      // Stocker token
      localStorage.setItem("superadminToken", data.token);
      localStorage.setItem("superadminInfo", JSON.stringify(data.superadmin));

      router.push("/superadmin/dashboard");
    } catch (err) {
      setErrorMessage("Erreur serveur. Veuillez réessayer.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Connexion SuperAdmin
        </h1>

        {errorMessage && (
          <p className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border rounded p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="lepresident@fordac-connect.org"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Mot de passe</label>
            <input
              type="password"
              required
              className="w-full border rounded p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
