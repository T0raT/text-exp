import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";
import { defineConfig, searchForWorkspaceRoot } from "vite";
import restart from "vite-plugin-restart";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["@empirica/tajriba", "@empirica/core"],
  },
  server: {
    port: 8844,
    open: false,
    strictPort: true,
    host: "0.0.0.0",
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
      ],
    },
  },
  build: {
    minify: false,
  },
  clearScreen: false,
  plugins: [
    restart({
      restart: [
        "./tailwind.config.js",
        "./node_modules/@empirica/core/dist/**/*.{js,ts,jsx,tsx,css}",
        "./node_modules/@empirica/core/assets/**/*.css",
      ],
    }),
    tailwindcss,
    reactRefresh(),
  ],
  define: {
    "process.env": {
      NODE_ENV: process.env.NODE_ENV || "development",
    },
  },
});
