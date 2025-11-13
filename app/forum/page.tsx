"use client";

import { useRouter } from "next/navigation";

export default function ForumIntroPage() {
  const router = useRouter();

  const handleEnterForum = () => {
    // Redirige vers la vraie section réservée
    router.push("/forum/espace");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 text-white flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
          Forum des Militants du FORDAC
        </h1>

        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Le Forum des Militants est un espace d’échange réservé aux membres du FORDAC.  
          Ici, chaque voix compte : on y partage les idées, les initiatives et les projets qui font vivre le Parti.  
          C’est le lieu où s’expriment l’unité, la fraternité et l’action collective.
        </p>

        <div className="bg-green-800 rounded-xl p-6 mb-8 shadow-lg">
          <p className="text-base md:text-lg text-gray-100 leading-relaxed">
            👉 Rejoignez la discussion, partagez vos réflexions et contribuez à la construction d’un Cameroun plus juste, plus fort et plus solidaire.  
            Ensemble, faisons vivre la démocratie interne du FORDAC.
          </p>
        </div>

        <button
          onClick={handleEnterForum}
          className="bg-amber-500 hover:bg-amber-600 text-green-900 font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300"
        >
          Entrer dans le forum
        </button>
      </div>
    </main>
  );
}
