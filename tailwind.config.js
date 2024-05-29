/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "centra-extrabold": ['"Centra No2 TRIAL"', "sans-serif"],
        "centra-italic": ['"Centra No2 TRIAL"', "sans-serif"],
        "dm-serif": ['"DM Serif Display"', "serif"],
        "centra-normal": ['"Centra No2 TRIAL Normal"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
