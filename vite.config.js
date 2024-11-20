import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // src 디렉토리를 '@'로 참조 가능
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@services': '/src/services',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
    },
  },
});
