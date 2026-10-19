# juno skill spec

## Coverage and batch history

### Batch 1 — DataGrid (domain `data-display`)

Two task-oriented skills for the `@cloudoperators/juno-ui-components` DataGrid,
authored from the component source, Storybook stories, and the repository UX
guidelines (`docs/ux/datagrid.md`).

- **`datagrid`** (`packages/ui-components`). Task: _Display a collection of
  structured data in a DataGrid._ Covers the primitives
  (`DataGrid`/`DataGridRow`/`DataGridHeadCell`/`DataGridCell`), column sizing
  (`columns`, `minContentColumns`, `columnMin/MaxSize`, `gridColumnTemplate`),
  cell options, the cells-per-row invariant, and when NOT to use a DataGrid.
- **`datagrid-filters-toolbar`** (`packages/ui-components`, requires `datagrid`).
  Task: _Build the DataGrid header with filters, search, sorting, and bulk
  actions._ Covers the three-zone header composition and the key non-obvious
  facts: there is no `Filter` component (filters are composed from
  `Select`/`ComboBox`/`InputGroup`/`SearchInput`/`Pill`), only Zones 2–3 use
  `DataGridToolbar`, and the Stack wrapping / tri-state select-all / "X of Y"
  count rules.

### Decisions

- **Task-oriented, not component-oriented.** Skills map to developer tasks, not
  to each of the ~106 components. The grid and its interactive header are split
  into two skills with a prerequisite link because they are authored and used
  separately.
- **Source of UX truth.** `docs/ux/datagrid.md` is the normative source for the
  zone model; its guidance is embedded in the skill body rather than linked,
  because Intent requires relative links to stay inside the package and the UX
  docs live at the repository root.
- **Typecheck strategy.** Minimal import/render examples are left typechecked
  against the package types; composition-heavy illustrative fragments are marked
  `tsx no-check`.

### Checks recorded

- `intent validate packages/ui-components/skills` → 2/2 passed, including TS/TSX
  fence typechecks against the package's built declarations.
- Discovery descriptions reviewed for realistic task matching.

### Remaining work (future batches)

- Extend to adjacent data-display tasks (pagination/`DataGridFoot`, row
  selection state management, empty/loading/error states via `Status`/`Message`).
- Broaden beyond data-display: layout (`AppShell`/`Container`/`Stack`), forms,
  semantic color tokens and variants.
