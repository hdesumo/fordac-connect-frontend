import React from "react";

export default function LigueFemmesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Ligue des Femmes
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        La Ligue des Femmes du FORDAC œuvre pour la participation accrue des femmes 
        à la vie politique, sociale et économique. Elle promeut l’égalité des chances et  
        le leadership féminin dans toutes les sphères du parti.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-3">Missions</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>Promouvoir l’autonomisation et le leadership féminin.</li>
        <li>Encourager la participation active des femmes aux décisions politiques.</li>
        <li>Mettre en œuvre des initiatives communautaires et économiques ciblées.</li>
        <li>Représenter les préoccupations des femmes dans toutes les instances du parti.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        Organisation interne
      </h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        La Ligue des Femmes fonctionne selon la même architecture organisationnelle que les autres 
        structures du FORDAC : départementale, communale et locale.
      </p>

      <div className="p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Rejoindre la Ligue des Femmes</h3>
        <p className="text-sm opacity-90">
          Toute femme adhérente au FORDAC peut intégrer la Ligue des Femmes afin d’agir 
          pour la promotion du développement communautaire et du progrès social.
        </p>
      </div>
    </div>
  );
}
