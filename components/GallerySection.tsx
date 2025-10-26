"use client";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function GallerySection() {
  const gallery = [
    {
      id: 1,
      type: "photo",
      src: "/hero/hero1.jpg",
      caption: "Mobilisation citoyenne à Loum"
    },
    {
      id: 2,
      type: "photo",
      src: "/hero/hero2.jpg",
      caption: "Rencontre régionale du Littoral"
    },
    {
      id: 3,
      type: "photo",
      src: "/hero/hero3.jpg",
      caption: "Paysage du Cameroun — espoir et unité"
    },
    {
      id: 4,
      type: "video",
      src: "https://www.youtube.com/embed/2x4PpQmF1hI",
      caption: "Discours du Président Romaric Yebchue Semenou"
    }
  ];

  return (
    <section className="py-20 bg-neutral">
      <h2 className="text-3xl font-bold text-primary mb-12 text-center">
        Galerie photos & vidéos
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {gallery.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg bg-white"
          >
            {item.type === "photo" ? (
              <img
                src={item.src}
                alt={item.caption}
                className="h-64 w-full object-cover"
              />
            ) : (
              <div className="relative h-64">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  src={item.src}
                  title={item.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <PlayCircle className="text-white" size={60} />
                </div>
              </div>
            )}
            <div className="p-4 text-center text-dark text-sm font-medium">
              {item.caption}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
