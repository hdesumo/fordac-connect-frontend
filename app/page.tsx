"use client";

import Image from "next/image";
import { useState } from "react";
import MediaModal from "@/components/MediaModal";

export default function HomePage() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  return (
    <main className="w-full overflow-x-hidden">

      {/* ===========================
          HERO PRINCIPAL — Style OFFICIEL FORDAC
      ============================ */}
      <section className="w-full bg-[#166534] text-white pt-24 pb-32 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          FORDAC Connect
        </h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
          Forces Démocratiques pour l’Action et le Changement —  
          un parti citoyen engagé pour l’émergence d’une gouvernance fondée sur l’action et le changement.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="/adhesion"
            className="px-8 py-4 bg-white text-[#166534] rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Adhérez maintenant
          </a>
        </div>
      </section>

      {/* ===========================
          SECTION PRÉSIDENT — Fond Vert Clair
      ============================ */}
      <section className="py-24 bg-[#E8F3EC]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <Image
            src="/images/president.png"
            alt="Président du FORDAC"
            width={520}
            height={520}
            className="rounded-xl shadow-xl object-cover"
          />

          <div>
            <h2 className="text-4xl font-extrabold text-[#166534]">
              Le Président du FORDAC
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-4">
              Romaric YEPCHUÉ SEMENOU
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              Sous l’impulsion du président Romaric Yebchue Semenou,
              le FORDAC incarne une vision profondément tournée vers
              le progrès, la responsabilité collective, l’intégrité dans l’action,
              et la construction d’un Cameroun nouveau.
              Son leadership rassembleur, fondé sur l’écoute et la proximité
              avec les populations, redonne sens au service public
              et à la dignité citoyenne.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          MESSAGE DU PRÉSIDENT — Fond Gris Clair
      ============================ */}
      <section className="py-24 bg-[#F7F7F7] border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-[#166534]">
            Message du Président
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mt-8">
            Chers frères et sœurs, habitants du Moungo et de tout le Cameroun,  
            notre engagement politique n’est pas une quête de pouvoir comme une fin en soi, mais une
            mission collective : restaurer
            la confiance, défendre la justice sociale et offrir à nos enfants  
            un horizon qui inspire espoir et ambition.  
            <br /><br />
            Le FORDAC est un parti de vérité et d’action.  
            Il est votre maison. Il est votre voix.
          </p>

          <a
            href="/message-president"
            className="inline-block mt-10 px-6 py-3 text-[#166534] border border-[#166534] rounded-lg font-medium hover:bg-[#166534] hover:text-white transition"
          >
            Lire le message complet
          </a>
        </div>
      </section>

      {/* ===========================
          PAROLES DE SAGESSE — SECTION 1 (Vert Clair)
      ============================ */}
      <section className="py-24 bg-[#E8F3EC]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <Image
            src="/images/hero1.jpeg"
            width={500}
            height={600}
            alt="Leçon du Sage KD2"
            className="rounded-xl shadow-xl object-cover"
          />

          <div>
            <h3 className="text-3xl font-extrabold text-[#166534]">
              Leçon du Sage KD2
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              Le Sage KD2 n’enseignait pas par de longs discours,
              mais par l’exemple.  
              Un jour, voyant une femme exténuée et ignorée de tous,
              il posa son panier, s’approcha et lui donna à manger.
              Pour lui, servir Dieu, c’était servir l’humanité.  
              Chaque acte de bonté est une prière silencieuse.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          PAROLES DE SAGESSE — SECTION 2 (Gris Clair)
      ============================ */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-3xl font-extrabold text-[#166534]">
              Célébrez vos victoires
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              La vie est faite de batailles intérieures et de petites conquêtes.  
              Le FORDAC encourage chacun à reconnaître ses avancées,
              aussi modestes soient-elles.  
              Chaque progrès est une victoire sur soi-même.  
              Ensemble, nous marchons vers l’excellence.
            </p>
          </div>

          <Image
            src="/images/hero2.jpeg"
            width={500}
            height={600}
            alt="Célébration"
            className="rounded-xl shadow-xl object-cover"
          />
        </div>
      </section>

      {/* ===========================
          PAROLES DE SAGESSE — SECTION 3 (Vert Clair)
      ============================ */}
      <section className="py-24 bg-[#E8F3EC]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <Image
            src="/images/hero3.jpeg"
            width={500}
            height={600}
            alt="Osez penser, osez agir"
            className="rounded-xl shadow-xl object-cover"
          />

          <div>
            <h3 className="text-3xl font-extrabold text-[#166534]">
              Osez penser. Osez agir.
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              La pensée sans action n’est qu’un rêve.  
              Le FORDAC croit en une jeunesse disciplinée, créative et courageuse.  
              À travers l’effort et la rigueur,
              chacun peut transformer ses idées en réalités tangibles.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          GALERIE PHOTOS — Gris Clair
      ============================ */}
      <section className="py-24 bg-[#F7F7F7]">
        <h2 className="text-4xl font-extrabold text-center text-[#166534] mb-16">
          Galerie d’images
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {["photo1.jpg", "photo2.jpg", "photo3.jpg"].map((photo) => (
            <div
              key={photo}
              className="cursor-pointer rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition"
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
          GALERIE VIDEOS — Vert Clair
      ============================ */}
      <section className="py-24 bg-[#E8F3EC]">
        <h2 className="text-4xl font-extrabold text-center text-[#166534] mb-16">
          Galerie vidéos
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="cursor-pointer rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition"
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
          SECTION ADHESION — Fond Vert Foncé
      ============================ */}
      <section className="py-28 bg-[#166534] text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Rejoignez le FORDAC
        </h2>

        <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
          Votre engagement compte. Ensemble, bâtissons un mouvement  
          responsable et tourné vers la justice sociale.  
          Le FORDAC est une famille politique où chaque voix compte  
          et où chaque citoyen peut poser sa pierre à l’édifice national.
        </p>

        <a
          href="/adhesion"
          className="px-10 py-4 bg-white text-[#166534] rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
        >
          Formulaire d’adhésion
        </a>
      </section>

      {/* MODAL */}
      {selectedMedia && (
        <MediaModal media={selectedMedia} onClose={() => setSelectedMedia(null)} />
      )}
    </main>
  );
}
