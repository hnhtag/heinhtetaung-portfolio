/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a2228",
        "ink-soft": "#3d4a54",
        muted: "#5a6872",
        faint: "#8a97a1",
        line: "#d0d8de",
        paper: "#eef1f4",
        "paper-deep": "#e4e9ee",
        surface: "#f7f9fb",
        accent: "#0e6e66",
        "accent-hover": "#0a5751",
        "accent-soft": "#d7ebe8",
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
