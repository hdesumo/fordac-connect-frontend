"use client";

import Image from "next/image";

interface Member {
  name: string;
  title: string;
  region?: string;
  image?: string;
}

const members: Member[] = [
  {
    name: "Romaric Yebchue Semenou",
    title: "Président national",
    image: "/president.png",
  },
  {
    name: "Martine Ngassa",
    title: "Secrétaire générale",
    image: "/hero/hero2.jpeg",
  },
  {
    name: "Jean-Paul Kalla",
    title: "Coordinateur régional – Littoral",
    image: "/hero/hero3.jpeg",
  },
  {
    name: "Rosine Nguetchoua",
    title: "Responsable Communication nationale",
    image: "/hero/hero1.jpeg",
  },
  {
    name: "Benoît Ebongué",
    title: "Trésorier national",
    image: "/hero/hero2.jpeg",
  },
  {
    name: "Claudine Mbah",
    title: "Coordinatrice régionale – Ouest",
    image: "/hero/hero3.jpeg",
  },
  {
    name: "Alain Tchoumi",
    title: "Chargé des Relations extérieures",
    image: "/hero/hero1.jpeg",
  },
];

export default function OrganisationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* 🟩 Titre principal */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-4">
            Organisation du FORDAC
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Le FORDAC est structuré autour d’une présidence nationale, d’un
            secrétariat général, et de coordinations régionales assurant la
            cohésion et la mise en œuvre des actions sur tout le territoire.
          </p>
        </header>

        {/* 🟢 Présidence nationale */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-8">
            Présidence nationale
          </h2>

          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-green-700 dark:border-green-400 shadow-lg">
              <Image
                src="/president.png"
                alt="Président national"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400">
                Romaric Yebchue Semenou
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Président national du FORDAC
              </p>
            </div>
            <blockquote className="max-w-2xl text-center italic text-gray-700 dark:text-gray-300 border-l-4 border-green-600 dark:border-green-400 pl-4 leading-relaxed">
              “Une organisation forte est celle qui place la confiance, la
              transparence et le sens du devoir au cœur de son action.”
            </blockquote>
          </div>
        </section>

        {/* 🟩 Membres du bureau national */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-10 text-center">
            Bureau national
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-600 dark:border-green-400 shadow-md">
                  <Image
                    src={member.image || "/hero/hero1.jpeg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-green-700 dark:text-green-300 text-lg">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {member.title}
                </p>
                {member.region && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {member.region}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 🟢 Footer */}
        <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-400 mt-12 border-t border-gray-200 dark:border-gray-800">
          © {new Date().getFullYear()} FORDAC Connect — Mouvement Citoyen pour un Cameroun Juste et Responsable.
        </footer>
      </section>
    </main>
  );
}
