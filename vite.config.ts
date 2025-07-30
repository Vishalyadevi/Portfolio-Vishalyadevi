import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio-Vishalyadevi/",  // 🔁 This is your GitHub repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
