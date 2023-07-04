/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js,css}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}