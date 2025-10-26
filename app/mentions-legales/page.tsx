"use client";
import { motion } from "framer-motion";

export default function MentionsLegales() {
  return (
    <section className="min-h-screen bg-neutral dark:bg-[#0d1a0d] text-dark dark:text-light py-20 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        {/* 🏛️ Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-primary dark:text-secondary mb-10 text-center"
        >
          Mentions légales
        </motion.h1>

        {/* 🧾 Contenu principal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8 text-justify text-[15px] leading-relaxed"
        >
          <p>
            Conformément aux dispositions de la législation camerounaise en
            vigueur, il est porté à la connaissance des utilisateurs et visiteurs
            du site <strong>FORDAC Connect</strong> les présentes mentions légales.
          </p>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            1. Présentation du site
          </h2>
          <p>
            Le présent site internet, accessible à l’adresse{" "}
            <a
              href="https://www.fordac-connect.org"
              target="_blank"
              className="text-secondary hover:underline"
            >
              www.fordac-connect.org
            </a>{" "}
            est la plateforme numérique officielle du{" "}
            <strong>Front des Démocrates pour l’Action et le Changement (FORDAC)</strong>.
          </p>

          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong>Éditeur du site :</strong> FORDAC Connect — organisation
              citoyenne à but non lucratif.
            </li>
            <li>
              <strong>Responsable de publication :</strong> Romaric Yebchue
              Semenou — Président national.
            </li>
            <li>
              <strong>Siège social :</strong> Douala, Cameroun — Quartier Bonapriso,
              Rue Koloko (près de l’Avenue de Gaulle).
            </li>
            <li>
              <strong>Adresse e-mail :</strong>{" "}
              <a
                href="mailto:contact@fordac-connect.org"
                className="text-secondary hover:underline"
              >
                contact@fordac-connect.org
              </a>
            </li>
            <li>
              <strong>Téléphone :</strong> +237 6 99 11 22 33
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            2. Hébergement du site
          </h2>
          <p>
            Le site <strong>www.fordac-connect.org</strong> est hébergé par :
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong>Hébergeur :</strong> Vercel Inc.
            </li>
            <li>
              <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            </li>
            <li>
              <strong>Site web :</strong>{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                className="text-secondary hover:underline"
              >
                www.vercel.com
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            3. Propriété intellectuelle
          </h2>
          <p>
            La structure générale du site, ainsi que les textes, images, sons et
            vidéos la composant, sont la propriété exclusive du FORDAC Connect ou
            de ses partenaires. Toute reproduction, représentation, modification,
            publication, adaptation de tout ou partie des éléments du site, quel
            que soit le moyen ou le procédé utilisé, est interdite, sauf
            autorisation écrite préalable du FORDAC Connect.
          </p>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            4. Protection des données personnelles
          </h2>
          <p>
            Le FORDAC Connect s’engage à ce que la collecte et le traitement de
            données personnelles soient effectués de manière loyale, transparente
            et sécurisée, conformément aux textes en vigueur relatifs à la
            protection des données au Cameroun. Aucune donnée n’est cédée à des
            tiers sans consentement explicite.
          </p>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            5. Responsabilité
          </h2>
          <p>
            Le FORDAC Connect ne saurait être tenu pour responsable des dommages
            directs ou indirects causés au matériel de l’utilisateur lors de
            l’accès au site. L’utilisateur s’engage à accéder au site en utilisant
            un matériel récent, ne contenant pas de virus et avec un navigateur
            mis à jour.
          </p>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            6. Liens hypertextes
          </h2>
          <p>
            Le site <strong>FORDAC Connect</strong> peut contenir des liens vers
            d’autres sites ou ressources disponibles sur Internet. Le FORDAC
            Connect ne dispose d’aucun moyen pour contrôler ces sites et ne peut
            être tenu responsable de leur contenu.
          </p>

          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            7. Droit applicable
          </h2>
          <p>
            Tout litige en relation avec l’utilisation du site{" "}
            <strong>FORDAC Connect</strong> est soumis au droit camerounais. En
            cas de différend, la juridiction compétente sera celle des tribunaux
            de Douala.
          </p>

          <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-6">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", {
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
