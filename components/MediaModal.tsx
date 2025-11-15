"use client";

import { useEffect } from "react";

// ---- Types ---- //
interface Media {
  type: "image" | "video";
  url: string;
  legend?: string;
}

interface MediaModalProps {
  media: Media | null;
  onClose: () => void;
}

export default function MediaModal({ media, onClose }: MediaModalProps) {
  if (!media) return null;

  // Fermer avec ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-lg overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full"
        >
          ✕
        </button>

        {/* Contenu : image ou vidéo */}
        {media.type === "image" ? (
          <img
            src={media.url}
            alt=""
            className="w-full max-h-[80vh] object-contain"
          />
        ) : (
          <video
            src={media.url}
            controls
            autoPlay
            className="w-full max-h-[80vh] object-contain"
          ></video>
        )}

        {/* Légende si fournie */}
        {media.legend && (
          <div className="p-4 text-center text-gray-700 text-sm bg-gray-100 border-t">
            {media.legend}
          </div>
        )}
      </div>
    </div>
  );
}
