import React from "react";

export default function ControleAuditPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Comité de Contrôle & Audit
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Le Comité de Contrôle & Audit est l’organe chargé de vérifier la
        gestion financière et patrimoniale du FORDAC.  
        Il garantit la transparence, la conformité et la bonne gouvernance dans
        toutes les activités du parti.
      </p>

      {/* Mission générale */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Mission Générale
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Cet organe indépendant évalue régulièrement les pratiques internes,
          contrôle les opérations financières, examine les comptes et s’assure
          que la gestion du parti respecte les règles en vigueur ainsi que les
          orientations stratégiques définies par les instances dirigeantes.
        </p>
      </section>

      {/* Attributions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Attributions du Comité
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Examiner la gestion financière du parti et contrôler la conformité
            des dépenses.
          </li>
          <li>
            Analyser les rapports comptables et vérifier la tenue des documents
            administratifs et financiers.
          </li>
          <li>
            Auditer les différentes structures territoriales ou sectorielles.
          </li>
          <li>
            Détecter les irrégularités, les risques et les dysfonctionnements
            internes.
          </li>
          <li>
            Proposer des mesures correctives pour améliorer la gouvernance.
          </li>
          <li>
            Présenter des rapports périodiques aux organes dirigeants pour
            délibération.
          </li>
        </ul>
      </section>

      {/* Composition */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Composition
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Le Comité de Contrôle & Audit est composé de membres ayant une forte
          expérience dans les domaines de la gestion, des finances, du droit, de
          l’administration ou de l’audit.  
          Leur sélection repose sur le professionnalisme, la rigueur et
          l’indépendance.
        </p>
      </section>

      {/* Fonctionnement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Fonctionnement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Le Comité se réunit selon un calendrier fixé par ses membres ou sur
          convocation des organes dirigeants.  
          Il peut diligenter des missions de vérification, demander des
          explications, consulter des documents financiers et mener des audits
          internes.  
          Ses conclusions sont consignées dans des rapports transmis aux
          autorités compétentes du FORDAC.
        </p>
      </section>

      {/* Footer interne */}
      <div className="mt-16 p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">
          FORDAC — Forces Démocratiques pour l’Action et le Changement
        </h3>
        <p className="text-sm opacity-90">
          Le Comité de Contrôle & Audit garantit la transparence et la bonne
          gouvernance au sein du parti.
        </p>
      </div>
    </div>
  );
}
