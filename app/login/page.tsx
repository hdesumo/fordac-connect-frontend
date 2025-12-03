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

      localStorage.setItem("fordac_token", data.token);
      localStorage.setItem("fordac_role", data.user.role);
      localStorage.setItem("fordac_user_id", data.user.id);

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
    <div className="min-h-screen bg-fordacDark flex items-center justify-center px-4 py-16 md:py-10">

      <div className="w-full max-w-sm md:max-w-md bg-white/10 backdrop-blur-md border border-white/20 
                      shadow-xl rounded-2xl p-8">

        <h1 className="text-center text-3xl font-bold text-white mb-6">
          Connexion au FORDAC
        </h1>

        <p className="text-center text-white/80 mb-8 text-sm">
          Accédez à votre espace membre en toute sécurité.
        </p>

        {errorMsg && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-white/90 mb-1 font-medium">
              Adresse e-mail
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 
              border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="exemple@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block text-white/90 mb-1 font-medium">
              Mot de passe
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 
              border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-fordacDark font-semibold py-3 rounded-lg 
            hover:bg-fordacLight transition border border-white/40"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>

        </form>
      </div>
    </div>
  );
}
