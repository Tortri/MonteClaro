import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This 'base' property is crucial for GitHub Pages deployments
  // Since your custom domain monteclaro.shop points to a user/organization page,
  // the base path should be the root.
  // If it were a project page (e.g., tortri.github.io/MonteClaro),
  // the base would be '/MonteClaro/'
  base: '/',
});
