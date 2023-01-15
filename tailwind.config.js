/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#da25a0",
          bg: "#fbe0e5",
          // bg: "#fdf1f9",
          // bg: "#fdf1f9",
        },
      },
      animation: {
        "waving-hand": "wave 2s linear ",
        fade: "fade 1s ",
        pop: "pop 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        out: "out 1s",
      },
      keyframes: {
        // sidepop: {
        //   "0%": { opacity: "100%", transform: "scale(1)" },
        //   "100%": { opacity: "0%", transform: "scale(0)" },
        // },
        fade: {
          "0%": { opacity: "100%", transform: "scale(1)" },
          "100%": { opacity: "0%", transform: "scale(0)" },
        },
        out: {
          "0%": { opacity: "100%", height: "200px" },
          "100%": { opacity: "0%", height: "0px" },
        },

        pop: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
