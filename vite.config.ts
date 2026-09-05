import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.GROQ_API_KEY": JSON.stringify(env.GROQ_API_KEY || env.VITE_GROQ_API_KEY || ""),
    },
    resolve: {
      tsconfigPaths: true,
    },
    plugins: [react(), tailwind()],
  };
});
