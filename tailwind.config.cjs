/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "ui-sans-serif", "system-ui"],
        display: ["'Playfair Display'", "Georgia", "serif"],
      },
      colors: {
        brand: {
          red: "#e8192c",
          dark: "#0d0514",
        },
      },
    },
  },
  plugins: [],
};
