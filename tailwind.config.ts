import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        },
      },

      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },

      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #C662E3, #A863F6)',
      },
    },
  },
  plugins: [],
};
export default config;
