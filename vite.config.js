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
        notFound: resolve(__dirname, '404.html'),
        privacidad: resolve(__dirname, 'aviso-privacidad.html'),
        terminos: resolve(__dirname, 'terminos.html'),
      },
    },
  },
});
