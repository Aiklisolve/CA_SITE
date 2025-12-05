/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pride: {
          red: '#E50914',
          'dark-red': '#B00020',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}

