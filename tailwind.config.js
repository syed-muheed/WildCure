/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,jsx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        figblue: "#2D6AE1"
      },
      fontFamily: {
        helvetica: "HelveticaNowText",
        monserrat: "Montserrat"
      },
      screens: {
        "1xl": "1440px"
      }
    },
  },
  plugins: [],
};
