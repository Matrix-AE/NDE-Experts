import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project repo at /NDE-Experts/. If you rename the
  // repo (or use a user/org page or custom domain), change this to match.
  base: '/NDE-Experts/',
  plugins: [react()],
})
