// app/admin/layout.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      router.replace("/admin-login");
      return;
    }

    setVerified(true);
  }, []);

  if (!verified) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Vérification de votre session…
      </div>
    );
  }

  return <>{children}</>;
}
