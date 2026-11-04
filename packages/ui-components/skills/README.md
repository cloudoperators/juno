# ui-components skills

Agent skills shipped with `@cloudoperators/juno-ui-components` via TanStack Intent.

For what skills are, how to create them, and how to keep them current when components change, see the [TanStack Intent Guide](../../../docs/tanstack-intent-guide.md).

## Structure

Each component or pattern owns one directory under `skills/` containing three nested sub-skills:

- `<component>-spec` — owns the shared rule set (input schema, decision trees, invariants) and the `references/` that back it.
- `<component>-build` — generates an implementation from requirements; requires `<component>-spec`.
- `<component>-validate` — checks an implementation against the spec; requires `<component>-spec`.

The `-build` and `-validate` skills never restate rules — they cite the spec's rule IDs, so there is a single source of truth per component.

## Skills

### `datagrid/`

- `datagrid-spec` — compose a DataGrid; owns the shared DataGridSpec and references.
- `datagrid-build` — generate a DataGrid implementation from requirements.
- `datagrid-validate` — check a DataGrid implementation against the spec.
