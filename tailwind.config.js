/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "inter-tight": ["Inter Tight", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#3B82F6", // Blue-500
          dark: "#60A5FA", // Blue-400
        },
        secondary: {
          light: "#10B981", // Emerald-500
          dark: "#34D399", // Emerald-400
        },
        background: {
          light: "#F3F4F6", // Gray-100
          dark: "#111827", // Gray-900
        },
        card: {
          light: "#FFFFFF", // White
          dark: "#1F2937", // Gray-800
        },
        cardAlt: {
          light: "#F9FAFB", // Gray-50
          dark: "#374151", // Gray-700
        },
        text: {
          light: "#1F2937", // Gray-800
          dark: "#F9FAFB", // Gray-50
        },
        textSecondary: {
          light: "#4B5563", // Gray-600
          dark: "#D1D5DB", // Gray-300
        },
        button: {
          primary: {
            light: "#3B82F6", // Blue-500
            dark: "#2563EB", // Blue-600
          },
          secondary: {
            light: "#10B981", // Emerald-500
            dark: "#059669", // Emerald-600
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
