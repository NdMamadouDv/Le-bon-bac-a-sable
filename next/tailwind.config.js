/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "d-lg": [
        "5.5rem",
        {
          lineHeight: "9.8rem",
          letterSpacing: "0.001rem",
        },
      ],
      "d-md": [
        "5rem",
        {
          lineHeight: "7.2rem",
          letterSpacing: "0.001rem",
        },
      ],

      "d-sm": [
        "3.8rem",
        {
          lineHeight: "3.5rem",
          letterSpacing: "0.1rem",
        },
      ],

      "6xl": [
        "4rem",
        {
          lineHeight: "6rem",
          letterSpacing: "0.1rem",
        },
      ],
      "5xl": [
        "3.5rem",
        {
          lineHeight: "3.5rem",
          letterSpacing: "0.1rem",
        },
      ],
      "4xl": [
        "3rem",
        {
          lineHeight: "4rem",
          letterSpacing: "0.1rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "3rem",
          letterSpacing: "0.1rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "0.1rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
          letterSpacing: "0.1rem",
        },
      ],
      lg: [
        "1.1rem",
        {
          lineHeight: "1.8rem",
          letterSpacing: "0.08rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.6rem",
          letterSpacing: "0.1rem",
        },
      ],
      sm: [
        ".9rem",
        {
          lineHeight: "1.3rem",
          letterSpacing: "0.08rem",
        },
      ],
      xs: [
        ".8rem",
        {
          lineHeight: "1.2rem",
          letterSpacing: "0.1rem",
        },
      ],
    },
    extend: {
      fontFamily: {
        krub: ["var(--font-krub)"],
        hkGrotesk: ["var(--font-hkGrotesk)"],
        lato: ["var(--font-lato)"],
      },
      colors: {
        primary: "#1632AC",
        "primary-focus": "#08155f",
        "primary-content": "#4E69DF",
        secondary: "#272729",
        "secondary-focus": "#111114",
        "secondary-content": "#E9E9E9",
        neutral: "#111114",
      },
    },
  },
  plugins: [],
};
