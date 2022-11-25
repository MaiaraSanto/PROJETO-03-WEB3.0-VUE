/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {},
    colors: {
      'cod-gray': '#121212',
      'white': '#FFFFFF',
      'shark': '#27272A',
      'brown': '#9D4B00',
      
      'white-900': '#FFFFFF',
      'white-600': '#F0F0F0',
      'white-400': '#EDEDED',
      
      'grey-300': '#C6C6D3',
      'grey-400': '#A1A1AA',
      

      'glass': 'rgba(15, 79, 15, 0.3)'
      
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    }
  },
  plugins: [],
}
