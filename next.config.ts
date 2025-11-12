import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ❌ Supprimer cette ligne (elle force Turbopack)
  // turbopack: {},

  // ✅ Option de fallback Webpack (plus stable avec Tailwind)
  webpack: (config) => {
    return config;
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  poweredByHeader: false,
};

export default nextConfig;
