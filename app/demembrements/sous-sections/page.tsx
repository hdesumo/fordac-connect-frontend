import React from "react";

export default function SousSectionsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Les Sous-sections du FORDAC
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Les Sous-sections constituent une articulation essentielle de 
        l’organisation territoriale du FORDAC.  
        Situées au niveau des quartiers, elles permettent d’assurer une 
        présence active du parti au plus près des populations, en renforçant la 
        coordination et la mobilisation locale.
      </p>

      {/* Rôle et missions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Rôle et Missions
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Assurer la mise en œuvre des directives des Sections et des 
            organes supérieurs du parti.
          </li>
          <li>
            Superviser les Cellules de base rattachées à leur territoire.
          </li>
          <li>
            Organiser les réunions, rencontres de proximité et activités 
            citoyennes.
          </li>
          <li>
            Identifier les problématiques locales et participer à l’élaboration 
            de solutions adaptées.
          </li>
          <li>
            Contribuer au recrutement, à l’encadrement et à la formation des 
            militants au niveau de l’arrondissement.
          </li>
        </ul>
      </section>

      {/* Fonctionnement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Fonctionnement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Chaque Sous-section est administrée par un Bureau, dirigé par un 
          Président de Sous-section, accompagné d’un Secrétaire, d’un Trésorier 
          et d’autres responsables à des postes opérationnels.  
          Les réunions statutaires permettent d’assurer un suivi régulier des 
          actions menées et de maintenir un lien constant avec les Sections.
        </p>
      </section>

      {/* Implantation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Implantation Territoriale
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Les Sous-sections constituent le niveau organisationnel qui relie directement 
          les arrondissements (Sections) à la base militante.
        </p>
      </section>

      {/* Footer interne */}
      <div className="mt-16 p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">
          FORDAC — Forces Démocratiques pour l’Action et le Changement
        </h3>
        <p className="text-sm opacity-90">
          Les Sous-sections animent la vie militante locale et contribuent 
          au rayonnement du parti dans chaque arrondissement.
        </p>
      </div>
    </div>
  );
}
