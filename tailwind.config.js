// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages Router (if any)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // All components
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // If using src/ folder
  ],
  darkMode: "class", // or 'media' if you want system preference
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        warning: "var(--color-warning)",
        dark: "var(--color-dark)",
        gray: {
          100: "var(--color-gray-100)",
          800: "var(--color-gray-800)",
        },
        gold: "#ffc107", // Easy access to your signature color
      },
      fontFamily: {
        sans: [
          "var(--font-poppins)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 25px rgba(0, 0, 0, 0.15)",
        image: "0 10px 30px rgba(0, 0, 0, 0.4)",
        navbar: "0 4px 12px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        xl: "20px",
        "2xl": "50px",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};
