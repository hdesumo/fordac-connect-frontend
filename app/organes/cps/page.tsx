import React from "react";

export default function CPSPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Comité Politique Stratégique (CPS)
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Le Comité Politique Stratégique (CPS) est l’un des organes centraux du
        FORDAC.  
        Il assure la direction politique stratégique du parti et veille à la
        cohérence globale des orientations définies par les instances
        supérieures.
      </p>

      {/* Section – Rôle et mission */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Rôle et Mission du CPS
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Le CPS est chargé d’examiner les grandes orientations politiques,
          d’assurer la cohérence des décisions stratégiques, de faire des recommandations et d’accompagner le
          Président National dans la mise en œuvre des lignes directrices du
          parti.  
          Il constitue l’organe pivot pour la réflexion politique approfondie et
          l’analyse des enjeux nationaux.
        </p>
      </section>

      {/* Section – Attributions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Attributions
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Assurer le suivi des grandes orientations adoptées par le Congrès.
          </li>
          <li>
            Définir les priorités politiques et stratégiques du parti sur le
            court, moyen et long terme.
          </li>
          <li>
            Former le cadre de réflexion et de concertation politique autour du
            Président National.
          </li>
          <li>
            Proposer des analyses, motions, positions et résolutions au Bureau
            Politique National.
          </li>
          <li>
            Examiner toute question politique ayant une incidence majeure sur la
            vie du parti.
          </li>
        </ul>
      </section>

      {/* Section – Composition */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Composition
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Le CPS est composé de cadres stratégiques et de membres désignés pour
          leur expertise et leur engagement politique.  
          Sa composition est fixée par le Règlement intérieur.
        </p>
      </section>

      {/* Section – Fonctionnement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Fonctionnement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Le CPS se réunit périodiquement, selon les nécessités stratégiques du
          parti ou sur convocation du Président National.  
          Ses décisions sont transmises sous forme d’avis stratégiques ou de
          propositions à l’attention du Bureau Politique National et du
          Secrétariat Exécutif National.
        </p>
      </section>

      {/* Footer interne */}
      <div className="mt-16 p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">
          FORDAC — Forces Démocratiques pour l’Action et le Changement
        </h3>
        <p className="text-sm opacity-90">
          Le CPS incarne la vision stratégique et la maturité politique du
          FORDAC.
        </p>
      </div>
    </div>
  );
}
