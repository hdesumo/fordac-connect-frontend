// lib/adminApi.ts
import { adminFetch } from "@/app/utils/adminFetch";

export async function getDashboardStats(token: string) {
  return adminFetch("/dashboard/stats", token);
}
