import React from "react";

export default function LigueJeunesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Ligue des Jeunes
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        La Ligue des Jeunes du FORDAC rassemble les militants âgés de 18 à 35 ans. 
        Elle constitue un espace d’engagement et de formation politique 
        pour la jeunesse, pilier essentiel du développement communautaire et de l’avenir du parti.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-3">Missions</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>Encourager l’implication citoyenne et la participation politique des jeunes.</li>
        <li>Développer des initiatives pour la formation et l’entrepreneuriat.</li>
        <li>Renforcer les capacités des jeunes militants.</li>
        <li>Constituer une pépinière de futurs cadres du parti.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        Organisation interne
      </h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        La Ligue des Jeunes est structurée au niveau départemental, 
        communal et dans les cellules. Elle travaille en synergie avec les organes dirigeants 
        et les démembrements territoriaux du parti.
      </p>

      <div className="p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Rejoindre la Ligue des Jeunes</h3>
        <p className="text-sm opacity-90">
          Toute personne âgée de 18 à 35 ans et adhérente au FORDAC peut intégrer la Ligue 
          et contribuer aux actions menées en faveur du développement du Moungo et du Cameroun.
        </p>
      </div>
    </div>
  );
}
