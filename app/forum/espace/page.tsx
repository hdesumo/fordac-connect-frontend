"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ForumEspacePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // 🔐 Simulation d’un contrôle de session
  useEffect(() => {
    const token = localStorage.getItem("fordac_token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push("/login");
    }
  }, [router]);

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Vérification de l’accès...</h2>
        <p className="text-gray-500">Veuillez patienter...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-green-700 dark:text-amber-400">
          Espace des Militants
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
          Bienvenue dans l’espace de discussion interne du FORDAC.  
          Ici, les militants échangent librement sur les initiatives du Parti,  
          les actions locales et les propositions d’avenir.
        </p>

        <section className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-green-800 dark:text-amber-400">
              💬 Débats et échanges
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Participez aux débats sur les grands sujets politiques, économiques et sociaux
              portés par le FORDAC. Donnez votre avis, proposez, discutez, construisez.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-green-800 dark:text-amber-400">
              📅 Activités et actions
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Découvrez les actions du Parti, les rencontres régionales et nationales,
              et les campagnes en cours. Engagez-vous à nos côtés sur le terrain.
            </p>
          </div>
        </section>

        <p className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          Cet espace est réservé aux militants connectés.  
          Si vous rencontrez un problème d’accès, contactez le secrétariat national.
        </p>
      </div>
    </main>
  );
}
