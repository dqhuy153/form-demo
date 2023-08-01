import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  base: './',
  resolve: {
    alias: {
      src: pathResolve('src'),
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
})
