import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Determine if we're in production mode
  const isProd = mode === 'production';
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react()
    ],
    // Use the correct base path depending on environment
    base: isProd ? "/edinsights-web/" : "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
