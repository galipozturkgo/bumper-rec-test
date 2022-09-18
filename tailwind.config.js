const { fontFamily } = require('tailwindcss/defaultTheme');

fontFamily['sans'] = [
  "Encode Sans Condensed",
  "sans-serif",
  "system-ui",
  "-apple-system"
];

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brandPrimary": "#FF733C",
        "brandSecondary": "#5A698C",
        "brandAccent": "#32BE50",
        "brandReverse": "#FFFFFF",
        "brandContrast": "#1B1B1B",
        "secondaryAccent": "#00B67A",
        "primaryDanger": "#ff2e2e",
      },
    },
    fontFamily: fontFamily,
  },
  plugins: [],
}
