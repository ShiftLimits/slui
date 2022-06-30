import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/vite.ts'),
      name: 'SLUI-Vite',
      fileName: (format) => `vite.${format}.js`
    },
    rollupOptions: {
      external: ['tailwindcss-color-suite', 'vite-plugin-svg-icons', 'path', 'fs'],
      output: {
        globals: { 'tailwindcss-color-suite': 'tailwindcssColorSuite' }
      }
    }
  }
})