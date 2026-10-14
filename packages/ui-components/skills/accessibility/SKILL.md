---
name: accessibility
description: >
  Use when ensuring a Juno UI built with @cloudoperators/juno-ui-components is accessible:
  choosing semantic HTML over div/span for actions and navigation, giving every input and
  icon-only button an accessible name, grouping related inputs, wiring help and error text,
  keeping keyboard navigation and visible focus intact, trapping and returning focus in modals,
  avoiding color-only signals, and announcing dynamic content (loading, success, errors) to
  screen readers. For the DataGrid empty/loading/error pattern see the datagrid skill; for form
  validation wiring see the forms skill.
metadata:
  purpose: >
    Teaches developers to build accessible Juno UIs by preferring semantic Juno primitives
    (Button, TextInput, CheckboxGroup, RadioGroup, Modal, Status) that already carry the correct
    roles, labels, and focus behaviour, and by filling the gaps the components do not enforce —
    accessible names for icon-only controls, grouped-input labelling, non-color status signals,
    and aria-live announcement of application-driven dynamic content.
  type: core
  library: "@cloudoperators/juno-ui-components"
  library_version: "9.6.0"
sources:
  - cloudoperators/juno:packages/ui-components/src/components/Button/Button.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Button/Button.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Icon/Icon.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/TextInput/TextInput.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/RadioGroup/RadioGroup.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Modal/Modal.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Status/Status.component.tsx
  - cloudoperators/juno:docs/ux/accessibility.md
  - cloudoperators/juno:docs/ux/interaction-guidelines.md
---

# Make a Juno UI accessible

The single most effective accessibility measure is correct semantic HTML — the right element for
the right purpose (`<button>` for actions, `<a>` for navigation, headings in order), which gives
assistive technologies the structure they need (`docs/ux/accessibility.md`, "Semantic HTML as the
Foundation"). The practical payoff in Juno: the library's primitives already render semantic
elements with the correct roles, labels, and focus behaviour, so **reaching for a Juno component
instead of a styled `<div>` is itself an accessibility decision**. This skill covers what the
components give you for free and the gaps you must still fill in application code.

## Setup

Everything here uses components from the single package:

```tsx
import {
  Button,
  Icon,
  TextInput,
  CheckboxGroup,
  Checkbox,
  Modal,
  Status,
} from "@cloudoperators/juno-ui-components"
```

Components must be rendered inside the app's `AppShellProvider` for styling (including the focus
ring) to apply — see the fundamentals skill if focus outlines are missing.

## Core patterns

### Use the semantic component, not a styled div

A `Button` renders a real `<button>` (or, when given `href`, an `<a role="button">`), so it is
keyboard-operable, focusable, and announced as a button with no extra work. Do not rebuild this
with a clickable `<div>`.

```tsx
import { Button } from "@cloudoperators/juno-ui-components"

declare function save(): void

function SaveAction() {
  return <Button variant="primary" label="Save" onClick={() => save()} />
}
```

