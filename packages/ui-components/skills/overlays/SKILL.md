---
name: overlays
description: >
  Use when building overlay UI in a Juno app with @cloudoperators/juno-ui-components: Modal dialogs
  with built-in or custom ModalFooter actions and destructive-action confirmation (checkbox / typed
  phrase), slide-in Panels with PanelBody and PanelFooter, Tooltips (TooltipTrigger + TooltipContent,
  hover vs. click, semantic variants), and PopupMenu overflow menus with sections and dividers. Also
  covers the PortalProvider these overlays render into. For the Button variants used in footers see
  the forms/actions material; for Status-based empty states inside tables see the datagrid skill.
metadata:
  purpose: >
    Teaches developers to build Juno overlays — Modal/ModalFooter, Panel/PanelBody/PanelFooter,
    Tooltip/TooltipTrigger/TooltipContent, and PopupMenu — so they are triggered by user action,
    render into the PortalProvider, confirm destructive actions at the correct severity, and order
    menu items by the UX rules the components do not enforce on their own.
  type: core
  library: "@cloudoperators/juno-ui-components"
  library_version: "9.6.0"
sources:
  - cloudoperators/juno:packages/ui-components/src/components/Modal/Modal.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Modal/Modal.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ModalFooter/ModalFooter.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Panel/Panel.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Panel/Panel.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/PanelBody/PanelBody.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/PanelFooter/PanelFooter.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Tooltip/Tooltip.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Tooltip/Tooltip.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/TooltipTrigger/TooltipTrigger.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/TooltipContent/TooltipContent.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/PopupMenu/PopupMenu.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/PopupMenu/PopupMenu.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/PortalProvider/PortalProvider.component.tsx
  - cloudoperators/juno:docs/ux/modals.md
  - cloudoperators/juno:docs/ux/popup-and-overflow-menus.md
  - cloudoperators/juno:docs/ux/interaction-guidelines.md
---

# Build overlays with Juno: Modal, Panel, Tooltip, PopupMenu

All four overlays render through a portal, so the app must be wrapped in `PortalProvider` (included
automatically by `AppShellProvider` — see the fundamentals material). `Modal` and `Panel` call
`usePortalRef()` and fall back to `document.body` if no provider is found, logging a console warning;
`PopupMenu` renders into `PortalProvider.Portal` and will not position correctly without it.

Every overlay must be opened by a prior user action — a button click, a menu choice, a hover. Never
auto-open a Modal on page load (`docs/ux/modals.md`, "No Modals Without Previous Interaction";
`docs/ux/interaction-guidelines.md`, "Clarity and Predictability").

## Setup

`Modal` is controlled by `open`; you own the state and the handlers. The built-in footer renders a
Cancel + Confirm pair as soon as you pass `confirmButtonLabel` or `onConfirm`. Note the component
does **not** close itself on confirm — `onConfirm` fires and you decide when to flip `open`.

```tsx
import { useState } from "react"
import { Modal, Button } from "@cloudoperators/juno-ui-components"

function AssignRoleButton() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button label="Assign Role" variant="primary" onClick={() => setOpen(true)} />
      <Modal
        title="Assign Role"
        open={open}
        confirmButtonLabel="Assign Role"
        cancelButtonLabel="Cancel"
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        Assign the role Operator to user@example.com? This grants access to all project resources.
      </Modal>
    </>
  )
}
```

State the action in the `title` and reference the affected object by name in the body — object names
are often long and get truncated in a title (`docs/ux/modals.md`, "Modal Content and Title").

## Core patterns

### Confirm a destructive action at the right severity

For destructive actions, set `confirmButtonVariant="primary-danger"` (red) and name the item in the
body. The UX doc defines a severity ladder — the component does not enforce it, you wire it with
`disableConfirmButton` (`docs/ux/modals.md`, "Destructive Actions"):

- **Low** — confirm button always enabled.
- **Mid** — a `Checkbox` gates the confirm button.
- **High** — the user must type a matching phrase.

```tsx
import { useState } from "react"
import { Modal, TextInput } from "@cloudoperators/juno-ui-components"

function DeleteProjectModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [phrase, setPhrase] = useState("")
  return (
    <Modal
      title="Delete Project"
      open={open}
      confirmButtonLabel="Delete Project"
      confirmButtonVariant="primary-danger"
      disableConfirmButton={phrase !== "DELETE"}
      onConfirm={onClose}
      onCancel={() => {
        setPhrase("")
        onClose()
      }}
    >
      <p>Project &apos;production-eu&apos; and all its resources will be permanently deleted.</p>
      <p>Type DELETE to confirm:</p>
      <TextInput value={phrase} onChange={(e) => setPhrase(e.target.value)} />
    </Modal>
  )
}
```

