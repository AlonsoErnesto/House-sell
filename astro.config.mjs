// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  
  build: {
    inlineStylesheets: 'auto',
  },
  
  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          passes: 2,
        },
      },
    },

    css: {
      transformer: 'lightningcss',
    },

    plugins: [tailwindcss()],
  },
  
  compressHTML: true,
});