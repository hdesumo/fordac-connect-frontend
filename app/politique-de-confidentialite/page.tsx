"use client";

import { motion } from "framer-motion";

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-6">
      <section className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-fordacGreen mb-8 text-center"
        >
          Politique de confidentialité
        </motion.h1>

        <div className="space-y-6 text-justify leading-relaxed">
          <p>
            Le FORDAC accorde une grande importance à la protection des données personnelles.
            Cette politique explique la manière dont vos informations sont collectées,
            utilisées et protégées lorsque vous interagissez avec nos plateformes numériques.
          </p>

          <h2 className="text-2xl font-semibold text-fordacGold mt-8 mb-3">
            1. Collecte des informations
          </h2>
          <p>
            Nous collectons uniquement les informations nécessaires à nos activités politiques et administratives :
            nom, prénom, adresse e-mail, numéro de téléphone, région, et autres données liées à votre engagement.
          </p>

          <h2 className="text-2xl font-semibold text-fordacGold mt-8 mb-3">
            2. Utilisation des données
          </h2>
          <p>
            Les données collectées servent à :
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Gérer les adhésions et communications internes du parti.</li>
            <li>Informer les membres des activités et initiatives du FORDAC.</li>
            <li>Assurer la sécurité et la fiabilité des échanges sur nos plateformes.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-fordacGold mt-8 mb-3">
            3. Partage et confidentialité
          </h2>
          <p>
            Aucune donnée personnelle n’est transmise à des tiers sans votre consentement.
            Le FORDAC s’engage à respecter la confidentialité de vos informations
            et à les protéger contre tout accès non autorisé.
          </p>

          <h2 className="text-2xl font-semibold text-fordacGold mt-8 mb-3">
            4. Vos droits
          </h2>
          <p>
            Conformément aux lois en vigueur, vous disposez d’un droit d’accès,
            de rectification et de suppression de vos données personnelles.
            Pour toute demande, contactez-nous à :
            <a
              href="mailto:contact@fordac-connect.org"
              className="text-fordacGold hover:underline ml-1"
            >
              contact@fordac-connect.org
            </a>.
          </p>

          <h2 className="text-2xl font-semibold text-fordacGold mt-8 mb-3">
            5. Sécurité des données
          </h2>
          <p>
            Le FORDAC met en œuvre toutes les mesures techniques et organisationnelles nécessaires
            pour garantir la sécurité, l’intégrité et la confidentialité de vos données.
          </p>

          <p className="text-center mt-12 text-sm text-gray-500">
            © {new Date().getFullYear()} FORDAC — Politique de confidentialité.
          </p>
        </div>
      </section>
    </main>
  );
}
