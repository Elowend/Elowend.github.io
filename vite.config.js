import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://herbsyn123-glitch.github.io/herbsyn123--.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/herbsyn123--.github.io/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
