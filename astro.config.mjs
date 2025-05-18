import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react() // Add React integration for Framer Motion
  ],
  outDir: './dist',
  server: {
    port: 3000,
  },
  build: {
    assets: 'assets',
  },
});
