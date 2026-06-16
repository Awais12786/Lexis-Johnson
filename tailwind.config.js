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
        "secondary-fixed": "#ffe16d",
        "secondary-fixed-dim": "#e9c400",
        "surface-variant": "#203459",
        "on-surface": "#d8e2ff",
        "on-surface-variant": "#c5c6cd"
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
