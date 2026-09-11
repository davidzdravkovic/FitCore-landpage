import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves at https://<user>.github.io/FitCore-landpage/
export default defineConfig({
  base: '/FitCore-landpage/',
  plugins: [react(), tailwindcss()],
})
