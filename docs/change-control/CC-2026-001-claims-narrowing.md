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

### Amendment log

| Rev | Date | Author | Change |
|---|---|---|---|
| 0 | 2026-08-09 | Engineering | Original record. |
| **1** | **2026-08-09** | **Engineering** | Added §5.2 non-repo surface register (original §5.2 content preserved verbatim, renumbered to §5.4). Added §9 metric-label audit, §10 counsel questions, §11 deploy gate, §12 draft customer notification. Original §9 Approval renumbered to §13. §7 marked superseded by §5.2. **No prior text was deleted or reworded.** |

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
- No software behaviour changed. **This is a labelling change only.** `[VERIFY — see §5.4]`

### 5.2 Non-repo surface register *(added Rev 1, 2026-08-09)*

**Preamble — scope of risk is wider than "surfaces quoting specificity."**

The published 94% was almost certainly the study's **F1-score of 94.12%** relabelled as specificity (§2.4). The two figures sit in the same sentence of the paper's results. Any surface that reproduced the **results table**, quoted **F1-score**, or was derived from the same source deck is therefore at elevated risk — *not only* surfaces that use the word "specificity."

Search each surface for **all** of: `94`, `94%`, `94.12`, `specificity`, `F1`, `F1-score`, and any reproduction of the metrics block. A surface that quotes F1 correctly is still evidence of the copy lineage and should be recorded as checked.

**No row may be marked Closed without a named verifier and a date.** "Not started" is an acceptable status; a blank owner is not.

| # | Surface | Location / owner | Status | Checked by | Date | Disposition |
|---|---|---|---|---|---|---|
| S-01 | Imaging Update 2024 (Goa) poster and booth deck | `[TBD — owner]` | **Not started** | `[TBD]` | `[TBD]` | Physically distributed to clinicians; cannot be recalled. If 94%/F1 present, determine whether attendees are identifiable |
| S-02 | Investor / pitch decks — **all versions in circulation** | `[TBD — owner]` | **Not started** | `[TBD]` | `[TBD]` | Materially misstated performance if present. Enumerate versions sent, not just the current master |
| S-03 | LinkedIn posts — company page | `[TBD — owner]` | **Not started** | `[TBD]` | `[TBD]` | Live and indexed. Editable/deletable; record what was changed and when |
| S-04 | X posts | `[TBD — owner]` | **Not started** | `[TBD]` | `[TBD]` | `[TBD — confirm an X account exists; not referenced in site JSON-LD, which lists only LinkedIn and YouTube]` |
| S-05 | PDF brochures and one-pagers (not in repo) | `[TBD — owner]` | **Not started** | `[TBD]` | `[TBD]` | Not covered by the repo sweep in §7 |
| S-06 | Material distributed to the 3 clinical partner sites | `[TBD — owner]` | **Not started** | `[TBD]` | `[TBD]` | Deenanath Mangeshkar, DY Patil, Noble. May have been redistributed internally. See also §10/§12 |
| S-07 | Email templates and outbound sequences | EmailJS (cloud); `[TBD — owner]` | **Not started** | `[TBD]` | `[TBD]` | Template bodies are **not in the repo** — only template IDs. Must be read in the EmailJS console |
| S-08 | Conference abstracts and submitted materials | `[TBD — owner]` | **Not started** | `[TBD]` | `[TBD]` | If a submitted abstract carries the wrong figure, remedy may be a correction to the organiser, not a copy edit |
| S-09 | Press releases and media kit | `[TBD — owner]` | **Not started** | `[TBD]` | `[TBD]` | Syndicated copies may persist after source correction |
| S-10 | Third-party listings — Internshala, TheOrg, DPU FIIIE / incubator pages | `[TBD — owner]` | **Not started** | `[TBD]` | `[TBD]` | Not under our control; correction requires a request to each operator |
| S-11 | Website (19 prerendered pages) | Engineering | **Closed** | Engineering (automated sweep + build-time guard) | 2026-08-09 | Corrected. `94%` returns 0 hits; `scripts/check-evidence.mjs` fails the build on recurrence |
| S-12 | Repo PDFs (7 files incl. BJMHS submission) | Engineering | **Closed** | Engineering (text extraction of all 7) | 2026-08-09 | `94%` **not present in any**. Manuscript unaffected — no erratum required (§2.5) |
| S-13 | Client-distributed code (Router.zip, DICOM Anonymiser v6) | Engineering | **Closed** | Engineering (extracted and grepped) | 2026-08-09 | No flagged vocabulary; writes no interpretive DICOM text |
| S-14 | Sample report PDFs served at public URLs | Engineering / `[TBD — product owner]` | **Open** | Engineering | 2026-08-09 | **Contain flagged language** (§12). Not linked from any page but publicly fetchable and crawlable. Recommend unpublishing pending regeneration |

