import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@src/app/styles/forward.scss" as *;
        `,
      },
    },
  },
});