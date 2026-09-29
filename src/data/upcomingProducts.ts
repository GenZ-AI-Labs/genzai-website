import { Network, ScanSearch, Workflow, type LucideIcon } from "lucide-react";

/**
 * Products in development or under validation, and not yet available. Rendered on /products and on
 * the homepage. There is no product page for these; cards link to Contact.
 */
export interface UpcomingProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  Icon: LucideIcon;
  gradient: string;
  features: string[];
  /** Optional screenshots, shown on the Products page card. */
  images?: { src: string; caption: string }[];
  status: "In Development" | "Under Validation";
}

export const UPCOMING_SUBTITLE = "In development or under validation — not yet available.";

export const upcomingProducts: UpcomingProduct[] = [
  {
    id: "quickrad-ai",
    title: "QuickRad AI",
    subtitle:
      "AI pre-read for MRI Brain with angiography and venography, Chest X-ray and plain CT Brain",
    description:
      "Prepares an AI-generated preliminary read of routine studies for the reporting radiologist to review, edit and sign off. The radiologist remains responsible for the final report.",
    Icon: ScanSearch,
    gradient: "from-emerald-500 to-cyan-500",
    features: [
      "Pre-read for the radiologist: an AI draft report opens beside the images, ready to review, edit and sign",
      "The draft is read-only until the radiologist chooses to use it — nothing is saved, signed or printed automatically",
      "Worklist flags to help radiologists decide which studies to open first",
      "MRI Brain, including MR angiography (MRA) and MR venography (MRV)",
      "Chest X-ray",
      "CT Brain (plain, non-contrast)",
      "Preliminary read for radiologist review and sign-off — not a final report",
    ],
    images: [
      {
        src: "/QuickRadAI_preread.png",
        caption: "AI draft report shown beside the study in the viewer, for the radiologist to review, edit and sign",
      },
    ],
    status: "Under Validation",
  },
  {
    id: "mra-vessel-insightz",
    title: "MRA Vessel Insightz",
    subtitle:
      "Cerebrovascular segmentation from TOF-MRA: Circle of Willis parcellation and whole-tree vessel mapping",
    description:
      "Labels the 13 Circle of Willis segments and extracts the intracranial vessel tree from non-contrast time-of-flight angiography, producing per-segment anatomy and vessel maps for clinician review.",
    Icon: Network,
    gradient: "from-sky-500 to-violet-500",
    features: [
      "13-segment Circle of Willis parcellation (ICA, MCA, ACA, PCA, Pcom, Acom, BA), anatomical variants reported separately",
      "Whole-brain vessel tree segmentation with centreline and branch metrics",
      "Left/right assignment by image geometry, independent of the model",
      "Structured output for review; no contrast agent required",
    ],
    status: "In Development",
  },
  {
    id: "cta-vessel-insightz",
    title: "CTA Vessel Insightz",
    subtitle:
      "Cerebrovascular segmentation from CTA: Circle of Willis parcellation and whole-tree vessel mapping",
    description:
      "Labels the 13 Circle of Willis segments and extracts the intracranial vessel tree from contrast-enhanced CT angiography, producing per-segment anatomy and vessel maps for clinician review.",
    Icon: Workflow,
    gradient: "from-indigo-500 to-fuchsia-500",
    features: [
      "13-segment Circle of Willis parcellation (ICA, MCA, ACA, PCA, Pcom, Acom, BA), anatomical variants reported separately",
      "Whole-brain vessel tree segmentation with centreline and branch metrics",
      "Left/right assignment by image geometry, independent of the model",
      "Structured output for review from contrast-enhanced CT angiography",
    ],
    status: "In Development",
  },
];
