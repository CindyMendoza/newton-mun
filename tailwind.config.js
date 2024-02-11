/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      green: {
        50:'',
        100:'',
        200:'',
        300:'',
        400:'',
        500: '#155637',
        600: '',
        700: '#009246',
        800: '',
        900: '',
        950: '',
      },
    },
    extend: {
      colors: {
        'verdeone': "#155637",
        // "009246": "#009246",
        // "65b7b1": "#65b7b1",
        // a3e061: "#a3e061",
        // "133f2c": "#133f2c",
        // "2b2b2b": "#2b2b2b",
        // "9ba382": "#9ba382",
        // "008540": "#008540",
        // Agrega más colores según sea necesario
        // blue: "#155637",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(verdeone|current|white|purple|midnight|metal|tahiti|silver|bermuda)/,
    },
  ],
};
