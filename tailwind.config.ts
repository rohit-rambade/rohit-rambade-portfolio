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
          hover: "#4A17D6",
          accent: "#7C3AED",
          light: "#EDE9FE",
          veryLight: "#F5F3FF",
          soft: "#A78BFA",
        },
        text: {
          main: "#111111",
          secondary: "#4B5563",
          muted: "#636B78",
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
      maxWidth: {
        content: "64rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(17, 17, 17, 0.04)",
        card: "0 1px 3px 0 rgba(17, 17, 17, 0.04), 0 1px 2px -1px rgba(17, 17, 17, 0.04)",
        "card-hover":
          "0 12px 28px -8px rgba(91, 33, 244, 0.14), 0 6px 10px -6px rgba(17, 17, 17, 0.06)",
        glow: "0 6px 18px -4px rgba(91, 33, 244, 0.35)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "rise-in": {
          from: { opacity: "0", transform: "translateY(12px) scale(0.98)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "drop-in": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "float-reverse 5s ease-in-out infinite",
        "fade-in": "fade-in 200ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "rise-in": "rise-in 320ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "drop-in": "drop-in 220ms cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
