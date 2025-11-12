import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack(config) {
    // 👇 Forcer la prise en compte de PostCSS
    config.module.rules.push({
      test: /\.css$/,
      use: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: { importLoaders: 1 },
        },
        {
          loader: require.resolve("postcss-loader"),
          options: {
            postcssOptions: {
              plugins: [
                "tailwindcss",
                "autoprefixer",
              ],
            },
          },
        },
      ],
    });
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
