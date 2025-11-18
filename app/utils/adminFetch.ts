export async function adminFetch(url: string, options: any = {}) {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("adminToken")
      : null;

  const headers: any = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Erreur lors de la requête");
  }

  return res.json();
}
