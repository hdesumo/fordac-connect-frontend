"use client";

import Image from "next/image";
import { useState } from "react";
import MediaModal from "@/components/MediaModal";

export default function HomePage() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  return (
    <main className="w-full overflow-x-hidden">

      {/* ===========================
          HERO PRINCIPAL
      ============================ */}
      <section className="w-full bg-gradient-to-b from-green-700 to-green-300 text-white pt-20 pb-32 text-center">
        <h1 className="text-5xl font-bold">FORDAC Connect</h1>
        <p className="mt-6 text-xl max-w-3xl mx-auto">
          Forces Démocratiques pour l’Action et le Changement —
          Un parti au service du peuple, de la justice et du progrès.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/adhesion"
            className="px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-900"
          >
            Adhérez maintenant
          </a>
          <a
            href="/actualites"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-green-800"
          >
            Voir les actualités
          </a>
        </div>
      </section>

      {/* ===========================
          SECTION PRÉSIDENT
      ============================ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/president.png"
            alt="Président du FORDAC"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold text-green-700">
              Le Président du FORDAC
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-4">
              Romaric Yebchue Semenou
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Le FORDAC incarne la volonté d’unir les citoyens autour de valeurs
              de démocratie, d’équité et de développement durable. Sous la direction
              de Romaric Yebchue Semenou, le Parti porte une vision claire fondée sur
              la justice, la solidarité et le progrès partagé entre générations.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          MESSAGE COURT DU PRÉSIDENT
      ============================ */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Message du Président
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Chers parents, frères, sœurs, fils et filles de Njombé-Penja,
            nous venons vers vous non pas en tant que simples politiciens,
            mais en tant que fils et filles de cette terre, préoccupés par
            notre bien-être commun et l’avenir de nos enfants.
            Le FORDAC aspire à être notre patrimoine politique commun,
            ancré dans chaque quartier, chaque village, chaque cœur.
          </p>

          <a
            href="/message-president"
            className="inline-block mt-8 px-6 py-3 text-green-700 border border-green-700 rounded-lg hover:bg-green-700 hover:text-white"
          >
            Lire le message complet
          </a>
        </div>
      </section>

      {/* ===========================
          PAROLES DE SAGESSE — SECTION 1
      ============================ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/hero1.jpeg"
            width={500}
            height={600}
            alt="Leçon du Sage KD2"
            className="rounded-xl shadow-lg object-cover"
          />

          <div>
            <h3 className="text-3xl font-bold text-green-700">
              Leçon du Sage KD2
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Le sage KD2 ne parlait pas beaucoup. Il enseignait par
              l’exemple. Un jour, voyant une femme exténuée et ignorée
              de tous, il posa son panier, s’approcha et lui donna à manger.
              Pour lui, servir Dieu, c’était servir l’humanité.
              Chaque geste de bonté était une prière silencieuse.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          PAROLES DE SAGESSE — SECTION 2
      ============================ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-green-700">
              Célébrez vos victoires
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Le FORDAC encourage chacun à reconnaître ses avancées,
              même les plus petites. Chaque pas vers le mieux est
              une victoire sur soi-même. La motivation se construit
              au quotidien, et c’est ensemble que nous irons plus loin.
            </p>
          </div>

          <Image
            src="/images/hero2.jpeg"
            width={500}
            height={600}
            alt="Célébration"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* ===========================
          PAROLES DE SAGESSE — SECTION 3
      ============================ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/hero3.jpeg"
            width={500}
            height={600}
            alt="Osez penser, osez agir"
            className="rounded-xl shadow-lg object-cover"
          />

          <div>
            <h3 className="text-3xl font-bold text-green-700">
              Osez penser. Osez agir.
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Le FORDAC croit en une jeunesse ambitieuse et déterminée.
              Penser ne suffit pas : il faut transformer ses idées en
              actions. Avec courage, discipline et persévérance,
              tout devient possible.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          GALERIE — PHOTOS
      ============================ */}
      <section className="py-24 bg-white">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-16">
          Galerie d’images
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {["photo1.jpg", "photo2.jpg", "photo3.jpg"].map((photo) => (
            <div
              key={photo}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg"
              onClick={() =>
                setSelectedMedia({ type: "image", src: `/galerie/photos/${photo}` })
              }
            >
              <Image
                src={`/galerie/photos/${photo}`}
                alt="Galerie FORDAC"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===========================
          GALERIE — VIDEOS
      ============================ */}
      <section className="py-24 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-16">
          Galerie vidéos
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg"
              onClick={() =>
                setSelectedMedia({
                  type: "video",
                  src: `/galerie/videos/video${i}.mp4`,
                })
              }
            >
              <video
                src={`/galerie/videos/video${i}.mp4`}
                className="object-cover w-full h-64"
                muted
                controls
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===========================
          SECTION ADHESION
      ============================ */}
      <section className="py-24 bg-green-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Rejoignez le FORDAC</h2>

        <p className="text-xl max-w-3xl mx-auto mb-10">
          Ensemble, nous pouvons transformer nos idées en actions concrètes.
          Adhérez dès aujourd’hui et participez activement à la construction
          d’une société plus juste.
        </p>

        <a
          href="/adhesion"
          className="px-8 py-4 bg-white text-green-800 rounded-lg hover:bg-gray-100"
        >
          Formulaire d’adhésion
        </a>
      </section>

      {/* MODAL POUR LES PHOTOS/VIDEOS */}
      {selectedMedia && (
        <MediaModal media={selectedMedia} onClose={() => setSelectedMedia(null)} />
      )}
    </main>
  );
}
