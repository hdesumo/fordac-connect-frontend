"use client";

import Image from "next/image";
import Link from "next/link";

export default function PresidentPage() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* --- En-tête Présidentiel --- */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-10">
          <div className="flex-shrink-0">
            <div className="w-60 h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-green-700">
              <Image
                src="/president.png"
                alt="Romaric Yebchue Semenou"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
              Romaric Yebchue Semenou
            </h1>
            <h2 className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Président National du FORDAC  
              <br />
              <span className="italic text-sm text-green-600">
                Forces Démocratiques pour l’Action et le Changement
              </span>
            </h2>
            <blockquote className="text-gray-800 dark:text-gray-100 italic text-lg leading-relaxed border-l-4 border-green-700 pl-4">
              « Servir, c’est comprendre que la politique n’est pas un privilège, 
              mais une responsabilité sacrée envers le peuple. »
            </blockquote>
          </div>
        </div>

        {/* --- Biographie --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Parcours et engagement
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Homme de conviction et d’action, <strong>Romaric Yebchue Semenou</strong> est une figure du renouveau politique 
            et social au Cameroun. Issu d’une génération engagée dans la défense des valeurs démocratiques, 
            il incarne la volonté de construire une politique fondée sur l’éthique, la proximité et la transparence.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Fondateur et Président du <strong>FORDAC</strong> — <em>Forces Démocratiques pour l’Action et le Changement</em> — 
            il œuvre pour le rassemblement des énergies citoyennes autour d’un projet commun : 
            bâtir un État juste, fort et au service de l’humain. 
            Son engagement s’appuie sur une vision claire : 
            « faire de la politique un instrument d’unité et de transformation sociale ».
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Son parcours est marqué par la défense des droits fondamentaux, la promotion de la jeunesse et 
            la participation active des citoyens aux décisions publiques. 
            Il défend une conception moderne de la gouvernance fondée sur la responsabilité, 
            la solidarité et la transparence.
          </p>
        </div>

        {/* --- Vision --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Une vision pour la nation
          </h3>
          <div className="bg-green-100 dark:bg-green-900 p-6 rounded-2xl shadow-md border-l-4 border-green-700">
            <p className="text-gray-800 dark:text-gray-100 italic leading-relaxed mb-4">
              « Nous portons une vision d’un Cameroun démocratique, juste et prospère — 
              un pays où chaque citoyen, sans distinction d’origine, de région ou de condition, 
              trouve sa place dans le destin national. »
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sous sa direction, le FORDAC s’affirme comme une force politique d’unité, 
              d’innovation et d’action.  
              La transformation du Cameroun passe par le courage de réformer, 
              la capacité d’écouter et la détermination à agir pour le bien commun.
            </p>
          </div>
        </div>

        {/* --- Message aux militants --- */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Message aux militants et sympathisants
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Chers militantes et militants, chers amis du FORDAC,
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Notre parti n’est pas une organisation de circonstance, mais une force d’avenir. 
            Ensemble, nous avons le devoir de défendre la démocratie, de promouvoir la solidarité 
            et d’éveiller la conscience nationale. 
            Chaque adhérent du FORDAC est un acteur du changement.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Dans cette nouvelle ère, notre mission est claire : 
            <strong>rendre à la politique sa noblesse et à l’action publique son efficacité.</strong>  
            L’avenir du Cameroun se construit aujourd’hui, avec courage, loyauté et foi dans la République.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Ensemble, portons haut les couleurs du FORDAC :  
            <strong className="text-green-700">Forces Démocratiques pour l’Action et le Changement.</strong>
          </p>
        </div>

        {/* --- Bloc de contact du cabinet --- */}
        <div className="bg-green-50 dark:bg-green-800 rounded-2xl shadow-md p-8 text-center mb-10">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
            Cabinet du Président National
          </h3>
          <p className="text-gray-700 dark:text-gray-200">
            Siège du FORDAC — Yaoundé, Cameroun  
            <br />
            📧 <a href="mailto:presidence@fordac-connect.org" className="text-green-700 hover:underline">
              presidence@fordac-connect.org
            </a>
            <br />
            ☎️ +237 699 00 00 00
          </p>
        </div>

        {/* --- Bouton de Charte du FORDAC --- */}
        <div className="text-center mt-12">
          <Link
            href="/documents/charte-mutuelle.pdf"
            target="_blank"
            className="inline-block bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-800 transition"
          >
            📜 Consulter la Charte du FORDAC
          </Link>
        </div>
      </div>
    </section>
  );
}
