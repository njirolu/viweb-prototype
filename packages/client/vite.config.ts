import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const workspaceDir = process.cwd();

export default defineConfig({
  root: workspaceDir,
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
    global: 'globalThis',
  },
  resolve: {
    alias: {
      '@shared': path.resolve(workspaceDir, '..', 'shared', 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    proxy: {
      '/api': 'http://127.0.0.1:3000',
    },
  },
  build: {
    outDir: path.resolve(workspaceDir, '..', '..', 'dist'),
    emptyOutDir: false,
    cssCodeSplit: false,
    target: 'esnext',
    lib: {
      entry: path.resolve(workspaceDir, 'src', 'main.tsx'),
      formats: ['es'],
      fileName: () => 'app.js',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'styles.css';
          }

          return 'assets/[name][extname]';
        },
      },
    },
  },
});
