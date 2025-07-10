import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path' // Importation du module 'path' de Node.js

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        // On liste ici chaque page comme un point d'entrée
        main: resolve(__dirname, 'index.html'),
        produit: resolve(__dirname, 'produit.html'),
        liste: resolve(__dirname, 'liste.html'),
        // Ajoute ici tes futures pages de la même manière
        // nom_unique: resolve(__dirname, 'autre-page.html'),
      },
    },
  },
})