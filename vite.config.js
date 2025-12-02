import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',        // <-- change this from '/Todo-app/' to './'
  plugins: [react()],
  server: {
    port: 3000,
  }
})
