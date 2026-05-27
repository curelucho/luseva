import nextVitals from "eslint-config-next/core-web-vitals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const nextConfigs = Array.isArray(nextVitals) ? nextVitals : [nextVitals];

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/coverage/**",
      "**/*.config.js",
      "**/*.config.mjs"
    ]
  },
  ...nextConfigs.map((config) => ({
    ...config,
    files: ["apps/web/**/*.{ts,tsx}"]
  })),
  {
    files: ["apps/api/**/*.ts", "packages/**/*.ts", "packages/**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
    }
  }
];
