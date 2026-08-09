import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import { perfusionProducts } from "@/data/perfusionProducts";

/**
 * Single source of truth for routing.
 *
 * Every route listed here is prerendered to static HTML at build time by
 * vite-react-ssg. The build-time sitemap (scripts/generate-sitemap.mjs) is
 * derived from the emitted HTML, so the sitemap cannot drift from what was
 * actually prerendered.
 *
 * Adding a route here is the only step required for it to be routed,
 * prerendered and sitemapped.
 */

// Pages are default exports; vite-react-ssg's `lazy` expects { Component }.
const page =
  (loader: () => Promise<{ default: React.ComponentType }>) => async () => ({
    Component: (await loader()).default,
  });

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.tsx",
    children: [
      { index: true, lazy: page(() => import("./pages/Index")) },
      { path: "about", lazy: page(() => import("./pages/About")) },
      { path: "products", lazy: page(() => import("./pages/Products")) },

      // Static product route stays ahead of the dynamic one for readability.
      // (react-router v6 ranks static segments above dynamic regardless.)
      {
        path: "products/tb-insightz",
        lazy: page(() => import("./pages/products/TbInsightz")),
      },
      {
        path: "products/:slug",
        lazy: page(() => import("./pages/products/PerfusionProductDetail")),
        // Enumerated from the same static array the component reads, so the
        // prerendered set can never drift from the routable set.
        getStaticPaths: () => perfusionProducts.map((p) => `products/${p.slug}`),
      },

      { path: "events", lazy: page(() => import("./pages/Events")) },
      { path: "contact", lazy: page(() => import("./pages/Contact")) },
      { path: "careers", lazy: page(() => import("./pages/Careers")) },
      { path: "publications", lazy: page(() => import("./pages/Publications")) },
      {
        path: "demo-request",
        // Named-only export; the `page` helper above resolves `.default`, which
        // would be undefined here and silently render an empty page body.
        lazy: async () => ({
          Component: (await import("./pages/DemoRequest")).DemoRequest,
        }),
      },
      { path: "apply-now", lazy: page(() => import("./pages/ApplyNowPage")) },
      {
        path: "stroke-white-paper",
        lazy: page(() => import("./pages/StrokeWhitePaper")),
      },
      { path: "privacy-policy", lazy: page(() => import("./pages/PrivacyPolicy")) },
      { path: "disclaimer", lazy: page(() => import("./pages/Disclaimer")) },

      // Gated. Prerendered so the sign-in gate is served as static HTML, but
      // marked noindex via <Seo> and therefore excluded from the sitemap.
      { path: "client", lazy: page(() => import("./pages/ClientPortal")) },

      // Prerendered so postbuild can emit dist/404.html, which Vercel serves
      // (with a real 404 status) for URLs that match no static file. noindex via
      // <Seo>, and excluded from the sitemap.
      { path: "404", lazy: page(() => import("./pages/NotFound")) },

      { path: "*", lazy: page(() => import("./pages/NotFound")) },
    ],
  },
];
