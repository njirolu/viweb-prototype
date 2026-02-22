import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  build: {
    outDir: path.resolve(process.cwd(), 'public', 'webcontainer-runner'),
    emptyOutDir: true,
    cssCodeSplit: false,
    target: 'esnext',
    lib: {
      entry: path.resolve(process.cwd(), 'webcontainer-runner', 'src', 'main.js'),
      formats: ['es'],
      fileName: () => 'runner.js',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'runner.css';
          }

          return 'assets/[name][extname]';
        },
      },
    },
  },
});
