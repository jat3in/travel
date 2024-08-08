/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5FD00",
        background: "#075299",
        hover: "#626971",
      },
      backgroundImage: {
        'custom-image': "url('./src/public/travelBg5.jpg')",
      },
      utilities: {
        ".hide-scrollbar": {
          scrollbarWidth: "none", // Firefox
          "-ms-overflow-style": "none", // Internet Explorer and Edge
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, and Opera
          },
        },
      },
    },
  },
  plugins: [],
};
