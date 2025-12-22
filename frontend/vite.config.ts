/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // when you write `import "common/…"` it'll point at ../common/src
      common: path.resolve(__dirname, "../common/src"),
    },
  },
});
