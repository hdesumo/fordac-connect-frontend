import React from "react";

export default function FederationsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Les Fédérations du FORDAC
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Les Fédérations constituent le premier niveau des démembrements
        territoriaux du FORDAC.  
        Elles assurent la coordination des activités du parti au niveau régional
        ou d’un groupement territorial défini par les statuts.
      </p>

      {/* Rôle des Fédérations */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Rôle et Responsabilités
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Représenter le parti dans leur ressort territorial et appliquer les
            orientations nationales.
          </li>
          <li>
            Coordonner les Sections, Sous-sections et Cellules affiliées à leur
            zone.
          </li>
          <li>
            Mobiliser les militants et assurer la présence du parti sur le
            terrain.
          </li>
          <li>
            Superviser l'organisation des activités politiques, sociales et
            communautaires.
          </li>
          <li>
            Contribuer aux stratégies de développement et aux actions de terrain
            décidées par les organes dirigeants.
          </li>
        </ul>
      </section>

      {/* Fonctionnement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Fonctionnement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Les Fédérations sont dirigées par des coordinateurs généraux. 
          Elles se réunissent périodiquement pour évaluer les activités
        et planifier les actions futures.
        </p>
      </section>

      {/* Implantation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Implantation Territoriale
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Le FORDAC est implanté dans l’ensemble du territoire national.  
          Chaque Fédération couvre un espace géographique correspondant à un
          département administratif ou à une zone définie par les organes
          dirigeants.  
          Leur mission essentielle est d’assurer une coordination fluide entre
          les structures locales et la direction nationale.
          Par exemple, dans le département du Moungo, deux fédérations ont été créées. La fédération Moungo Nord et la fédération du Moungo Sud.
        </p>
      </section>

      {/* Footer interne */}
      <div className="mt-16 p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">
          FORDAC — Forces Démocratiques pour l’Action et le Changement
        </h3>
        <p className="text-sm opacity-90">
          Les Fédérations sont le socle de l’organisation territoriale du
          mouvement.
        </p>
      </div>
    </div>
  );
}
