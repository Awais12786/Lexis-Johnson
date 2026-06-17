/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-container": "#0A1628",
        "secondary-fixed": "#FFD700",
        "secondary-fixed-dim": "#FFCF40",
        "surface-variant": "#142A4A",
        "on-surface": "#d8e2ff",
        "on-surface-variant": "#c5c6cd",
        "navy-base": "#0A1628",
        "navy-suit": "#10213D",
        "navy-exec": "#142A4A",
        "navy-high": "#1C3055",
        "gold-bright": "#FFD700",
        "gold-reflect": "#FFCF40",
        "gold-metallic": "#F6C542",
        "gold-highlight": "#FFF2A8",
        "glow-cool": "#DDE8FF",
        "glow-data": "#8FB9FF",
        "vortex-1": "#002366",
        "vortex-2": "#001A4D",
        "vortex-3": "#2F6BFF"
      },
      fontFamily: {
        "display-lg": ["Outfit", "sans-serif"],
        "headline-md": ["Outfit", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
