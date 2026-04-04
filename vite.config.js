import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  tailwindcss from "@tailwindcss/vite"
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true,
      filename: "stats.html",
      gripSize: true,
      brotliSize: true
    })
  ],
  build: {
    sourcemap: true
  } 
})
