import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#201E43",
          20: "#C662E3",
          30: "#A863F6",
          40: "#EEEEEE",
          50: "#F5F7F8",
          60: "#ededed",
          70: "#F6F7F8",
          80: "#b0b0b0",
        },
      },

      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },

      backgroundImage: {
        'bg-gradient': 'linear-gradient(to top, #f3e7e7 0%, #F6F7F8 99%, #F6F7F8 100%)',
        'primary-gradient': 'linear-gradient(135deg, #C662E3, #A863F6)',
        'primary-gradient-opacity': 'linear-gradient(135deg, rgba(198, 98, 227, 0.4), rgba(168, 99, 246, 0.5))',
      },
    },
  },
  plugins: [],
};

export default config;
