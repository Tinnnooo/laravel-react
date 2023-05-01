/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-left': {
          'from' : {
            transform: "translateX(5rem)",
            opacity: "0"
          },
          "to": {
            transform: "translateX(0rem)",
            opacity: "1"
          },
        },

        'fade-in-down': {
          'from': {
            transform: "translateY(-5rem)",
            opacity: "0"
          },
          'to' : {
            transform: "translateY(0rem)",
            opacity: "1"
          },
        }
      },
      animation: {
        "fade-in-left" : "fade-in-left 0.2s ease-in-out both",
        "fade-in-down": "fade-in-down 0.6s ease-in-out both"
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/forms")
  ],
}

