---
"@cloudoperators/juno-ui-components": patch
---

refactor(ui): nest datagrid skills under one component directory

The DataGrid agent skills shipped with the package move into one nested directory per component. `skills/datagrid/` now holds `datagrid-spec/` (which owns the shared DataGridSpec and its `references/`), `datagrid-build/`, and `datagrid-validate/`. The hub skill `datagrid` is renamed to `datagrid-spec`; the two task skills require `datagrid-spec` and point at the spec via its new path. No component API or behaviour change — only the location of the shipped skill files.
