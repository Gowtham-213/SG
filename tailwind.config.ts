import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#111827",
        citrus: "#f7c948",
        coral: "#ff6b5f",
        lagoon: "#00a7a7"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.10)",
        glow: "0 18px 55px rgba(255, 107, 95, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
