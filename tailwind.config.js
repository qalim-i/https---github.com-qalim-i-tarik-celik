/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#e23a3aff',
        ink: '#111111',
        charcoal: '#1A1A1A',
        crimson: '#8A1515',
        ember: '#B03A2E',
        muted: '#a5a5a5ff',
        'muted-light': '#999999',
        card: '#FFFFFF',
        border: '#D4CFC7',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'spine-gradient': 'linear-gradient(to right, #0F0F0F, #161616 50%, #0F0F0F)',
        'fade-to-paper': 'linear-gradient(to bottom, transparent, #EBE7E0)',
        'fade-to-ink': 'linear-gradient(to bottom, transparent, #111111)',
      }
    },
  },
  plugins: [],
}
