import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      mockData: '/src/data',
      features: '/src/features',
      pages: '/src/pages',
      theme: '/src/theme',
      utils: '/src/utils',
    },
  },
});
