const colors = require("tailwindcss/colors");

const typography = {
  DEFAULT: {
    css: {
      color: colors.gray[900],
      a: {
        color: '#599071',
        textDecoration: "none",
        '&:hover': {
          color: '#619b7a',
        },
      },
      h1: {
        color: '#599071',
      },
      h2: {
        color: '#599071',
      },
      h3: {
        color: '#599071',
      },
      h4: {
        color: '#599071',
      },
      strong: {
        color: colors.gray[900],
      },
      code: {
        color: colors.gray[800],
        backgroundColor: '#f5f2f0',
      },
      'code::before': {
        content: '""',
      },
      'code::after': {
        content: '""',
      },
      pre: {
        backgroundColor: '#f5f2f0',
        code: {
          backgroundColor: 'transparent',
          color: colors.gray[800],
        },
      },
    },
  },
};

module.exports = {
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./content/**/*.md"
  ],
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
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
