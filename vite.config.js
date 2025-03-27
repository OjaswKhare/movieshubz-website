import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/movieshubz-website/', // Must match your EXACT repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Organized asset structure
  }
})
