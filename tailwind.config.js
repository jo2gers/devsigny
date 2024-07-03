/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: ["light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset", {
      default: {
          
        "primary": "#ffffff",
                  
        "secondary": "#774900",
                  
        "accent": "#e80000",
                  
        "neutral": "#371e22",
                  
        "base-100": "#e3ffff",
                  
        "info": "#59b9ff",
                  
        "success": "#00f790",
                  
        "warning": "#ca9d00",
                  
        "error": "#fb003c",
                  },
    },],
  },
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
};
