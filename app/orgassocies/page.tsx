"use client";

export default function OrganesAssociesPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white py-16 md:py-28 px-5 md:px-6">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-14 md:mb-20">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Organes Associés du FORDAC
        </h1>

        <p className="text-white/80 text-base md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Les organes associés complètent l’action du FORDAC 
          par des initiatives citoyennes, sociales, éducatives et médias.
        </p>
      </section>

      {/* CARTES — Équilibrées pour mobile */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {[
          { title: "Presse de la Nation", desc: "L’organe médiatique proche du FORDAC." },
          { title: "Mutuelle du FORDAC", desc: "Contrats d'assurances négociés." },
    
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/20
                       hover:bg-white/20 transition shadow-xl"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/80 leading-relaxed text-base md:text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

    </main>
  );
}
