module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': 'Poppins'
      },
      textShadow: {
        '2xl': '0px 4px 4px rgb(0, 0, 0, 0.32)'
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
  

