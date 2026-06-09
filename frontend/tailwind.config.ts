const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          DEFAULT: "#06b6d4"
        },
        canvas: {
          DEFAULT: "#0b1220",
          muted: "#0f172a"
        },
        surface: {
          DEFAULT: "#0f172a",
          elevated: "#111827",
          highlight: "#1f2937"
        }
      },
      borderRadius: {
        xl: "1rem"
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgb(0 0 0 / 0.1), 0 1px 3px 1px rgb(0 0 0 / 0.1)"
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "3rem",
          xl: "3.5rem"
        },
        screens: {
          "2xl": "1280px"
        }
      }
    }
  },
  plugins: []
};

export default config;
