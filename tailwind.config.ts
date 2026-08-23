import type { Config } from "tailwindcss";

/**
 * PALETTE DE MARQUE — Cergy Propreté 95
 * -------------------------------------------------
 * navy   : couleur dominante, sérieux, confiance, propreté "haut de gamme"
 * cergy  : accent froid, rappelle l'eau / la clarté
 * brass  : accent chaud "or brossé", signature prestige, à utiliser avec parcimonie
 *          (CTA, soulignements, icônes clés) — jamais en fond large
 * ivory  : fond principal chaleureux (évite le blanc pur trop "clinique")
 * slate  : texte courant
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A2A43",
          800: "#123A5C",
          600: "#1B4F7A",
        },
        cergy: {
          500: "#2E6F9E",
          300: "#7FB0D6",
          100: "#E4EFF6",
        },
        brass: {
          500: "#C9A227",
          400: "#D8B84A",
          100: "#F5EBC9",
        },
        ivory: {
          50: "#F7F5F0",
          100: "#FBFAF7",
        },
        slate: {
          700: "#33424E",
          600: "#4B5A67",
          400: "#8092A0",
        },
      },
      fontFamily: {
        // Display : caractère "prestige" pour les titres (h1/h2)
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        // Corps de texte : lisible, moderne, neutre
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
      },
      boxShadow: {
        prestige: "0 20px 45px -15px rgba(10, 42, 67, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
