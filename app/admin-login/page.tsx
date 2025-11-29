"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://api.fordac-connect.org/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Erreur serveur.");
        return;
      }

      localStorage.setItem("token", data.token);
      window.location.href = "/admin/dashboard";
    } catch (err: any) {
      setError("Impossible de joindre le serveur.");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#002F2F] px-4">
      
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl p-8 rounded-xl shadow-lg border border-white/10">

        <h1 className="text-center text-3xl font-bold text-white mb-6">
          Connexion Admin
        </h1>

        {error && (
          <div className="mb-4 bg-red-500 text-white px-4 py-2 rounded-lg text-center font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Email */}
          <div>
            <label className="block text-white font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@fordac-connect.org"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white font-semibold mb-1">Mot de passe</label>

            <div className="relative">
              <input
                type={showPwd ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
              >
                {showPwd ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
