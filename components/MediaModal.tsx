"use client";

import { useEffect } from "react";

export default function MediaModal({ media, onClose }) {
  if (!media) return null;

  // Fermeture via clavier
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded shadow-xl max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* PHOTO */}
        {media.type === "image" && (
          <img
            src={media.src}
            alt={media.caption}
            className="w-full h-auto rounded mb-4"
          />
        )}

        {/* VIDEO */}
        {media.type === "video" && (
          <video controls className="w-full rounded mb-4">
            <source src={media.src} type="video/mp4" />
          </video>
        )}

        {/* Légende */}
        <p className="text-center text-sm text-gray-700 mb-4">
          {media.caption}
        </p>

        {/* Bouton */}
        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
