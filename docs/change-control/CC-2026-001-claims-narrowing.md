# CC-2026-001 — Public claims narrowing and correction of a published performance figure

| Field | Value |
|---|---|
| **Change ID** | CC-2026-001 |
| **Date raised** | 2026-08-09 |
| **Raised by** | Engineering (website crawlability work, W1-01/W1-03/W1-04) |
| **Type** | Labelling / public claims. Documentation change. |
| **Products affected** | CT Stroke Insightz, MR Stroke Insightz, MRI ASL Insightz, MRI Tumor Insightz, TB Insightz |
| **Status** | **Draft — awaiting regulatory approval. Not deployed.** |
| **Approver** | `[TBD — Regulatory Affairs]` |
| **Approval date** | `[TBD]` |

---

## 1. Trigger

Two independent findings during the site prerendering work.

**1.1 — Residual-claim audit.** Prerendering converts the site from client-rendered to static HTML. Content that was previously invisible to non-rendering consumers (LLM crawlers, social unfurlers, secondary search crawlers, archive.org) becomes retrievable and indexable for the first time. An audit was therefore run over all published claims before that change could ship.

**1.2 — Citation contradiction.** A dataset citation was added beside a 94% specificity figure on the TB Insightz page. The cited study reports **86.59%**. The contradiction was discoverable only because the citation was placed next to the number.

**Process observation.** Finding 1.2 depended on coincidence: a citation happened to be added next to a wrong number. A build-time control has been introduced (§6) so the defect class cannot recur silently.

---

## 2. Performance figure correction

### 2.1 The correction

| | Before | After |
|---|---|---|
| TB Insightz — specificity | **94%** | **86.59%** |
| TB Insightz — headline figure | "Up to 99% model confidence" | **93.53%** overall accuracy |

### 2.2 Source, verified verbatim

Text extracted directly from `public/bjmhs-tb-insightz-validation.pdf`:

> "CXR Insightz achieved an overall accuracy of **93.53%**, sensitivity of **100%**, specificity of **86.59%**, and an F1-score of **94.12%** on the validation dataset. The area under the ROC curve (AUC) was **0.9329**"

and

> "The specificity [to] flag normal cases was **86.59%**."

Study: *Validation of an AI-Based Tool for Detecting Radiographic Findings Suggestive of Tuberculosis: A Pilot Study.* BJMHS Vol. 8 Issue 2, February 2026, Paper ID BJMHS450536. Retrospective, single-site, n=170 (88 TB-positive, 82 normal).

### 2.3 Arithmetic consistency check

The three reported figures are internally consistent against a single confusion matrix:

| Step | Derivation |
|---|---|
| Sensitivity 100% | 88 TP, 0 FN (of 88 TB-positive) |
| Specificity 86.59% | 82 × 0.8659 = **71.0 TN**, therefore 11 FP |
| Accuracy | (88 + 71) / 170 = **93.53%** ✓ exact |

Three figures derived from two different denominators reconcile exactly. This is not a pattern a transcription error produces.

The former 94% figure is **arithmetically incompatible** with the same matrix: it would require 71.0 TN and 77.2 TN simultaneously.

### 2.4 Probable origin

The study reports an **F1-score of 94.12%**, adjacent to specificity in the results sentence. The published "94%" is most likely the F1-score relabelled as specificity. `[VERIFY — confirm with whoever authored the original marketing copy]`

This matters for scoping: the error is a **mislabelling of an adjacent metric**, so any surface that reproduced the results table or quoted the F1-score is at elevated risk of carrying the same defect.

### 2.5 Impact on the manuscript — **no erratum required**

All seven PDFs in `public/` were text-extracted and searched for the string `94%`:

| Document | `94%` present |
|---|---|
| bjmhs-tb-insightz-validation.pdf | **Not found** |
| bjmhs-stroke-insightz-global.pdf | Not found |
| ijsr-stroke-insightz-mri-2026.pdf | Not found |
| genz-white-paper.pdf | Not found |
| cxr-report.pdf | Not found |
| perfusion_report.pdf | Not found |
| no-perfusion_report.pdf | Not found |

**The error did not originate in the manuscript.** It was introduced in downstream marketing/web copy. No correction to BJMHS is required on this basis.

---

## 3. Claims removed or narrowed

All changes **narrow** scope. No claim was broadened or added.

