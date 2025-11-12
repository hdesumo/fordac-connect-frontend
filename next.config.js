/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🚫 Désactivation explicite de Turbopack
  experimental: {
    turbo: false,
  },

  // ✅ Force Webpack
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
