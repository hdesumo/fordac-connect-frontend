import React from "react";

export default function SectionsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Les Sections du FORDAC
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Les Sections constituent l’un des piliers fondamentaux de l’organisation
        territoriale du FORDAC.  
        Elles assurent la présence active du parti dans les départements et
        jouent un rôle essentiel dans la mobilisation citoyenne et la mise en œuvre des orientations issues des organes
        dirigeants.
      </p>

      {/* Rôle et responsabilités */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Rôle et Responsabilités
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Encadrer les Sous-sections et Cellules situées dans leur
            département de compétence.
          </li>
          <li>
            Appliquer les décisions des Fédérations et des organes politiques
            nationaux.
          </li>
          <li>
            Organiser les réunions, activités politiques, actions de terrain et
            projets communautaires.
          </li>
          <li>
            Recenser les besoins des populations et produire des rapports
            périodiques destinés à la hiérarchie du parti.
          </li>
          <li>
            Assurer la formation et la mobilisation des militants au niveau
            départemental.
          </li>
        </ul>
      </section>

      {/* Fonctionnement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Fonctionnement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Chaque Section est administrée par un Bureau de Section dirigé par un
          Président de Section, secondé par un Secrétaire, un Trésorier et
          d’autres responsables chargés d’opérations précises.
          <br />
          Les réunions statutaires permettent d’évaluer les activités
          et de proposer des solutions
          adaptées aux réalités locales.
        </p>
      </section>

      {/* Implantation territoriale */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Implantation Territoriale
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Les Sections couvrent l’ensemble des arrondissements du territoire
          national.  
          Elles sont au cœur de la dynamisation locale du parti et assurent un
          lien permanent entre les instances dirigeantes et la base militante.
        </p>
      </section>

      {/* Footer interne */}
      <div className="mt-16 p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">
          FORDAC — Forces Démocratiques pour l’Action et le Changement
        </h3>
        <p className="text-sm opacity-90">
          Les Sections représentent l’ossature locale du mouvement et sont
          garantes de son enracinement communautaire.
        </p>
      </div>
    </div>
  );
}
