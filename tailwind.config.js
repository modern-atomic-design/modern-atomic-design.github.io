const colors = require("tailwindcss/colors");

const typography = {
  DEFAULT: {
    css: {
      a: {
        textDecoration: "none",
      },
    },
  },
};

module.exports = {
  content: ["./**/*.{html,js, ts}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      white: colors.white,
      black: colors.black,
      // primary: "#2E75FF",
      primary: {
        DEFAULT: "#58c9c1",
        hover: "#50b7af",
        press: "#4ba8a0",
      },
      background: "#F5F7FF",
      transparent: "transparent",

      typography: "#0F2E6E",
      muted: "#7687AD",
      code: "#f5f2f0",

      indigo: colors.indigo,
      red: colors.red,
      gray: colors.gray,
    },
    extend: {
      typography,
    },
  },
};
