"use client";

import Image from "next/image";

export default function OrganisationPage() {
  const bureau = [
    {
      nom: "Romaric Yebchue Semenou",
      fonction: "Président national",
      photo: "/president.png",
    },
    {
      nom: "Clarisse Mbarga",
      fonction: "Secrétaire générale",
      photo: "/hero/hero1.jpeg",
    },
    {
      nom: "Moussa Ndong",
      fonction: "Trésorier national",
      photo: "/hero/hero2.jpeg",
    },
    {
      nom: "Aline Tchamda",
      fonction: "Porte-parole du parti",
      photo: "/hero/hero3.jpeg",
    },
  ];

  const coordinations = [
    { region: "Nord", coordonnateur: "Amadou Issa" },
    { region: "Centre", coordonnateur: "Marie Onana" },
    { region: "Littoral", coordonnateur: "Jean-Paul Kalla" },
    { region: "Sud", coordonnateur: "Rosine Nguetchoua" },
    { region: "Ouest", coordonnateur: "Martine Ngassa" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* --- Introduction + Mot du Président --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
          {/* Bloc texte introductif */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-green-700 mb-4">
              Organisation du FORDAC
            </h1>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Le <strong>FORDAC</strong> – <em>Forces Démocratiques pour l’Action et le Changement</em> – 
              est un parti politique moderne et engagé, fondé sur les valeurs de démocratie, de justice 
              sociale et de développement inclusif. 
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Son organisation repose sur un <strong>Bureau politique national</strong> représentatif, 
              des <strong>Coordinations régionales</strong> actives, et des <strong>Sections locales</strong> 
              proches des populations, afin d’assurer une gouvernance participative et une action politique
              efficace sur l’ensemble du territoire.
            </p>
          </div>

          {/* Bloc Mot du Président */}
          <div className="bg-green-100 dark:bg-green-900 p-5 rounded-2xl shadow-lg border-l-4 border-green-700">
            <div className="flex items-center mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-700 mr-4">
                <Image
                  src="/president.png"
                  alt="Romaric Yebchue Semenou"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-green-800 dark:text-green-300 text-lg">
                  Romaric Yebchue Semenou
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Président national du FORDAC
                </p>
              </div>
            </div>

            <blockquote className="italic text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
              « Notre engagement, c’est de rendre la politique à ceux qui la vivent au quotidien : 
              le peuple. Le FORDAC est né de la conviction que l’action publique doit redevenir 
              l’expression de la justice, de l’unité et de l’espérance. »
            </blockquote>
          </div>
        </div>

        {/* --- Bureau Politique National --- */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-green-700 text-center mb-8">
            Bureau politique national
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {bureau.map((membre) => (
              <div
                key={membre.nom}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-700">
                  <Image
                    src={membre.photo}
                    alt={membre.nom}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  {membre.nom}
                </h3>
                <p className="text-green-700 font-medium">{membre.fonction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Coordinations régionales --- */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-green-700 text-center mb-8">
            Coordinations régionales
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Les coordinations régionales assurent la représentation du FORDAC dans chaque 
            circonscription. Elles traduisent localement la vision du Bureau politique national 
            et veillent à la cohésion du parti sur le terrain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coordinations.map((coord) => (
              <div
                key={coord.region}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-green-700 mb-2">
                  Région du {coord.region}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Coordonnateur :{" "}
                  <span className="font-medium">{coord.coordonnateur}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Frise hiérarchique --- */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Structure hiérarchique du parti
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            L’organisation du FORDAC reflète son engagement pour la démocratie interne, 
            la discipline et la participation citoyenne à la vie politique.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-green-700 text-white px-6 py-3 rounded-full shadow-md">
              Congrès National
            </div>
            <span className="text-gray-400 text-2xl">↓</span>
            <div className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md">
              Bureau Politique National
            </div>
            <span className="text-gray-400 text-2xl">↓</span>
            <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md">
              Coordinations Régionales
            </div>
            <span className="text-gray-400 text-2xl">↓</span>
            <div className="bg-green-400 text-white px-6 py-3 rounded-full shadow-md">
              Sections Locales & Cellules Communales
            </div>
            <span className="text-gray-400 text-2xl">↓</span>
            <div className="bg-green-300 text-white px-6 py-3 rounded-full shadow-md">
              Adhérents & Militants
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
