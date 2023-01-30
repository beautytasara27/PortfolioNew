/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#343454",
        themeDarker: "#302F4E",
        link: "#FFD15C",
      },
      fontFamily: {
        "rubik-regular": ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
