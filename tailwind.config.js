/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mobiletheme: {
          primary: '#009EFF',
          secondary: '#7FE9DE',
          accent: "#3A4256",
          neutral: "#291334",
          "base-100": "#FAF7F5",

        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
