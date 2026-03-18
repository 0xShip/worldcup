import path from "path";
import react from "@vitejs/plugin-react";
import { componentTagger } from "lovable-tagger";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: "./",
    server: {
        host: "::",
        port: 8080,
        hmr: {
            overlay: false,
        },
        allowedHosts: true as const
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
