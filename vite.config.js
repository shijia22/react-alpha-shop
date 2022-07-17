import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { flowPlugin, esbuildFlowPlugin } from '@bunchtogether/vite-plugin-flow';

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [flowPlugin(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()]
    }
  },
});
