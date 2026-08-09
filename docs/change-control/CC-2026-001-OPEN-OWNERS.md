# CC-2026-001 — Open owner fields

**One page. Every `[TBD]` in CC-2026-001 that needs a human name before regulatory sign-off.**

Generated 2026-08-09 against CC-2026-001 Rev 1. Nothing here can be closed by engineering.

---

## A. Blocking sign-off — needed before counsel review

| Ref | Field | Needs | Why it blocks |
|---|---|---|---|
| §13 | Reviewed by — Regulatory Affairs | **Name + date** | No approver, no approval |
| §13 | Reviewed by — Clinical | **Name + date** | Clinical framing of §3 rows 1–13 is unreviewed |
| §13 | Approved for deployment | **Name + date** | — |
| Header | Approver / Approval date | **Name + date** | — |
| §11 | Regulatory sign-off on the claims-narrowing delta | **Name** | Deploy gate 1 of 3 |
| §11 | W2-12 owner and target date | **Name + date** | Deploy gate 2 of 3. Work need not be complete — it must be **owned** |
| §11 | Confirmation no partner site is mid-onboarding / in active evaluation | **Name + date** | Deploy gate 3 of 3. Only someone with commercial visibility can confirm |

## B. Counsel questions — answers required

| Ref | Question | Needs |
|---|---|---|
| §10 Q-1 | Field Safety Notice, or is customer notification sufficient? | **Counsel decision** |
| §10 Q-2 | Proactive correction to recipients of the 94% figure? | **Counsel decision** |
| §10 Q-3 | Does "all reports issued to date" become the affected population? | **Counsel decision**, dependent on the §5.3 generator question |
| §10 Q-4 | Is web-corrected + device-uncorrected acceptable to deploy? | **Counsel confirm/reject §11.1 reasoning explicitly** — do not let it stand by default |
| §10 Q-5 | Do any partner sites treat the website as labelling of record? | **Commercial + Regulatory** |

## C. Non-repo surface register — 10 rows with no owner

Every row below is `Not started` with a blank owner. §5.2 rows S-11 to S-14 are already closed or owned by engineering and are not listed.

| Ref | Surface | Needs |
|---|---|---|
| S-01 | Imaging Update 2024 (Goa) poster and booth deck | Owner + verifier |
| S-02 | Investor / pitch decks, **all versions in circulation** | Owner + verifier |
| S-03 | LinkedIn posts (company page) | Owner + verifier |
| S-04 | X posts | Owner + **confirmation an X account exists** — not in site JSON-LD |
| S-05 | PDF brochures and one-pagers not in repo | Owner + verifier |
| S-06 | Material distributed to the 3 clinical partner sites | Owner + verifier |
| S-07 | Email templates / outbound sequences (EmailJS console) | Owner + **console access** |
| S-08 | Conference abstracts and submitted materials | Owner + verifier |
| S-09 | Press releases and media kit | Owner + verifier |
| S-10 | Third-party listings — Internshala, TheOrg, DPU FIIIE | Owner + verifier |

**Search each for all of:** `94`, `94%`, `94.12`, `specificity`, `F1`, `F1-score`, and any reproduction of the results table. The F1 lineage (§2.4) means quoting F1 correctly is still evidence of the same copy source and must be recorded as checked.

## D. Facts only GenzAI holds

| Ref | Item | Needs |
|---|---|---|
| §5.3 | Report count and date range issued to partner sites | Deployment records. **Not determinable from this repo** |
| §5.3 | Are the sample PDFs generator output or hand-made mockups? | Generator owner. **Changes the scale of any notification** |
| §5.2 S-14 | Decision: unpublish the three sample report PDFs now, or wait for regeneration? | Product owner. *Engineering recommendation: unpublish now — linked from nothing, so removal costs nothing, and they are currently the only publicly fetchable copy of the flagged wording* |
| §9.1 | Rewording of the ~93% pooled-figure sentence on `/publications` | Regulatory decision + owner |
| §9.2 | Implement the metric-label adjacency rule in the build guard | Engineering owner + target date |

---

## Summary

**28 fields need a human name.** Grouped:

| Group | Count | Who |
|---|---|---|
| Sign-off and deploy gate (A) | 7 | Regulatory, Clinical, Commercial |
| Counsel questions (B) | 5 | Legal / Regulatory |
| Surface register owners (C) | 10 | Marketing / Commercial |
| Internal facts (D) | 5 | Product, Engineering, Operations |

**Highest leverage, in order:**

1. **§5.3 — are the sample PDFs generator output?** One question to one engineer. It determines whether the affected population is "three published examples" or "every report ever issued", which in turn determines Q-1 and Q-3. Nothing else in group B can be answered properly until this is.
2. **§11 gate 3 — is any partner site mid-evaluation?** If yes, sequencing changes immediately.
3. **S-02 investor decks** — the surface with the largest consequence if the wrong figure is sitting in a document someone relied on.
