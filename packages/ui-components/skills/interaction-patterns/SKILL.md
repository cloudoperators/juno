---
name: interaction-patterns
description: >
  Use when designing interaction flows in a Juno app built with @cloudoperators/juno-ui-components:
  confirming consequential or destructive actions with a Modal, deciding whether to disable, hide,
  or always-render a control the user may not be authorized for, adding/editing/deleting items
  inline in a list, breaking a long task into a multi-step wizard, and laying out the overall
  sign-in → home → scope → list → detail page flow. This is a UX-guidelines skill: it tells you
  which pattern to reach for and wires real Juno components (Button, Modal, Tooltip, Icon,
  TextInput, Message) into each. For the Modal API itself see the overlays skill; for form
  validation see the forms skill; for the DataGrid list view see the datagrid skill.
metadata:
  purpose: >
    Teaches developers to choose and implement Juno's interaction patterns correctly — confirmation
    of destructive actions, the disable/hide/error decision for unauthorized controls, inline
    add/edit/delete, multi-step wizards, and the standard page-and-user flow — grounded in the UX
    guidelines so apps stay predictable and consistent instead of each screen inventing its own
    affordances.
  type: core
  library: "@cloudoperators/juno-ui-components"
  library_version: "9.6.0"
sources:
  - cloudoperators/juno:packages/ui-components/src/components/Button/Button.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Button/Button.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Modal/Modal.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Modal/Modal.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ModalFooter/ModalFooter.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Tooltip/Tooltip.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/TextInput/TextInput.component.tsx
  - cloudoperators/juno:docs/ux/interaction-guidelines.md
  - cloudoperators/juno:docs/ux/inline-adding-editing-and-deleting.md
  - cloudoperators/juno:docs/ux/wizard.md
  - cloudoperators/juno:docs/ux/ui-for-unauthorized-users.md
  - cloudoperators/juno:docs/ux/page-and-user-flow.md
---

# Design interaction flows in a Juno app

Interactions in Juno apps should feel predictable: buttons look like buttons, every action gets
feedback, and the same action uses the same pattern everywhere in the app
(`docs/ux/interaction-guidelines.md`, "Clarity and Predictability" / "Consistency"). This skill
covers the five flow-level decisions the component library does **not** make for you: when to
confirm, whether to disable/hide/error an unauthorized control, how to add/edit/delete inline, when
to reach for a wizard, and how pages connect. It uses real Juno components in every example but is
primarily about *which* pattern to choose.

## Setup

The patterns below compose existing components; there is nothing to install beyond the library and
its `AppShellProvider` wrapper (see the fundamentals skill if styles are missing). The one piece of
machinery that recurs is the controlled `Modal`: its `open` prop is driven by your state, and it
does **not** close itself on confirm — your `onConfirm` must flip the state.

```tsx
import { useState } from "react"
import { Button, Modal } from "@cloudoperators/juno-ui-components"

function DangerExample() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="primary-danger" label="Delete" onClick={() => setOpen(true)} />
      <Modal
        open={open}
        title="Delete project?"
        confirmButtonLabel="Delete"
        confirmButtonVariant="primary-danger"
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        This permanently deletes the project and all its resources. This cannot be undone.
      </Modal>
    </>
  )
}
```

## Core patterns

### Confirm consequential and destructive actions — and only those

Reserve confirmation for destructive/irreversible actions (delete, terminate, revoke) and for
actions whose consequences the user may not have anticipated. Do **not** confirm routine, obvious
actions like navigating, filtering, sorting, or selecting — unnecessary dialogs are friction with no
benefit (`docs/ux/interaction-guidelines.md`, "Confirmation of Consequential Actions").

Make irreversibility explicit in the copy **before** the user commits, and label the confirm button
with the verb, not "OK". Use `confirmButtonVariant="primary-danger"` for destructive confirms so the
button reads as dangerous.

```tsx
import { useState } from "react"
import { Button, Modal } from "@cloudoperators/juno-ui-components"

declare function revokeToken(id: string): Promise<void>

function RevokeTokenButton({ id }: { id: string }) {
  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(false)

  const confirm = async () => {
    setBusy(true)
    await revokeToken(id)
    setBusy(false)
    setOpen(false)
  }

  return (
    <>
      <Button variant="primary-danger" label="Revoke" onClick={() => setOpen(true)} />
      <Modal
        open={open}
        title="Revoke this token?"
        confirmButtonLabel="Revoke token"
        confirmButtonVariant="primary-danger"
        disableConfirmButton={busy}
        disableCancelButton={busy}
        onConfirm={confirm}
        onCancel={() => setOpen(false)}
      >
        Any client using this token will stop working immediately. This action is irreversible.
      </Modal>
    </>
  )
}
```

Prefer reversible workflows where you can; only fall back to confirmation when the action truly
cannot be undone (`docs/ux/interaction-guidelines.md`, "Reversibility"). For severity levels of
destructive confirmation (e.g. type-to-confirm), see the overlays skill and `docs/ux/modals.md`.

### Give every action feedback

