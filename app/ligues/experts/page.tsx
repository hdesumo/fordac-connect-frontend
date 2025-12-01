import React from "react";

export default function LigueExpertsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Ligue des Experts
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        La Ligue des Experts du FORDAC regroupe des professionnels issus de divers secteurs 
        (économie, santé, technologie, ingénierie, développement territorial, droit, etc.).  
        Elle constitue la force de proposition et d’évaluation du parti.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-3">Missions</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>Apporter une expertise technique aux organes dirigeants.</li>
        <li>Élaborer et évaluer les politiques publiques proposées par le parti.</li>
        <li>Accompagner le déploiement des projets communautaires.</li>
        <li>Former et sensibiliser les militants aux enjeux de développement.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        Organisation interne
      </h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        La Ligue des Experts fonctionne avec des pôles thématiques :  
        économie, agriculture, santé, infrastructures, innovation, finances publiques, etc.
      </p>

      <div className="p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Rejoindre la Ligue des Experts</h3>
        <p className="text-sm opacity-90">
          Tout professionnel adhérent au FORDAC peut intégrer cette Ligue, à condition 
          de justifier d’une expertise dans un domaine clé du développement.
        </p>
      </div>
    </div>
  );
}
