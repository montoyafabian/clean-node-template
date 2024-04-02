/// <reference types="vitest" />
import { defineConfig } from 'vite'
import tsconfigpaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    // ... Specify options here.
  },
  plugins: [tsconfigpaths()]
})