Every action that starts a process or changes state must be acknowledged by the UI — never leave the
user guessing (`docs/ux/interaction-guidelines.md`, "Feedback"). The Juno `Button` has this built
in: pass `progress` to show a spinner, and `progressLabel` to swap the label while in flight. Keep
the button disabled while busy so it cannot be double-submitted.

```tsx
import { useState } from "react"
import { Button } from "@cloudoperators/juno-ui-components"

declare function save(): Promise<void>

function SaveButton() {
  const [busy, setBusy] = useState(false)
  const onClick = async () => {
    setBusy(true)
    await save()
    setBusy(false)
  }
  return (
    <Button
      variant="primary"
      label="Save"
      progress={busy}
      progressLabel="Saving…"
      disabled={busy}
      onClick={onClick}
    />
  )
}
```

On success reflect the new state immediately; if the result is not visible in the current view, use
a toast (see the feedback skill). On failure surface an actionable error (see below and the forms
skill).

### Decide disabled vs hidden vs always-functional for unauthorized controls

When a control is gated by permissions, pick one of three options from the context — do not default
to disabling everything (`docs/ux/ui-for-unauthorized-users.md`):

1. **Render disabled** when the feature is available to most users and *this* user just does not meet
   a requirement, **and you know** their authorization up front. Explain *why* it is disabled with a
   tooltip or nearby message — a bare disabled button is a dead end
   (`docs/ux/interaction-guidelines.md`, "Disabled States").
2. **Do not render** when the feature is only for a privileged few or touches very sensitive data —
   the current user will almost never be able to use it.
3. **Render fully functional, handle the API error** only when you **cannot know** the user's
   authorization beforehand; rely on the system response and show a "not authorized" message. This
   is the least desirable option — use it only when option 1 or 2 is impossible.

The disabled-with-reason case is the one developers most often get wrong. A disabled Juno `Button`
cannot itself fire hover events, so wrap the trigger (not the button) and use `asChild`:

```tsx
import { Button, Tooltip, TooltipTrigger, TooltipContent } from "@cloudoperators/juno-ui-components"

function CreateButton({ canCreate }: { canCreate: boolean }) {
  if (!canCreate) {
    return (
      <Tooltip triggerEvent="hover">
        <TooltipTrigger asChild>
          <span>
            <Button variant="primary" label="Create project" disabled />
          </span>
        </TooltipTrigger>
        <TooltipContent>You need the project-admin role to create projects.</TooltipContent>
      </Tooltip>
    )
  }
  return <Button variant="primary" label="Create project" />
}
```

For option 3, show the server's refusal with a `Message` of `variant="error"` near the control:

```tsx
import { Message } from "@cloudoperators/juno-ui-components"

function NotAuthorized({ error }: { error?: string }) {
  if (!error) return null
  return <Message variant="error" title="Not authorized" text={error} />
}
```

Read [choosing disable / hide / error](references/authorization-ui.md) for the full decision tree,
including how to pick when permissions are only partially known.

### Add, edit, and delete items inline in a list

For simple, low-stakes items a few fields wide, let users edit **in place** rather than opening a
Modal (`docs/ux/inline-adding-editing-and-deleting.md`). On edit, the item's display values are
replaced by editable fields while the rest of the list stays visible; always offer **Save** and
**Cancel**, and Cancel must restore the previous values without saving.

```tsx
import { useState } from "react"
import { Button, ButtonRow, TextInput } from "@cloudoperators/juno-ui-components"

type Tag = { id: string; name: string }
declare function persist(tag: Tag): void

function TagRow({ tag }: { tag: Tag }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(tag.name)

  if (!editing) {
    return (
      <ButtonRow>
        <span>{tag.name}</span>
        <Button size="small" icon="edit" label="Edit" onClick={() => setEditing(true)} />
      </ButtonRow>
    )
  }
  return (
    <ButtonRow>
      <TextInput value={draft} onChange={(e) => setDraft(e.target.value)} aria-label="Tag name" />
      <Button
        size="small"
        variant="primary"
        label="Save"
        onClick={() => {
          persist({ ...tag, name: draft })
          setEditing(false)
        }}
      />
      <Button
        size="small"
        variant="subdued"
        label="Cancel"
        onClick={() => {
          setDraft(tag.name) // restore previous state, discard the edit
          setEditing(false)
        }}
      />
    </ButtonRow>
  )
}
```

Inline **delete** is typically an icon button per item. While the request is in flight, disable the
action; remove the item only after it succeeds, and keep it (showing an error) if it fails. Use
inline delete only for low-criticality deletions — add a confirmation step (the Modal above) for
higher-criticality ones. New items are added at the **bottom** in their editable state and scrolled
into view; do not require more fields to create an item than the list already shows.

Read [inline add/edit/delete details](references/inline-crud.md) for the add-at-bottom flow, the
in-flight delete states, and when to escalate to a Modal instead.

### Break long, sequential tasks into a wizard

Use a wizard only when a task has multiple ordered steps, is too long for a single form, or has
early decisions that change later steps (`docs/ux/wizard.md`). If the task is short and
self-contained, a single Modal with a form is the better fit — do not wrap a two-field form in a
wizard.

