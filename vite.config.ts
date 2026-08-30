import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// The frontend calls /api/* which gets proxied to the backend server.
// Set VITE_API_URL in your .env to point to the backend (e.g. http://localhost:5000/v1)
// The proxy strips the /api prefix and forwards the rest to the backend.

const BACKEND_URL = process.env.VITE_API_URL ?? 'http://localhost:5000/v1'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: BACKEND_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
