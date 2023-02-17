import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@page': path.resolve(__dirname, './src/pages')
    }
  },
  define: {
    'process.env': {
      BASE_URL: 'http://localhost:3000'
    }
  }
})
