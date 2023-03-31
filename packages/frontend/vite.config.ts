import * as path from "node:path";

import { packageDirectorySync } from "pkg-dir";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const packageRoot = packageDirectorySync();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(packageRoot, "./src"),
    },
  },
});
