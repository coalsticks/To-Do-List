/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        alegreya: ["Alegreya Sans", "sans-serif"],
        roboto: ["Roboto", "serif"],
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