**Status vocabulary:** Not started · In progress · Open (checked, defect found, unresolved) · Closed (checked, no defect or defect remedied).

### 5.3 Already-issued reports at partner sites *(added Rev 1, 2026-08-09)*

**Determinable from this repository: no.** There is no PACS access, no deployment log, no dispatch record and no report archive in this repo. **Count and date range cannot be established here** and are deliberately left unstated rather than estimated.

**What is established.** Three sample reports published by GenzAI contain flagged language — verbatim, after decoding the custom font encoding:

| Sample file | Flagged content (verbatim) |
|---|---|
| `public/perfusion_report.pdf` | `Interpretation: Acute Infarct Likely < 4.5 hrs` · `Infarct Confirmation Yes` · `Hemorrhage Confirmation No` · `Acute Pathologies` · `Stroke Severity Score: 6` |
| `public/no-perfusion_report.pdf` | `Interpretation: Subacute Infarct Likely < 4.5 hrs` — **also internally contradictory** (subacute vs <4.5 h) |
| `public/cxr-report.pdf` | `Required*: Suggest the required RT-PCR test` · `Bones/Lungs Pathologies Detection` · binary `fracture Yes` / `consolidation Yes` / `effusion Yes` |

**Working assumption for planning, to be confirmed by the generator owner:** these are generator output rather than hand-made mockups. If so, **every report issued at every site contains this wording**, and the affected population is "all reports issued to date" rather than a subset. This assumption should be confirmed or refuted before §10 is answered, because it changes the scale of any notification.

`[TBD — needs internal input]` Report count and date range, from deployment records: `[TBD]`. Owner: `[TBD]`.

### 5.4 Open item: software output vs. published labelling *(was §5.2 in Rev 0 — content unchanged)*

The changes above are to **website copy**. The generated PDF reports and application UI were **not** modified.

If the software still prints differential diagnosis, biopsy targeting or onset-window labels in its reports, published labelling and device behaviour now disagree — which is a worse position than either alone, because it documents that the correct framing was known.

**This must be resolved before deployment.** Tracked as `08-execution-plan.md` W2-12.

**Rev 1 addendum (2026-08-09):** confirmed non-hypothetical. See §5.3 — the published sample reports do contain exactly this wording. See §11 for why this does **not** gate the website deploy.

### 5.5 Risk of the change itself

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

## 7. Non-web surfaces — audit status *(Rev 0 — superseded by §5.2, retained for history)*

> **Rev 1 note (2026-08-09):** this table is superseded by the fuller register in **§5.2**, which adds owners, verifier, date and disposition columns and the F1-lineage preamble. Retained unaltered so the record shows what was known at Rev 0.

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

## 9. Metric-label audit *(added Rev 1, 2026-08-09)*

The original defect was a **correct number under a wrong label**, which a value-only check cannot catch. This audit compares every performance figure now rendered on the site against the labelling used by the source paper, and checks that each figure's caveat is **DOM-adjacent** — in the same rendered block — rather than sectional.

**Method.** Automated: for each occurrence in the prerendered HTML, the enclosing elements are walked outward; the metric word is read from the text *preceding* the figure (English construction is "accuracy of 93.53%"); the caveat is located by the number of DOM levels between figure and caveat tokens. Every non-trivial result was then confirmed by reading the rendered block. Tool: `scratchpad/metric-audit2.mjs`.

**Source of truth**, quoted verbatim from `public/bjmhs-tb-insightz-validation.pdf`:

> "CXR Insightz achieved an overall **accuracy of 93.53%**, **sensitivity of 100%**, **specificity of 86.59%**, and an **F1-score of 94.12%** on the validation dataset. The area under the ROC curve (**AUC**) was **0.9329**"

