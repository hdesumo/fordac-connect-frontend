"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

        <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Connexion Administrateur
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          {/* EMAIL */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              className="w-full border p-2 rounded bg-gray-50 text-gray-900"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* MOT DE PASSE */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              Mot de passe
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                className="w-full border p-2 rounded bg-gray-50 text-gray-900 pr-12"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* BOUTON OEIL */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-600 hover:text-black"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* MESSAGE ERREUR */}
          {message && (
            <p className="text-red-600 text-sm text-center">{message}</p>
          )}

          {/* BOUTON */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#0B3214] text-white w-full py-2 rounded hover:bg-[#06210C]"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

      </div>
    </div>
  );
}
