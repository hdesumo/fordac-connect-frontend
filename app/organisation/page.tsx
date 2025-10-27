"use client";

import Image from "next/image";
import Link from "next/link";

export default function OrganisationPage() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* TITRE PRINCIPAL */}
        <h1 className="text-4xl font-bold text-center text-green-700 dark:text-green-400 mb-12">
          Le Parti FORDAC
        </h1>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* COLONNE GAUCHE : Président */}
          <div className="md:col-span-1 text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
              <Image
                src="/president.png"
                alt="Président national"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-green-800 dark:text-green-300">
              Romaric Yebchue Semenou
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Président national
            </p>
          </div>

          {/* COLONNE CENTRALE : Texte institutionnel */}
          <div className="md:col-span-2 space-y-6 text-gray-700 dark:text-gray-200 leading-relaxed">
            <p>
              Le <strong>FORDAC</strong>, acronyme de{" "}
              <strong>Forces Démocratiques pour l’Action et le Changement</strong>,
              est un mouvement politique fondé sur les valeurs de justice,
              d’équité et de progrès partagé. Son ambition est d’ouvrir une voie
              nouvelle pour une gouvernance participative, une démocratie
              enracinée dans les réalités locales et un développement durable au
              service du peuple.
            </p>

            <p>
              Le FORDAC promeut une action politique ancrée dans le terrain, au
              plus près des citoyens, afin de garantir que chaque décision
              publique soit le fruit d’un dialogue réel entre les institutions,
              les élus et la base militante. Il se distingue par son engagement
              envers la jeunesse, les femmes et les communautés rurales, piliers
              du renouveau national.
            </p>

            <p>
              En plaçant la <strong>solidarité</strong> et la{" "}
              <strong>responsabilité collective</strong> au cœur de son projet,
              le FORDAC s’emploie à bâtir une société fondée sur la dignité, le
              travail et la confiance mutuelle.
            </p>

            <p className="italic text-gray-600 dark:text-gray-400">
              « L’action politique du FORDAC s’inspire d’une conviction simple :
              le changement véritable vient de la base, de la volonté collective
              d’agir ensemble pour transformer le destin commun. »
            </p>
          </div>
        </div>

        {/* SECTION : Bureau national */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6 text-center">
            Bureau National du FORDAC
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-200">
            <div>
              <ul className="space-y-3">
                <li>
                  <strong>Président national :</strong> Romaric Yebchue Semenou
                </li>
                <li>
                  <strong>Vice-présidente nationale :</strong> (à compléter)
                </li>
                <li>
                  <strong>Secrétaire général :</strong> (à compléter)
                </li>
                <li>
                  <strong>Trésorier général :</strong> (à compléter)
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li>
                  <strong>Responsable communication :</strong> (à compléter)
                </li>
                <li>
                  <strong>Chargé de la mobilisation :</strong> (à compléter)
                </li>
                <li>
                  <strong>Responsable de la coordination Moungo Nord :</strong>{" "}
                  (à compléter)
                </li>
                <li>
                  <strong>Responsable de la coordination Moungo Sud :</strong>{" "}
                  (à compléter)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION : Charte du FORDAC */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
            La Charte du FORDAC
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            La Charte du FORDAC définit les principes fondamentaux du parti :
            discipline, solidarité, justice sociale, transparence et respect de
            la dignité humaine. Elle incarne l’engagement des militants à agir
            pour le bien commun et à défendre les valeurs démocratiques dans
            chaque acte politique.
          </p>
          <Link
            href="/documents/charte-mutuelle.pdf"
            target="_blank"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
          >
            📜 Consulter la Charte du FORDAC
          </Link>
        </div>
      </div>
    </section>
  );
}
