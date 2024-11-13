/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "left-card": "url('/src/assets/Background.svg')",
      },
    },
  },
  plugins: [],
};
