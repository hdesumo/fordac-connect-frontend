export async function adminFetch(endpoint: string, options: any = {}) {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token_admin")
      : null;

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    headers,
    cache: "no-store",
  });
}
