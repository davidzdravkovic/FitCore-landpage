import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served at https://fitcore-landing.astibosoft.com/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
