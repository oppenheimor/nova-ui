/* eslint-disable import/no-anonymous-default-export */
import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
    './src/form-builder/**/*.{ts,tsx}',
  ],
  presets: [
    createPreset({
      preset: 'default',
    }),
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: '481px' },
        md: { min: '769px' },
        lg: { min: '1024px' },
        xl: { min: '1440px' },
        '2xl': { min: '1920px' },
        'max-sm': { max: '480px' },
        'max-md': { max: '768px' },
        'max-lg': { max: '1023px' },
        'max-xl': { max: '1439px' },
        'max-2xl': { max: '1919px' },
      },
      boxShadow: {
        'all-sm': '0 0 1px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
        all: '0 0 3px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
        'all-md': '0 0 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
        'all-lg': '0 0 15px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)',
        'all-xl': '0 0 25px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)',
        'all-2xl':
          '0 0 25px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)',
        embossed:
          '-2px -2px 2px 0px var(--embossed-top-left-shadow), 2px 2px 2px 0px var(--embossed-bottom-right-shadow)',
        dembossed:
          'inset -2px -2px 2px 0px var(--dembossed-top-left-shadow), inset 2px 2px 2px 0px var(--dembossed-bottom-right-shadow)',
      },
      animation: {
        'bg-shine': 'bg-shine 2.2s linear infinite',
        'text-gradient': 'text-gradient 6s ease infinite alternate',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'bg-shine': {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        'text-gradient': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // background: 'hsl(var(--background))',
        // foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        // border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },

        // ============ atom-token colors start ============
        brand: {
          primary: {
            DEFAULT: 'var(--atom-color-brand-primary)',
            black: 'hsl(var(--atom-color-brand-primary-black))',
          },
        },
        price: {
          up: 'var(--atom-color-price-up)',
          down: 'var(--atom-color-price-down)',
          even: 'var(--atom-color-price-even)',
        },
        status: {
          success: 'var(--atom-color-status-success)',
          error: 'var(--atom-color-status-error)',
          warning: 'var(--atom-color-status-warning)',
          info: 'var(--atom-color-status-info)',
        },
        text: {
          primary: 'var(--atom-color-text-primary)',
          secondary: 'var(--atom-color-text-secondary)',
          tertiary: 'var(--atom-color-text-tertiary)',
          quaternary: 'var(--atom-color-text-quaternary)',
          inverse: 'var(--atom-color-text-inverse)',
          link: 'var(--atom-color-text-link)',
          aime: 'var(--atom-color-text-aime)',
        },
        background: {
          // TODO: DEFAULT 后面干掉
          DEFAULT: 'hsl(var(--background))',
          layer1: 'var(--atom-color-background-layer1)',
          layer2: 'var(--atom-color-background-layer2)',
          layer3: 'var(--atom-color-background-layer3)',
          layer4: 'var(--atom-color-background-layer4)',
          layer5: 'var(--atom-color-background-layer5)',
          mask: {
            level1: 'var(--atom-color-background-mask-level1)',
            level2: 'var(--atom-color-background-mask-level2)',
            level3: 'var(--atom-color-background-mask-level3)',
          },
          weak: 'var(--atom-color-background-weak)',
          nav: 'var(--atom-color-background-nav)',
        },
        foreground: {
          // TODO: DEFAULT 后面干掉
          DEFAULT: 'hsl(var(--foreground))',
          layer1: 'var(--atom-color-foreground-layer1)',
          layer1_2: 'var(--atom-color-foreground-layer1_2)',
          layer1_3: 'var(--atom-color-foreground-layer1_3)',
          layer2: 'var(--atom-color-foreground-layer2)',
        },
        divider: {
          level1: 'var(--atom-color-divider-level1)',
          level2: 'var(--atom-color-divider-level2)',
        },
        border: {
          // TODO: DEFAULT 后面干掉
          DEFAULT: 'hsl(var(--border))',
          bt: 'var(--atom-color-border-bt)',
        },
        grey: {
          '95': 'var(--atom-color-grey-95)',
          '90': 'var(--atom-color-grey-90)',
          '80': 'var(--atom-color-grey-80)',
          '70': 'var(--atom-color-grey-70)',
          '60': 'var(--atom-color-grey-60)',
          '50': 'var(--atom-color-grey-50)',
          '40': 'var(--atom-color-grey-40)',
          '20': 'var(--atom-color-grey-20)',
        },
        blue: {
          DEFAULT: 'var(--atom-color-blue)',
        },
        green: {
          DEFAULT: 'var(--atom-color-green)',
        },
        red: {
          DEFAULT: 'var(--atom-color-red)',
        },
        orange: {
          DEFAULT: 'var(--atom-color-orange)',
        },
        yellow: {
          DEFAULT: 'var(--atom-color-yellow)',
        },
        cyan: {
          DEFAULT: 'var(--atom-color-cyan)',
        },
        acidblue: {
          DEFAULT: 'var(--atom-color-acidblue)',
        },
        indigo: {
          DEFAULT: 'var(--atom-color-indigo)',
        },
        purple: {
          DEFAULT: 'var(--atom-color-purple)',
        },
        gold: {
          DEFAULT: 'var(--atom-color-gold)',
        },
        transparent: {
          blue: "var(--atom-color-transparent-blue)",
          blue1: "var(--atom-color-transparent-blue1)",
          green: "var(--atom-color-transparent-green)",
          red: "var(--atom-color-transparent-red)",
          orange: "var(--atom-color-transparent-orange)",
          yellow: "var(--atom-color-transparent-yellow)",
          cyan: "var(--atom-color-transparent-cyan)",
          acidblue: "var(--atom-color-transparent-acidblue)",
          indigo: "var(--atom-color-transparent-indigo)",
          purple: "var(--atom-color-transparent-purple)",
          gold: "var(--atom-color-transparent-gold)",
        },
        visualization: {
          primary: 'var(--atom-color-visualization-primary)',
          '01': 'var(--atom-color-visialization-01)',
          '02': 'var(--atom-color-visialization-02)',
          '03': 'var(--atom-color-visialization-03)',
          '04': 'var(--atom-color-visialization-04)',
          '05': 'var(--atom-color-visialization-05)',
          '06': 'var(--atom-color-visialization-06)',
          '07': 'var(--atom-color-visialization-07)',
          '08': 'var(--atom-color-visialization-08)',
          '09': 'var(--atom-color-visialization-09)',
          divider: 'var(--atom-color-visualization-divider)',
          tooltip: 'var(--atom-color-visualization-tooltip)',
        },
        interaction: {
          hover: 'var(--atom-color-interaction-hover)',
          click: 'var(--atom-color-interaction-click)',
        },
        // ============ atom-token colors end ============
      },
    },
  },
  plugins: [
    require('tailwind-custom-utilities'),
    require('tailwindcss-animate'),
  ],
};
