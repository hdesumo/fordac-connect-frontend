/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Aucune option Turbo ici — Vercel ne le reconnaît pas encore avec Webpack
  },
  webpack: (config) => {
    // Optionnel : personnalisation légère du build
    return config;
  },
};

export default nextConfig;
