import { defineConfig } from 'vite'
import { resolve } from 'path'

import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vuePlugin()
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SLUI',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vue', '@headlessui/vue'],
      output: {
        globals: { vue: 'Vue', '@headlessui/vue': '' }
      }
    }
  }
})