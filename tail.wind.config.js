module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // use class strategy for theme switching
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5fbff',
          100: '#e6f3ff',
          500: '#0ea5a0'
        }
      }
    }
  },
  plugins: []
};
