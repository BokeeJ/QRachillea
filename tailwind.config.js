/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'latto': ['Lato', 'sans-serif'],

      },
    },
  },
  plugins: [],
}

