# DataGridSpec — Juno DataGrid composition rule set

The single source of truth for how a Juno DataGrid is composed. This file
declares _what a correct DataGrid is_, independent of task. It is consumed by:

- **datagrid-build** — resolves a spec into code by running the Decision Trees forward.
- **datagrid-validate** — checks code by running the same trees and asserting the Invariants.

Rules are stated as **constraints on the output**, never as build steps, so they
read identically in both directions. Every rule has a stable ID (`DT-n`, `INV-n`);
cite these IDs from other skills instead of copying rule text.

Supporting references in this skill: [component-props.md](component-props.md),
[fragment-library.md](fragment-library.md).

## Scope

**In scope:** DataGrid, its header (Zones 1–3), DataGridRow and DataGridCell
content, state rows (loading / error / empty).

**Out of scope:** Pagination, page layout shells, navigation, modals, panels,
forms, detail views, app wrappers, `DataGridFoot` (see `INV-12`). These are the
responsibility of the consuming component, not of a DataGrid.

---

## Input Schema

The canonical shape a DataGrid requirement resolves to. `datagrid-build` parses
input _into_ this; `datagrid-validate` reconstructs it _from_ code (or is handed
it). Every Decision Tree operates on this structure.

```ts
interface DataGridSpec {
  entity: {
    name: string // singular, e.g. "server"
    namePlural: string // plural, e.g. "servers"
  }

  columns: ColumnDef[] // in BRD order, before DT-1 reorders them

  features: {
    sorting: boolean | { fields: string[] }
    filtering: boolean | { fields: FilterFieldDef[] }
    search: boolean | { placeholder?: string }
    bulkActions: boolean | { actions: string[] }
    rowActions: string[] // per-row overflow menu items; [] means "use default"
    suppressActionColumn: boolean // true = explicitly omit the action column even when rowClick=true
    rowClick: boolean // whole row is clickable (navigate or open panel)
    primaryAction: string | null // label for Zone 1 create button; null = omit
    overflowActions: string[] // Zone 1 overflow menu items; [] = omit
    filterTabs: boolean | { tabs: string[] } // predefined filter tabs in Zone 1
    itemCount: boolean
    refresh: boolean
    permissions: PermissionGate[] // optional; elements to render conditionally
  }
}

interface ColumnDef {
  field: string // key on the data item
  label: string // column header text
  type: "text" | "status" | "id" | "boolean" | "date" | "number"
  primary?: boolean // true = primary identifier (name, title, etc.)
  bold?: boolean // render cell value in bold — must be explicitly specified; never inferred from primary or any other field
  statusVariantMap?: Record<string, "info" | "warning" | "error" | "success" | "danger">
  // Must be explicitly provided to enable Badge rendering; omitting it renders plain text.
  labelMap?: Record<string, string>
  // Maps raw values to display strings. Applies to "boolean" and "status" types.
  // For boolean columns: keys are "true" and "false" (String(value)), e.g. { "true": "Up", "false": "Down" }
  // For status columns: keys are the raw API values, e.g. { "ACTIVE": "Active", "ERROR": "Error" }
  // Unmapped values fall back to the type default ("Yes"/"No" for boolean, raw value for status).
  // Must be explicitly provided; never inferred.
  transform?: "arrayLength"
  // Known value transform applied before rendering. Applies to "number" type.
  // "arrayLength": item[field] is an array; renders item[field].length rather than the array itself.
  // Must be explicitly specified; never inferred from the field type or name.
}

interface FilterFieldDef {
  field: string
  label: string
  options: { value: string; label: string }[]
}

interface PermissionGate {
  element: "bulkActions" | "checkboxes" | "primaryAction" | "rowActions"
  condition: string // description of the permission check (free-text)
}
```

---

## Decision Trees

Deterministic: one `DataGridSpec` → exactly one correct structure. Build evaluates
them in order to emit; validate evaluates them to compute the _expected_ structure
and diffs it against the actual code. Later trees consume outputs of earlier ones.

---

**DT-1: Column Assembly**
Inputs: `spec.columns[]`, `spec.features.bulkActions`, `spec.features.rowActions`
Outputs: `columnOrder[]`, `columns` (number), `minContentColumns` (number[])

