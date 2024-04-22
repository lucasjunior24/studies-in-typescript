import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig(({ mode }) => ({
  plugins: [svelte(), react()],
  resolve: {
    conditions: mode === "test" ? ["browser"] : [],
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup.ts"],
  },
}));
