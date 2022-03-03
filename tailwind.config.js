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
      blue: "#9BCDE8",
      red: "#EE7675",
      primary: {
        DEFAULT: "#599071",
        hover: "#619b7a",
        press: "#4c7c61",
      },
      background: "#fdfdfd",
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
