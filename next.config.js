/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  compiler: {
    removeConsole: false,
  },

  webpack(config) {
    const path = require("path");

    // Alias global : @ pointe vers la racine du projet
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
  },
};

module.exports = nextConfig;
