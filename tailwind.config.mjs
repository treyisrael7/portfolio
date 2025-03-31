/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "#264653",
        "accent-1": "#2a9d8f",
        "accent-2": "#e9c46a",
        "accent-3": "#f4a261",
        "accent-4": "#e76f51",
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
