"use client";

import Image from "next/image";
import Link from "next/link";

export default function ForumIntroPage() {
  return (
    <div className="w-full bg-white">

      {/* HERO – Identité Forum */}
      <section className="w-full bg-[#166534] py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          Forum des Militants
        </h1>
        <p className="text-white/90 mt-4 text-lg max-w-2xl mx-auto">
          Un espace d’échange et de réflexion réservé aux militants du FORDAC.
        </p>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTE */}
        <div>
          <h2 className="text-3xl font-bold text-[#166534] mb-4">
            Bienvenue dans l’espace de discussion du FORDAC
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Ce forum est un lieu dédié à la participation citoyenne interne.  
            Les militants y partagent leurs idées, propositions, analyses et retours d’expérience 
            pour enrichir la vision et l’action du FORDAC sur le terrain.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Pour des raisons de confidentialité et d’organisation interne, 
            l’accès à ce forum est strictement réservé aux membres connectés.
          </p>

          {/* CTA */}
          <Link
            href="/login"
            className="inline-block mt-10 bg-[#166534] hover:bg-[#0f4a2c] 
                       text-white font-semibold px-8 py-3 rounded-md shadow-md transition"
          >
            Se connecter pour accéder au forum
          </Link>

          <p className="text-sm text-gray-600 mt-3">
            Vous devez être identifié pour participer ou consulter les discussions.
          </p>
        </div>

        {/* ILLUSTRATION */}
        <div className="w-full flex justify-center">
          <Image
            src="/forum/intro.png"
            alt="Illustration Forum des Militants"
            width={650}
            height={450}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
      </section>

      {/* SECTION INFO */}
      <section className="bg-[#E8F3EC] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-[#166534] mb-4">
            Un espace sécurisé, responsable et constructif
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Le FORDAC encourage le débat d’idées dans un cadre respectueux et 
            discipliné.  
            Cet espace vous permet de collaborer, proposer, analyser et participer 
            à la vie interne du Parti dans un esprit de camaraderie et d’engagement.
          </p>
        </div>
      </section>

    </div>
  );
}
