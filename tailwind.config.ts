import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')
const lightenDarkenColor = (color: string, amount: number) => {
  let usePound = false;

    if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);
  let r = (num >> 16) + amount;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    let b = ((num >> 8) & 0x00FF) + amount;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let g = (num & 0x0000FF) + amount;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, "0");
};

export default {
    darkMode: ["class"],
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      screens: {
        'xs': '480px',
        ...defaultTheme.screens,
      },
      extend: {
        fontFamily: {
          sans: ['Jost', 'sans-serif'],
        },
        colors: {
          // Your existing shadcn colors
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))'
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))'
          },
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))'
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))'
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))'
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))'
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))'
          },
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          chart: {
            '1': 'hsl(var(--chart-1))',
            '2': 'hsl(var(--chart-2))',
            '3': 'hsl(var(--chart-3))',
            '4': 'hsl(var(--chart-4))',
            '5': 'hsl(var(--chart-5))'
          },
          // Add atomic brand colors
          atomic: {
            red: '#CD4327',
            mint: '#9FDED8',
			mustard: '#F3CE13',
            text: {
              DEFAULT: '#353d3d',
              '50': lightenDarkenColor('#353d3d', 80), // Lighter shade
              '100': lightenDarkenColor('#353d3d', 60),
              '200': lightenDarkenColor('#353d3d', 40),
              '300': lightenDarkenColor('#353d3d', 20),
              '400': '#353d3d',
              '500': lightenDarkenColor('#353d3d', -20), // Darker shade
              '600': lightenDarkenColor('#353d3d', -40),
              '700': lightenDarkenColor('#353d3d', -60),
              '800': lightenDarkenColor('#353d3d', -80),
              '900': lightenDarkenColor('#353d3d', -100),
            }
          }
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)'
        }
      }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;