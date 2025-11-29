import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  // On protège tout ce qui commence par /admin sauf /admin/login
  if (url.startsWith("/admin") && !url.startsWith("/admin/login")) {
    // Récupération du token dans les cookies
    const token = req.cookies.get("adminToken")?.value;

    if (!token) {
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
