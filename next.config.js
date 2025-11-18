/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    removeConsole: false,
  },
  webpack(config) {
    config.resolve.alias['@'] = require('path').resolve(__dirname, 'app');
    return config;
  }
};

module.exports = nextConfig;
