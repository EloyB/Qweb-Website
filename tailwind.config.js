module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      colors: {
        primary: "#61C79F",
        secondary: "#183540",
        "secondary-light": "#26434E",
        "primary-dark": "#56B28E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
