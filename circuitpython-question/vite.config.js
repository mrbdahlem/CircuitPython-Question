import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path, { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Custom plugin to move manifest.json after build
function moveManifestPlugin() {
  return {
    name: 'move-manifest',
    closeBundle() {
      const viteDir = resolve(__dirname, 'dist/src/main/webapp/.vite');
      const src = resolve(viteDir, 'manifest.json');
      const dest = resolve(__dirname, 'dist/src/main/manifest.json');
      if (fs.existsSync(src)) {
        fs.mkdirSync(resolve(__dirname, 'dist/src/main'), { recursive: true });
        fs.copyFileSync(src, dest);
        fs.rmSync(viteDir, { recursive: true, force: true }); // Remove .vite directory
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), moveManifestPlugin()],
  build: {
    emptyOutDir: true,
    outDir: 'dist/src/main/webapp',
    manifest: true,
    rollupOptions: {
      input: {
        circuitpython: path.resolve(__dirname, 'src/circuitpython.js'),
      },
      output: {
        entryFileNames: 'resources/plugin/question/circuitpython/[name].js',
        chunkFileNames: 'resources/plugin/question/circuitpython/[name]-[hash].js',
        assetFileNames: 'resources/plugin/question/circuitpython/[name][extname]',
      },
    },
  },
})
