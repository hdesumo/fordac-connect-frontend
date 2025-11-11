"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Section bannière */}
      <section className="relative h-64 md:h-80 bg-gradient-to-r from-green-800 to-yellow-400 flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/logo-fordac.png"
            alt="Logo FORDAC"
            fill
            className="object-contain object-center"
          />
        </div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
          À propos du FORDAC
        </h1>
      </section>

      {/* Contenu principal */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Forces Démocratiques pour l’Action et le Changement (FORDAC)
          </h2>
          <p className="text-lg leading-relaxed text-justify">
            Le FORDAC est un mouvement politique engagé pour un développement
            équilibré, fondé sur la justice, la solidarité et la responsabilité
            citoyenne. Implanté dans le département du Moungo, il œuvre à
            renforcer la participation des populations aux décisions locales,
            tout en promouvant une gouvernance transparente et équitable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Notre vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Le FORDAC place l’humain au cœur de l’action politique. Notre
              vision repose sur la création d’une société où chaque citoyen
              trouve sa place, participe activement à la construction du bien
              commun et bénéficie des fruits du développement. Nous croyons en
              une politique de proximité, d’écoute et d’engagement.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/vision-fordac.png"
              alt="Vision du FORDAC"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="flex justify-center order-2 md:order-1">
            <Image
              src="/images/engagement-fordac.png"
              alt="Engagement du FORDAC"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Nos valeurs fondamentales
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Justice sociale :</strong> chaque citoyen doit pouvoir
                vivre dignement grâce à un accès équitable aux ressources.
              </li>
              <li>
                <strong>Solidarité :</strong> le progrès collectif repose sur
                l’unité et l’entraide.
              </li>
              <li>
                <strong>Transparence :</strong> la gestion publique doit être
                exemplaire et responsable.
              </li>
              <li>
                <strong>Engagement :</strong> l’action politique doit servir
                l’intérêt général et non des ambitions personnelles.
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-medium text-gray-700 italic">
            “Le changement durable commence par une action collective éclairée.”
          </p>
          <p className="text-green-800 font-bold mt-2">
            — FORDAC, Forces Démocratiques pour l’Action et le Changement
          </p>
        </motion.div>
      </section>

      {/* Bande de fermeture */}
      <footer className="bg-green-800 text-white text-center py-8 mt-16">
        <p className="text-sm">
          © {new Date().getFullYear()} FORDAC — Tous droits réservés.
        </p>
      </footer>
    </main>
  );
}
