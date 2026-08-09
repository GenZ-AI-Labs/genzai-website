import { Head } from "vite-react-ssg";

interface SeoProps {
  title: string;
  description: string;
  /** Site-root-relative path, e.g. "/products/tb-insightz". No trailing slash. */
  path?: string;
  image?: string;
  ogType?: "website" | "article";
  /** Excludes the page from indexing and from the build-time sitemap. */
  noindex?: boolean;
  /** JSON-LD object, or array of objects, emitted as <script type="application/ld+json">. */
  jsonLd?: object | object[];
}

const SITE_URL = "https://www.genzailabs.com";
const DEFAULT_IMAGE = `${SITE_URL}/genz-ai-logo.png`;

// Canonical form: absolute, https, www, no trailing slash (root is bare "/").
const canonicalFor = (path: string) => {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.replace(/\/+$/, "")}`;
};

/**
 * Per-route document head.
 *
 * Uses vite-react-ssg's <Head> rather than react-helmet-async's <Helmet> directly:
 * vite-react-ssg mounts its own HelmetProvider and owns the helmetContext used to
 * collect head output during prerender. Going through <Head> is what makes these
 * tags land in the static HTML instead of only being applied after hydration.
 */
export const Seo = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  ogType = "website",
  noindex = false,
  jsonLd,
}: SeoProps) => {
  const url = canonicalFor(path);
  const fullTitle = `${title} | GenzAI Labs`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="GenzAI Labs" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
};
