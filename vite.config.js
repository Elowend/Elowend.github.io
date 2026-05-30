import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages user site: https://elowend.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
