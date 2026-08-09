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
    // MUST be "defer", not "async".
    //
    // vite-react-ssg sets window.__VITE_REACT_SSG_HASH__ from an inline <script>
    // near the end of the document, and the client reads it to fetch
    // /static-loader-data-manifest-<hash>.json. With "async" the module bundle can
    // execute before the parser reaches that assignment, so the hash is undefined,
    // the fetch 404s to HTML, JSON.parse throws inside a route loader, and React
    // discards the prerendered DOM and falls back to a full client render
    // (errors #418 x6 and #423 on the homepage).
    //
    // It is a race, so it presents intermittently -- it reproduced consistently
    // only with the HTTP cache disabled. "defer" guarantees the inline assignment
    // runs first.
    script: "defer",
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
