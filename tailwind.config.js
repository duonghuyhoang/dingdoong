module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "cursive"],
        Arvo: ["Arvo", "serif"],
        Fredericka: ["Fredericka the Great", "cursive"],
        Inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 0 0.3125rem rgba(23,24,24,.05), 0 0.0625rem 0.125rem rgba(0,0,0,.15)",
        slide: "1px 1px 5px 2px rgba(0, 0, 0, 0.05);",
      },
      borderRadius: {
        card: "10px",
      },
      keyframes: {
        zoomInOut: {
          "0%": {
            transform: "scale(1) ",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1) ",
          },
        },
        shake: {
          " 0%": {
            transform: "translate(1px,1px) rotate(0deg)",
          },
          "10%": {
            transform: "translate(-1px,-2px) rotate(-1deg)",
          },
          "20%": {
            transform: "translate(-3px) rotate(1deg)",
          },
          "30%": {
            transform: "translate(3px,2px) rotate(0deg)",
          },
          "40%": {
            transform: "translate(1px,-1px) rotate(1deg)",
          },
          "50%": {
            transform: "translate(-1px,2px) rotate(-1deg)",
          },
          "60%": {
            transform: "translate(-3px,1px) rotate(0deg)",
          },
          "70%": {
            transform: "translate(3px,1px) rotate(-1deg)",
          },
          "80%": {
            transform: "translate(-1px,-1px) rotate(1deg)",
          },
          "90%": {
            transform: "translate(1px,2px) rotate(0deg)",
          },
          "100%": {
            transform: "translate(1px,-2px) rotate(-1deg)",
          },
        },
      },
      animation: {
        zoomInOut: "zoomInOut 1s ease infinite;",
        shake: "shake 8s ease 0s infinite normal none running",
      },
    },
  },

  plugins: [],
};
