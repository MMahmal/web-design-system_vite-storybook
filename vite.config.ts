  import path from 'path';
  import react from '@vitejs/plugin-react';
  import { defineConfig } from 'vite';
  
  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5173,
      host: true,
      open: false,
    },
    build: {
      sourcemap: true,
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
      },
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        '@radix-ui/**',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        '@tanstack/react-table',
      ],
    },
  });