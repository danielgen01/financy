/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "10%": "#5854C0",
          "20%": "#4E5Ba6",
        },
        background: {
          default: "#FEE4E2",
          greyedOut: "#101828",
        },
        success: {
          bright: "#17B26A",
          dark: "#0B9055",
        },
        danger: {
          bright: "#F04438",
          dark: "#D92D20",
        },
        white: {
          default: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
}
