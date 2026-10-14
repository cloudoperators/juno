# Modal patterns

Read this when confirming a destructive action, building an acknowledgement-only Modal, gating a
Modal that contains a form, or wiring Modal accessibility. Source: `docs/ux/modals.md` and
`packages/ui-components/src/components/Modal/Modal.component.tsx`.

## Destructive-action severity ladder

The `Modal` component gives you the hooks (`confirmButtonVariant`, `disableConfirmButton`,
`onConfirm`) but does not enforce a severity. Choose the level from the risk of the action
(`docs/ux/modals.md`, "Destructive Actions and Confirmation of Destructive Actions"):

| Severity | Means of confirmation                          | How to wire it                                                        |
| -------- | ---------------------------------------------- | --------------------------------------------------------------------- |
| Very Low | none — no Modal; maybe a toast                 | skip the Modal entirely                                               |
| Low      | one click on the confirm button               | `confirmButtonVariant="primary-danger"`, confirm always enabled       |
| Mid      | tick a checkbox, then confirm                  | `disableConfirmButton={!checked}`                                     |
| High     | type a required phrase, then confirm           | `disableConfirmButton={phrase !== "DELETE"}`                          |

For all but very-low-risk actions, follow up with a toast confirming the entity was actually deleted,
unless it is obvious from context or many identical actions would flood the user with notifications.

The medium-risk (checkbox-gated) pattern:

```tsx
import { useState } from "react"
import { Modal, Checkbox } from "@cloudoperators/juno-ui-components"

function RemoveUserModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [confirmed, setConfirmed] = useState(false)
  return (
    <Modal
      title="Remove User"
      open={open}
      confirmButtonLabel="Remove User"
      confirmButtonVariant="primary-danger"
      disableConfirmButton={!confirmed}
      onConfirm={onClose}
      onCancel={() => {
        setConfirmed(false)
        onClose()
      }}
    >
      <p>Removing user &apos;jsmith&apos; immediately revokes all project access.</p>
      <Checkbox
        label="Check the box to confirm removing user 'jsmith'"
        checked={confirmed}
        onChange={(e) => setConfirmed(e.target.checked)}
      />
    </Modal>
  )
}
```

Note the UX distinction: **Delete** and **Wipe** are destructive and warrant this ladder; **Remove**,
**Revoke**, and **Disable** are reversible and usually need less friction
(`docs/ux/popup-and-overflow-menus.md`, "Destructive Actions").

## Acknowledgement-only Modal

A Modal that only confirms acknowledgement of a fact should have a **single** button labelled
"Close" / "OK". With the built-in footer, render exactly one button by passing neither
`confirmButtonLabel` nor `onConfirm` — `ModalFooter` then renders a lone Close button
(`ModalFooter.component.tsx`). Do not add a `Message` to the body of such a Modal
(`docs/ux/modals.md`, "General Confirmation Modals").

```tsx
import { Modal } from "@cloudoperators/juno-ui-components"

function MaintenanceNotice({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal title="Maintenance Mode Enabled" open={open} onCancel={onClose}>
      Automated alerts for cluster &apos;prod-eu-west-1&apos; are suspended until you turn off
      maintenance mode.
    </Modal>
  )
}
```

## Form validation inside a Modal

When a Modal hosts a form, keep the confirm/primary button disabled until every required field has a
value and all validations pass; re-evaluate on `onChange` for a responsive feel
(`docs/ux/modals.md`, "Form Validation Specifics in Modals"). Use `initialFocus` with a selector or
`id` to focus the first field when the Modal opens:

```tsx
import { useState } from "react"
import { Modal, TextInput } from "@cloudoperators/juno-ui-components"

function CreateKeyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("")
  return (
    <Modal
      title="Create API Key"
      open={open}
      initialFocus="#key-name"
      confirmButtonLabel="Create"
      disableConfirmButton={name.trim() === ""}
      onConfirm={onClose}
      onCancel={onClose}
    >
      <TextInput id="key-name" label="Key name" value={name} onChange={(e) => setName(e.target.value)} required />
    </Modal>
  )
}
```

## Accessibility and dismissal

- The Modal sets `role="dialog"` and wraps content in a focus trap, so focus cycles inside and never
  leaves until it closes (`docs/ux/modals.md`, "Modal Accessibility").
- Give the Modal an accessible name: pass `title` or `heading` (the component wires
  `aria-labelledby`), or `ariaLabel` when there is no visible title.
- `closeOnEsc` (default `true`) and the close-X both call `onCancel`. `closeOnBackdropClick` is off by
  default; enabling it makes the Modal feel lighter but effectively "un-modals" it.
- Never set `closeable={false}` to trap a user — there must always be a way out
  (`docs/ux/modals.md`, "Never Lock Users in Modals").
