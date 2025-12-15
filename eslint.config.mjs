import js from "@eslint/js";
import next from "eslint-config-next";

/**
 * ESLint Flat Config for Next.js 15+
 * Compatible with Vercel build
 */
export default [
  js.configs.recommended,

  ...next,

  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "out/**"
    ],
  },
];
