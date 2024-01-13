export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aztec': {
          '50': '#f5f8f7',
          '100': '#dfe8e7',
          '200': '#bed1d0',
          '300': '#95b3b2',
          '400': '#6f9292',
          '500': '#557677',
          '600': '#425e5f',
          '700': '#384b4d',
          '800': '#2f3f40',
          '900': '#2a3637',
          '950': '#172021',
        }
      },
      gridTemplateColumns: {
        // Simple 4 row grid
        '4': 'repeat(auto-fit, minmax(230px, 1fr))',
      }
    },
  },
  plugins: [],
}