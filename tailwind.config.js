module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      serif: ['BioRhyme', 'Podkova', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          default: '#C1272D',
          light: '#FBACAF',
          dark: '#8D1419',
        },
        secondary: {
          0: '#fff',
          20: '#F7F7F7',
          40: '#DCD9D9',
          60: '#8D8686',
          80: '#2B2B2B',
          100: '#000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
