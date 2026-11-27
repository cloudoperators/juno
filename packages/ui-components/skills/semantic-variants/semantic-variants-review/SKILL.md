---
name: semantic-variants-review
description: >-
  Sweep a change, file, or view for every semantic-variant usage and report
  misuse against the SemanticVariantsSpec. Use when the user says "review
  semantic variants", "check variant usage", "are the variants correct", "sweep
  this PR for variant misuse", or pastes code using Message, Toast, Badge,
  Box, or Tooltip variants to be audited across components. Relies on the
  semantic-variants-spec skill for all rules.
requires:
  - semantic-variants-spec
sources:
  - skills/semantic-variants/semantic-variants-spec/references/semantic-variants-spec.md
---

Sweep a change for semantic-variant misuse and report findings against the **SemanticVariantsSpec**. Read `../semantic-variants-spec/references/semantic-variants-spec.md` first. This skill never defines what is correct — it only locates usages, checks them against the rules, and explains.

Unlike a component `-validate` (which audits one usage the user hands over), this is a **cross-cutting sweep**: find _every_ semantic-variant usage in the target and judge each. The target is a PR diff by default, or a file/view/snippet when one is given.

## Source of truth — do not restate

All rules live in the **semantic-variants-spec** skill (`requires: [semantic-variants-spec]`): the five meanings, the communication vs validation planes, the in/out-of-scope component lists, and Invariants `SEMV-1`…`SEMV-5`. Cite these IDs in every finding. If a check is not backed by a spec rule, it is not a finding — do not invent rules.

## Procedure

1. **Collect in-scope usages.** Find semantic-variant usages on the communication plane only:
   - `variant="…"` on `Message`, `Badge`, `Box`, `Tooltip`.
   - `toast.info() / .success() / .warning() / .error() / .danger()` calls (the `Toast` variant).
   - Validation state on form fields (`errortext` / `successtext`) — in scope for `SEMV-4` only.
2. **Exclude out-of-scope `variant` props.** Do **not** flag `variant` props from a different vocabulary: `Button`/`Select` action emphasis (`primary` / `primary-danger` / `subdued` / `default`), `Spinner` color, `Tabs`/`TabBar` appearance, `Status` data-state values (`progress` / `error` / `empty` / `no-matches`), or `Badge`'s non-semantic `default`. Mistaking these for semantic variants is the most common false positive — when unsure whether a `variant` is in scope, check the component against `SEMV-5` before reporting. (Choosing one of these for looks is still wrong under `SEMV-4`, but it is not this sweep's finding to make.)
3. **Judge each usage by intent.** For every in-scope usage, infer the situation from surrounding context and check the variant matches:
   - `error` vs `danger` (`SEMV-2`): a usage describing a failure that occurred should be `error`; one guarding a destructive/irreversible action should be `danger`.
   - `warning` vs `error` (`SEMV-3`): caution/"might go wrong" → `warning`; "has failed" → `error`.
   - emphasis/aesthetic misuse (`SEMV-4`): a variant chosen to stand out rather than for meaning.
     If the situation cannot be determined from context, record it as a **warning** (needs confirmation), not an **error**.

## Finding format

One entry per usage flagged:

| field    | content                                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------------------- |
| rule     | the ID being violated, e.g. `SEMV-2`                                                                       |
| severity | **error** (clear misuse against an invariant) · **warning** (likely wrong, or intent unclear from context) |
| location | file:line, or the offending element or `toast.*()` call                                                    |
| expected | the variant the rule requires, and why                                                                     |
| actual   | the variant used                                                                                           |
| fix      | the minimal change (usually a one-word variant swap)                                                       |

## Reporting rules

- Rank **errors** before **warnings**; within a severity, group by rule ID.
- Report a clean sweep explicitly — e.g. "Swept N semantic-variant usages; all conform to SemanticVariantsSpec (`SEMV-1`…`SEMV-5`)." Never answer with silence.
- The sweep **reports**, it does not rewrite. Give the minimal fix per finding.
- Distinguish a genuine violation from a deliberate exception: if a comment documents an intentional choice, flag it as a **warning** noting the stated reason, not an **error**.
