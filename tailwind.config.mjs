/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a2228",
        "ink-soft": "#2f3b44",
        muted: "#44525c",
        faint: "#667580",
        line: "#c5ced6",
        paper: "#e8eef2",
        "paper-deep": "#dde5eb",
        surface: "#f3f6f8",
        accent: "#0c655e",
        "accent-hover": "#094f49",
        "accent-soft": "#cfe6e2",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Times New Roman", "serif"],
        sans: ['"Source Sans 3"', "Segoe UI", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
};