| Figure | Label used on site | Label in source | Adjacent caveat text (same block) | Result |
|---|---|---|---|---|
| **93.53%** | "Overall Accuracy (research dataset)" — `/products/tb-insightz`; "93.53% accuracy (n=170)" — `/`, `/products` | accuracy | "Source: BJMHS, Feb 2026 — TB Insightz Pilot Validation Study (retrospective, n=170)" | **PASS** |
| **93.53%** | "TB Research Accuracy" — `/` research card | accuracy | Same card: "Retrospective Pilot Study on 170 Chest X-Rays… Research dataset only… Not a clinical performance claim. Source: BJMHS, Feb 2026 (retrospective, n=170)" | **PASS** — flagged `SECTIONAL(L3)` by the tool; manually confirmed same card, depth is shadcn `Card > CardHeader > div` nesting |
| **86.59%** | "Overall Specificity (research dataset)" — `/products/tb-insightz` | specificity | "Source: BJMHS, Feb 2026 — TB Insightz Pilot Validation Study (retrospective, n=170)" | **PASS** — this is the corrected figure |
| **100%** | "100% sensitivity" — `/` research card; "sensitivity of 100%" — `/publications` abstract | sensitivity | Same block: "Research dataset only… Not a clinical performance claim" / abstract states n=170, 88 TB-positive, 82 normal | **PASS** |
| **94.12%** | "F1-score of 94.12%" — `/publications` abstract only | F1-score | Same paragraph: "retrospective dataset of 170 chest X-rays (88 TB-positive, 82 normal)" | **PASS** — present and **correctly labelled**; appears nowhere else on the site |
| **~93%** | "pooled sensitivity and specificity of ~93%" — `/publications` abstract | pooled sensitivity and specificity (systematic review) | Same paragraph: "A PRISMA-2020 systematic synthesis… The review confirms that MRI-based AI achieves…" | **PASS on adjacency** — see residual risk below |
| **>60%** | ">60% reduction in MRI post-processing workload" — `/publications` abstract | reduction in post-processing workload | Same paragraph: "embedded real-world case illustration… deployed at a tertiary Indian centre" | **PASS** |
| **0.87** | "Cohen's Kappa of 0.87" — `/` research card | 0.8698 | Same card, with study citation | **PASS** — correct rounding of 0.8698; registry holds the unrounded value |

**Non-performance uses of "100%" correctly excluded:** `/contact` (a CSS width value) and `/privacy-policy` ("No system can be guaranteed 100% secure"). Both are already covered by the `NON_PERFORMANCE` allowlist in `scripts/check-evidence.mjs`.

### 9.1 Residual risk — the ~93% pooled figure

Adjacency passes: the caveat is in the same paragraph. **Sentence construction is the residual risk**, and it is the one the audit was right to single out. The rendered sentence is:

> "The review confirms that MRI-based AI achieves pooled sensitivity and specificity of **~93%** for acute ischaemic lesion detection, **and positions Stroke Insightz** as part of a new generation of clinical decision support tools…"

A single sentence contains both a pooled literature figure and the product name. A reader — or an extractive summariser — can reasonably come away with "Stroke Insightz achieves ~93%". That is **not** what the figure means, and GenzAI has no measurement supporting it.

