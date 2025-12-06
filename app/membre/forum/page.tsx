"use client";
<MembreTopbar />

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRouteMembre from "@/components/ProtectedRouteMembre";
import useMembreAuth from "@/hooks/useMembreAuth";
import { getSujets } from "@/lib/membreForumApi";

export default function ForumIndexPage() {
  const { token, loaded } = useMembreAuth();

  const [loading, setLoading] = useState(true);
  const [sujets, setSujets] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!loaded || !token) return;

    async function fetchData() {
      try {
        const data = await getSujets(currentPage, token);
        setSujets(data.items);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }

    fetchData();
  }, [loaded, token, currentPage]);

  if (!loaded || loading) {
    return (
      <ProtectedRouteMembre>
        <div className="flex items-center justify-center min-h-screen text-gray-700">
          Chargement...
        </div>
      </ProtectedRouteMembre>
    );
  }

  return (
    <ProtectedRouteMembre>
      <div className="space-y-6">

        <h1 className="text-2xl font-bold text-gray-800">
          Forum des membres
        </h1>

        <div>
          <Link
            href="/membre/forum/create"
            className="bg-[#111827] text-white px-4 py-2 rounded hover:bg-black"
          >
            📝 Créer un sujet
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="text-left p-3">Sujet</th>
                <th className="p-3">Auteur</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {sujets.map((s: any) => (
                <tr key={s.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <Link
                      href={`/membre/forum/${s.id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {s.title}
                    </Link>
                  </td>
                  <td className="p-3">{s.author_name}</td>
                  <td className="p-3 text-gray-500">
                    {new Date(s.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex space-x-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-[#111827] text-white"
                  : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </ProtectedRouteMembre>
  );
}
