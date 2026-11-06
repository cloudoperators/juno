---
"@cloudoperators/juno-ui-components": patch
---

feat(ui): add status component skills (#2154)

Adds a three-skill set for the `Status` component under `skills/status/`:
`status-spec` (prop API, copy tables, placement rules, invariants),
`status-build` (generate correct Status usage from a described state),
and `status-validate` (check existing Status usage against the spec).
