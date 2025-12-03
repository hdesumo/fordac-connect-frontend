"use client";

export default function PressePage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white">

      {/* HEADER HARMONISÉ */}
      <header className="relative bg-[#064C32] py-16 md:py-20 px-6 overflow-hidden">
        {/* texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/textures/pattern-grid.svg')] bg-cover"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Presse de la Nation — Édition du Moungo
          </h1>
        </div>
      </header>

      {/* CONTENU ORIGINAL — strictement inchangé */}
      <section className="max-w-4xl mx-auto px-5 md:px-6 py-12 md:py-16 space-y-10 leading-relaxed text-white/90">

        <p className="text-base md:text-lg">
          Le FORDAC dispose d’un journal dénommé <strong>Presse de la Nation</strong>, 
          organe d’informations générales, Édition du Moungo, dans sa déclinaison départementale.
        </p>

        <p className="text-base md:text-lg">
          Cet organe remplit les missions suivantes :
        </p>

        <div className="space-y-10">

          {/* 1. Communication institutionnelle */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
              1. Communication institutionnelle
            </h2>
            <p className="text-base md:text-lg">
              Il assure la diffusion des positions officielles du parti au niveau départemental.
            </p>
          </section>

          {/* 2. Promotion de la citoyenneté */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
              2. Promotion de la citoyenneté
            </h2>
            <p className="text-base md:text-lg">
              Il contribue à informer, éduquer et sensibiliser les populations du Moungo 
              sur les valeurs de civisme, d’éthique, d’unité et de développement prônées par le FORDAC.
            </p>
          </section>

          {/* 3. Valorisation des actions locales */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
              3. Valorisation des actions locales
            </h2>
            <p className="text-base md:text-lg">
              Il relaie l’actualité économique, sociale et culturelle dans le département du Moungo.
            </p>
          </section>

          {/* 4. Neutralité, responsabilité et éthique */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
              4. Neutralité, responsabilité et éthique
            </h2>
            <p className="text-base md:text-lg">
              Sa ligne éditoriale est fondée sur la responsabilité, la courtoisie, 
              le respect des institutions de la République et des valeurs humaines défendues par le parti.
            </p>
          </section>

          {/* 5. Gouvernance */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
              5. Gouvernance
            </h2>

            <p className="text-base md:text-lg">
              Il est supervisé par le Président national, qui nomme :
            </p>

            <ul className="list-disc pl-5 md:pl-6 text-base md:text-lg space-y-1">
              <li>un Directeur de Publication ;</li>
              <li>un Rédacteur en Chef ;</li>
            </ul>

            <p className="text-base md:text-lg mt-2">
              lesquels mettent en place une équipe rédactionnelle.
            </p>

            <p className="text-base md:text-lg mt-4">
              Son mode d’organisation, ses ressources, ses obligations et son fonctionnement interne 
              sont précisés dans le Règlement intérieur et dans les textes applicables à la presse.
            </p>
          </section>

        </div>
      </section>

    </main>
  );
}
