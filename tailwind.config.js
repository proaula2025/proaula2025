/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        antonioSC: ["Anton SC", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right top, #f7f7f7, #fef4fa, #fff0f0, #fff0dd, #fbf7d0)",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
