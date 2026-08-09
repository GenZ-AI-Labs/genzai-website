export interface SampleImage {
  src: string;
  caption: string;
}

export interface PerfusionProduct {
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  heroHeadline: string;
  heroHighlight: string;
  description: string;
  iconName: "Heart" | "Activity" | "Waves" | "Microscope";
  accent: {
    from: string;
    to: string;
    ring: string;
    text: string;
  };
  heroImage: string;
  pipeline: string[];
  mapsTitle: string;
  maps: string[];
  metricsTitle: string;
  metrics: { label: string; value: string }[];
  useCases: { title: string; description: string }[];
  reportFeatures: string[];
  reportPage1: string;
  reportPage2: string;
  sampleImages?: SampleImage[];
}

export const perfusionProducts: PerfusionProduct[] = [
  {
    slug: "ct-stroke-insightz",
    title: "CT Stroke Insightz",
    tagline: "Acute Stroke Triage — CT Perfusion",
    badge: "CT Perfusion",
    heroHeadline: "AI-Powered",
    heroHighlight: "CT Stroke Analysis",
    description:
      "Automated perfusion parameter maps, threshold-based volumetrics and a 10-region ASPECTS summary from CT Perfusion — quantitative measurements presented for interpretation by qualified healthcare professionals.",
    iconName: "Heart",
    accent: {
      from: "from-red-500",
      to: "to-orange-500",
      ring: "ring-red-400",
      text: "text-red-500",
    },
    heroImage: "/brain-3D-image.png",
    pipeline: [
      "Automated DICOM ingestion and preprocessing",
      "Brain extraction, CSF removal and motion correction",
      "Arterial and venous reference detection",
      "Perfusion map computation",
      "Core/Penumbra volumetrics and ASPECTS scoring",
      "Structured clinical report generation",
    ],
    mapsTitle: "Perfusion Maps Generated",
    maps: [
      "CBF (ml/100g/min, 0-150)",
      "CBV (ml/100g, 0-12)",
      "MTT (seconds, 0-30)",
      "Tmax (seconds, 0-20)",
      "Relative CBF (% contralateral)",
      "Core mask (rCBF<30%) & Penumbra (Tmax>6s)",
    ],
    metricsTitle: "Clinical Metrics",
    metrics: [
      { label: "Low-rCBF Volume (mL)", value: "Tissue volume below the configured rCBF threshold (default 30%)" },
      { label: "Elevated-Tmax Volume (mL)", value: "Tissue volume above the configured Tmax threshold (default 6s)" },
      { label: "Volumetric Ratio", value: "Ratio of the two volumes above" },
      { label: "CT-ASPECTS", value: "10-point regional summary, 10 MCA regions" },
      { label: "Hypoperfusion Intensity Ratio", value: "Volume(Tmax>10s) / Volume(Tmax>6s)" },
      { label: "CBV Index", value: "rCBV within the Tmax>6s region" },
    ],
    useCases: [
      { title: "Acute Stroke Imaging", description: "Perfusion maps, volumetrics and regional summary for clinician review" },
      { title: "Quantitative Consistency", description: "Same derivation applied across readers and sessions" },
      { title: "Collateral Assessment", description: "Hypoperfusion intensity ratio reported as a measurement" },
      { title: "Extended-Window Imaging", description: "Quantified perfusion measurements for review by the treating clinician" },
      { title: "Perfusion Screening", description: "Reports measured values, including where no perfusion deficit is measured" },
      { title: "Serial Monitoring", description: "Track measured volumes across successive scans" },
    ],
    reportFeatures: [
      "AI-generated clinical impression",
      "Core / Penumbra gauges",
      "Mismatch Ratio visualization",
      "CT-ASPECTS (10 regions)",
      "Collateral Assessment (HIR)",
      "CBF + Tmax summary maps",
      "All parameters grid",
    ],
    reportPage1: "Clinical Metrics",
    reportPage2: "Perfusion Maps",
    sampleImages: [
      {
        src: "/ct-stroke-perf-maps.png",
        caption: "Full perfusion parameter maps — Perf BL, rCBV, rCBF, MTT, Tmax",
      },
      {
        src: "/ct-stroke-cbf-tmax.jpg",
        caption: "CBF + Tmax summary with core/penumbra highlights and mismatch volume",
      },
    ],
  },
  {
    slug: "mr-stroke-insightz",
    title: "MR Stroke Insightz",
    tagline: "Stroke Evaluation — MRI DSC Perfusion",
    badge: "MRI DSC Perfusion",
    heroHeadline: "Comprehensive",
    heroHighlight: "MR Stroke Evaluation",
    description:
      "DWI-ASPECTS regional summary, FLAIR signal intensity ratio, and perfusion-diffusion volumetric comparison from DSC MRI — quantitative measurements presented for interpretation by qualified healthcare professionals.",
    iconName: "Activity",
    accent: {
      from: "from-purple-500",
      to: "to-indigo-500",
      ring: "ring-purple-400",
      text: "text-purple-500",
    },
    heroImage: "/brain-3D-image.png",
    pipeline: [
      "Auto-segregate Perfusion, DWI and FLAIR series from mixed upload",
      "Brain extraction and motion correction",
      "Arterial and venous reference detection",
      "Perfusion map computation (CBF, CBV, MTT, Tmax)",
      "Automated DWI region segmentation and volume",
      "DWI-ASPECTS regional summary across 10 MCA territory regions",
      "FLAIR signal intensity ratio (SIR) computation",
      "Perfusion-diffusion volumetric comparison",
    ],
    mapsTitle: "Analysis Outputs",
    maps: [
      "CBF, CBV, MTT, Tmax maps",
      "DWI region segmentation",
      "DWI-ASPECTS regional summary",
      "FLAIR SIR reported as a measured ratio",
      "Perfusion-diffusion volumetric comparison",
      "Hypoperfusion intensity ratio",
    ],
    metricsTitle: "Measurements",
    metrics: [
      { label: "DWI Region Volume", value: "Volume of the segmented DWI-hyperintense region" },
      { label: "DWI-ASPECTS", value: "10-region MCA territory summary" },
      { label: "FLAIR SIR", value: "Measured signal intensity ratio vs contralateral reference" },
      { label: "Volumetric Ratio", value: "Perfusion volume relative to DWI region volume" },
      { label: "Hypoperfusion Index", value: "Tmax>10s / Tmax>6s ratio" },
      { label: "CBV Index", value: "rCBV within the Tmax>6s region" },
    ],
    useCases: [
      { title: "Unwitnessed-Onset Imaging", description: "Reports the measured FLAIR SIR value for clinician interpretation" },
      { title: "Extended-Window Imaging", description: "DWI-ASPECTS regional summary and volumetrics for clinician review" },
      { title: "Posterior Circulation", description: "Vertebrobasilar DSC perfusion measurements" },
      { title: "TIA Evaluation", description: "Residual CBF asymmetry and Tmax measurements" },
      { title: "Post-Intervention", description: "Before/after perfusion measurements" },
      { title: "Stroke Imaging Workup", description: "Full perfusion and diffusion measurement set" },
    ],
    reportFeatures: [
      "DWI region volume",
      "DWI-ASPECTS (10 regions)",
      "FLAIR SIR value",
      "Perfusion-diffusion volumetric comparison",
      "Threshold-based volume gauges",
      "DWI + Tmax overlay maps",
      "Full perfusion parameter grid",
    ],
    reportPage1: "ASPECTS & FLAIR Mismatch",
    reportPage2: "DWI + Perfusion Maps",
    sampleImages: [
      {
        src: "/mr-stroke-perf-maps.png",
        caption: "Full perfusion parameter maps — Perf BL, rCBV, rCBF, MTT, Tmax",
      },
      {
        src: "/mr-stroke-cbf-tmax.png",
        caption: "CBF + Tmax summary with core/penumbra overlays across all slices",
      },
    ],
  },
  {
    slug: "asl-insightz",
    title: "MRI ASL Insightz",
    tagline: "Non-Contrast Perfusion — MRI ASL",
    badge: "MRI ASL Perfusion",
    heroHeadline: "Non-Contrast",
    heroHighlight: "Brain Perfusion",
    description:
      "Absolute CBF quantification in mL/100g/min from Arterial Spin Labeling — contrast-free perfusion measurement, repeatable as often as clinically warranted, for interpretation by qualified healthcare professionals.",
    iconName: "Waves",
    accent: {
      from: "from-cyan-500",
      to: "to-teal-500",
      ring: "ring-cyan-400",
      text: "text-cyan-500",
    },
    heroImage: "/brain-3D-image.png",
    pipeline: [
      "Auto-detect pCASL/CASL/PASL acquisition scheme",
      "Motion correction and brain extraction",
      "Label-control subtraction and quantification",
      "Absolute CBF calibration (ml/100g/min)",
      "Asymmetry index + vascular territory mapping",
      "Mode-specific analysis (Stroke / CBF)",
      "2-page PDF report generation",
    ],
    mapsTitle: "Supported ASL Schemes",
    maps: [
      "pCASL (pseudo-Continuous ASL)",
      "CASL (Continuous ASL)",
      "PASL (Pulsed ASL)",
      "Multi-PLD acquisitions",
      "2D EPI, 3D GRASE, 3D Spiral",
      "Absolute CBF, Relative CBF, Asymmetry Index",
    ],
    // Contexts of use, not indications for diagnosis. The software reports
    // measurements; it does not localise pathology or differentiate conditions.
    metricsTitle: "CBF Measurements by Clinical Context",
    metrics: [
      { label: "Neuro-oncology", value: "Regional CBF within an operator-defined region" },
      { label: "Steno-occlusive / Moyamoya", value: "Territorial CBF and hemispheric asymmetry index" },
      { label: "Epilepsy Evaluation", value: "Regional CBF and asymmetry index" },
      { label: "Cognitive Impairment Evaluation", value: "Regional CBF by vascular territory" },
      { label: "TIA / Carotid Stenosis", value: "Territorial CBF measurement" },
      { label: "Post-Intervention", value: "Regional CBF before and after intervention" },
      { label: "General Assessment", value: "Absolute and relative CBF across territories" },
    ],
    useCases: [
      { title: "Gadolinium Contraindicated", description: "Full measurement set with no contrast agent administered" },
      { title: "Moyamoya / Steno-occlusive", description: "Territorial CBF, repeatable without cumulative contrast exposure" },
      { title: "Epilepsy Pre-surgical Imaging", description: "Regional CBF and asymmetry measurements for clinician review" },
      { title: "Cognitive Impairment Imaging", description: "Regional CBF by vascular territory for clinician review" },
      { title: "Renal Impairment", description: "Perfusion measurement where contrast agents are restricted" },
      { title: "Carotid Stenosis", description: "Territorial CBF before and after intervention" },
    ],
    reportFeatures: [
      "Absolute CBF quantification (mL/100g/min)",
      "CBF Asymmetry Index",
      "Vascular territory maps",
      "Context-specific measurement summary",
      "Stroke mode: DWI-ASPECTS + CBF comparison",
      "Hemispheric asymmetry measurement",
      "Regional CBF summary",
      "Quantification assumptions stated with every report",
    ],
    reportPage1: "CBF Metrics & Asymmetry",
    reportPage2: "Territory Maps",
  },
  {
    slug: "tumor-insightz",
    title: "MRI Tumor Insightz",
    tagline: "Neuro-Oncology — MRI DSC Tumor Perfusion",
    badge: "MRI Tumor Perfusion",
    heroHeadline: "Neuro-Oncology",
    heroHighlight: "Perfusion Intelligence",
    description:
      "Leakage-corrected nCBV, PSR and K2 perfusion maps with FLAIR-based region segmentation and regional statistics — quantified consistently across timepoints, for interpretation by qualified healthcare professionals.",
    iconName: "Microscope",
    accent: {
      from: "from-pink-500",
      to: "to-rose-500",
      ring: "ring-pink-400",
      text: "text-pink-500",
    },
    heroImage: "/brain-3D-image.png",
    pipeline: [
      "DSC preprocessing and motion correction",
      "Arterial and venous reference detection",
      "Leakage correction for BBB-disrupted tumors",
      "Oncology map computation (nCBV, PSR, K2, rPH)",
      "Automated FLAIR-based tumor segmentation",
      "Tumor ROI statistics and hot-spot analysis",
      "ADC computation from DWI or pre-computed input",
      "Structured clinical report with full quantitative analysis",
    ],
    mapsTitle: "Oncology-Specific Maps",
    maps: [
      "nCBV — leakage-corrected, NAWM-normalized",
      "PSR — Percentage Signal Recovery",
      "K2 — leakage coefficient (BBB permeability)",
      "rPH — Relative Peak Height",
      "ADC — Apparent Diffusion Coefficient",
      "NAWM-normalized reference maps",
    ],
    // The software reports measured values. It does not map those values to a
    // histological entity, does not distinguish recurrence from treatment effect,
    // and does not select biopsy targets — those inferences are the clinician's.
    // Published reference ranges are shown on the page as cited literature
    // context, visibly separated from device output.
    metricsTitle: "Measurements",
    metrics: [
      { label: "nCBV", value: "Leakage-corrected, normalised to normal-appearing white matter" },
      { label: "PSR", value: "Percentage signal recovery (%)" },
      { label: "K2", value: "Leakage coefficient" },
      { label: "rPH", value: "Relative peak height" },
      { label: "ADC", value: "Apparent diffusion coefficient, where DWI is supplied" },
      { label: "Region of Maximum nCBV", value: "Location and value of the maximum within the segmentation" },
    ],
    useCases: [
      { title: "Pre-operative Imaging", description: "nCBV P90, PSR, K2 and ADC measurements for clinician review" },
      { title: "Leakage-Corrected Quantification", description: "Correction applied and its effect made inspectable" },
      { title: "NAWM Normalisation", description: "Consistent reference-region methodology across timepoints" },
      { title: "Longitudinal Measurement", description: "Serial nCBV trend and segmented volume across scans" },
      { title: "Regional Statistics", description: "Mean, median and P90 within the segmented region" },
      { title: "Reporting Consistency", description: "Same derivation applied across readers and sessions" },
    ],
    reportFeatures: [
      "nCBV, PSR, K2 overlay maps",
      "Regional statistics (mean, median, P90)",
      "Segmented volume (FLAIR-hyperintense region)",
      "Location and value of maximum nCBV",
      "Leakage correction impact (before/after)",
      "MR Neuro Stats Table (Siemens-style)",
      "Measurement summary",
    ],
    reportPage1: "Measurements & Regional Statistics",
    reportPage2: "Hot-Spot & Neuro Stats",
    sampleImages: [
      {
        src: "/tumor-k2-map.png",
        caption: "K2 — BBB Permeability Map with T1 leakage (red) vs T2* dominant (blue) overlay",
      },
      {
        src: "/tumor-leakage-correction.png",
        caption: "Leakage Correction Impact on nCBV — before (top) vs after correction (bottom)",
      },
      {
        src: "/tumor-psr-overlay.png",
        caption: "PSR — Percentage Signal Recovery map, reported as a measured percentage",
      },
      {
        src: "/tumor-rcbf-thresholds.png",
        caption: "Quantitative CBF map with rCBF thresholds — volumetric breakdown",
      },
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  perfusionProducts.find((p) => p.slug === slug);