**Proposed remedy (not applied — outside this record's approved scope):** split the sentence so the pooled figure and the product name do not share one. Suggested: *"The review reports pooled sensitivity and specificity of ~93% across MRI stroke AI platforms in the published literature. Stroke Insightz is discussed as one of a new generation of clinical decision-support tools; this pooled figure is not a measurement of Stroke Insightz."*

**Owner:** `[TBD]` · **Decision required from:** Regulatory Affairs.

### 9.2 Control coverage gap

`scripts/check-evidence.mjs` currently enforces **value registration** but not **label correctness**. It would not have caught the original defect, because `94%` under "specificity" would pass once `94%` were registered under any metric.

The metric-label adjacency rule specified in the W2-12 brief (Phase 3) is **not yet implemented**. Until it is, this audit is a point-in-time manual control and must be repeated on any change touching a performance figure.

**Owner:** `[TBD]` · **Target:** `[TBD]`.

---

## 10. Open questions for counsel *(added Rev 1, 2026-08-09)*

| # | Question | Why it matters | Answer |
|---|---|---|---|
| Q-1 | **Does the report-wording issue rise to a Field Safety Notice, or is customer notification sufficient?** | Reports issued to partner sites contain `Interpretation: Acute Infarct Likely < 4.5 hrs` and `Suggest the required RT-PCR test` — diagnostic conclusions and a per-patient test recommendation, beyond decision-support framing. **No measurement value is affected**; the issue is interpretive wording. GenzAI holds no clearance in any jurisdiction, so MDR Art. 87 vigilance does not yet formally apply — but partner-site obligations and contractual duties may. | `[TBD]` |
| Q-2 | Does the corrected 94% → 86.59% figure require proactive correction to any recipient of the incorrect figure, or is prospective correction sufficient? | The figure overstated specificity by ~7.4 points. Recipients may include investors (S-02) and clinical partners (S-06). | `[TBD]` |
| Q-3 | If the sample reports were generator output (§5.3 working assumption), does "all reports issued to date" become the affected population? | Changes notification scale from an advisory to a defined recall-adjacent population. | `[TBD]` |
| Q-4 | Is deploying the corrected website **before** the device wording is corrected acceptable? | Reasoning and recommendation in §11. Counsel should confirm or reject that reasoning explicitly. | `[TBD]` |
| Q-5 | Do any partner sites treat the website as **labelling of record** during onboarding or evaluation? | If so, a web/device mismatch is a live labelling inconsistency at those sites and they must be aligned first (§11). | `[TBD]` |

---

## 11. Deploy gate *(added Rev 1, 2026-08-09)*

Deployment of the corrected website is gated on **all three** of the following:

- [ ] **Regulatory sign-off on the claims-narrowing delta** (§3), reviewed as a delta and not only as an end state — see the reviewer note in §13. Owner: `[TBD — Regulatory Affairs]`
- [ ] **W2-12 has a named owner and a target date recorded** — device output alignment (§5.4). The work need not be *complete* to deploy the website; it must be **owned and dated**. Owner: `[TBD]` · Target: `[TBD]`
- [ ] **No partner site is mid-onboarding or in active evaluation where the website functions as labelling of record.** If any is, align that site first. Confirmed by: `[TBD]` · Date: `[TBD]`

### 11.1 Reasoning — why the web fix is not held for the device fix

This is the judgement most likely to be challenged, so the reasoning is recorded rather than assumed.

The post-fix state is **web-corrected + device-uncorrected**. That is an **open, dated, owned CAPA** — not a new defect.

- The harm is the **device over-claiming**. That harm exists identically whether or not the website is corrected. Correcting the website neither creates nor worsens it.
- Holding the web fix would mean **deliberately preserving a known-incorrect public claim** — an overstated specificity figure and diagnostic framing already identified as outside intended use. Knowingly continuing to publish a figure known to be wrong is a worse position than a documented mismatch under remediation.
- The mismatch is **documented, owned and dated** in this record. An auditor's objection to a mismatch is answered by a CAPA. There is no answer to "you knew the figure was wrong and left it up."

**Conclusion: deploy the website once §11's three boxes are ticked. Do not wait for W2-12 to complete.**

Counsel is asked to confirm or reject this reasoning explicitly at Q-4 rather than let it stand by default.

---

## 12. Draft customer notification — **NOT SENT** *(added Rev 1, 2026-08-09)*

> **Status: DRAFT. Not sent, not approved, not cleared for distribution.** Recipients, channel and timing are gated on Q-1 and Q-3. Do not issue before regulatory and legal sign-off.

**Subject:** GenzAI Labs — planned revision to report wording

> Dear `[site / contact]`,
>
> We are writing to let you know about a planned revision to the wording used in reports generated by GenzAI Labs software.
>
> **What is changing.** We are revising report wording so that it consistently describes what the software *measures*, rather than offering an interpretation of what those measurements mean clinically. For example, fields that previously presented an interpretive summary or suggested a follow-up test will be replaced by the corresponding measurement and a standing note that diagnosis remains a clinical determination.
>
> **What is not changing.** **No measurement value, threshold, calculation or algorithm is affected.** Volumes, ratios, scores and perfusion parameters produced by the software are unchanged. This is a wording and labelling revision only.
>
> **How to interpret reports you already hold.** GenzAI Labs software is a clinical decision-support tool intended for use by qualified healthcare professionals. It does not diagnose, and it does not determine eligibility for any therapy. Interpretive statements in previously issued reports should be read in that light: as software-generated text for review by the interpreting clinician, alongside the original images and the full clinical picture — never as a diagnostic conclusion or a recommendation to act.
>
> **Separately**, we have corrected a published performance figure. A specificity value of 94% was previously published for TB Insightz. The correct value from the underlying peer-reviewed study is **86.59%** (BJMHS, February 2026; retrospective, n=170). The 94% figure appears to have been the study's F1-score (94.12%) reproduced under the wrong label. The study's other figures — accuracy 93.53%, sensitivity 100% — are unchanged and were correctly reported.
>
> **What we are asking of you.** No action is required in relation to patient care. If you hold GenzAI Labs printed or presentation material quoting a 94% specificity figure, please let us know so we can arrange replacement.
>
> `[contact name, role]` · `[regulatory contact address]`

**Drafting notes for the reviewer:**
- States the correction plainly and does not minimise it. Volunteering the F1 mislabelling is deliberate — a partner who later reads the paper will find the discrepancy, and having disclosed it first is the stronger position.
- Says explicitly that no measurement value changed, which is the first question a clinical user will ask.
- Does **not** characterise the issue as a safety notice. That framing is Q-1's to decide and must not be pre-empted by this draft.
- Does **not** ask sites to withdraw or re-read prior reports. Whether that is warranted is Q-3.

---

## 13. Approval *(was §9 in Rev 0 — content unchanged, renumbered Rev 1)*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by | Engineering | — | 2026-08-09 |
| Reviewed by — Regulatory Affairs | `[TBD]` | | |
| Reviewed by — Clinical | `[TBD]` | | |
| Approved for deployment | `[TBD]` | | |

**Reviewer note.** Please review the **delta** in §3, not only the end state. The reason for narrowing is that several prior claims were outside decision-support framing and one published figure was wrong. Approving the endpoint without seeing what changed would miss the point of this record.

**This change is not deployed.** Deployment is gated on §11.
