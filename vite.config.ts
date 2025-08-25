import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  root: "vite",
  plugins: [vue()],
  build: {
    outDir: "../public",
    //emptyOutDir: true,
  },
});
