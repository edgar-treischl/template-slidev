import { defineConfig } from 'slidev/config'

export default defineConfig({
  base: '/template-slidev/',

  vite: {
    build: {
      chunkSizeWarningLimit: 5000,
    },
  },
})