| # | Product | Before | After | Rationale |
|---|---|---|---|---|
| 1 | Tumor | "Differential Analysis": nCBV/PSR mapped to GBM, low-grade glioma, PCNSL, metastasis, meningioma | Reports nCBV, PSR, K2, rPH, ADC, regional statistics | Mapping a measurement to a named histological entity is differential diagnosis |
| 2 | Tumor | "Recurrence vs Pseudo — nCBV max ≥1.8, PSR <60%, rPH >1.7" | Removed from device outputs | Distinguishing recurrence from treatment effect is a diagnostic conclusion |
| 3 | Tumor | "Hot-Spot biopsy guidance", "Biopsy Target Planning" | "Region of maximum nCBV reported (location and value)" | Designating a biopsy target is procedural guidance for an invasive act |
| 4 | Tumor | Image caption: "PSR: <50% Metastasis / 70-100% Glioma / >100% Lymphoma" | "PSR map, reported as a measured percentage" | Same as #1, on an image caption |
| 5 | ASL | "Epilepsy Pre-surgical — Ictal/interictal seizure focus localization" | "Regional CBF and asymmetry measurements for clinician review" | Localising a seizure focus is a diagnostic act |
| 6 | ASL | "Dementia Workup — Regional CBF: Alzheimer's vs vascular vs FTD" | "Cognitive impairment imaging — regional CBF by vascular territory" | Differentiating dementia subtypes is a diagnostic act |
| 7 | ASL | "Pediatric & renal-impaired **safe**" | "No contrast agent administered" | Safety claim not supported by validation data. **The factual contrast-free statement is retained** — see §4 |
| 8 | ASL | "7 clinical indications" | "CBF measurements by clinical context" | "Indications" implies diagnostic indications for use |
| 9 | MR Stroke | "FLAIR SIR < 1.15 → Hyperacute (<4.5h)" and bands; "Onset estimation" | "FLAIR SIR reported as a measured ratio" | Inferring symptom-onset window from an imaging measurement is a diagnostic inference informing thrombolysis |
| 10 | CT Stroke | "Thrombectomy Decision — Mismatch >1.8, Core <70mL, ASPECTS >5" | "Threshold-based volumetrics for clinician review" | Therapy-selection determination |
| 11 | CT Stroke | "Thrombolysis Eligibility — extended window IV tPA eligibility" | "Quantified perfusion measurements for review by the treating clinician" | Eligibility determination |
| 12 | CT Stroke | "irreversible damage", "salvageable tissue at risk" | "Tissue volume below/above the configured threshold" | Tissue-fate interpretation |
| 13 | TB | Per-patient "RT-PCR test recommendation" in report | Standing, non-patient-specific note that diagnosis requires microbiological confirmation | Recommending a diagnostic test directs patient management |
| 14 | TB | "Up to 99% model confidence" (site-wide) | Removed | A classifier's maximum output describes its output range, not its accuracy |
| 15 | Company | `/about`: "500+ Healthcare Institutions", "1M+ Scans Analyzed", "95% Accuracy Rate", "24/7 Support" | 5 products, 3 clinical partners, 3 peer-reviewed papers, 1 patent filed | No source for any. The 95% was a bare performance claim. The first two contradicted the homepage's "3 Clinical Partners" |

---

## 4. Claims deliberately **retained** (over-narrowing check)

A narrowing pass carries the risk of deleting a defensible factual statement along with the indefensible inference drawn from it. Each of the following was verified present in the built output after the change.

| Retained | Why it is not a claim |
|---|---|
| "without administration of a gadolinium-based contrast agent" | Description of how the software operates. Verifiable, no accuracy assertion. |
| "contrast-free perfusion measurement, repeatable as often as clinically warranted" | Description of operation, not of performance. |
| "Absolute CBF quantification in mL/100g/min" | Description of the output and its units. |
| "Core mask (rCBF<30%) & Penumbra (Tmax>6s)" | Description of a computed output, not a decision. |
| "Core/Penumbra volumetrics" (pipeline step) | Names a processing step. |
| CBF / CBV / MTT / Tmax maps with ranges | Output specification. |
| DWI-ASPECTS, CT-ASPECTS regional summaries | Output specification. |

**Verification:** the gadolinium-free differentiator is intact in `dist/products/asl-insightz/index.html` in body copy, product description and JSON-LD.

---

## 5. Impact assessment

### 5.1 Does this change Intended Use?

**No.** Assessment recorded rather than assumed:

- Intended Use has not previously been formally documented or published. There is no approved Intended Use statement for this change to alter.
- The changes bring published copy **into** alignment with the decision-support framing already used in the site's own disclaimers and in the JSON-LD structured data.
- Every change removes scope. No new capability, population, modality or context of use is introduced.
- No software behaviour changed. **This is a labelling change only.** `[VERIFY — see §5.2]`

