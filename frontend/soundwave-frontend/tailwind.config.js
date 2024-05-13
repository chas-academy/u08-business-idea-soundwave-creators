/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        secondary: '0 0 0.5rem rgba(13, 148, 136, 0.5)', // Using the secondary color as a box shadow
      },
      colors: {
        primary: '#1e293b',
        secondary: '#0d9488',
       hover: '#0d9488',
       text: 'white'
      },
    },
  },
  plugins: [],
}

