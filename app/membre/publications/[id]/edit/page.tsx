"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditPublicationPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [loaded, setLoaded] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [image, setImage] = useState<File | null>(null);
  const [existingImage, setExistingImage] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // ⚠️ Placeholder – plus tard: fetch depuis API
    const fakePublication = {
      id: "1",
      title: "Proposition pour renforcer la mobilisation locale",
      content:
        "Voici quelques idées pour dynamiser nos actions au niveau des sections locales...",
      image: null,
    };

    // Simulation : si id = 1, on charge fakePublication
    if (fakePublication.id === id) {
      setTitle(fakePublication.title);
      setContent(fakePublication.content);
      setExistingImage(fakePublication.image);
    }

    setLoaded(true);
  }, [id]);

  function handleImageChange(e: any) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setLoadingSubmit(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);

      if (image) {
        formData.append("image", image);
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/publications/update/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Erreur lors de la mise à jour.");
        setLoadingSubmit(false);
        return;
      }

      setMessage("Publication mise à jour ✔");

      setTimeout(() => {
        router.push(`/membre/publications/${id}`);
      }, 1200);
    } catch (error) {
      setMessage("Erreur réseau. Réessayez.");
    }

    setLoadingSubmit(false);
  }

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">Chargement...</div>
    );
  }

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold text-gray-800">
        Modifier la publication
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4 max-w-2xl"
      >
        {/* TITRE */}
        <div>
          <label className="block font-semibold mb-1">Titre *</label>
          <input
            type="text"
            value={title}
            className="w-full border p-2 rounded"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* CONTENU */}
        <div>
          <label className="block font-semibold mb-1">Contenu *</label>
          <textarea
            value={content}
            className="w-full border p-2 rounded h-40"
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        {/* IMAGE EXISTANTE */}
        {existingImage && !preview && (
          <div className="mt-4">
            <p className="font-semibold mb-2">Image actuelle :</p>
            <img src={existingImage} className="w-48 rounded shadow" />
          </div>
        )}

        {/* NOUVELLE IMAGE */}
        <div>
          <label className="block font-semibold mb-2">Remplacer l'image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {/* Prévisualisation */}
          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Prévisualisation"
                className="w-48 rounded shadow"
              />
            </div>
          )}
        </div>

        {/* MESSAGE */}
        {message && (
          <div className="text-center text-sm text-blue-600">
            {message}
          </div>
        )}

        {/* BOUTON */}
        <button
          type="submit"
          disabled={loadingSubmit}
          className="bg-[#111827] text-white px-4 py-2 rounded hover:bg-black w-full"
        >
          {loadingSubmit ? "Mise à jour..." : "Enregistrer les modifications"}
        </button>
      </form>

    </div>
  );
}
