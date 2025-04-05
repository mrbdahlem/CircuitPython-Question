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

// Custom plugin to serve circuitpython.html as index.html
function copyCircuitPythonHTML() {
  return {
    name: 'copy-circuitpython-html',
    buildStart() {
      const src = path.resolve('src/templates/circuitpython.html');
      const dest = path.resolve('public/index.html');
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
    },
  };
};

// Dev plugin to copy source files into public/resources during dev server
function mirrorSourceToPublicPlugin() {
  return {
    name: 'mirror-built-to-public',
    configureServer(server) {
      const builtDir = resolve(__dirname, 'dist/src/main/webapp/resources/plugin/question/circuitpython');
      const devDir = resolve(__dirname, 'public/resources/plugin/question/circuitpython');
      const copyFiles = () => {
        if (!fs.existsSync(builtDir)) {
          console.warn(`⚠️ No built files found at ${builtDir}`);
          return;
        }
        fs.rmSync(devDir, { recursive: true, force: true });
        fs.mkdirSync(devDir, { recursive: true });
        const files = fs.readdirSync(builtDir);
        for (const file of files) {
          const src = join(builtDir, file);
          const dest = join(devDir, file);
          fs.copyFileSync(src, dest);
          console.log(`📦 Copied: ${src} → ${dest}`);
        }
      };

      server.watcher.on('change', copyFiles);
      if (!fs.existsSync(builtDir)) {
        console.error(`⚠️ No built files found at ${builtDir}. Please run 'npm run build' manually.`);
      }
      server.watcher.on('ready', copyFiles); // initial copy
    },
  };
}

function rootRedirectPlugin() {
  return {
    name: 'root-redirect',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/') {
          req.url = '/index.html';
        }
        next();
      });
    },
  };
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
    open: "/index.html",
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
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    },
    plugins: [
      react(),
      tailwindcss(),
      moveManifestPlugin(),
      ...(isDev ? [copyCircuitPythonHTML(), mirrorSourceToPublicPlugin(), rootRedirectPlugin()] : []),
      
    ],
    build: {
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, 'src/circuitpython.js'),
        name: 'CircuitPythonQuestion',
        fileName: 'circuitpython',
        formats: ['es'],
      },
      treeshake: false,
      emptyOutDir: true,
      outDir: 'dist/src/main/webapp',
      manifest: true,
      rollupOptions: {
        output: {
          entryFileNames: 'resources/plugin/question/circuitpython/[name].js',
          chunkFileNames: 'resources/plugin/question/circuitpython/[name]-[hash].js',
          assetFileNames: 'resources/plugin/question/circuitpython/[name][extname]',
        },
      },
    },
  };
});

