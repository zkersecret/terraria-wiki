import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/terraria-wiki/", // Nome do repositório
  plugins: [
    react(),
    tailwindcss(), // Adicione o plugin do Tailwind CSS aqui
  ],
});