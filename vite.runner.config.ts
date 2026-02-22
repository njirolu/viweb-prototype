import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = process.cwd();

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
    global: 'globalThis',
  },
  publicDir: false,
  resolve: {
    alias: {
      '@shared': path.resolve(rootDir, 'frontend/shared'),
    },
  },
  build: {
    outDir: path.resolve(rootDir, 'public', 'webcontainer-runner'),
    emptyOutDir: true,
    cssCodeSplit: false,
    target: 'esnext',
    lib: {
      entry: path.resolve(rootDir, 'frontend', 'runner', 'src', 'main.tsx'),
      formats: ['es'],
      fileName: () => 'runner.js',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'runner.css';
          }

          return 'assets/[name][extname]';
        },
      },
    },
  },
});
