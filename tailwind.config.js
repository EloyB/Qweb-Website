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

      //BLUE
      colors: {
        primary: "#1E90FF",
        secondary: "#222237",
        "secondary-light": "#363653",
        "primary-dark": "#0081FF",
      },

      // GREEN
      // colors: {
      //   primary: "#61C79F",
      //   secondary: "#183540",
      //   "secondary-light": "#26434E",
      //   "primary-dark": "#56B28E",
      // },

      // ORANGE
      // colors: {
      //   primary: "#FDA085",
      //   secondary: "#4B5558",
      //   "secondary-light": "#5C676A",
      //   "primary-dark": "#ED8365",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
