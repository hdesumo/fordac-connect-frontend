"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// 🎬 Variants de transitions globales
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: "easeOut" },
  }),
};

// --- HERO SECTION ---
function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Dégradé vert → doré */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-700 to-yellow-400"></div>
      <div className="absolute inset-0 bg-black/25"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="relative z-10 px-6 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-xl">
          OSEZ AGIR POUR LE CHANGEMENT
        </h1>
        <p className="text-lg md:text-2xl font-light mb-8 text-green-50 drop-shadow-md">
          Ensemble, bâtissons une gouvernance juste, moderne et responsable.
        </p>
        <Link
          href="/adhesion"
          className="bg-green-700 hover:bg-green-800 transition-all text-white font-semibold px-8 py-3 rounded-full shadow-lg"
        >
          Adhérer au FORDAC
        </Link>
      </motion.div>

      <div className="absolute inset-0 opacity-10 bg-[url('/textures/pattern.svg')] bg-repeat"></div>
    </section>
  );
}

// --- MESSAGE DU PRÉSIDENT ---
function PresidentPreview() {
  return (
    <motion.section
      className="bg-white py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/president.jpg"
            alt="Président du FORDAC"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Message du Président du FORDAC
          </h2>
          <p className="text-lg italic leading-relaxed mb-6 text-gray-600">
            “Servir le peuple, c’est croire en sa force et agir pour son avenir.”
          </p>
          <Link
            href="/president"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            Lire les citations
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

// --- VALEURS DU FORDAC ---
function ValuesSection() {
  return (
    <motion.section
      className="bg-gradient-to-r from-green-50 via-white to-green-50 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Nos Valeurs et Engagements
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Le FORDAC place au cœur de son action trois valeurs fondamentales :
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>⚖️ <strong>Justice</strong> – Garantir l’égalité de tous devant la loi.</li>
            <li>🤝 <strong>Solidarité</strong> – Renforcer le lien social et la cohésion nationale.</li>
            <li>💡 <strong>Innovation</strong> – Promouvoir une gouvernance moderne et participative.</li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/hero2.jpeg"
            alt="Valeurs du FORDAC"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// --- GALERIE MULTIMÉDIA ---
function MediaGallery() {
  return (
    <motion.section
      className="bg-green-900 py-20 text-white text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Galerie Multimédia</h2>
        <p className="text-lg text-green-100 mb-12">
          Revivez nos moments forts à travers des images et vidéos du mouvement.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {["media1.jpg", "media2.jpg", "media3.jpg"].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative h-64 overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={`/images/${img}`}
                alt={`Galerie FORDAC ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// --- ACTUALITÉS / AGENDA ---
function NewsSection() {
  return (
    <motion.section
      className="bg-white py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/hero3.jpeg"
            alt="Actualités FORDAC"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Actualités & Agenda
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Suivez les activités du FORDAC à travers le pays, nos conférences, ateliers et rencontres citoyennes.
          </p>
          <Link
            href="/actualites"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            Voir toutes les actualités
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

// --- REJOINDRE LE MOUVEMENT ---
function JoinSection() {
  return (
    <motion.section
      className="relative py-24 text-center text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-700 to-yellow-400"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg">
          Ensemble, faisons entendre nos voix.
        </h2>
        <p className="text-lg md:text-xl mb-8 text-green-50 drop-shadow-md">
          L’avenir se construit avec vous. Rejoignez dès aujourd’hui les Forces Démocratiques pour l’Action et le Changement.
        </p>
        <Link
          href="/adhesion"
          className="bg-white text-green-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          Adhérer au FORDAC
        </Link>
      </div>
    </motion.section>
  );
}

// --- FOOTER ---
function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-10 text-center text-sm">
      <p>© {new Date().getFullYear()} FORDAC — Forces Démocratiques pour l’Action et le Changement.</p>
      <p>Contact : info@fordac-connect.org | Tous droits réservés.</p>
    </footer>
  );
}

// --- PAGE PRINCIPALE ---
export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PresidentPreview />
      <ValuesSection />
      <MediaGallery />
      <NewsSection />
      <JoinSection />
      <Footer />
    </main>
  );
}