```
1. assembled ← []

2. IF spec.features.bulkActions:
     assembled.push({ id: "_select", label: "", tight: true })

3. primaryCol ← first col in spec.columns where col.primary = true
   IF primaryCol EXISTS:
     assembled.push(primaryCol)

4. statusCols ← spec.columns where col.type = "status"
   assembled.push(...statusCols in BRD order)

5. remaining ← spec.columns
               MINUS { primaryCol }
               MINUS { ...statusCols }
   assembled.push(...remaining in BRD order)

6. ACTION COLUMN DEFAULT RULE:
   IF spec.features.rowActions is non-empty:
     effectiveActions ← spec.features.rowActions
   ELSE IF spec.features.rowClick = true
        AND spec.features.suppressActionColumn ≠ true:
     effectiveActions ← ["Show Details"]   // standard default
   ELSE:
     effectiveActions ← []

   IF effectiveActions is non-empty:
     assembled.push({ id: "_actions", label: "", tight: true,
                      actions: effectiveActions })

Resolve outputs:
  columnOrder      ← assembled
  columns          ← assembled.length
  minContentColumns ← zero-based indices of all entries where tight = true
```

---

**DT-2: Header Zone Inclusion**
Inputs: `spec.features.*`
Outputs: `zone1` (bool), `zone2` (bool), `zone3` (bool), `renderHeader` (bool)

```
zone1 ← spec.features.filterTabs
      OR spec.features.sorting
      OR spec.features.primaryAction IS non-null
      OR spec.features.overflowActions IS non-empty

zone2 ← spec.features.filtering
      OR spec.features.search

zone3 ← spec.features.bulkActions
      OR spec.features.itemCount
      OR spec.features.refresh

renderHeader ← zone1 OR zone2 OR zone3

Rule: if a zone evaluates to false, do not render it at all —
      do not render an empty DataGridToolbar or an empty Stack.
```

---

**DT-3: Zone 1 Contents**
Inputs: `spec.features.filterTabs`, `spec.features.sorting`, `spec.features.overflowActions`, `spec.features.primaryAction`
Outputs: `leftGroup[]`, `rightGroup[]`, `stackDistribution`

```
1. leftGroup ← []
   rightGroup ← []

2. IF spec.features.filterTabs non-empty:
     leftGroup.push(FRAG:filter-tabs)

3. IF spec.features.sorting:
     rightGroup.push(FRAG:sorting)

4. IF spec.features.overflowActions non-empty:
     rightGroup.push(FRAG:overflow-menu)

5. IF spec.features.primaryAction IS non-null:
     rightGroup.push(FRAG:primary-action)

6. stackDistribution:
   IF leftGroup non-empty AND rightGroup non-empty → "between"
   IF leftGroup empty     AND rightGroup non-empty → "end"
   IF leftGroup non-empty AND rightGroup empty     → "start"
```

---

**DT-4: Zone 2 Contents**
Inputs: `spec.features.filtering`, `spec.features.search`
Outputs: `topRowItems[]`, `topRowDistribution`, `showPillsRow` (bool)

```
1. topRowItems ← []

2. IF spec.features.filtering:
     topRowItems.push(FRAG:filter)

3. IF spec.features.search:
     topRowItems.push(FRAG:search)

4. topRowDistribution:
   IF filtering AND search     → "between"
   IF filtering AND NOT search → "start"
   IF NOT filtering AND search → "end"

5. showPillsRow ← spec.features.filtering = true
   (the pill row is always included in the template when filtering is
    enabled; it is conditionally rendered at runtime when filters are active)
```

---

**DT-5: Zone 3 Contents**
Inputs: `spec.features.bulkActions`, `spec.features.itemCount`, `spec.features.refresh`
Outputs: `groups[]`, `stackDistribution`

```
1. groups ← []

2. IF spec.features.bulkActions:
     groups.push({ slot: "left", content: FRAG:bulk-actions })

3. IF spec.features.itemCount:
     groups.push({ slot: "center", content: FRAG:item-count })

4. IF spec.features.refresh:
     groups.push({ slot: "right", content: FRAG:refresh })

5. stackDistribution:
   IF groups.length >= 2 → "between"
   IF groups.length  = 1 → "start"

   Note: when fewer than three groups are present, their physical positions
   shift. This is an accepted tradeoff of the composition approach.
```

