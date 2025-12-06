"use client";

import { useEffect, useState } from "react";
import ProtectedRouteAdmin from "@/components/ProtectedRouteAdmin";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [name, setName] = useState("");

  const API = process.env.NEXT_PUBLIC_API_URL;

  const load = async () => {
    const res = await fetch(`${API}/admin/categories`);
    const data = await res.json();
    setCategories(data.categories || []);
  };

  useEffect(() => {
    load();
  }, []);

  const createCategory = async () => {
    if (!name.trim()) return;

    await fetch(`${API}/admin/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    setName("");
    load();
  };

  return (
    <ProtectedRouteAdmin>
      <main className="p-10">
        <h1 className="text-3xl font-bold text-[#166534] mb-6">
          Catégories du Forum
        </h1>

        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-xl font-semibold mb-4">Créer une catégorie</h2>

          <input
            type="text"
            className="border p-3 rounded-xl w-full mb-4"
            placeholder="Nom de la catégorie"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            onClick={createCategory}
            className="bg-[#166534] text-white px-6 py-3 rounded-lg"
          >
            Ajouter
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Liste des catégories</h2>

          <ul className="space-y-4">
            {categories.map((cat) => (
              <li key={cat.id} className="border p-4 rounded-xl">
                {cat.name}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </ProtectedRouteAdmin>
  );
}
