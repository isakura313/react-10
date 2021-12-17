module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    colors: {
      'primary': "#311b92",
      'lightGrey': "#ede7f6",
      'darkRed': "#b71c1c",
      "lightRed": "#ff5252",
      'white': '#e0f2f1'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}