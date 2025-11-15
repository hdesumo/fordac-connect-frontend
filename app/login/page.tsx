"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        setError(data.error || "Identifiants incorrects.");
        return;
      }

      // Stockage local
      localStorage.setItem("fordac_token", data.token);
      localStorage.setItem("fordac_user", JSON.stringify(data.user));

      // Redirection vers l’espace personnel
      router.push("/profil");

    } catch (err) {
      console.error(err);
      setError("Impossible de contacter le serveur.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">

      {/* ================================
           🟩 En-tête
         ================================= */}
      <section className="bg-gradient-to-b from-fordacGreen to-fordacDark text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Connexion à l’Espace Militant
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-gray-100"
        >
          Accédez à votre espace personnel pour suivre vos activités,
          participer aux débats et rester informé des actions du FORDAC.
        </motion.p>
      </section>

      {/* ================================
           🔐 Formulaire de connexion
         ================================= */}
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center text-fordacGreen mb-8">
            Se connecter
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                Adresse e-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fordacGold"
                placeholder="exemple@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fordacGold"
                placeholder="********"
              />
            </div>

            {error && (
              <p className="text-red-600 dark:text-red-400 text-center font-semibold">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-fordacGold text-fordacDark font-semibold py-3 rounded-md hover:bg-yellow-400 transition-colors"
            >
              {loading ? "Connexion…" : "Connexion"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-6">
            Vous n’avez pas encore de compte ?{" "}
            <Link
              href="/adhesion"
              className="text-fordacGold hover:underline font-semibold"
            >
              Faites-votre demande d'adhésion
            </Link>
          </p>
        </motion.div>
      </main>
    </div>
  );
}
