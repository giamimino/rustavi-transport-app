/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          background: 'hsl(var(--secondary-background))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
          muted: {
            foreground: 'var(--card-muted-foreground)'
          }
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      borderWidth: {
        hairline: "1px",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        'poppins-black': ['Poppins-Black'],
        'poppins-black-italic': ['Poppins-BlackItalic'],
        poppins: ['Poppins-Regular'],
        'poppins-italic': ['Poppins-Italic'],
        'poppins-light': ['Poppins-Light'],
        'poppins-light-italic': ['Poppins-LightItalic'],
        'poppins-medium': ['Poppins-Medium'],
        'poppins-medium-italic': ['Poppins-MediumItalic'],
        'poppins-semibold': ['Poppins-SemiBold'],
        'poppins-semibold-italic': ['Poppins-SemiBoldItalic'],
        'poppins-bold': ['Poppins-Bold'],
        'poppins-bold-italic': ['Poppins-BoldItalic'],
        'poppins-extrabold': ['Poppins-ExtraBold'],
        'poppins-extrabold-italic': ['Poppins-ExtraBoldItalic'],
        'poppins-extralight': ['Poppins-ExtraLight'],
        'poppins-extralight-italic': ['Poppins-ExtraLightItalic'],
        'poppins-thin': ['Poppins-Thin'],
        'poppins-thin-italic': ['Poppins-ThinItalic'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('tailwindcss-animate')],
};
