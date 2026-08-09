/**
 * Typed JSON-LD builders.
 *
 * Emitted via <Seo jsonLd={...} /> and baked into prerendered HTML, so machine
 * consumers that do not execute JavaScript still receive structured data.
 *
 * REGULATORY CONSTRAINT
 * ---------------------
 * Structured data is extracted and reproduced out of context by search engines
 * and LLM retrieval systems. A caveat that sits next to a claim on the rendered
 * page does not travel with it.
 *
 * Therefore no builder here may express a diagnostic or therapeutic claim.
 * Product descriptions state what the software measures and present, framed as
 * decision support for qualified healthcare professionals. Every product schema
 * carries a `disclaimer` that travels inside the payload rather than beside it.
 *
 * Descriptions in this file are written for machine consumption and are not
 * copied from page copy. Site copy is not modified by this module.
 */

const SITE_URL = "https://www.genzailabs.com";

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

/** Applied to every product schema. Travels with the payload, not beside it. */
export const DECISION_SUPPORT_DISCLAIMER =
  "Clinical decision-support software for use by qualified healthcare professionals. " +
  "Outputs are quantitative measurements presented for interpretation by a trained reader. " +
  "Not a diagnostic device. Does not diagnose disease and does not determine eligibility " +
  "for any therapy. GenzAI Labs holds no regulatory clearance for this product in any " +
  "jurisdiction.";

export interface OrganizationInput {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  email?: string;
  telephone?: string;
  foundingDate?: string;
}

export function organizationSchema(input: OrganizationInput = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: input.name ?? "GenzAI Labs Pvt Ltd",
    url: input.url ?? SITE_URL,
    logo: abs(input.logo ?? "/genz-ai-logo.png"),
    description:
      "AI-powered medical imaging software providing clinical decision support for " +
      "qualified healthcare professionals across stroke perfusion, neuro-oncology " +
      "perfusion and chest radiograph analysis.",
    email: input.email ?? "sales@genzailabs.com",
    telephone: input.telephone ?? "+91-99230-30250",
    ...(input.foundingDate ? { foundingDate: input.foundingDate } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: input.email ?? "sales@genzailabs.com",
        telephone: input.telephone ?? "+91-99230-30250",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "mr"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office No. 659, Gera's Imperium Gateway, near Bhosari Metro Station, Nashik Phata Flyover",
      addressLocality: "Pune",
      postalCode: "411034",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: input.sameAs ?? [
      "https://www.linkedin.com/company/genz-ai-labs/",
      "https://www.youtube.com/@GenZAILabs",
    ],
  };
}

export interface MedicalDeviceInput {
  name: string;
  path: string;
  /** What the software measures and presents. Must not imply diagnosis. */
  description: string;
  alternateName?: string[];
  /** Clinical context of use. Must not be phrased as a diagnostic indication. */
  indication?: string;
  specialties?: string[];
}

export function medicalDeviceSchema(input: MedicalDeviceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalDevice",
    name: input.name,
    ...(input.alternateName ? { alternateName: input.alternateName } : {}),
    url: abs(input.path),
    description: input.description,
    purpose: "Clinical decision support",
    manufacturer: {
      "@type": "MedicalOrganization",
      name: "GenzAI Labs Pvt Ltd",
      url: SITE_URL,
    },
    ...(input.indication
      ? {
          indication: {
            "@type": "MedicalIndication",
            description: input.indication,
          },
        }
      : {}),
    relevantSpecialty: (input.specialties ?? ["Radiology"]).map((name) => ({
      "@type": "MedicalSpecialty",
      name,
    })),
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Qualified healthcare professionals",
    },
    // Carried inside the payload so it cannot be separated from the claim.
    disclaimer: DECISION_SUPPORT_DISCLAIMER,
  };
}

export interface SoftwareApplicationInput {
  name: string;
  path: string;
  description: string;
}

export function softwareApplicationSchema(input: SoftwareApplicationInput) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    url: abs(input.path),
    description: input.description,
    applicationCategory: "MedicalApplication",
    operatingSystem: "Web-based; integrates with DICOM-conformant systems",
    author: {
      "@type": "Organization",
      name: "GenzAI Labs Pvt Ltd",
      url: SITE_URL,
    },
    disclaimer: DECISION_SUPPORT_DISCLAIMER,
  };
}

