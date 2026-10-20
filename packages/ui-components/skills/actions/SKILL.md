---
name: actions
description: >
  Use when adding actions to a Juno UI built with @cloudoperators/juno-ui-components: choosing a
  Button variant (default, primary, primary-danger, subdued) and size, showing an in-progress
  button during async work, grouping buttons with ButtonRow in dialogs and forms, wiring a
  SortButton for a sortable column, and placing a ThemeToggle. Covers which action is primary vs
  secondary vs destructive, button label wording (title case, infinitive verbs), and when to disable
  vs hide an action. For page-level toolbar slot layout and the overflow menu, read the
  page-level-actions reference; for actions scoped to a DataGrid, see the datagrid skill.
metadata:
  purpose: >
    Teaches developers to pick the correct Juno Button variant and placement for an action, group
    actions consistently with ButtonRow, give async actions in-progress feedback, and apply the
    SortButton and ThemeToggle correctly — enforcing the UX rules (one primary action per page,
    destructive = primary-danger, title-case infinitive labels, disable vs hide) that the
    components do not enforce on their own.
  type: core
  library: "@cloudoperators/juno-ui-components"
  library_version: "9.6.0"
sources:
  - cloudoperators/juno:packages/ui-components/src/components/Button/Button.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Button/Button.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ButtonRow/ButtonRow.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ButtonRow/ButtonRow.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/SortButton/SortButton.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/SortButton/SortButton.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ThemeToggle/ThemeToggle.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ThemeToggle/ThemeToggle.stories.tsx
  - cloudoperators/juno:docs/ux/page-level-actions.md
  - cloudoperators/juno:docs/ux/interaction-guidelines.md
  - cloudoperators/juno:docs/ux/ux-writing-content-design.md
---

# Add actions with the Juno Button family

An action in a Juno UI is almost always a `Button`. The hard part is not the markup — it is
choosing the right **variant** so the button's visual weight matches its role (primary, secondary,
or destructive), writing the **label** correctly, and placing it where the UX guidelines expect.
This skill covers `Button`, grouping with `ButtonRow`, the `SortButton` for sortable columns, and
the `ThemeToggle`.

## Setup

A `Button` renders a `<button>`, or an `<a role="button">` when you pass `href`. Pass the label
as the `label` prop (or as `children`). The default variant is `default`.

```tsx
import { Button } from "@cloudoperators/juno-ui-components"

function SaveButton({ onSave }: { onSave: () => void }) {
  return <Button variant="primary" label="Save" onClick={onSave} />
}
```

The four variants map directly onto the four UX roles:

- `primary` — the one preferred action on the page or in the dialog. **At most one per context.**
- `default` — a neutral secondary action; may appear several times.
- `subdued` — a lower-emphasis secondary action, used to create contrast next to a primary button
  or when several default buttons would be too heavy.
- `primary-danger` — a destructive or irreversible action (delete, terminate, revoke). Use
  sparingly. (`docs/ux/page-level-actions.md`, "The Primary Action"; `Button.stories.tsx`.)

Sizes are `default`, `small`, and `xs` via the `size` prop. Use `small`/`xs` only inside dense
contexts (toolbars, inline cells); keep the `default` size for standalone page actions.

## Core patterns

### Add an icon or make an icon-only button

Pass a Juno icon name as `icon`. Omit `label` and `children` for an icon-only button — but then
you **must** give it a `title` for accessibility, because the icon alone is not a label.

```tsx
import { Button } from "@cloudoperators/juno-ui-components"

function RefreshButton({ onRefresh }: { onRefresh: () => void }) {
  return <Button icon="cached" title="Refresh Page" onClick={onRefresh} />
}
```

Every icon-only button must carry a native `title` (or an explicit tooltip) — no exceptions
(`docs/ux/page-level-actions.md`, "Icon-Only Buttons").

### Show progress during an async action

Set `progress` while an action is running. The button swaps its icon for a spinner and disables
its own click; pass `progressLabel` to replace the label text while running. This gives the
required feedback for every state-changing action (`docs/ux/interaction-guidelines.md`,
"Feedback").

```tsx
import { useState } from "react"
import { Button } from "@cloudoperators/juno-ui-components"

function CreateButton({ create }: { create: () => Promise<void> }) {
  const [saving, setSaving] = useState(false)
  const onClick = async () => {
    setSaving(true)
    try {
      await create()
    } finally {
      setSaving(false)
    }
  }
  return <Button variant="primary" label="Create" progress={saving} progressLabel="Creating…" onClick={onClick} />
}
```

Note the ellipsis in `progressLabel`: a single `…` glyph is allowed and signals an ongoing step
(`docs/ux/ux-writing-content-design.md`, "Button Labels").

### Render a link that looks like a button

Pass `href` to render an `<a role="button">` with identical styling. Use this for navigation that
is a GET to another location, not for a JavaScript action.

```tsx
import { Button } from "@cloudoperators/juno-ui-components"

function DocsLink() {
  return <Button variant="subdued" label="Documentation" href="/docs" icon="openInNew" />
}
```

### Group actions with ButtonRow

In a dialog, form, or any place with more than one action, wrap the buttons in `ButtonRow`. It
lays them out in a row with consistent spacing and aligns them to the **end** (right). Order them
so the primary action is **last** (rightmost); secondary/cancel actions sit to its left.

```tsx
import { Button, ButtonRow } from "@cloudoperators/juno-ui-components"

function FormActions({ onCancel, onSave }: { onCancel: () => void; onSave: () => void }) {
  return (
    <ButtonRow>
      <Button label="Cancel" onClick={onCancel} />
      <Button variant="primary" label="Save" onClick={onSave} />
    </ButtonRow>
  )
}
```

