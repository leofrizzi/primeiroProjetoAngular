/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Poppins'],
        'second': ['Roboto']
      }
    },
  },
  plugins: [],
}