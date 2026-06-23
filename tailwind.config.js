
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        kumkum: {
          wine: '#4a151c',
          wineDark: '#2d0c10',
          parchment: '#f4f0ea',
          parchmentLight: '#fbf9f6',
          ink: '#1a1410',
          inkLight: '#4a3f35',
          gold: '#b59a6d',
          goldLight: '#d4c09e',
        }
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAiLz4KPHBhdGggZD0iTTAgMGg0djRIMG0yIDJoNHY0SDIiIGZpbGw9IiMxYTE0MTAiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPgo8L3N2Zz4=')",
      },
      letterSpacing: {
        widest: '.2em',
      }
    },
  },
  plugins: [],
}
