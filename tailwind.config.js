/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#97A8FC',
        tile: '#3758F9',
        link: '#2D68F8',
        secondary: {
          100: '#FFFFFF',
          200: '#F3F4F6',
        },
        subtitle: '#6B7280',
        normal: '#111928'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '2.5rem',
    }
  },
  plugins: [],
}