`ButtonRow` takes only `children` and `className` — it is a layout container, not a place to
configure the buttons (`ButtonRow.component.tsx`, `ButtonRow.stories.tsx`).

### Wire a SortButton for a sortable column

`SortButton` is a two-state toggle for ascending/descending order. It is **controlled**: pass the
current `order` and update your state in `onChange`, which fires with the new order. It defaults
to showing up/down sort icons, so you normally pass no `options`.

```tsx
import { useState } from "react"
import { SortButton } from "@cloudoperators/juno-ui-components"

type Order = "asc" | "desc"

function CreatedAtHeader() {
  const [order, setOrder] = useState<Order>("desc")
  return (
    <span>
      Created
      <SortButton order={order} onChange={(next) => setOrder(next)} />
    </span>
  )
}
```

`SortButton` extends `ButtonProps` (minus `value`/`onChange`), so `disabled` works too. Prefer the
default sort icons; custom `options` icons are supported but discouraged
(`SortButton.stories.tsx`, "CustomOptions"). Do not confirm a sort — sorting is predictable and
reversible (`docs/ux/interaction-guidelines.md`, "Confirmation of Consequential Actions").

### Place a ThemeToggle

`ThemeToggle` flips the app between light and dark themes. It reads and writes the `StyleProvider`
context (provided automatically by the Juno `AppShell`), so it needs no `value` prop — it is
self-wiring. Place it in the app header/shell, not inside page content.

```tsx
import { ThemeToggle } from "@cloudoperators/juno-ui-components"

function HeaderThemeToggle() {
  return <ThemeToggle onToggleTheme={(theme) => console.log("theme is now", theme)} />
}
```

It accepts `className`, `disabled`, `id`, `name`, and `onToggleTheme` — nothing else. Without a
`StyleProvider`/`AppShell` in the tree it logs a warning and does nothing
(`ThemeToggle.component.tsx`).

## Common mistakes

- **CRITICAL — More than one `primary` button in a context.** Two primaries leave the user with no
  clear preferred action. Keep exactly one `variant="primary"` per page or dialog; demote the rest
  to `default`/`subdued`, or move secondary actions into an overflow menu.
  (`docs/ux/page-level-actions.md`, "The Primary Action".)
- **CRITICAL — Destructive action not styled as `primary-danger`.** A delete/terminate/revoke
  rendered as a plain primary gives no visual warning. Use `variant="primary-danger"`, and confirm
  irreversible actions before committing. (`Button.stories.tsx`, "PrimaryDanger";
  `docs/ux/interaction-guidelines.md`, "Reversibility".)
- **HIGH — Icon-only button with no `title`.** An icon alone is unreadable to screen readers and
  ambiguous to sighted users. Always set `title` (or a tooltip) on an icon-only `Button`.
  (`docs/ux/page-level-actions.md`, "Icon-Only Buttons".)
- **HIGH — No feedback on an async action.** Firing a mutation with no progress indication leaves
  users unsure it registered, and lets them double-submit. Set `progress` (and ideally
  `progressLabel`) while the action runs. (`docs/ux/interaction-guidelines.md`, "Feedback".)
- **HIGH — Wrong label wording.** Labels must be short, title-case, infinitive verbs ("Create",
  "Delete", "Save"), never "Click to Create", never ALL-CAPS, and use "Sign in" not "Log in". Keep
  the verb consistent with the surrounding copy and dialog title.
  (`docs/ux/ux-writing-content-design.md`, "Button Labels", "Title Case", "Consistency".)
- **MEDIUM — Hiding an action that is only temporarily blocked.** Disable (`disabled`) an action
  that is generally available but blocked right now; only omit it when the user cannot or should
  not get it (e.g. no permission). (`docs/ux/page-level-actions.md`, "Disabled vs. Hidden
  Actions".)
- **MEDIUM — Primary action not last in a `ButtonRow`.** `ButtonRow` aligns to the end; put the
  primary action rightmost so placement matches emphasis. (`ButtonRow.stories.tsx`.)
- **MEDIUM — Inventing a new action pattern.** Reusing one interaction style for the same action
  type across the app matters more than a local tweak. Reuse the existing Juno pattern.
  (`docs/ux/interaction-guidelines.md`, "Consistency".)

## Completion

Verify:

1. Each page/dialog has at most one `variant="primary"`, and any destructive action is
   `variant="primary-danger"`.
2. Every icon-only `Button` has a `title`; async actions set `progress` while running.
3. Labels are short, title-case, infinitive verbs with no trailing punctuation (an ellipsis is
   allowed to signal a further step).
4. Multi-action groups use `ButtonRow` with the primary action last.
5. Any `SortButton` is controlled (`order` + `onChange`), and `ThemeToggle` sits inside an
   `AppShell`/`StyleProvider`.
6. Run `npm exec --no -- intent validate packages/ui-components/skills` and fix any errors.

If an action's placement depends on page-level toolbar structure you cannot see, confirm it against
the page-level-actions reference rather than guessing.

## References

- [page-level toolbar and overflow placement](references/page-level-actions.md) — read when
  deciding whether an action is primary, goes in the overflow menu, or is the refresh button, and
  where it sits relative to tabs and DataGrids.
- [label wording rules](references/label-wording.md) — read when writing or reviewing button label
  text, including title case, confirming-button wording in modals, and "Sign in".
