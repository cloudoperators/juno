---
name: status-validate
description: >-
  Check an existing Juno Status usage against the StatusSpec and report violations.
  Use when the user says "validate this Status", "check this Status usage", "review
  this Status", "is this Status correct", or pastes Status code to be audited.
  Relies on the status-spec skill for all rules.
requires:
  - status-spec
sources:
  - skills/status/status-spec/references/status-spec.md
---

Audit a `Status` usage against the **StatusSpec** and report findings. Read `../status-spec/references/status-spec.md` first. This skill never defines what is correct — it only checks, locates, and explains.

## Source of truth — do not restate

All rules live in the **status-spec** skill (`requires: [status-spec]`): prop API, status value selection, copy resolution, placement rules, and Invariants `INV-1`…`INV-8`. Cite these IDs in every finding. If a check is not backed by a spec rule, it is not a finding — do not invent rules.

## Procedure

1. **Identify the usage context.** Determine whether `Status` is inside a DataGrid or standalone. Check for the required wrapper structure (`INV-2`) in the DataGrid case.
2. **Assess the status value.** Verify the chosen `status` matches the described or inferable situation. If the situation cannot be determined from context, note this as a warning rather than an error.
3. **Check copy.** Verify any overridden `title` or `body` follows `INV-5` casing. Flag explicit defaults (passing a value that matches the component's own default) as a warning — it's not wrong but adds noise.
4. **Assert the invariants.** Check `INV-1`…`INV-8` directly against the code.

## Finding format

One entry per violation:

| field    | content                                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------------------- |
| rule     | the ID being violated, e.g. `INV-2`                                                                               |
| severity | **error** (invariant violation or structural issue) · **warning** (likely wrong or redundant, needs confirmation) |
| location | file:line, or the offending JSX element                                                                           |
| expected | what the rule requires                                                                                            |
| actual   | what the code does                                                                                                |
| fix      | the minimal change that satisfies the rule                                                                        |

## Reporting rules

- Rank **errors** before **warnings**; within a severity, group by rule ID.
- Report a clean pass explicitly — e.g. "Conforms to StatusSpec; `INV-1`…`INV-8` hold." Never answer with silence.
- Validation **reports**, it does not regenerate. Give the minimal fix per finding; do not rewrite the whole usage. If the user then wants a rebuild, that is the **status-build** skill's job.
- Distinguish a genuine violation from a deliberate escape hatch: if the code diverges but a comment or prop documents an intentional exception, flag it as a **warning** noting the stated reason, not an **error**.
