/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "hsl(215, 51%, 70%)",
          800: "hsl(215, 32%, 27%)",
          900: "hsl(216, 50%, 16%)",
          950: "hsl(217, 54%, 11%)",
        },
        cyan: {
          400: "hsl(178, 100%, 50%)",
        },
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
