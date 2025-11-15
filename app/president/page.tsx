import Image from "next/image";

export default function President() {
  return (
    <main className="bg-[#0c2e25] min-h-screen text-white pt-24 pb-16">
      <section className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#c8a45d]">
          Le Président National
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              À la tête du FORDAC, le Président National Romaric YEPCHUE SEMENOU incarne la vision et les
              valeurs d’un parti tourné vers l’action, la justice et le progrès.
              Son engagement constant repose sur une conviction : <br />
              <strong>
                « Le développement est une œuvre collective, portée par la foi,
                la rigueur et la solidarité. »
              </strong>
            </p>

            <p className="text-lg leading-relaxed">
              Sous son impulsion, le FORDAC promeut une gouvernance participative et une société équitable où
              chaque citoyen trouve sa place et sa dignité.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/president.png"
              alt="Président National du FORDAC"
              width={450}
              height={450}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
