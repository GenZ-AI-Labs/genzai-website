import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    // Emit /about/index.html rather than /about.html so Vercel's cleanUrls
    // serves /about directly.
    dirStyle: "nested",
    // Critical-CSS inlining (beasties/critters) is off: it rewrites the emitted
    // <head> and is an unnecessary variable while establishing prerender parity.
    crittersOptions: false,
  },
  ssr: {
    // Bundled rather than externalised so they are transformed for the Node
    // render pass. Both are browser-oriented and ship ESM-only builds.
    noExternal: ["framer-motion", "lenis"],
  },
}));
