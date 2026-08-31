import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5B21F4",
          hover: "#4C1D95",
          accent: "#7C3AED",
          light: "#EDE9FE",
          veryLight: "#F5F3FF",
          soft: "#A78BFA",
        },
        text: {
          main: "#111111",
          secondary: "#4B5563",
          muted: "#6B7280",
        },
        surface: {
          border: "#E5E7EB",
          bg: "#FAFAFA",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 10px 25px -5px rgba(91, 33, 244, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
        glow: "0 0 20px -3px rgba(91, 33, 244, 0.2)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(6px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "float-reverse 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
