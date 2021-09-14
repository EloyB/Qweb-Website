module.exports = {
  mode: "jit",
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
        primary: "#1E90FF",
        secondary: "#222237",
        "secondary-light": "#363653",
        "primary-dark": "#0081FF",
        green: "#32EC8D",
      },
      transitionProperty: {
        height: "max-height",
      },
    },
  },
  variants: {
    extend: {
      maxHeight: ["hover"],
    },
  },
  plugins: [],
};