Do **not** add a danger `Message` to a destructive Modal body — the red confirm button already
carries the semantics, and mixed semantic colors confuse users (`docs/ux/modals.md`, "Messages in
Modals"). For the full severity table and the acknowledgement-only ("Close"-button) pattern, read
[modal patterns](references/modal-patterns.md).

### Replace the footer with a custom ModalFooter

When one Confirm + Cancel pair is not enough, pass a `modalFooter` element. `ModalFooter` with
children renders them verbatim (no default buttons), so you lay out the buttons and keep the
rightmost one `primary` as the single primary action (`docs/ux/modals.md`, "One Primary Action"):

```tsx
import { Modal, ModalFooter, ButtonRow, Button } from "@cloudoperators/juno-ui-components"

function CustomFooterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal
      title="Review Changes"
      size="large"
      open={open}
      onCancel={onClose}
      modalFooter={
        <ModalFooter>
          <ButtonRow>
            <Button variant="subdued" label="Cancel" onClick={onClose} />
            <Button variant="primary-danger" label="Discard" onClick={onClose} />
            <Button variant="primary" label="Save" onClick={onClose} />
          </ButtonRow>
        </ModalFooter>
      }
    >
      Review and choose how to proceed.
    </Modal>
  )
}
```

With a custom footer the built-in sync between the Cancel button and the top-right close-X no longer
applies. If you need to disable dismissal, pass `disableCloseButton` to the `Modal` **and** disable
your custom buttons together — disabling one and leaving the other lets users bypass the restriction
(`docs/ux/modals.md`, "Redundant Cancel/Close").

### Slide in a Panel for a form or detail drawer

`Panel` slides in from the right and is a better fit than a Modal for longer content or a create/edit
form on the current view. It is controlled by `opened`. Compose `PanelBody` for content and pass a
`PanelFooter` to `PanelBody`'s `footer` prop so the footer pins below the scrolling body:

```tsx
import { useState } from "react"
import { Panel, PanelBody, PanelFooter, Button, TextInput } from "@cloudoperators/juno-ui-components"

function NewPeeringPanel() {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Button label="New Peering" variant="primary" onClick={() => setOpened(true)} />
      <Panel heading="New Peering" opened={opened} onClose={() => setOpened(false)}>
        <PanelBody
          footer={
            <PanelFooter>
              <Button label="Cancel" variant="subdued" onClick={() => setOpened(false)} />
              <Button label="Create" variant="primary" onClick={() => setOpened(false)} />
            </PanelFooter>
          }
        >
          <TextInput label="Name" />
        </PanelBody>
      </Panel>
    </>
  )
}
```

`Panel` always gives a heading region; always set `heading` so the drawer is labelled
(`docs/ux/modals.md` — Modal/Panel/Page is a task-complexity choice; the Panel story notes "Panels
should have a heading"). `PanelFooter` right-aligns its buttons automatically.

### Add a Tooltip

A Tooltip is composed of three parts: a `Tooltip` wrapper holding the shared state, a
`TooltipTrigger`, and a `TooltipContent`. Uncontrolled, pick `triggerEvent="hover"` for a passive
hint or `"click"` (the default) for one the user opts into. Use `asChild` to make an existing
element (Icon, Button) the trigger instead of wrapping it in the default `<button>`:

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, Icon } from "@cloudoperators/juno-ui-components"

function HelpHint() {
  return (
    <Tooltip triggerEvent="hover">
      <TooltipTrigger asChild>
        <Icon icon="help" />
      </TooltipTrigger>
      <TooltipContent>Peerings connect two networks across accounts.</TooltipContent>
    </Tooltip>
  )
}
```

Pass a `variant` (`info`, `warning`, `danger`, `error`, `success`) to add a semantic icon and color.
To drive it yourself, pass `open` to make the Tooltip controlled — `triggerEvent` is then ignored and
you manage opening and closing. See [tooltip modes](references/tooltip-modes.md) for the controlled
pattern and variant guidance.

### Build an overflow menu with PopupMenu

`PopupMenu` renders a `moreVert` (three-dot) toggle by default and holds its items in
`PopupMenuOptions`. Order items by importance, **not** alphabetically: put any View/Details action
first and the destructive action last, separated by a `PopupMenuSectionSeparator`
(`docs/ux/popup-and-overflow-menus.md`, "Menu Item Order and Grouping"):

```tsx
import {
  PopupMenu,
  PopupMenuOptions,
  PopupMenuItem,
  PopupMenuSectionSeparator,
} from "@cloudoperators/juno-ui-components"

declare function navigate(to: string): void

function ItemActions({ id }: { id: string }) {
  return (
    <PopupMenu>
      <PopupMenuOptions>
        <PopupMenuItem label="View Item Details" onClick={() => navigate(`/items/${id}`)} />
        <PopupMenuItem label="Copy Item" />
        <PopupMenuItem label="Download Item" icon="download" />
        <PopupMenuSectionSeparator />
        <PopupMenuItem label="Delete Item" icon="deleteForever" />
      </PopupMenuOptions>
    </PopupMenu>
  )
}
```

For a menu spanning multiple entity types, wrap each group in a `PopupMenuSection` and separate
groups with `PopupMenuSectionSeparator` — within a group, do not add an extra divider before the
destructive item (`docs/ux/popup-and-overflow-menus.md`, "Grouping"). For custom toggles via `as`,
`PopupMenuSectionHeading`, link items, and closing from custom content, read
[popup menu composition](references/popup-menu-composition.md).

## Common mistakes

- **CRITICAL — Modal does not close on confirm by itself.** `onConfirm` fires but the Modal stays
  open; set `open={false}` in your handler once the action succeeds, or the dialog lingers over a
  completed task (Modal source: "we do not close the modal automatically").
- **CRITICAL — Custom footer bypasses dismissal lock.** With `modalFooter`, disabling only your
  Cancel button leaves the close-X live. Pass `disableCloseButton` to `Modal` and disable both
  together (`docs/ux/modals.md`, "Redundant Cancel/Close").
- **HIGH — Destructive confirm without `primary-danger` + named item.** A blue confirm button and a
  vague "Are you sure?" title fail to signal irreversibility. Use `confirmButtonVariant="primary-danger"`
  and name the item in the body (`docs/ux/modals.md`, "Destructive Actions", "Don't").
- **HIGH — Alphabetically sorted or View-last menu.** Order by frequency; View first, destructive
  last with a divider (`docs/ux/popup-and-overflow-menus.md`, "Item Order").
- **HIGH — PopupMenu or Modal without a PortalProvider.** The menu mispositions and Modal/Panel warn
  and fall back to `document.body`. Wrap the app in `AppShellProvider`/`PortalProvider`
  (PopupMenu source: "using Juno's PortalProvider … is mandatory").
- **MEDIUM — Non-closeable Modal / locking the user in.** `closeable={false}` removes every exit and
  is an antipattern; prefer a `Message`. A user must always be able to close a Modal
  (`docs/ux/modals.md`, "Never Lock Users in Modals").
- **MEDIUM — Confirming routine actions.** Do not wrap navigating, filtering, or sorting in a
  confirmation Modal; reserve confirmation for destructive or surprising actions
  (`docs/ux/interaction-guidelines.md`, "Confirmation of Consequential Actions").
- **MEDIUM — Stacking Modals or confusing Modal vs. Panel.** Never open a Modal from inside a Modal;
  use a Panel for longer forms on the current view (`docs/ux/modals.md`, "When Not to Use a Modal").

## Completion

Verify:

1. Every overlay is opened by a user action, and the app is wrapped in `PortalProvider` /
   `AppShellProvider` (no `usePortalRef` console warning).
2. Modals close in their own `onConfirm`/`onCancel`; a user can always dismiss (close-X or Cancel).
3. Destructive Modals use `primary-danger`, name the item in the body, and gate the confirm button at
   the correct severity (always-on / checkbox / typed phrase).
4. PopupMenu items are frequency-ordered: View first, destructive last behind a divider.
5. Run `npm exec --no -- intent validate packages/ui-components/skills` and fix any errors.

If an overlay state (e.g. the failure path of a confirm handler) cannot be exercised in your test
harness, report it as unverified rather than assuming it renders.

## References

- [modal patterns](references/modal-patterns.md) — read for the destructive-action severity table,
  acknowledgement-only Modals, form-validation gating, and accessibility/focus-trap notes.
- [tooltip modes](references/tooltip-modes.md) — read before using a controlled Tooltip or choosing a
  semantic variant and placement.
- [popup menu composition](references/popup-menu-composition.md) — read for custom toggles (`as`),
  section headings, link items, menu sizing, and closing the menu from custom content.
