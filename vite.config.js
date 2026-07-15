import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Local dev serves from "/"; the production build uses "/NDE-Experts/" to match
// the GitHub Pages project URL. If you rename the repo (or use a custom domain
// / user-org page), update the build base below.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/NDE-Experts/' : '/',
  plugins: [react()],
}))
