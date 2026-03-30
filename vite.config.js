import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site (username.github.io/repo-name/): set when building, e.g.
//   VITE_BASE_PATH=/Portfolio/ npm run build
// User/org root site (username.github.io from username.github.io repo): use VITE_BASE_PATH=/
// Local dev: omit VITE_BASE_PATH (defaults to /)
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
