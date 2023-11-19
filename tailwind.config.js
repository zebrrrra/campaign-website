/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      // basic small
      sm: [
        "13px",
        {
          lineHeight: "20px",
          fontWeight: "500",
        },
      ],
      //  basic normal
      base: [
        "15px",
        {
          lineHeight: "22px",
          fontWeight: "400",
        },
      ],
      // basic medium, h6
      xl: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
        },
      ],
      // h5
      "2xl": [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "700",
        },
      ],
      // h4
      "3xl": [
        "24px",
        {
          lineHeight: "36px",
          fontWeight: "700",
        },
      ],
      // h1
      "4xl": [
        "44px",
        {
          lineHeight: "66px",
          fontWeight: "700",
        },
      ],
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        brand: "#4527A0",
        yellow: {
          Secondary: "#FFB300",
        },
        green: {
          Secondary: "#26A69A",
        },
        red: {
          Secondary: "#EC407A",
        },
        gray: {
          default: "#e2e2e2",
        },
      },
      backgroundImage: {
        donate: "url('/image/donate.png')",
      },
    },
  },
  plugins: [],
};
