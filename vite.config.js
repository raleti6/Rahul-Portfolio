import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages under https://raleti6.github.io/Rahul-Portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/Rahul-Portfolio/',
})
