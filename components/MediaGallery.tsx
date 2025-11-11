"use client";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { useState } from "react";

export default function MediaGallery() {
  const gallery = [
    { id: 1, type: "photo", src: "/hero/hero1.jpeg", caption: "Mobilisation à Loum" },
    { id: 2, type: "photo", src: "/hero/hero2.jpeg", caption: "Rencontre régionale du Littoral" },
    { id: 3, type: "photo", src: "/hero/hero3.jpeg", caption: "Espoir et unité nationale" },
    { id: 4, type: "video", src: "https://www.youtube.com/embed/2x4PpQmF1hI", caption: "Discours du Président Romaric Yebchue Semenou" }
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % gallery.length);
  const prev = () => setIndex((i) => (i - 1 + gallery.length) % gallery.length);

  const item = gallery[index];

  return (
    <section className="relative py-20 bg-[#f5f8f6] dark:bg-[#0d1a10] text-center overflow-hidden">
      <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-12">
        Galerie photos & vidéos
      </h2>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-[#122012]"
        >
          {item.type === "photo" ? (
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-[500px] object-cover"
            />
          ) : (
            <div className="relative h-[500px]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={item.src}
                title={item.caption}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <PlayCircle size={80} className="text-white drop-shadow-lg" />
              </div>
            </div>
          )}
        </motion.div>

        <p className="mt-6 text-gray-700 dark:text-gray-300 text-base italic">
          {item.caption}
        </p>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prev}
            className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition"
          >
            ◀ Précédent
          </button>
          <button
            onClick={next}
            className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition"
          >
            Suivant ▶
          </button>
        </div>
      </div>
    </section>
  );
}
