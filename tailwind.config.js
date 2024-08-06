/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3758F9",
        "primary-light-3": "#97A8FC",
        "gray-gray-2": "#F3F4F6",
        tile: "#3758F9",
        link: "#2D68F8",
        secondary: {
          100: "#FFFFFF",
          200: "#F3F4F6",
        },
        subtitle: "#6B7280",
        normal: "#111928",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        mobile: "320px",
        fs: "100px",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "2.5rem",
    },
  },
  plugins: [],
};
