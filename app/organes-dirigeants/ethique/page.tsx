import React from "react";

export default function EthiquePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Comité d’Éthique
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Le Comité d’Éthique est l’organe chargé de veiller au respect des
        valeurs fondamentales du FORDAC, de garantir la discipline interne et de
        promouvoir une conduite exemplaire des responsables, des militants et des
        structures du parti.
      </p>

      {/* Rôle principal */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Rôle du Comité d’Éthique
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Il veille à ce que toutes les actions du parti soient conformes à ses
          principes, à ses statuts, et à la morale politique républicaine.  
          Le Comité d’Éthique s’assure également que les droits et devoirs des
          militants sont respectés et que la vie du parti demeure juste,
          équitable et disciplinée.
        </p>
      </section>

      {/* Attributions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Attributions du Comité d’Éthique
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Veiller au respect des statuts, règlements et principes fondateurs du
            parti.
          </li>
          <li>
            Examiner les comportements individuels ou collectifs contraires à
            l’éthique et proposer les mesures appropriées.
          </li>
          <li>
            Arbitrer les litiges internes en privilégiant la cohésion et
            l’unité du parti.
          </li>
          <li>
            Conseiller les organes dirigeants sur les bonnes pratiques
            politiques, morales et organisationnelles.
          </li>
          <li>
            Promouvoir l’intégrité, la transparence et la discipline dans la vie
            militante.
          </li>
        </ul>
      </section>

      {/* Composition */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Composition
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Le Comité d’Éthique est composé de membres expérimentés, reconnus pour
          leur intégrité morale, leur impartialité et leur engagement au service
          du parti.  
          Sa composition exacte est déterminée conformément aux statuts et peut
          être ajustée par les organes dirigeants.
        </p>
      </section>

      {/* Fonctionnement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Fonctionnement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Le Comité d’Éthique se réunit en session ordinaire ou extraordinaire,
          selon les situations à trancher.  
          Ses décisions sont consignées dans des rapports transmis aux organes
          supérieurs du parti pour mise en œuvre ou délibération finale.
        </p>
      </section>

      {/* Footer interne */}
      <div className="mt-16 p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">
          FORDAC — Forces Démocratiques pour l’Action et le Changement
        </h3>
        <p className="text-sm opacity-90">
          Le Comité d’Éthique garantit l’intégrité, l’équité et la moralité dans
          la vie interne du parti.
        </p>
      </div>
    </div>
  );
}
