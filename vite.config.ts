import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  plugins: [
    react(),
    ...(isVercel ? [] : [...mochaPlugins(process.env as any), cloudflare()])
  ],

  server: {
    allowedHosts: true,
  },

  build: {
    chunkSizeWarningLimit: 5000,
    outDir: "dist",
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});