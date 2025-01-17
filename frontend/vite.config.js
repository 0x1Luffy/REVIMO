import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Allows access from external networks (e.g., Docker, remote servers)
    port: 5173,  // Optional: Set the port to 5173 (or any port you prefer)
  },
})