> The step-indicator component and the Modal wizard variant are still in design/development
> (`docs/ux/wizard.md`, note). Until they ship, compose the behavior yourself from `Modal`/`Button`:
> a **Back** button on every step except the first, a **Next** button disabled while the current
> step is invalid, and a final step whose **Next** becomes **Submit** ("Create"/"Finish"). Input
> must be preserved across Back/Next, and always offer Cancel.

Read [wizard composition](references/wizard.md) for a worked multi-step example and the step
validation / revisiting rules before building one.

### Lay out the overall page flow

Follow the standard Juno flow so navigation is predictable across apps
(`docs/ux/page-and-user-flow.md`): Sign In → Home (overview of what the user owns/can access) →
navigate into a scope (via Side Navigation) → **list view** (a DataGrid, see the datagrid skill) →
**detail view**. Every detail view must be deep-linkable with a stable URL, and must offer an
explicit way back to the list — a breadcrumb **and** a back button — never relying on the browser
back button alone. Give every page a heading describing its contents ("Servers", "Images"); omit it
only when genuinely redundant (e.g. an obvious Dashboard).

## Common mistakes

- **CRITICAL — No feedback on a state-changing action.** A button that fires a request but shows no
  spinner, no disabled state, and no success/error leaves users re-clicking and unsure. Use
  `progress`/`progressLabel` + `disabled`, then a toast or inline result.
  (`docs/ux/interaction-guidelines.md`, "Feedback".)
- **CRITICAL — Irreversible action with no confirmation or an unclear one.** Destructive/irreversible
  actions must be confirmed with the consequence stated up front and a verb-labeled
  `primary-danger` confirm button — not a generic "OK".
  (`docs/ux/interaction-guidelines.md`, "Confirmation of Consequential Actions" / "Reversibility".)
- **HIGH — Confirming routine actions.** Dialogs on navigate/filter/sort/select are pure friction.
  Reserve confirmation for destructive or non-obvious actions only.
  (`docs/ux/interaction-guidelines.md`, "Confirmation of Consequential Actions".)
- **HIGH — Bare disabled control with no reason.** A disabled button the user cannot explain is a
  dead end; attach a tooltip or nearby message saying why (and remember a disabled button cannot
  fire its own hover — wrap it). (`docs/ux/ui-for-unauthorized-users.md`, "Render Disabled
  Elements"; `docs/ux/interaction-guidelines.md`, "Disabled States".)
- **HIGH — Modal assumed to self-close.** `Modal` does not close on confirm; your `onConfirm` must
  flip the `open` state, or the dialog hangs after the action completes.
  (`Modal.component.tsx`, `onConfirm` doc: "we do not close the modal automatically".)
- **HIGH — Inline delete removes the row before the request succeeds.** Disable the action in flight
  and only remove on success; keep the item and show an error on failure.
  (`docs/ux/inline-adding-editing-and-deleting.md`, "Inline Deleting".)
- **MEDIUM — Wizard for a short task.** Multi-step chrome for a two-field form is overkill; use a
  single Modal form. Reserve the wizard for genuinely long, ordered, branching tasks.
  (`docs/ux/wizard.md`, "When to Use a Wizard".)
- **MEDIUM — Inconsistent pattern for the same action.** If creating a resource uses a Modal in one
  place, use a Modal for it everywhere in the app; do not optimize one screen in isolation.
  (`docs/ux/interaction-guidelines.md`, "Consistency".)
- **MEDIUM — Detail view with no stable URL or no in-page back.** Detail pages must be
  deep-linkable and reachable back to the list via breadcrumb + back button.
  (`docs/ux/page-and-user-flow.md`, "Detail Views".)

## Completion

Verify:

1. Every state-changing action shows in-flight feedback (`progress`/`disabled`) and a success or
   error result.
2. Destructive/irreversible actions are confirmed with the consequence stated up front and a
   `primary-danger` confirm button; routine actions are **not** confirmed.
3. Each Modal's `onConfirm`/`onCancel` actually flips its `open` state.
4. Unauthorized controls follow one deliberate choice (disable-with-reason / hide / functional +
   error), consistent with the rest of the app.
5. Inline edit offers Save + Cancel (Cancel restores previous values); inline delete disables while
   in flight and removes only on success.
6. The same action uses the same pattern everywhere in the app.
7. Run `npm exec --no -- intent validate packages/ui-components/skills` and fix any errors.

If a flow state (e.g. the server-side authorization error, or a failed inline delete) cannot be
exercised in your harness, report it as unverified rather than assuming it renders.

## References

- [choosing disable / hide / error](references/authorization-ui.md) — read when gating a control by
  permissions and deciding how to render it for users who may not be authorized.
- [inline add/edit/delete details](references/inline-crud.md) — read before building inline list
  editing, including add-at-bottom and the in-flight delete states.
- [wizard composition](references/wizard.md) — read before composing a multi-step wizard flow (step
  validation, Back/Next/Submit, revisiting steps).
