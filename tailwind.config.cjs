/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "hsl(0, 0%, 100%)",
      "pale-violet": "hsl(276, 100%, 81%)",
      "very-pale-violet": "hsl(276, 100%, 91%)",
      "moderate-violet": "hsl(276, 55%, 52%)",
      "desaturated-dark-violet": "hsl(271, 15%, 43%)",
      "grayish-blue": "hsl(206, 6%, 79%)",
      "very-dark-desaturated-violet": "hsl(271, 36%, 24%)",
      "dark-grayish-violet": "hsl(270, 7%, 64%)",
      "light-magenta": "hsl(293, 100%, 63%)",
      "light-violet": "hsl(264, 100%, 61%)",
      "light-grayish-violet": "hsl(270, 20%, 96%)",
      "very-dark-desaturated-violet": "hsl(271, 36%, 24%)",
      "very-light-magenta": "hsl(289, 100%, 72%)",
    },
  },
  plugins: [],
};
