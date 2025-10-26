"use client";
import { motion } from "framer-motion";

export default function PolitiqueConfidentialite() {
  return (
    <section className="min-h-screen bg-neutral dark:bg-[#0d1a0d] text-dark dark:text-light py-20 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        {/* 🔐 Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-primary dark:text-secondary mb-10 text-center"
        >
          Politique de confidentialité
        </motion.h1>

        {/* 🧾 Contenu principal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8 text-justify text-[15px] leading-relaxed"
        >
          <p>
            La présente politique de confidentialité décrit la manière dont{" "}
            <strong>FORDAC Connect</strong> collecte, utilise, conserve et protège
            les informations personnelles des utilisateurs de son site web{" "}
            <a
              href="https://www.fordac-connect.org"
              target="_blank"
              className="text-secondary hover:underline"
            >
              www.fordac-connect.org
            </a>.
          </p>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            1. Données collectées
          </h2>
          <p>
            Dans le cadre de ses activités, le FORDAC Connect peut être amené à
            collecter les informations suivantes :
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Localité (région, département, arrondissement)</li>
            <li>Contenu des messages transmis via le formulaire de contact</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            2. Finalité du traitement
          </h2>
          <p>
            Les données personnelles recueillies ont pour objectif de permettre
            au FORDAC Connect :
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>De répondre aux demandes des utilisateurs ;</li>
            <li>D’assurer la gestion des adhésions et des membres ;</li>
            <li>D’améliorer la communication et les services proposés ;</li>
            <li>De transmettre des informations relatives aux activités du FORDAC.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            3. Conservation des données
          </h2>
          <p>
            Les données personnelles sont conservées uniquement pour la durée
            nécessaire aux finalités pour lesquelles elles ont été collectées.
            Elles sont ensuite supprimées ou anonymisées.
          </p>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            4. Partage des données
          </h2>
          <p>
            Les informations collectées ne sont jamais vendues, échangées ni
            communiquées à des tiers sans le consentement explicite des
            utilisateurs, sauf obligation légale ou demande des autorités
            compétentes.
          </p>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            5. Sécurité des informations
          </h2>
          <p>
            Le FORDAC Connect met en œuvre des mesures techniques et
            organisationnelles appropriées pour protéger les données
            personnelles contre tout accès non autorisé, modification, perte ou
            destruction. L’accès à ces informations est limité aux membres
            habilités du FORDAC.
          </p>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            6. Cookies et statistiques
          </h2>
          <p>
            Le site peut utiliser des cookies pour améliorer l’expérience de
            navigation, réaliser des statistiques d’audience et faciliter
            l’accès à certaines fonctionnalités. L’utilisateur peut refuser ou
            supprimer ces cookies via les paramètres de son navigateur.
          </p>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            7. Droits des utilisateurs
          </h2>
          <p>
            Conformément aux dispositions de la réglementation camerounaise,
            tout utilisateur dispose d’un droit d’accès, de rectification et de
            suppression de ses données personnelles. Pour exercer ces droits,
            il peut contacter le FORDAC Connect à l’adresse suivante :
          </p>
          <ul className="list-none ml-4 space-y-1">
            <li>
              <strong>Email :</strong>{" "}
              <a
                href="mailto:contact@fordac-connect.org"
                className="text-secondary hover:underline"
              >
                contact@fordac-connect.org
              </a>
            </li>
            <li>
              <strong>Adresse :</strong> Siège national — Douala, Cameroun,
              Quartier Bonapriso.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            8. Modifications de la politique
          </h2>
          <p>
            Le FORDAC Connect se réserve le droit de modifier la présente
            politique de confidentialité afin de se conformer aux évolutions
            législatives ou aux besoins organisationnels. Les utilisateurs sont
            invités à la consulter régulièrement.
          </p>

          <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-6">
            Dernière mise à jour :{" "}
            {new Date().toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