Use `href` for navigation (renders an anchor) and `onClick` for actions (renders a button). Picking
the element that matches the outcome is the "clarity and predictability" rule in code: buttons look
and behave like buttons, links like links (`docs/ux/interaction-guidelines.md`, "Clarity and
Predictability").

### Give every icon-only control an accessible name

An icon with no visible text has no accessible name by default. Juno surfaces one through `title`.

For `Button`, `title` falls back to `label`; a label-less icon button therefore needs an explicit
`title` (or `label`), otherwise it is announced as an empty button:

```tsx
import { Button } from "@cloudoperators/juno-ui-components"

declare function remove(): void

function DeleteButton() {
  // icon-only button: title supplies the accessible name
  return <Button icon="deleteForever" title="Delete item" onClick={() => remove()} />
}
```

A standalone `Icon` renders an SVG with `role="img"` and a `<title>`; pass `title` whenever the icon
carries meaning (if it is interactive, prefer giving it an `onClick`/`href` so it becomes a real
control):

```tsx
import { Icon } from "@cloudoperators/juno-ui-components"

function InfoMark() {
  return <Icon icon="info" title="More information" />
}
```

Pair the name with the action, not the glyph: `title="Delete item"`, not `title="Trash icon"`
(`docs/ux/accessibility.md`, "Labels and Accessible Names").

### Label inputs with the component's own label prop

Juno form inputs wire a real `<label>` to the input (`htmlFor`/`id`) when you pass `label` — you do
not add your own `<label>`, and you never use `placeholder` as a stand-in for a label.

```tsx
import { TextInput } from "@cloudoperators/juno-ui-components"

function EmailField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <TextInput
      label="Email address"
      type="email"
      required
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
```

`placeholder` is a hint that disappears on input; it is not an accessible name. Always pass `label`
(`docs/ux/accessibility.md`, "Labels and Accessible Names").

### Group related inputs under one labelled group

A set of related checkboxes or radios must be announced as a single named group, not a loose pile
of inputs. Use `CheckboxGroup`/`RadioGroup` with a `label` — `RadioGroup` renders `role="radiogroup"`
and both associate their `label` and `helptext`/`errortext` with the group.

```tsx
import { CheckboxGroup, Checkbox } from "@cloudoperators/juno-ui-components"

function Permissions() {
  return (
    <CheckboxGroup label="Permissions" helptext="Choose all that apply">
      <Checkbox value="read" label="Read" />
      <Checkbox value="write" label="Write" />
      <Checkbox value="admin" label="Admin" />
    </CheckboxGroup>
  )
}
```

(`docs/ux/accessibility.md`, "Labels and Accessible Names" — groups of related inputs.)

### Keep keyboard operation and the focus ring intact

Every interactive element must be reachable and operable by keyboard, with tab order following the
visual reading order, and disabled elements out of the tab order (`docs/ux/accessibility.md`,
"Keyboard Navigation and Focus"). Juno components provide a visible focus ring —
`focus-visible:ring-2` on `Button`, for example. **Never override or hide it.** Mark unavailable
controls with the component's `disabled` prop (which also removes them from the tab order) rather
than hiding them with CSS or a non-interactive element.

```tsx
import { Button } from "@cloudoperators/juno-ui-components"

declare function submit(): void

function Submit({ busy }: { busy: boolean }) {
  // disabled is announced and removed from tab order; focus ring is left untouched
  return <Button variant="primary" label="Submit" disabled={busy} onClick={() => submit()} />
}
```

### Let Modal manage focus; always give it an accessible name

`Modal` traps focus while open and returns focus to the trigger on close (via `focus-trap-react`),
is dismissible with ESC by default, and renders `role="dialog"`. Its accessible name comes from
`title`/`heading` (referenced by `aria-labelledby`); only when the modal has neither do you supply
`ariaLabel`. Do not build your own overlay — you would have to re-implement all of this.

```tsx
import { Modal } from "@cloudoperators/juno-ui-components"

function ConfirmDelete({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal
      open={open}
      title="Delete project"
      confirmButtonLabel="Delete"
      onCancel={onClose}
      onConfirm={onClose}
    >
      This action cannot be undone.
    </Modal>
  )
}
```

Focus containment is legitimate here — Modals and overlays are the one place intentional focus
trapping is expected (`docs/ux/interaction-guidelines.md`, "Keyboard and Focus").

### Signal status with more than color, and announce it

Do not rely on color alone to convey information — pair every color signal with text or an icon
(`docs/ux/accessibility.md`, "Colour and Contrast"). Dynamic content (loading, success, errors
appearing after an action) must also be announced to screen readers via an aria-live role
(`docs/ux/accessibility.md`, "Dynamic Content").

`Status` does both: it always shows a title/body (text, not just color) and sets `role="alert"`
when `status="error"` and `role="status"` otherwise, so a status that appears after a fetch is
announced automatically.

```tsx
import { Status } from "@cloudoperators/juno-ui-components"

function LoadResult({ error }: { error?: Error }) {
  if (error) {
    // role="alert" — announced immediately
    return <Status status="error" title="Could not load" body={error.message} />
  }
  // role="status" — announced politely
  return <Status status="progress" title="Loading…" />
}
```

For application-driven updates that are **not** a Juno status component (e.g. a custom inline count
that changes), you own the announcement — read
[announcing dynamic content](references/announcing-dynamic-content.md) for the `role="status"` /
`role="alert"` / `aria-live` decision and a worked live-region example.

For the full semantic-HTML landmark, heading-order, and `aria-describedby` guidance that goes beyond
single components, read [semantic foundations](references/semantic-foundations.md).

## Common mistakes

- **CRITICAL — Clickable `<div>`/`<span>` instead of a `Button`/`<a>`.** A non-semantic element is
  not focusable or keyboard-operable and is announced with no role, so keyboard and screen-reader
  users cannot use it. Use `Button` (or an anchor for navigation); only make a `<div>` interactive
  when unavoidable, and then add every role, state, and key handler yourself.
  (`docs/ux/accessibility.md`, "Semantic HTML as the Foundation".)
- **CRITICAL — Icon-only control with no accessible name.** A `Button icon="…"` with no `label`,
  `title`, or `aria-label`, or an `Icon` with no `title`, is announced as empty. Always name the
  action: `<Button icon="deleteForever" title="Delete item" />`.
  (`docs/ux/accessibility.md`, "Labels and Accessible Names".)
- **HIGH — `placeholder` used as the label.** Placeholder text disappears on input and is not a
  reliable accessible name. Pass the component's `label` prop instead.
  (`docs/ux/accessibility.md`, "Labels and Accessible Names".)
- **HIGH — Hiding or overriding the focus ring.** Removing the visible focus indicator (e.g.
  `outline: none` or overriding Juno's ring) strands keyboard users. Leave the component's focus
  styles in place. (`docs/ux/accessibility.md`, "Keyboard Navigation and Focus".)
- **HIGH — Color as the only status signal.** A red/green border or dot with no text or icon is
  invisible to color-blind and screen-reader users. Pair color with a text label or icon; `Status`
  and the form components' `errortext`/`successtext` already do this.
  (`docs/ux/accessibility.md`, "Colour and Contrast".)
- **HIGH — Hand-rolled modal/overlay.** A custom overlay typically omits focus trapping, focus
  return, ESC-to-close, and `role="dialog"`/`aria-labelledby`. Use `Modal`, which supplies them.
  (`docs/ux/interaction-guidelines.md`, "Keyboard and Focus".)
- **MEDIUM — Silent dynamic updates.** Content that appears or changes after an action (results,
  errors, counts) with no aria-live region is never announced. Use `Status` (which sets the role)
  or an explicit live region for custom content. (`docs/ux/accessibility.md`, "Dynamic Content";
  `docs/ux/interaction-guidelines.md`, "Feedback".)
- **MEDIUM — Loose related inputs with no group name.** Separate checkboxes/radios without a
  wrapping labelled group are announced individually with no shared context. Wrap them in
  `CheckboxGroup`/`RadioGroup` with a `label`. (`docs/ux/accessibility.md`, "Labels and Accessible
  Names".)

## Completion

Verify:

1. No clickable `<div>`/`<span>`: every action is a `Button` and every navigation is an anchor
   (`Button` with `href`).
2. Every icon-only `Button`/`Icon` has a `title` (or `label`/`aria-label`) naming the action.
3. Every input uses its `label` prop; no `placeholder`-as-label; related inputs are grouped.
4. The focus ring is visible on every interactive element when tabbing; nothing suppresses it.
5. Overlays use `Modal` (focus trap + ESC + accessible name), not a hand-rolled container.
6. Every status/dynamic update shows text or an icon (not color alone) and is in an aria-live
   region (`Status`, or an explicit live region for custom content).
7. Run `npm exec --no -- intent validate packages/ui-components/skills` and fix any errors.

If a flow cannot be exercised with the keyboard or a screen reader in your test harness, report it
as unverified rather than assuming it is accessible.

## References

- [semantic foundations](references/semantic-foundations.md) — read for landmark regions, heading
  order, and wiring help/error text with `aria-describedby` beyond what a single component covers.
- [announcing dynamic content](references/announcing-dynamic-content.md) — read before adding a
  custom live region for app-driven updates that are not rendered by a Juno status component.
