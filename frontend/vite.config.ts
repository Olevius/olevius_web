// frontend/vite.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // when you write `import "common/…"` it'll point at ../common/src
      common: path.resolve(__dirname, '../common/src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/setupTests.ts',
    // Vitest will use the same `resolve.alias` as Vite automatically,
    // so you don't need to repeat it here.
  },
});
