/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      anticDidone: ["Antic Didone", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      questrial: ["Questrial", "sans-serif"],
    },
    extend: {
      colors: {
        dark: '#0E1010',
        purple: {
          '100': '#c2acee',
          '200': '#8458dc'
        }
    },
    },
  },
  plugins: [],
}
