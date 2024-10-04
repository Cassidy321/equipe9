import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
 
export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
    aaaaproxy: {
      '/api': {
        target: 'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/les-arbres/records?limit=50',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
});