# Inline add / edit / delete details

Read this before building inline list editing. Source:
`docs/ux/inline-adding-editing-and-deleting.md` and
`docs/ux/interaction-guidelines.md` ("Efficiency").

Use the inline pattern only for **simple, low-stakes** items a few fields wide, where in-place
interaction is faster than a Modal. For complex items with many fields, or high-criticality actions,
use a Modal or a dedicated page instead. Inline is primarily for standalone lists; DataGrids
typically add items via a Modal (patterns can be combined where it makes sense).

## When to use it

- Items are simple enough to edit with a small number of fields.
- The task is low-stakes and does not need focused attention away from the list.
- Adding/editing inline feels natural for the content structure.

## Inline adding — add at the bottom

Provide a clearly visible add action, typically a button at or near the top of the list. The new
item is appended at the **bottom** in its editable state, ready for input, and scrolled into view if
it is off-screen. Do not require more (or different) information to create an item than the list
already displays for existing items.

```tsx
import { useState } from "react"
import { Button, TextInput } from "@cloudoperators/juno-ui-components"

type Tag = { id: string; name: string; draft?: boolean }
declare function createTag(name: string): Promise<Tag>

function TagList({ initial }: { initial: Tag[] }) {
  const [tags, setTags] = useState<Tag[]>(initial)

  const addDraft = () =>
    setTags((prev) => [...prev, { id: `draft-${Date.now()}`, name: "", draft: true }])

  const commit = async (id: string, name: string) => {
    const saved = await createTag(name)
    setTags((prev) => prev.map((t) => (t.id === id ? saved : t)))
  }

  return (
    <div>
      <Button icon="addCircle" label="Add tag" onClick={addDraft} />
      {tags.map((tag) =>
        tag.draft ? (
          <TextInput
            key={tag.id}
            autoFocus
            placeholder="Tag name"
            onBlur={(e) => commit(tag.id, e.target.value)}
            aria-label="New tag name"
          />
        ) : (
          <div key={tag.id}>{tag.name}</div>
        )
      )}
    </div>
  )
}
```

## Inline editing — Save and Cancel

On edit, the item's display values are replaced by editable fields; the rest of the list stays
visible and unchanged. Always provide Save and Cancel. **Cancel must restore the item to its
previous state without saving** — snapshot the original value and write it back on cancel (see the
`TagRow` example in the main skill).

## Inline deleting — guard the in-flight state

Place a delete action (usually an icon button) on each item where the user has permission. The order
of operations matters:

1. On activation, **disable the action** while deletion is in progress (prevents double-submit).
2. Remove the item from the list **only after the request succeeds**.
3. If it fails, **retain the item** and surface an error.

```tsx
import { useState } from "react"
import { Icon, Message } from "@cloudoperators/juno-ui-components"

declare function deleteTag(id: string): Promise<void>

function DeletableTag({ id, name, onRemoved }: { id: string; name: string; onRemoved: () => void }) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const remove = async () => {
    setBusy(true)
    setError(null)
    try {
      await deleteTag(id)
      onRemoved() // remove from the list only after success
    } catch {
      setError("Could not delete tag.") // keep the item, show the error
      setBusy(false)
    }
  }

  return (
    <div>
      <span>{name}</span>
      <Icon icon="deleteForever" title={`Delete ${name}`} disabled={busy} onClick={remove} />
      {error && <Message variant="error" text={error} />}
    </div>
  )
}
```

## Escalate to a Modal

Use inline delete only for **low-criticality** deletions where accidental deletion is cheap. For
higher criticality, add a confirmation step — a Modal with the consequence stated up front and a
`primary-danger` confirm button (see the main skill's "Confirm consequential actions" and
`docs/ux/modals.md`).
