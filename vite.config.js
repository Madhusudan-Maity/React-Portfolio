import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/React-Portfolio/', // Ensure the base path is correct for GitHub Pages
  build: {
    outDir: 'dist',
  },
});
