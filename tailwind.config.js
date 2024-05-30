/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "centra-extrabold": ['"Centra No2 TRIAL Bold"', "sans-serif"],
        "centra-italic": ['"Centra No2 TRIAL"', "sans-serif"],
        "dm-serif": ['"DM Serif Display"', "serif"],
        "centra-normal": ['"Centra No2 TRIAL Normal"', "sans-serif"],
        "centra-italic-bold": ['"Centra No2 TRIAL Italic"', "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
