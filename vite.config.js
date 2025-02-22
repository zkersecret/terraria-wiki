import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Importe o plugin do Tailwind CSS

export default defineConfig(({ mode }) => {
  const base = mode === "production" ? "/terraria-wiki/" : "/";
  return {
    plugins: [
      react(),
      tailwindcss(), // Adicione o plugin do Tailwind CSS
    ],
    base, // A propriedade `base` deve estar dentro do objeto retornado
  };
});