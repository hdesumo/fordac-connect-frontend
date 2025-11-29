"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      // 🟥 GESTION DES ERREURS SERVEUR
      if (!res.ok) {
        setMessage(data.error || data.message || "Identifiants incorrects.");
        setLoading(false);
        return;
      }

      // 🟩 STOCKAGE TOKEN + ADMIN
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("admin", JSON.stringify(data.admin));

      // 🟩 REDIRECTION
      router.push("/admin/dashboard");
    } catch (error) {
      console.error(error);
      setMessage("Erreur réseau. Réessayez plus tard.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A2218] p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Connexion Administrateur
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              className="w-full border p-3 rounded text-black focus:outline-green-700"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Mot de passe
            </label>

            <div className="relative">
              <input
                type={showPwd ? "text" : "password"}
                value={password}
                className="w-full border p-3 pr-10 rounded text-black focus:outline-green-700"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600"
                onClick={() => setShowPwd(!showPwd)}
              >
                {showPwd ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* MESSAGE D'ERREUR */}
          {message && (
            <p className="text-red-600 text-sm text-center">{message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-green-800 text-white w-full py-3 rounded-lg hover:bg-green-900 transition"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
