import React from "react";

export default function PresseDeLaNationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Presse de la Nation
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        <strong>Presse de la Nation</strong> est un organe de presse proche du FORDAC.
        Il s’agit d’un hebdomadaire imprimé et numérique dont la mission est 
        d’informer, d’éduquer et de mobiliser les populations autour des actions 
        communautaires, citoyennes et politiques.
      </p>

      {/* Objectifs */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">Objectifs</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>Diffuser des informations fiables.</li>
        <li>Soutenir la communication institutionnelle du parti.</li>
        <li>Promouvoir les initiatives communautaires dans les 13 arrondissements du Moungo.</li>
        <li>Valoriser les acteurs et les projets locaux.</li>
      </ul>

      {/* Organisation */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        Organisation et Fonctionnement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        La rédaction de <strong>Presse de la Nation</strong> comprend une équipe de journalistes et
        correspondants locaux.
        L’hebdomadaire est distribué en version papier et accessible en version numérique
        via le portail FORDAC Connect.
      </p>

      {/* CTA */}
      <div className="p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Soumettre un article ou une information</h3>
        <p className="text-sm opacity-90 mb-4">
          Les membres du FORDAC peuvent proposer des contenus, reportages ou annonces 
          pour les prochaines éditions.
        </p>
        <a
          href="/nous-contacter"
          className="inline-block px-4 py-2 bg-white text-green-800 rounded font-medium hover:bg-gray-100"
        >
          Contactez la rédaction
        </a>
      </div>
    </div>
  );
}
