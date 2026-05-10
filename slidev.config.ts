import { defineConfig } from 'slidev/config'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: '/template-slidev/',

  vite: {
    plugins: [
      UnoCSS(), // ✅ THIS is the missing piece
    ],

    build: {
      chunkSizeWarningLimit: 5000,
    },
  },
})