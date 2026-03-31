import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. بنستدعي الـ tailwind هنا

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), // 2. بنفعل الـ tailwind هنا داخل الـ plugins
  ],
})