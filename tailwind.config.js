/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        smallFont: "#484545",
        mdFont: "#6A6666",
      },
      width: {
        wath: "820px",
      },
      fontFamily: {
        mainFont: "Philosopher",
      },
      fontSize: {
        titleSize: "32px",
        subtitleSize: "18px",
        exFont: "16px",
      },
    },
  },
  plugins: [],
};
