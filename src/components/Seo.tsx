import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const SITE_URL = "https://www.genzailabs.com";
const DEFAULT_IMAGE = `${SITE_URL}/genz-ai-logo.png`;

export const Seo = ({ title, description, path = "/", image = DEFAULT_IMAGE }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | GenzAI Labs`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="GenzAI Labs" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
