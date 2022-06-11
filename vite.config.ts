import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cleaning-service-test/",
  server: {
    port: 3003,
    strictPort: true,
  },
  plugins: [react()],
});
