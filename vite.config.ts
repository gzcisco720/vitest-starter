/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from "@nabla/vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupFiles/vitest.config.ts',
  },
  plugins: [react(), eslintPlugin()],
});
