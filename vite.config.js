import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const base = mode === "production" ? "/terraria-wiki/" : "/";
  return {
    plugins: [react()],
    base,
  };
});