---

**DT-6: DataGridRow Configuration**
Inputs: `spec.features.rowClick`, `spec.features.bulkActions`, `item`
Outputs: `rowProps{}`, `stopPropagationRequired` (bool)

```
1. rowProps ← { key: item.id }

2. IF spec.features.rowClick:
     rowProps.onClick ← () => handleRowClick(item)

3. IF spec.features.bulkActions:
     rowProps.isSelected ← !!selected[item.id]

4. stopPropagationRequired ← spec.features.rowClick = true

5. IF stopPropagationRequired:
     EVERY interactive element inside this row MUST call e.stopPropagation()
     on its own event handler (onChange, onClick, etc.)
     Applies to: Checkbox onChange, PopupMenu toggle onClick,
                 Button onClick, Link onClick, PopupMenuItem onClick
```

---

**DT-7: DataGrid Body State Rows**
Inputs: `spec.features.filtering`, `spec.features.search`, `DT-1.columns` (number)
Outputs: ordered list of conditional JSX blocks inside `<DataGrid>`

```
colSpan ← DT-1.columns

Render these blocks in the following fixed order, each guarded
by its own condition:

1. Loading (always include):
   IF isLoading:
     → FRAG:state-loading  (colSpan)

2. Error (always include):
   IF isError AND NOT isLoading:
     → FRAG:state-error  (colSpan)

3. Empty – no data (always include):
   IF NOT isLoading AND NOT isError AND items.length = 0:
     → FRAG:state-empty  (colSpan)

4. Empty – no matches (include ONLY if filtering OR search is enabled):
   This variant is shown when the grid has data but the current
   filters/search return zero results. Distinguish via a runtime flag
   (e.g. hasActiveFilters) rather than relying on items.length alone.
   IF spec.features.filtering OR spec.features.search:
     IF NOT isLoading AND NOT isError AND items.length = 0 AND hasActiveFilters:
       → FRAG:state-empty-filtered  (colSpan)
   Note: replace state-empty with state-empty-filtered when hasActiveFilters.

   Alternative for loading and error: an early return before the DataGrid renders
   is also valid (Status outside DataGrid entirely). Use when the column header
   need not stay visible during the transient state.

5. Data rows:
   IF NOT isLoading AND NOT isError AND items.length > 0:
     → items.map(item => row per DT-6 + DT-8)
```

---

**DT-8: Cell Content Rendering**
Inputs: `col` (from DT-1.columnOrder), `item`, `DT-6.stopPropagationRequired`, `hasSeparateIdColumn` (bool — true if any col.type = "id" exists)
Outputs: JSX for one `DataGridCell`

```
SWITCH col.id:

  "_select":
    → FRAG:cell-checkbox
      checked     ← !!selected[item.id]
      aria-label  ← "Select {item[primaryField] ?? item.id}"
      IF stopPropagationRequired: onChange calls e.stopPropagation()

  "_actions":
    → FRAG:cell-actions
      effectiveActions ← from DT-1 step 6 (spec.features.rowActions or ["Show Details"])
      IF effectiveActions = ["Show Details"] (default):
        PopupMenuItem onClick ← (e) => { e.stopPropagation(); handleRowClick(item) }
        (same handler as the row click — the menu item and the row are equivalent entry points)
      ELSE:
        items ← effectiveActions
        IF stopPropagationRequired: each PopupMenuItem onClick calls e.stopPropagation()

  any other col:
    value ← item[col.field]

    SWITCH col.type:

      "text":
        IF col.primary:
          IF NOT hasSeparateIdColumn → display: value ?? item.id
          IF hasSeparateIdColumn     → display: value ?? "- -"
        ELSE:
          display: value ?? "- -"
        IF col.bold → <strong>{display}</strong>
        ELSE        → {display}

      "status":
        display ← col.labelMap
          ? (col.labelMap[value] ?? value ?? "- -")
          : (value ?? "- -")
        IF col.statusVariantMap is explicitly provided:
          → <Badge variant={statusVariantMap[value]}>{display}</Badge>
        ELSE:
          → {display}
        Note: plain text is the default. Badge is only used when statusVariantMap
        is explicitly provided. labelMap and statusVariantMap are independent —
        both can be set simultaneously (labelMap controls the label text inside
        the Badge; statusVariantMap controls the Badge variant).

      "id":
        → {value ?? "- -"}
        Note: truncation, copy buttons, and clipboard interactions are not
        part of the DataGrid pattern. Render the raw value only; the consuming
        component is responsible for any copy affordance.

      "boolean":
        display ← col.labelMap
          ? (col.labelMap[String(value)] ?? (value ? "Yes" : "No"))
          : (value ? "Yes" : "No")
        IF col.displayAs = "badge":
          → <Badge>{display}</Badge>
        ELSE:
          → {display}

      "date":
        → formatted date string ?? "- -"

      "number":
        IF col.transform = "arrayLength":
          → {item[col.field]?.length ?? 0}
        ELSE:
          → {item[col.field] ?? "- -"}
```

