import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
const { resolve, dirname, join } = path;
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

function moveHtmlFragmentPlugin() {
  return {
    name: 'move-html-fragment',
    apply: 'build',
    closeBundle() {
      const from = path.resolve(__dirname, 'dist/src/main/webapp/circuitpython.html');
      const to = path.resolve(__dirname, 'dist/src/main/resources/templates/fragments/question/circuitpython.html');

      fs.mkdirSync(path.dirname(to), { recursive: true });
      fs.copyFileSync(from, to);
      fs.unlinkSync(from); // delete original

      console.log('📄 Moved circuitpython.html → templates/fragments/question');
    }
  };
}

const startUrlFallbackPlugin = {
  name: 'start-url-fallback',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === '/' || req.url === '/index.html') {
        req.url = `/circuitpython.html`
      }

      next()
    })
  }
}

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  return {
    resolve: {
      alias: {
        '@question': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 3000,
      open: './circuitpython.html',
      proxy: {
        '^/resources/(?!plugin/question/circuitpython)': {
        target: 'https://learn.mycode.run',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/resources/, '/resources'),
      },
    },
    fs: {
      strict: false
      },
    },
    define: {
      __DEV__: process.env.NODE_ENV !== 'production',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    },
    plugins: [
      react(),
      tailwindcss(),
      moveManifestPlugin(),
      moveHtmlFragmentPlugin(),
      startUrlFallbackPlugin
    ],
    build: {
      rollupOptions: {
        input: {
          circuitpython: path.resolve(__dirname, 'circuitpython.html'),
        },
        output: {
          entryFileNames: 'resources/plugin/question/circuitpython/circuitpython.js',
          chunkFileNames: 'resources/plugin/question/circuitpython/circuitpython-[name].js',
          assetFileNames: 'resources/plugin/question/circuitpython/[name][extname]',
        },
      },
      outDir: 'dist/src/main/webapp',
      sourcemap: true,
      emptyOutDir: true,
    },
    
  };
});
