/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'graphite-industrial': '#1C1C1C',
        'graphite-teal': '#002E32',
        'renewal-green': '#BAD435',
        'pure-white': '#FFFFFF',
        'cool-grey': '#F2F5F4',
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
      boxShadow: {
        'teal-glow': '0 25px 60px -20px rgba(0, 0, 0, 0.85)',
        'green-glow': '0 0 0 1px rgba(186, 212, 53, 0.25), 0 20px 50px -20px rgba(186, 212, 53, 0.25)',
        glow: '0 18px 45px -18px rgba(186, 212, 53, 0.55)',
      },
      backgroundImage: {
        'hero-grain':
          'radial-gradient(circle at 20% 20%, rgba(186, 212, 53, 0.08), transparent 45%), radial-gradient(circle at 80% 70%, rgba(0, 46, 50, 0.9), transparent 60%)',
      },
      keyframes: {
        sweep: {
          '0%': { left: '-100%' },
          '20%': { left: '200%' },
          '100%': { left: '200%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.35' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      animation: {
        sweep: 'sweep 5s infinite',
        'fade-up': 'fade-up 0.6s ease both',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
