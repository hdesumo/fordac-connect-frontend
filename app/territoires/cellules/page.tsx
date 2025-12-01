import React from "react";

export default function CellulesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Les Cellules du FORDAC
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Les Cellules représentent l’unité de base du FORDAC.  
        Elles forment la structure la plus proche des populations, 
        animent la vie militante au quotidien et permettent de traduire 
        concrètement les orientations du parti sur le terrain.
      </p>

      {/* Rôle et missions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Rôle et Missions
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Mobiliser les militants au niveau local et favoriser 
            l’adhésion de nouveaux membres.
          </li>
          <li>
            Organiser les activités de sensibilisation, d'écoute et 
            d’engagement communautaire.
          </li>
          <li>
            Identifier les préoccupations des populations et les transmettre 
            aux Sous-sections et Sections.
          </li>
          <li>
            Former les membres à la vision, aux valeurs et aux principes 
            du parti.
          </li>
          <li>
            Participer aux campagnes électorales et aux initiatives citoyennes.
          </li>
        </ul>
      </section>

      {/* Fonctionnement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Fonctionnement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Une Cellule est dirigée par un Bureau composé au minimum d’un Chef de Cellule, 
          d’un Secrétaire et d’un Trésorier.  
          Selon les besoins locaux, d’autres responsabilités peuvent être ajoutées 
          (organisation, communication, mobilisation, etc.).
        </p>
      </section>

      {/* Implantation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Implantation Territoriale
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Les Cellules couvrent les zones 
          d’habitation.  
          Elles constituent le premier niveau d’expression de la démocratie interne 
          et assurent le lien direct entre le parti et la base militante.
        </p>
      </section>

      {/* Footer interne */}
      <div className="mt-16 p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">
          FORDAC — Forces Démocratiques pour l’Action et le Changement
        </h3>
        <p className="text-sm opacity-90">
          Les Cellules sont le cœur battant du mouvement, là où l’action concrète 
          commence et où les citoyens deviennent acteurs du changement.
        </p>
      </div>
    </div>
  );
}
