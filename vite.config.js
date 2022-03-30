import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    manifest: true,
    outDir: "docs",
  },
  base:"./",
  publicDir: "public",
  plugins: [vue()],
});