---

**DT-9: Bulk Select-All Checkbox State**
Inputs: `selected` (Record<string, boolean>), `items[]`
Outputs: `checked` (bool), `indeterminate` (bool), `handleSelectAll` ()

```
selectedCount ← Object.values(selected).filter(Boolean).length
totalCount    ← items.length

checked:
  IF selectedCount > 0 AND selectedCount = totalCount → true
  ELSE                                                → false

indeterminate:
  IF selectedCount > 0 AND selectedCount < totalCount → true
  ELSE                                                → false

handleSelectAll:
  IF checked = true (all selected):
    → set selected ← {}
  ELSE (none or some selected):
    → set selected ← Object.fromEntries(items.map(i => [i.id, true]))
```

---

## Invariants

Assertions that must hold in every valid output regardless of which DT paths were
taken. Build must satisfy each; validate checks each against the code and cites
the ID on failure.

- **INV-1** `DataGrid[columns]` equals the number of cells in every `DataGridRow`, accounting for `colSpan`. State rows must use `colSpan={columns}` to span all columns.
- **INV-2** Every index in `minContentColumns` is a valid zero-based column index (≥ 0 and < `columns`).
- **INV-3** Zone 1 is wrapped in a bare `Stack`. It is never wrapped in `DataGridToolbar`.
- **INV-4** Zones 2 and 3 are each wrapped in their own `DataGridToolbar`. They are never merged into one.
- **INV-5** The outer shell is `<Stack direction="vertical" className="juno-pattern-datagrid-outer">`.
- **INV-6** The header shell is `<Stack direction="vertical" className="juno-pattern-datagrid-header">`.
- **INV-7** An empty cell value is always `- -` (two hyphens, space-separated). Never `null`, `undefined`, `""`, `—`, or `N/A`.
- **INV-8** When `PopupMenu` is used anywhere, the consuming component tree must be wrapped in `PortalProvider`.
- **INV-9** When `DataGridRow` has `onClick`, every interactive child element calls `e.stopPropagation()` on its own handler.
- **INV-10** The checkbox column (`_select`) and action column (`_actions`) always have an empty `<DataGridHeadCell />` — no label.
- **INV-11** Column header labels are nouns or noun phrases. Verbs belong in action buttons, not column headers.
- **INV-12** `DataGridFoot` must not be generated unless explicitly requested; flag it as WiP if used.
- **INV-13** `gridColumnTemplate` is only used when `columnMinSize` / `columnMaxSize` / `minContentColumns` cannot achieve the required layout. Do not use it as a default.
- **INV-14** Elements gated by permissions (bulk actions, checkboxes, primary action) are conditionally rendered — not disabled. If a user lacks permission for all bulk actions, neither the checkboxes nor the Zone 3 bulk-actions group is rendered.
- **INV-15** The action column (`_actions`), when present, is always sized to min-content — its index is always included in `minContentColumns`. It must never stretch to fill available space.
- **INV-16** `col.bold` is never inferred or defaulted. A cell renders bold only when `col.bold = true` is explicitly present in the spec. `primary = true` does not imply bold.
- **INV-17** Only components listed in the Fragment Library or the Component Props Reference may appear in output. Do not use any component not documented in this skill — not from memory, not from BRD copy, not from naming intuition. If a requirement cannot be met with the documented components, say so explicitly and leave the implementation to the consuming component.
