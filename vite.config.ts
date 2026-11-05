import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { nitro } from "nitro/vite";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 3000,
  },
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      srcDirectory: "src",
    }),
    nitro(),
    tailwindcss(),
    react(),
  ].filter(Boolean),
  optimizeDeps: {
    rolldownOptions: {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
