/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        green: {
          1: "#155637",
          2: "#009246",
          3: "#133f2c",
          4: "#008540",
        },
        teal: {
          1: "#65b7b1",
        },
        lime: {
          1: "#a3e061",
          2: "#9ba382",
        },
        stone: {
          1: "#2b2b2b",
        },
        white: {
          1: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
