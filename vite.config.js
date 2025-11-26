import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vargas-1140.github.io/', // <--- ESSA LINHA TEM QUE ESTAR ATIVA AGORA
})