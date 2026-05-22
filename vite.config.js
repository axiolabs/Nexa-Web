import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        premium: resolve(__dirname, 'premium.html'),
        hosts: resolve(__dirname, 'hosts.html'),
        descargar: resolve(__dirname, 'descargar.html'),
        listaEspera: resolve(__dirname, 'lista-de-espera.html'),
      },
    },
  },
});
