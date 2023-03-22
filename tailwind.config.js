/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // blue: "#3ebfff",
        nav_hover: "#6eceff",
        soft_red: "hsl(7, 99%, 70%)",
        yellow: " hsl(51, 100%, 49%)",
        dark_des_cyan: " hsl(167, 40%, 24%)",
        dark_mode_cyan: "hsl(168, 34%, 41%)",
        dark_blue: "hsl(198, 62%, 26%)",
        very_dark_des_blue: "hsl(212, 27%, 19%)",
        very_dark_grayish_blue: " hsl(213, 9%, 39%)",
        dark_grayish_blue: "hsl(232, 10%, 55%)",
        grayish_blue: "hsl(210, 4%, 67%)",
      },
      fontFamily: {
        fraunces: "Fraunces",
        barlow: "Barlow",
      },
    },
  },
  plugins: [],
};
