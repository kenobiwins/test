import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      components: "/src/components",
      pages: "/src/pages",
      store: "/src/redux",
      theme: "/src/theme",
      hooks: "/src/hooks",
      types: "/src/types",
      utils: "/src/utils",
      kit:"/src/kit"
    },
  },
  build: {
<<<<<<< HEAD
    outDir:'./dist'
=======
    outDir:'./build'
>>>>>>> f8a62e91259c5dde31d45aaca64c508acd4da7ab
  }
});
