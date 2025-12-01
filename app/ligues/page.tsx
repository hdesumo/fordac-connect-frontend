import React from "react";
import Link from "next/link";

export default function LiguesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Les Ligues du FORDAC
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Les Ligues du FORDAC regroupent les différentes catégories spécifiques 
        de militants au sein du parti. Elles jouent un rôle essentiel dans 
        l’expression des préoccupations des jeunes et des femmes, 
        et contribuent activement à la mise en œuvre des actions du parti. Un comité d'experts de tous bords est également rassemblé au sein d'une ligue.
      </p>

      {/* Ligues – Liste générale */}
      <section className="space-y-10">
        {/* Ligue des Jeunes */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Ligue des Jeunes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            La Ligue des Jeunes regroupe les militants âgés de 18 à 35 ans.  
            Elle a pour mission de dynamiser la participation politique de la jeunesse et
            d’encourager leur implication citoyenne en politique.
          </p>
          <Link
            href="/ligues/jeunes"
            className="text-green-700 font-semibold hover:underline"
          >
            En savoir plus →
          </Link>
        </div>

        {/* Ligue des Femmes */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Ligue des Femmes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            La Ligue des Femmes œuvre pour la participation active à la vie politique, ainsi que leur représentation 
            dans les différentes structures dirigeantes du parti.
          </p>
          <Link
            href="/ligues/femmes"
            className="text-green-700 font-semibold hover:underline"
          >
            En savoir plus →
          </Link>
        </div>

        {/* Ligue des Experts */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Ligue des Experts
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            La Ligue des Experts rassemble des professionnels issus de divers secteurs :  
            économie, droit, santé, technologie, développement territorial, etc.  
            Elle apporte l’expertise nécessaire à l’analyse et 
            l’évaluation des politiques publiques proposées par le FORDAC.
          </p>
          <Link
            href="/ligues/experts"
            className="text-green-700 font-semibold hover:underline"
          >
            En savoir plus →
          </Link>
        </div>
      </section>

      {/* Footer interne */}
      <div className="mt-16 p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">
          FORDAC — Forces Démocratiques pour l’Action et le Changement
        </h3>
        <p className="text-sm opacity-90">
          Les Ligues renforcent l’organisation interne du parti en donnant 
          une voix distincte mais complémentaire aux différentes composantes 
          de la société.
        </p>
      </div>
    </div>
  );
}
