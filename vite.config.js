import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const srcDir = resolve(__dirname, 'src');
const htmlEntries = Object.fromEntries(
  readdirSync(srcDir)
    .filter((file) => file.endsWith('.html'))
    .map((file) => [file.replace(/\.html$/, ''), resolve(srcDir, file)])
);

export default defineConfig({
  root: 'src',
  server: {
    open: '/index.html'
  },
  preview: {
    open: '/index.html'
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: htmlEntries
    }
  }
});
