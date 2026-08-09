/**
 * Build-time guard: no unregistered performance figure may reach the public site.
 *
 * Scans every prerendered page for percentage-like figures and fails the build on
 * any that is not either (a) registered in src/data/evidence.ts, or (b) matched by
 * a NON_PERFORMANCE pattern below (units, ranges, thresholds, CSS-ish values).
 *
 * This exists because a mislabelled specificity figure (94%, actually the study's
 * F1-score) sat on the TB product page and was caught only by coincidence.
 *
 * Adding a figure to the site now requires adding it to the register first, with
 * its study, n and source. That is the point.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const DIST = "dist";
const EVIDENCE_FILE = "src/data/evidence.ts";

// --- read the registered values without needing a TS toolchain ---
const evidenceSrc = readFileSync(EVIDENCE_FILE, "utf8");
const registered = new Set(
  [...evidenceSrc.matchAll(/value:\s*"([^"]+)"/g)].map((m) => m[1])
);

/**
 * Percentages that are not performance claims. Each entry must be justified —
 * this list is the escape hatch, so it is the thing to review in a PR.
 */
const NON_PERFORMANCE = [
  /^100%$/, // layout/width copy such as "100% of studies routed" — also a real registered value
  /^0%$/,
  /^30%$/, // rCBF threshold (configurable parameter, stated with provenance)
  /^6s$/,
  /^\d{1,2}\/\d{1,2}$/,
];

const isPercentLike = (s) => /^\d{1,3}(\.\d+)?%$/.test(s);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith(".html")) out.push(full);
  }
  return out;
}

/**
 * Surfaces scanned, and why each is included.
 *
 * Visible body text is the obvious one. The rest are the surfaces where a figure
 * travels WITHOUT the caveat that sits next to it on the page, which makes them
 * the higher risk, not the lower:
 *   - JSON-LD      reproduced out of context by search engines and LLMs
 *   - meta/OG      rendered as a search snippet or social card
 *   - alt text     read by screen readers and indexed
 *   - title attrs  surfaced on hover, extracted by scrapers
 */
function surfacesOf(html) {
  const out = [];

  // 1. JSON-LD (deliberately BEFORE scripts are stripped)
  for (const m of html.matchAll(
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  )) {
    out.push({ surface: "json-ld", text: m[1] });
  }

  // 2. meta / og / twitter content
  for (const m of html.matchAll(/<meta[^>]+content=["']([^"']*)["'][^>]*>/gi)) {
    out.push({ surface: "meta", text: m[1] });
  }

  // 3. alt and title attributes
  for (const m of html.matchAll(/\b(?:alt|title)=["']([^"']*)["']/gi)) {
    out.push({ surface: "alt/title", text: m[1] });
  }

  // 4. visible body text
  out.push({
    surface: "body",
    text: html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " "),
  });

  return out;
}

const problems = [];
const seen = new Map();

for (const file of walk(DIST)) {
  const route = "/" + relative(DIST, file).split(sep).slice(0, -1).join("/");

  for (const { surface, text } of surfacesOf(readFileSync(file, "utf8"))) {
    for (const m of text.matchAll(/\b\d{1,3}(?:\.\d+)?%/g)) {
      const value = m[0];
      if (!isPercentLike(value)) continue;
      if (NON_PERFORMANCE.some((re) => re.test(value))) continue;
      if (registered.has(value)) {
        seen.set(value, (seen.get(value) ?? 0) + 1);
        continue;
      }
      const context = text.slice(Math.max(0, m.index - 70), m.index + 70).trim();
      problems.push({ route: route === "/" ? "/" : route, surface, value, context });
    }
  }
}

console.log(`evidence check — ${registered.size} registered figures`);
for (const [v, count] of [...seen].sort()) console.log(`  ok  ${v}  (${count} occurrence(s))`);

if (problems.length) {
  console.error(`\nFAILED — ${problems.length} unregistered performance figure(s):\n`);
  for (const p of problems) {
    console.error(`  ${p.value}  on ${p.route}  [${p.surface}]`);
    console.error(`      ...${p.context}...`);
  }
  console.error(
    `\nEvery performance figure on the site must be registered in ${EVIDENCE_FILE}\n` +
      `with its study, sample size and source. If the number is not a performance\n` +
      `claim, add a justified pattern to NON_PERFORMANCE in this script.\n`
  );
  process.exit(1);
}

console.log("evidence check passed — no unregistered performance figures");
