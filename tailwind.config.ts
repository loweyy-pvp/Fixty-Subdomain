// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        foreground: "#ffffff",
        primary: "#7c3aed",
        secondary: "#06b6d4",
        accent: "#3b82f6"
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.25)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      backgroundImage: {
        hero:
          "radial-gradient(circle at top, rgba(124,58,237,0.25), transparent 50%), radial-gradient(circle at bottom right, rgba(6,182,212,0.2), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
