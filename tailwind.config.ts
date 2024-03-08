import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

// Plugin to add each Tailwind color as aglobal css variable
function addVariablesForColor({addBase, theme}:any) {
  const allColors = flattenColorPalette(theme('color'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key,value])=>[`--${key}`,value])
  );
  addBase({
   ":root": newVars,
  });
}
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  
  theme: {
    extend: {
      animation: {
        spotlight:"spotlight 2s ease .75s 1 forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframe: {spotlight: {
        "0%": {
          opacity: 0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: 1,
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
    },
  },

  plugins: [addVariablesForColor,],
},
};


export default config;