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
        "primary-container": "#0a1628",
        "secondary-fixed": "#FFD700",
        "secondary-fixed-dim": "#FFC107",
        "surface-variant": "#203459",
        "on-surface": "#d8e2ff",
        "on-surface-variant": "#c5c6cd",
        "navy-base": "#0A1628",
        "navy-suit": "#142038",
        "navy-exec": "#1C3055",
        "navy-high": "#284777",
        "gold-bright": "#FFD700",
        "gold-reflect": "#FFCF40",
        "gold-metallic": "#FFC107",
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
