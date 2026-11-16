import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages project site: https://<user>.github.io/water-cress-app/
  base: '/water-cress-app/',
  server: {
    port: 5173,
    open: true,
  },
});
