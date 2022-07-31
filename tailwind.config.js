/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*/*.html',
],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: "#e1b0a2",
        secondary: "#6b6361",
      }),
      fontFamily: {
        corpo: ['Poppins'],
        titolo: ['Fredoka One']
      },
      letterSpacing: {
        huge: '20px',
      },
    },
    
  },
  plugins: [],
}
