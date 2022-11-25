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
      'rgba': 'rgba(218, 218, 218, 0.33)',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    }
  },
  plugins: [],
}