export interface ArticleInput {
  headline: string;
  path: string;
  description: string;
  datePublished?: string;
  image?: string;
}

export function articleSchema(input: ArticleInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    url: abs(input.path),
    description: input.description,
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.image ? { image: abs(input.image) } : {}),
    author: {
      "@type": "Organization",
      name: "GenzAI Labs Pvt Ltd",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "GenzAI Labs Pvt Ltd",
      logo: {
        "@type": "ImageObject",
        url: abs("/genz-ai-logo.png"),
      },
    },
  };
}

/**
 * Per-product schema text, keyed by route slug.
 *
 * Written specifically for structured data and deliberately NOT derived from
 * page copy. Some existing product copy describes outputs in terms that read as
 * diagnostic conclusions (e.g. differential analysis mapping measured values to
 * named tumour entities, seizure-focus localisation, onset-time estimation).
 * Propagating that phrasing into JSON-LD would publish a machine-readable
 * diagnostic claim that travels without its on-page context.
 *
 * These entries describe what the software measures. Page copy is untouched;
 * the discrepancy is reported rather than silently reconciled.
 */
export const PRODUCT_SCHEMA: Record<
  string,
  { description: string; indication: string; specialties: string[] }
> = {
  "ct-stroke-insightz": {
    description:
      "Image-processing software that computes cerebral perfusion parameter maps " +
      "(CBF, CBV, MTT, Tmax) and derived volumetric measurements from CT perfusion " +
      "source data, and presents them with a structured summary report for " +
      "interpretation by a qualified healthcare professional.",
    indication:
      "Processing and quantitative analysis of CT perfusion studies of the brain in " +
      "adult patients undergoing imaging evaluation.",
    specialties: ["Radiology", "Neurology"],
  },
  "mr-stroke-insightz": {
    description:
      "Image-processing software that computes cerebral perfusion parameter maps from " +
      "DSC MRI, a diffusion-weighted region segmentation with associated volume, and " +
      "a FLAIR signal intensity ratio, presented for interpretation by a qualified " +
      "healthcare professional.",
    indication:
      "Processing and quantitative analysis of MRI perfusion, diffusion and FLAIR " +
      "series of the brain in adult patients undergoing imaging evaluation.",
    specialties: ["Radiology", "Neurology"],
  },
  "asl-insightz": {
    description:
      "Image-processing software that quantifies cerebral blood flow in absolute units " +
      "(mL/100g/min) from arterial spin labeling MRI, without administration of a " +
      "gadolinium-based contrast agent, together with relative CBF, a hemispheric " +
      "asymmetry index and regional summaries by vascular territory.",
    indication:
      "Processing and quantitative analysis of arterial spin labeling perfusion MRI " +
      "studies of the brain.",
    specialties: ["Radiology", "Neurology"],
  },
  "tumor-insightz": {
    description:
      "Image-processing software that computes leakage-corrected normalised cerebral " +
      "blood volume, percentage signal recovery, a leakage coefficient and relative " +
      "peak height from DSC perfusion MRI, with a FLAIR-based region segmentation and " +
      "regional statistics, presented for interpretation by a qualified healthcare " +
      "professional.",
    indication:
      "Processing and quantitative analysis of DSC perfusion MRI studies of the brain " +
      "in adult patients undergoing imaging evaluation.",
    specialties: ["Radiology", "Oncology", "Neurology"],
  },
  "tb-insightz": {
    description:
      "Image-processing software that analyses frontal chest radiographs and presents a " +
      "model probability score, bounding-box localisation of contributing image regions, " +
      "flagging of implants and imaging artefacts, and a cardiothoracic ratio " +
      "measurement, for review by a qualified healthcare professional.",
    indication:
      "Adjunctive analysis of frontal chest radiographs of adult patients undergoing " +
      "imaging as part of tuberculosis screening or evaluation. Does not diagnose " +
      "tuberculosis; diagnosis requires microbiological confirmation.",
    specialties: ["Radiology", "Pulmonary Medicine"],
  },
};

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}
