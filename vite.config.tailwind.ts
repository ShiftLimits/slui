import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/tailwind.ts'),
      name: 'SLUI-Tailwind',
      fileName: (format) => `tailwind.${format}.js`
    },
    rollupOptions: {
      external: ['tailwindcss', 'tailwindcss-gridlines', 'tailwindcss-color-suite', 'tailwindcss-rounded-inherit', 'tailwindcss-interaction-media'],
      output: {
        globals: { 'tailwindcss-color-suite': 'tailwindcssColorSuite' }
      }
    }
  }
})