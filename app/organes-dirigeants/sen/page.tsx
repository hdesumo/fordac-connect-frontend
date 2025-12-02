import React from "react";

export default function SENPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Secrétariat Exécutif National (SEN)
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Le Secrétariat Exécutif National (SEN) est l’organe chargé de l’exécution
        quotidienne des décisions, résolutions et orientations politiques du
        Bureau Politique National (BPN) et du Comité Politique Stratégique (CPS).
        Il constitue le moteur administratif et opérationnel du FORDAC.
      </p>

      {/* Section — Mission du SEN */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Mission du Secrétariat Exécutif National
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Le SEN assure la gestion administrative, politique et organisationnelle
          du parti.  
          Il met en œuvre les décisions des instances supérieures et coordonne les
          activités des différentes structures nationales et territoriales.
        </p>
      </section>

      {/* Section — Attributions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Attributions du SEN
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Assurer l’application des résolutions et directives du BPN et du CPS.
          </li>
          <li>
            Assurer la gestion quotidienne des affaires du parti au niveau
            national.
          </li>
          <li>
            Coordonner techniquement les actions des Démembrements Territoriaux.
          </li>
          <li>
            Superviser les commissions, comités, ligues et services internes.
          </li>
          <li>
            Préparer les rapports administratifs, politiques et stratégiques pour
            les organes dirigeants.
          </li>
          <li>
            Organiser le calendrier politique, les réunions, les missions et les
            manifestations officielles du parti.
          </li>
        </ul>
      </section>

      {/* Section — Structure */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Structure du SEN
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Le Secrétariat Exécutif National est composé de plusieurs
          Secrétaires Nationaux, chacun responsable d’un domaine spécifique, tel
          que :
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Organisation & Mobilisation</li>
          <li>Communication & Porte-parole adjoint</li>
          <li>Affaires Électorales</li>
          <li>Formation Politique & Éducation Citoyenne</li>
          <li>Relations Extérieures & Coopération</li>
          <li>Affaires Juridiques & Droits Humains</li>
          <li>Économie, Finances et Développement Local</li>
          <li>Affaires Sociales & Société Civile</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-4">
          La structure exacte est définie et mise à jour par les statuts et les
          résolutions internes du parti.
        </p>
      </section>

      {/* Section — Fonctionnement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Fonctionnement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Le SEN se réunit selon un calendrier défini ou sur convocation du
          Président National.  
          Il travaille de manière permanente pour garantir l’efficacité de
          l’action politique, la coordination des structures territoriales et la
          gestion harmonieuse du parti.
        </p>
      </section>

      {/* Footer interne */}
      <div className="mt-16 p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">
          FORDAC — Forces Démocratiques pour l’Action et le Changement
        </h3>
        <p className="text-sm opacity-90">
          Le Secrétariat Exécutif National assure la vitalité quotidienne de
          l’action politique du parti.
        </p>
      </div>
    </div>
  );
}
