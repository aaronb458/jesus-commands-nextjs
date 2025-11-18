import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: "#2E5F7A",
          dark: "#1F4A5E",
          light: "#4A7C9B",
        },
        accent: {
          DEFAULT: "#E8A87C",
          light: "#F5C49B",
          dark: "#D48A5C",
        },
        sage: {
          DEFAULT: "#8BA888",
          light: "#A5C4A1",
        },
        // Base Colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        // Semantic
        success: "#8BA888",
        warning: "#E8A87C",
        error: "#DC2626",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.1", fontWeight: "900" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", fontWeight: "900" }],
        "display-md": ["3rem", { lineHeight: "1.2", fontWeight: "900" }],
        "display-sm": ["2.5rem", { lineHeight: "1.2", fontWeight: "800" }],
      },
      spacing: {
        "section": "5rem",
        "section-md": "6.25rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
