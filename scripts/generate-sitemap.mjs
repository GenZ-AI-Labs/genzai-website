/**
 * Build-time sitemap generation.
 *
 * Source of truth is the prerender output itself: this walks dist/ for the
 * index.html files vite-react-ssg emitted, one per route. That makes drift
 * between "routes that exist", "pages that were prerendered" and "URLs in the
 * sitemap" structurally impossible — you cannot list a page that was not built,
 * and you cannot build a page that is silently missing from the sitemap.
 *
 * Pages carrying <meta name="robots" content="noindex"> are excluded, so the
 * noindex flag in <Seo> is the single control for both.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const SITE_URL = "https://www.genzailabs.com";
const DIST = "dist";

// Higher-value routes get explicit priority/changefreq; everything else defaults.
const PRIORITY = {
  "/": ["1.0", "weekly"],
  "/products": ["0.9", "monthly"],
  "/products/asl-insightz": ["0.9", "monthly"],
  "/products/ct-stroke-insightz": ["0.8", "monthly"],
  "/products/mr-stroke-insightz": ["0.8", "monthly"],
  "/products/tumor-insightz": ["0.8", "monthly"],
  "/products/tb-insightz": ["0.8", "monthly"],
  "/publications": ["0.8", "monthly"],
  "/about": ["0.8", "monthly"],
  "/events": ["0.6", "weekly"],
  "/careers": ["0.6", "weekly"],
  "/contact": ["0.7", "monthly"],
};

function walkHtml(dir, found = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walkHtml(full, found);
    else if (name === "index.html") found.push(full);
  }
  return found;
}

function toPath(htmlFile) {
  const rel = relative(DIST, htmlFile).split(sep).slice(0, -1).join("/");
  return rel === "" ? "/" : `/${rel}`;
}

const files = walkHtml(DIST);

const excluded = [];
const entries = [];

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const path = toPath(file);

  // 404 shell emitted for the catch-all route is not a real URL.
  if (path === "/404") {
    excluded.push([path, "catch-all 404 page"]);
    continue;
  }

  if (/<meta[^>]+name=["']robots["'][^>]*noindex/i.test(html)) {
    excluded.push([path, "noindex"]);
    continue;
  }

  entries.push({
    loc: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastmod: statSync(file).mtime.toISOString().slice(0, 10),
    ...(() => {
      const [priority, changefreq] = PRIORITY[path] ?? ["0.6", "monthly"];
      return { priority, changefreq };
    })(),
  });
}

entries.sort((a, b) => a.loc.localeCompare(b.loc));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(DIST, "sitemap.xml"), xml);

console.log(`sitemap.xml — ${entries.length} URLs from ${files.length} prerendered pages`);
for (const [path, reason] of excluded) console.log(`  excluded ${path} (${reason})`);
