/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        '14p': '0.14em',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        bigshot: ["Bigshot One", "serif"],
      },
    },
  },
  plugins: [],
};
