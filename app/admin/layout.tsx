"use client";

import ProtectedRouteAdmin from "@/components/ProtectedRouteAdmin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRouteAdmin>
      <div className="min-h-screen bg-gray-100">
        {children}
      </div>
    </ProtectedRouteAdmin>
  );
}
