import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.GROQ_API_KEY": JSON.stringify(env.GROQ_API_KEY || env.VITE_GROQ_API_KEY || ""),
    },
    resolve: {
      tsconfigPaths: true,
    },
    plugins: [
      react(),
      tailwind(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: [
          "favicon.ico",
          "apple-touch-icon.png",
          "site.webmanifest",
          "*.png",
          "*.jpg",
          "*.webp",
        ],
        manifest: {
          name: "Akshhat Srivastava — Software & AI Engineer",
          short_name: "Akshhat.ai",
          description: "Full-stack & AI Engineer Portfolio of Akshhat Srivastava",
          theme_color: "#000000",
          background_color: "#000000",
          display: "standalone",
          orientation: "portrait",
          start_url: "/",
          scope: "/",
          icons: [
            {
              src: "/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "/apple-touch-icon.png",
              sizes: "180x180",
              type: "image/png",
            },
          ],
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpg,json}"],
        },
      }),
    ],
  };
});
