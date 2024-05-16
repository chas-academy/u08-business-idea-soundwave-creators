/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        secondary: '0 0 0.5rem rgba(246, 132, 2, 0.5)', // Using the secondary color as a box shadow
      },
      colors: {
        primary: '#0f172a',
        secondary: '#f68402',
       hover: '#f68402',
       text: 'white'
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
};
=======
}

>>>>>>> test
