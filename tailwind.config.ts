import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      linearGradientColors: {
        // Definisikan variabel gradient-horizontal dengan tiga warna
        'gradient-horizontal': ['primary', 'secondary', 'var(--quaternary)'],
      },
      fontFamily: {
        biotif: ['var(--font-biotif)']
      },
      colors: {
        primary: '#1E1A20',
        lightAccent: '#72838A',
        secondary: '#00E788',
        tertiary: '#150C1A',
        quaternary: '#FFFDEF',

        darkBlue : '#314756',
      },
    },
  },
  plugins: [],
}
export default config
