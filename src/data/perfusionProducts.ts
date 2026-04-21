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
      "Automated core/penumbra volumetrics, ASPECTS scoring, and collateral assessment from CT Perfusion — delivering clinical decision support within minutes of scan completion.",
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
      { label: "Core Volume (mL)", value: "rCBF < 30% — irreversible damage" },
      { label: "Penumbra Volume (mL)", value: "Tmax > 6s — salvageable tissue at risk" },
      { label: "Mismatch Ratio", value: "Penumbra/Core — >1.8 significant" },
      { label: "CT-ASPECTS", value: "10-point scale, 10 MCA regions" },
      { label: "HIR & Collateral Grade", value: "Tmax>10s/Tmax>6s — Good/Intermediate/Poor" },
      { label: "CBV Index", value: "rCBV preserved in Tmax>6s — tissue viability" },
    ],
    useCases: [
      { title: "Acute Stroke Triage", description: "Core, Penumbra, Mismatch, ASPECTS (4.5-24h)" },
      { title: "Thrombectomy Decision", description: "Mismatch >1.8, Core <70mL, ASPECTS >5" },
      { title: "Collateral Assessment", description: "HIR grading: Good / Intermediate / Poor" },
      { title: "Thrombolysis Eligibility", description: "Extended window (4.5-9h) IV tPA eligibility" },
      { title: "Stroke Mimics", description: "Rule out — normal perfusion, no core/penumbra" },
      { title: "Serial Monitoring", description: "Track core/penumbra evolution across scans" },
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
      "DWI-ASPECTS, FLAIR Mismatch for onset estimation, and perfusion-diffusion mismatch analysis from DSC MRI — the complete MRI stroke decision support workflow.",
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
      "Automated DWI infarct segmentation and volume",
      "DWI-ASPECTS scoring across 10 MCA territory regions",
      "FLAIR Mismatch analysis for stroke onset estimation",
      "Perfusion-diffusion mismatch assessment",
    ],
    mapsTitle: "Analysis Outputs",
    maps: [
      "CBF, CBV, MTT, Tmax maps",
      "DWI infarct segmentation",
      "DWI-ASPECTS scoring",
      "FLAIR SIR < 1.15 → Hyperacute (<4.5h)",
      "FLAIR SIR 1.15-1.20 → Borderline (4.5-6h)",
      "FLAIR SIR ≥ 1.20 → Established (>6h)",
    ],
    metricsTitle: "Clinical Metrics",
    metrics: [
      { label: "DWI Infarct Volume", value: "Acute infarct quantification" },
      { label: "DWI-ASPECTS", value: "10-region MCA territory scoring" },
      { label: "FLAIR SIR", value: "Signal Intensity Ratio for onset estimation" },
      { label: "Mismatch Ratio", value: "Perfusion-diffusion mismatch" },
      { label: "Hypoperfusion Index", value: "Tmax>10s / Tmax>6s ratio" },
      { label: "CBV Index", value: "Tissue viability marker" },
    ],
    useCases: [
      { title: "Wake-up Stroke", description: "FLAIR SIR determines onset (<4.5h / borderline / established)" },
      { title: "Extended Window (6-24h)", description: "DEFUSE-3/DAWN eligibility via DWI-ASPECTS" },
      { title: "Posterior Circulation", description: "Vertebrobasilar DSC perfusion assessment" },
      { title: "TIA Evaluation", description: "Residual CBF asymmetry, subtle Tmax delays" },
      { title: "Post-Thrombectomy", description: "Before/after reperfusion success evaluation" },
      { title: "Acute Stroke Workup", description: "Complete stroke mismatch analysis" },
    ],
    reportFeatures: [
      "DWI infarct volume",
      "DWI-ASPECTS (10 regions)",
      "FLAIR Mismatch (SIR)",
      "Onset estimation",
      "Core / Penumbra gauges",
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
      "Absolute CBF quantification from Arterial Spin Labeling — gadolinium-free perfusion for pediatric stroke, Moyamoya, epilepsy, dementia, and seven clinical indications.",
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
    metricsTitle: "CBF Analysis — 7 Clinical Indications",
    metrics: [
      { label: "Tumor / Neuro-oncology", value: "Tumor vs normal CBF ratio" },
      { label: "Moyamoya / Vascular", value: "Territorial CBF, hemispheric asymmetry" },
      { label: "Epilepsy / Seizure Focus", value: "Focal CBF abnormalities" },
      { label: "Dementia Workup", value: "Regional CBF patterns" },
      { label: "TIA / Carotid Stenosis", value: "Pre/post intervention CBF" },
      { label: "Post-Intervention", value: "Reperfusion monitoring" },
      { label: "General Assessment", value: "Comprehensive CBF analysis" },
    ],
    useCases: [
      { title: "Pediatric Stroke", description: "Non-contrast (gadolinium contraindicated)" },
      { title: "Moyamoya Disease", description: "Longitudinal cerebrovascular reserve" },
      { title: "Epilepsy Pre-surgical", description: "Ictal/interictal seizure focus localization" },
      { title: "Dementia Workup", description: "Regional CBF: Alzheimer's vs vascular vs FTD" },
      { title: "Renal Impairment", description: "Gadolinium contraindicated patients" },
      { title: "Carotid Stenosis", description: "Pre/post CEA or stenting CBF assessment" },
    ],
    reportFeatures: [
      "Absolute CBF quantification",
      "CBF Asymmetry Index",
      "Vascular territory maps",
      "Clinical indication-specific analysis",
      "Stroke mode: DWI-ASPECTS + CBF mismatch",
      "Hemispheric asymmetry analysis",
      "Regional CBF summary",
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
      "nCBV, PSR, K2 leakage-corrected perfusion maps with tumor differential diagnosis, hot-spot biopsy guidance, and recurrence vs pseudoprogression assessment.",
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
    metricsTitle: "Differential Diagnosis Support",
    metrics: [
      { label: "High-grade glioma (GBM)", value: "nCBV >3.0, PSR 50-85%" },
      { label: "Low-grade glioma", value: "nCBV <1.75, PSR >85%" },
      { label: "Lymphoma (PCNSL)", value: "Moderate nCBV, PSR >100%" },
      { label: "Metastasis", value: "High nCBV, PSR <50%" },
      { label: "Meningioma", value: "Very high nCBV (>5.0), PSR <40%" },
      { label: "Recurrence vs Pseudo", value: "nCBV max ≥1.8, PSR <60%, rPH >1.7" },
    ],
    useCases: [
      { title: "Pre-operative Grading", description: "nCBV P90, PSR, Differential Dx, ADC" },
      { title: "GBM vs Metastasis", description: "nCBV + PSR pattern, ADC differentiation" },
      { title: "Lymphoma vs GBM", description: "PSR overshoot (>100%) — treatment approach" },
      { title: "Recurrence vs Pseudo", description: "nCBV max, PSR, rPH thresholds" },
      { title: "Biopsy Target Planning", description: "Hot-spot analysis — most aggressive region" },
      { title: "Treatment Response", description: "Serial nCBV trend, Tumor Burden %, ADC" },
    ],
    reportFeatures: [
      "nCBV, PSR, K2 overlay maps",
      "Differential Diagnosis",
      "Tumor Burden %",
      "Hot-Spot biopsy guidance",
      "Leakage correction impact",
      "MR Neuro Stats Table (Siemens-style)",
      "Clinical interpretation",
    ],
    reportPage1: "Metrics & Differential Dx",
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
        caption: "PSR — Percentage Signal Recovery: <50% Metastasis / 70-100% Glioma / >100% Lymphoma",
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
