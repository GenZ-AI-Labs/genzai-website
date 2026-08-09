/**
 * Single register of every performance figure GenzAI Labs publishes.
 *
 * WHY THIS EXISTS
 * ---------------
 * A specificity figure of 94% was published on the TB product page for an unknown
 * period. The cited study reports 86.59%; 94.12% is that study's F1-score. The
 * error was found only because a citation was added next to the number and the
 * citation happened to contradict it — a process that works by accident.
 *
 * This file makes it deliberate. Every performance figure rendered anywhere on the
 * site must exist here with its study, design, sample size and source. The
 * build-time check in scripts/check-evidence.mjs scans the prerendered HTML for
 * percentage-like figures and fails the build on any it cannot map back to an
 * entry below.
 *
 * RULES
 *  1. A number goes here first, then on a page. Never the other way round.
 *  2. `value` is quoted from `source` verbatim. Do not round, re-derive or restate.
 *  3. If a figure has no peer-reviewed source, it does not belong on the site.
 *  4. Changing a value here is a documented change — see docs/change-control/.
 */

export interface EvidenceFigure {
  /** Exactly as rendered on the page, e.g. "93.53%". */
  value: string;
  /** What the figure measures. */
  metric: string;
  /** Study identifier. */
  study: string;
  design: "Retrospective, single-site" | "Retrospective" | "Prospective" | "Systematic review";
  /** Total sample size. */
  n: number;
  /** What the model was compared against. */
  comparator: string;
  publication: string;
  /** Local PDF or external URL. */
  source: string;
  /** Rendered adjacent to the figure. Required — no figure ships without one. */
  caveat: string;
}

export const TB_PILOT_BJMHS_2026 = {
  study: "TB Insightz (CXR Insightz) Pilot Validation Study",
  design: "Retrospective, single-site" as const,
  n: 170,
  comparator: "Radiologist-annotated findings as ground truth",
  publication: "British Journal of Medical & Health Sciences, February 2026",
  source: "/bjmhs-tb-insightz-validation.pdf",
  caveat:
    "Research dataset (n=170: 88 TB-positive, 82 normal). Not a clinical performance claim and not predictive of performance on any other population, scanner or setting.",
};

/**
 * Figures quoted verbatim from the BJMHS Feb 2026 paper:
 *   "CXR Insightz achieved an overall accuracy of 93.53%, sensitivity of 100%,
 *    specificity of 86.59%, and an F1-score of 94.12% on the validation dataset.
 *    The area under the ROC curve (AUC) was 0.9329"
 *
 * NOTE: F1-score is 94.12%. It is NOT specificity. Publishing "94%" as
 * specificity is the exact error this register exists to prevent.
 */
export const EVIDENCE: EvidenceFigure[] = [
  { ...TB_PILOT_BJMHS_2026, value: "93.53%", metric: "Overall accuracy" },
  { ...TB_PILOT_BJMHS_2026, value: "86.59%", metric: "Specificity" },
  { ...TB_PILOT_BJMHS_2026, value: "100%", metric: "Sensitivity" },
  { ...TB_PILOT_BJMHS_2026, value: "94.12%", metric: "F1-score" },
  { ...TB_PILOT_BJMHS_2026, value: "88.89%", metric: "Precision" },
  { ...TB_PILOT_BJMHS_2026, value: "0.9329", metric: "ROC-AUC" },
  { ...TB_PILOT_BJMHS_2026, value: "0.8698", metric: "Cohen's kappa" },
];

/**
 * Figures quoted inside published abstracts on /publications.
 *
 * Registered because they render as text on the site and are therefore subject to
 * the same rule, even though they are quotations rather than GenzAI claims. Two
 * distinctions matter and are recorded here rather than left implicit:
 *
 *  - The ~93% figure is a POOLED literature estimate across MRI stroke AI
 *    platforms in a systematic review. It is NOT a measurement of Stroke Insightz
 *    and must never be presented as one.
 *  - The >60% figure is a single-centre workflow observation, not diagnostic
 *    performance, and has no reported sample size.
 */
export const QUOTED_IN_PUBLICATIONS: EvidenceFigure[] = [
  {
    value: "93%",
    metric: "Pooled sensitivity and specificity across MRI stroke AI platforms (literature, not GenzAI)",
    study: "Experiences of Stroke Insightz AI for Stroke Analysis into MR Imaging Workflow: A Global Perspective",
    design: "Systematic review",
    n: 0, // PRISMA-2020 synthesis; pooled across included studies, count not restated on site
    comparator: "Pooled across included studies",
    publication: "British Journal of Medical & Health Sciences, February 2026 (BJMHS450537)",
    source: "/bjmhs-stroke-insightz-global.pdf",
    caveat:
      "Pooled literature estimate across MRI stroke AI platforms from a PRISMA-2020 systematic review. Not a measurement of GenzAI Labs software.",
  },
  {
    value: "60%",
    metric: "Reduction in MRI post-processing workload (workflow observation, not diagnostic performance)",
    study:
      "Integration of AI Stroke Analysis into Radiology Workflow: Real-World Experience with Stroke Insightz for MRI from Indian Perspective",
    design: "Retrospective",
    n: 0, // single-centre case illustration; no sample size reported in the abstract
    comparator: "Pre-deployment workflow at the same centre",
    publication: "International Journal of Scientific Research, March 2026",
    source: "/ijsr-stroke-insightz-mri-2026.pdf",
    caveat:
      "Single-centre workflow observation from one tertiary Indian centre. A workflow-efficiency figure, not a diagnostic performance claim.",
  },
];

/** Everything the build check will accept as a registered figure. */
export const ALL_FIGURES: EvidenceFigure[] = [...EVIDENCE, ...QUOTED_IN_PUBLICATIONS];

/** Figures approved to appear in prose without triggering the build check. */
export const ALLOWED_VALUES = new Set(ALL_FIGURES.map((e) => e.value));

export const findEvidence = (value: string) => ALL_FIGURES.find((e) => e.value === value);
