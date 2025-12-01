import React from "react";

export default function MutuelleFordacPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* Titre */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Mutuelle du FORDAC
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        La <strong>Mutuelle du FORDAC</strong> est un dispositif de partenariat stratégique 
        entre le FORDAC et des compagnies d’assurances reconnues. 
        Son objectif est de permettre aux militants d’accéder à des 
        <strong>polices d’assurance complètes, fiables et à coûts préférentiels</strong>, 
        négociées grâce au poids collectif du Mouvement.
      </p>

      {/* Pourquoi la Mutuelle ? */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        Pourquoi une Mutuelle ?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        Les assurances restent souvent coûteuses ou difficiles d’accès pour 
        de nombreuses familles. Grâce à son ancrage communautaire et à sa 
        représentativité, le FORDAC joue un rôle d’intermédiation en 
        négociant des <strong>conditions avantageuses</strong> pour tous ses membres, 
        sans distinction.
      </p>

      {/* Types d’assurances */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        Types d’assurances concernées
      </h2>

      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>Assurance santé</li>
        <li>Assurance automobile</li>
        <li>Assurance habitation</li>
        <li>Assurance scolaire</li>
        <li>Assurance obsèques</li>
        <li>Assurance voyage</li>
        <li>Assurances professionnelles</li>
        <li>Autres produits selon les partenariats</li>
      </ul>

      {/* Fonctionnement réel */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        Fonctionnement
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        La Mutuelle du FORDAC ne collecte pas de cotisations internes 
        et ne constitue pas une caisse financière du parti. 
        Elle fonctionne exclusivement par :
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>des <strong>accords cadres</strong> avec des assureurs nationaux ;</li>
        <li>des <strong>tarifs négociés</strong> pour les membres du FORDAC ;</li>
        <li>des <strong>facilités administratives</strong> pour les souscriptions ;</li>
        <li>un <strong>guichet d’accompagnement</strong> pour orienter les militants.</li>
      </ul>

      {/* Partenaires */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        Partenaires
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        Le FORDAC engage un processus d’évaluation et de sélection 
        des compagnies d’assurance les plus fiables afin d’offrir 
        aux militants une couverture de qualité et des garanties solides.
        <br />
        La liste officielle des partenaires sera publiée prochainement.
      </p>

      {/* CTA */}
      <div className="p-6 bg-green-700 text-white rounded-lg">
        <h3 className="text-xl font-semibold mb-2">
          Être informé du lancement de la Mutuelle
        </h3>
        <p className="text-sm opacity-90 mb-4">
          Laissez-nous vos coordonnées pour être averti en priorité 
          dès l'ouverture des souscriptions.
        </p>
        <a
          href="/nous-contacter"
          className="inline-block px-4 py-2 bg-white text-green-800 rounded font-medium hover:bg-gray-100"
        >
          Nous contacter
        </a>
      </div>

    </div>
  );
}
