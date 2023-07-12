/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      width: {
        width600px: "600px",
        width90: "90%",
        width47: "47%",
      },
      height: {
        lineH: "1px",
      },
      backgroundColor: {
        bgColor: "white",
        mainColor: "rgb(231, 208, 91)",
        black61: "rgb(61, 61, 61)",
        modalBack: "rgba(0,0,0,0.4)",
      },
      colors: {
        fontColor: "white",
        mainColor: "rgb(231, 208, 91)",
        black61: "rgb(61, 61, 61)",
      },
      animation: {
        fadeIn: "fadeIn 0.5s linear forwards",
        move: "move 0.5s linear infinite alternate",
        down: "down 0.5s linear forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        move: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        down: {
          "0%": { transform: "translateY(-5px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
