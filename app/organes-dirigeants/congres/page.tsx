"use client";

export default function CongresPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white">

      {/* HEADER HARMONISÉ */}
      <header className="relative bg-[#064C32] py-16 md:py-20 px-6 overflow-hidden">
        {/* Texture subtile */}
        <div className="absolute inset-0 opacity-10 bg-[url('/textures/pattern-grid.svg')] bg-cover"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">Le Congrès du FORDAC</h1>
        </div>
      </header>

      {/* CONTENU ORIGINAL (inchangé) */}
      <section className="max-w-5xl mx-auto px-5 md:px-6 py-12 md:py-16 space-y-10 md:space-y-12 leading-relaxed text-white/90">

        {/* Sous-titre */}
        <p className="text-base md:text-lg">
          Instance souveraine du parti, le Congrès constitue l’expression la plus
          haute de la volonté collective des militants du FORDAC.
          Il définit les grandes orientations stratégiques et
          idéologiques du mouvement.
        </p>

        {/* Section – Nature et rôle */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Nature et Rôle du Congrès
          </h2>
          <p className="text-base md:text-lg">
            Le Congrès est l’organe suprême du FORDAC.
            Il détermine les orientations fondamentales du parti, adopte ou révise
            les textes statutaires, et se prononce sur les grandes questions
            engageant la gouvernance et les stratégies d’action au
            service du changement.
          </p>
        </section>

        {/* Section – Attributions */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Attributions du Congrès
          </h2>
          <ul className="list-disc pl-5 md:pl-6 space-y-2">
            <li>Définir les orientations politiques nationales du FORDAC.</li>
            <li>Adopter, modifier ou réviser les Statuts et le Règlement Intérieur.</li>
            <li>
              Élire le Président National du parti, garant de la vision et du
              projet politique.
            </li>
            <li>
              Approuver les rapports moraux, politiques et financiers du
              Secrétariat Exécutif National.
            </li>
            <li>
              Se prononcer sur toute question stratégique ayant un impact majeur
              sur la vie du parti et la conduite de son action sur le territoire.
            </li>
          </ul>
        </section>

        {/* Section – Composition */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Composition
          </h2>
          <p className="mb-3 text-base md:text-lg">
            Le Congrès réunit l’ensemble des forces vives du parti, notamment :
          </p>
          <ul className="list-disc pl-5 md:pl-6 space-y-2">
            <li>Les membres du Bureau Politique National (BPN)</li>
            <li>Les membres du Secrétariat Exécutif National (SEN)</li>
            <li>
              Les représentants des Fédérations, Sections, Sous-sections et Cellules
            </li>
            <li>Les ligues (Jeunes, Femmes, Experts)</li>
            <li>Les personnalités invitées conformément aux textes</li>
          </ul>
        </section>

        {/* Section – Périodicité */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Périodicité du Congrès
          </h2>
          <p className="text-base md:text-lg">
            Le Congrès ordinaire se tient selon la périodicité définie par les
            Statuts.
            Un Congrès extraordinaire peut être convoqué en cas de circonstances
            exceptionnelles, sur décision du Comité Politique Stratégique (CPS)
            ou sur demande d’une majorité qualifiée d’organes territoriaux.
          </p>
        </section>

        {/* Section – Importance stratégique */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Importance stratégique
          </h2>
          <p className="text-base md:text-lg">
            Le Congrès incarne le fondement démocratique du FORDAC.
            Il permet au parti de renforcer sa cohésion interne et d’affirmer
            son engagement pour une action politique structurée et tournée
            vers le progrès.
          </p>
        </section>

        {/* FOOTER INTERNE */}
        <div className="p-5 md:p-6 bg-[#064C32] text-white rounded-lg mt-8 md:mt-10">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            FORDAC — Forces Démocratiques pour l’Action et le Changement
          </h3>
          <p className="text-sm md:text-base opacity-90">
            Le Congrès est l’expression vivante de la souveraineté des militants.
            Ensemble, construisons l’avenir.
          </p>
        </div>

      </section>
    </main>
  );
}