### 5.2 Open item: software output vs. published labelling

The changes above are to **website copy**. The generated PDF reports and application UI were **not** modified.

If the software still prints differential diagnosis, biopsy targeting or onset-window labels in its reports, published labelling and device behaviour now disagree — which is a worse position than either alone, because it documents that the correct framing was known.

**This must be resolved before deployment.** Tracked as `08-execution-plan.md` W2-12.

### 5.3 Risk of the change itself

| Risk | Assessment |
|---|---|
| Under-claiming vs competitors | Accepted. Commercial cost only. |
| User confusion from changed terminology | Low. Measurement terms are standard in the field. |
| Deleting a defensible differentiator | Mitigated and verified — §4 |
| Published figure now lower (94% → 86.59%) | Correct figure. Reporting a wrong one is not an option. |

---

## 6. Preventive control introduced

A build-time check now makes the defect class structurally impossible rather than dependent on someone noticing.

- **`src/data/evidence.ts`** — every published performance figure registered with metric, study, design, n, comparator, publication, source and mandatory caveat. Nine figures registered.
- **`scripts/check-evidence.mjs`** — runs in `postbuild`. Scans every prerendered page and **fails the build** on any percentage-like figure not in the register.

Surfaces scanned — chosen because these are where a figure travels *without* its caveat:

| Surface | Rationale |
|---|---|
| JSON-LD | Reproduced out of context by search engines and LLMs |
| meta / OG / Twitter | Rendered as search snippets and social cards |
| `alt` / `title` attributes | Read by screen readers, indexed |
| Visible body text | The obvious case |

**Negative tests performed** (a check that never fails is worthless):

| Test | Result |
|---|---|
| Reintroduce `94%` on the TB page | Build **failed**, exit 1, figure and route identified |
| Inject `97%` into a meta description only (absent from body) | Build **failed**, exit 1, flagged as `[meta]` |

---

## 7. Non-web surfaces — audit status

The website is one surface. A wrong specificity figure rarely lives in one place.

| Surface | Status | Disposition |
|---|---|---|
| Website (all 19 prerendered pages) | **Complete** | Corrected; build-time control in place |
| Repo PDFs (7 files, incl. BJMHS submission) | **Complete** | `94%` not present in any. No erratum required |
| OG / social images | **Complete** | Only image referenced is `genz-ai-logo.png` — a logo, no figures baked in |
| `sitemap.xml` | **Complete** | Contains no descriptions or figures |
| Runtime-fetched content | **Complete** | No `useQuery`/`fetch`/`axios` anywhere. All content is static, so `dist/` is a complete surface |
| **Imaging Update 2024 (Goa) poster / booth material** | `[TBD]` | Physically distributed to clinicians |
| **Investor / pitch decks** | `[TBD]` | Materially misstated performance if present |
| **LinkedIn / X posts** | `[TBD]` | Live and indexed |
| **PDF brochures / one-pagers not in repo** | `[TBD]` | Not covered by HTML or repo sweeps |
| **Material held at the 3 clinical partner sites** | `[TBD]` | May have been redistributed |
| **Email templates / EmailJS content** | `[TBD]` | Outbound, not in repo |

**Owner for outstanding rows:** `[TBD]` · **Target date:** `[TBD]`

---

## 8. Verification performed

| Check | Result |
|---|---|
| Residual-claim sweep across 19 prerendered pages | 0 hits for: RT-PCR, Thrombectomy decision, Differential, biopsy, Up to 99%, 500+, 1M+, Accuracy Rate, Hyperacute, Alzheimer, seizure focus |
| Retained-claim verification (§4) | Gadolinium-free statement and core/penumbra outputs present in built output |
| Evidence register check | Passes; 9 figures registered |
| Negative tests | Both fail the build as intended |
| Hydration (8 routes) | 0 console errors |
| Titles / canonicals | 19/19 unique, 0 missing |
| Lighthouse SEO | 100 |

---

## 9. Approval

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by | Engineering | — | 2026-08-09 |
| Reviewed by — Regulatory Affairs | `[TBD]` | | |
| Reviewed by — Clinical | `[TBD]` | | |
| Approved for deployment | `[TBD]` | | |

**Reviewer note.** Please review the **delta** in §3, not only the end state. The reason for narrowing is that several prior claims were outside decision-support framing and one published figure was wrong. Approving the endpoint without seeing what changed would miss the point of this record.

**This change is not deployed.** Deployment is gated on §9 approval and on §5.2 (software output alignment).
