"use client";

import Image from "next/image";
import Link from "next/link";

export default function ForumIntroPage() {
  return (
    <div className="w-full bg-gray-50">

      {/* SECTION TITRE */}
      <section className="w-full bg-emerald-800 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          FORUM DES MILITANTS
        </h1>
      </section>

      {/* CONTENU */}
      <section className="max-w-6xl mx-auto px-6 md:px-0 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTE */}
        <div>
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">
            Bienvenue
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Bienvenue sur le forum des militants du FORDAC.
            Venez échanger vos idées
           et contribuer à notre mouvement en toute convivialité.
          </p>

          <Link
            href="/forum/espace"
            className="inline-block mt-8 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-md shadow"
          >
            Accéder au forum
          </Link>
        </div>

        {/* IMAGE ILLUSTRATION */}
        <div className="w-full flex justify-center">
          <Image
            src="/forum/intro.png"
            alt="Illustration Forum des Militants"
            width={700}
            height={500}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

      </section>

    </div>
  );
}
