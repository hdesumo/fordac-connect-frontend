"use client";

const API = process.env.NEXT_PUBLIC_API_URL;

/**
 * adminFetch unifié
 * - Accepte 1 argument → GET
 * - Accepte 2 arguments → méthode + body
 * - Gère automatiquement Authorization: Bearer <token>
 */
export async function adminFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const headers: any = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Erreur API:", text);
    throw new Error(
      `Erreur API (${res.status}): ${text || "Requête échouée"}`
    );
  }

  return res;
}
