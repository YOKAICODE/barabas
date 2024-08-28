const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    preflight: true /* Отключаем Reset TailwindCSS */,
    container: true /* Отключаем генерацию .container */,
  },
  // prefix: "tw-",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.75rem",
        },
      },
      fontFamily: {
        sans: ["DIN Condensed", ...defaultTheme.fontFamily.sans],
        druk: ["Druk Text Wide Cyr", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
