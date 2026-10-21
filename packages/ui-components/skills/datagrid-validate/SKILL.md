---
name: datagrid-validate
description: >-
  Check an existing Juno DataGrid implementation against the DataGridSpec and
  report violations. Use when the user says "validate this DataGrid", "review
  this DataGrid", "check this DataGrid", "does this DataGrid follow the rules", or
  pastes DataGrid code to be audited. Relies on the datagrid skill's DataGridSpec
  for all structural rules.
requires:
  - datagrid
sources:
  - skills/datagrid/references/datagrid-spec.md
---

Audit a DataGrid implementation against the **DataGridSpec** and report findings.
This skill never defines what is correct — it only checks, locates, and explains.

## Source of truth — do not restate

All structural rules live in the **datagrid** skill (`requires: [datagrid]`):
Input Schema, Decision Trees `DT-1`…`DT-9`, Invariants `INV-1`…`INV-17`. Read
`datagrid/references/datagrid-spec.md` first. Cite these IDs in every finding. If
a check is not backed by a spec rule, it is not a finding — do not invent rules.

## Procedure

1. **Recover the intended spec.** If the user supplied a BRD or an explicit
   `DataGridSpec`, use it. Otherwise reconstruct a `DataGridSpec` from the code's
   columns and features by reading the Input Schema in reverse.
2. **Compute the expected structure.** Run `DT-1`…`DT-9` forward on that spec
   exactly as datagrid-build would. This yields the expected `columnOrder`,
   `columns`, `minContentColumns`, zones, row props, state rows, and per-cell
   rendering.
3. **Diff expected vs. actual.** Every divergence from a Decision-Tree output is a
   finding, tagged with the `DT-n` that produced the expectation.
4. **Assert the Invariants.** Check `INV-1`…`INV-17` directly against the code.
   These hold unconditionally and need no reconstructed spec.

## Finding format

One entry per violation:

| field    | content                                                                                         |
| -------- | ----------------------------------------------------------------------------------------------- |
| rule     | the ID being violated, e.g. `INV-7` or `DT-1`                                                   |
| severity | **error** (invariant or structural divergence) · **warning** (likely wrong, needs confirmation) |
| location | file:line, or the offending JSX element                                                         |
| expected | what the rule requires                                                                          |
| actual   | what the code does                                                                              |
| fix      | the minimal change that satisfies the rule                                                      |

## Reporting rules

- Rank **errors** before **warnings**; within a severity, group by rule ID.
- Report a clean pass explicitly — e.g. "Conforms to DataGridSpec; `INV-1`…`INV-17`
  hold and the structure matches `DT-1`…`DT-9`." Never answer with silence.
- Validation **reports**, it does not regenerate. Give the minimal fix per
  finding; do not rewrite the whole implementation. If the user then wants it
  rebuilt, that is the **datagrid-build** skill's job.
- Distinguish a genuine violation from a deliberate escape hatch: if the code
  diverges but a comment or prop documents an intentional exception, flag it as a
  **warning** noting the stated reason, not an **error**.
