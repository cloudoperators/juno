# juno skill spec

## Coverage and batch history

### Batch 1 — DataGrid (domain `data-display`)

A shared-spec skill set for the `@cloudoperators/juno-ui-components` DataGrid,
authored from the component source, Storybook stories, and the repository UX
guidelines (`docs/ux/datagrid.md`). One skill owns the rule set; two task skills
consume it.

- **`datagrid`** (`packages/ui-components`). Task: _Display a collection of
  structured data in a DataGrid._ Owns the **DataGridSpec** — the single source
  of truth in `references/datagrid-spec.md`: the Input Schema, the Decision Trees
  (`DT-1`–`DT-9`) that deterministically resolve structure (columns, the
  three-zone header, rows, cells, state rows), and the Invariants
  (`INV-1`–`INV-17`). Also carries the mental model, column-sizing escalation, and
  when NOT to use a DataGrid. Supporting references: `component-props.md`,
  `fragment-library.md`.
- **`datagrid-build`** (`packages/ui-components`, requires `datagrid`). Task:
  _Generate a DataGrid implementation from requirements._ Parses a BRD / feature
  list into a DataGridSpec, runs the Decision Trees forward, composes fragments,
  and emits code. Holds only build-specific procedure; cites spec rule IDs.
- **`datagrid-validate`** (`packages/ui-components`, requires `datagrid`). Task:
  _Validate a DataGrid implementation against the DataGridSpec._ Reconstructs the
  intended spec from code, runs the same trees to compute the expected structure,
  diffs, and asserts the Invariants. Holds only the review procedure and findings
  format; cites spec rule IDs.

### Decisions

- **Task-oriented, not component-oriented.** Skills map to developer tasks, not
  to each of the ~106 components.
- **One rule set, two directions.** Everything that defines what a correct
  DataGrid is lives once in `datagrid-spec.md`, as constraints on the output
  (`DT-n`, `INV-n`) rather than build steps. `datagrid-build` applies it forward;
  `datagrid-validate` checks against it. Both `require` the `datagrid` skill and
  cite rule IDs instead of restating rules, so there is a single source of truth.
- **Header composition stays in the spec.** An earlier plan split the three-zone
  header (filters / search / sorting / bulk actions) into a separate
  `datagrid-filters-toolbar` skill. That was dropped: the header is fully captured
  by Decision Trees `DT-2`–`DT-5` and the zone/filter/pill fragments in the shared
  spec, so a separate skill would have been a second home for the same rules. The
  key non-obvious facts it would have carried — there is no `Filter` component
  (filters are composed from `Select`/`ComboBox`/`InputGroup`/`SearchInput`/`Pill`),
  only Zones 2–3 use `DataGridToolbar`, Zone 1 is a bare `Stack`, the tri-state
  select-all and "X of Y" count rules — all live in `datagrid-spec.md`.
- **Source of UX truth.** `docs/ux/datagrid.md` is the normative source for the
  zone model; its guidance is embedded in the skill body rather than linked,
  because Intent requires relative links to stay inside the package and the UX
  docs live at the repository root.
- **Typecheck strategy.** Minimal import/render examples are left typechecked
  against the package types; composition-heavy illustrative fragments are marked
  `tsx no-check`.

### Checks recorded

- `intent validate packages/ui-components/skills` → 3/3 passed, including TS/TSX
  fence typechecks against the package's built declarations.
- Discovery descriptions reviewed for realistic task matching.

### Remaining work (future batches)

- Extend to adjacent data-display tasks (pagination/`DataGridFoot`, row
  selection state management, empty/loading/error states via `Status`/`Message`).
- Broaden beyond data-display: layout (`AppShell`/`Container`/`Stack`), forms,
  semantic color tokens and variants.
