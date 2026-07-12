/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: "#6366f1",
        "brand-dark": "#818cf8",
        surface: "#0a0a0a",
        "surface-muted": "#111111",
        "surface-border": "#1e1e1e",
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
      },
      boxShadow: {
        glow: "0 0 24px 0 rgb(99 102 241 / 0.18)",
        "glow-sm": "0 0 10px 0 rgb(99 102 241 / 0.12)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      transitionDuration: {
        150: "150ms",
        200: "200ms",
        300: "300ms",
      },
    },
  },
};
