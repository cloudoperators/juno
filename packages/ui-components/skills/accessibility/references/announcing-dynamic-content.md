# Announcing dynamic content

Read this when application code produces an update that is **not** rendered by a Juno status
component — a custom inline count that changes, a background sync message, a result banner you
assemble yourself — and you need a screen reader to announce it. Sources:
`docs/ux/accessibility.md` ("Dynamic Content"), `docs/ux/interaction-guidelines.md` ("Feedback").

## Prefer a component that already announces

Before writing a live region, check whether a Juno component covers the case — it will set the role
for you:

- **Status** sets `role="alert"` when `status="error"` and `role="status"` otherwise. Use it for
  loading / empty / no-matches / error states.
  (`packages/ui-components/src/components/Status/Status.component.tsx`.)
- **Message** forwards extra props to its root `<div>`, so pass `role="status"` (non-urgent) or
  `role="alert"` (urgent) when a Message appears dynamically.
- For toast-style notifications that must announce without stealing focus, use the Juno
  notification/toast components — see the feedback skill.

```tsx
import { Message } from "@cloudoperators/juno-ui-components"

function SaveResult({ saved }: { saved: boolean }) {
  if (!saved) return null
  // appears after an action → announce politely
  return <Message variant="success" role="status" text="Changes saved." />
}
```

## Choosing the role for custom content

| Situation                                     | Use                                  | Why                                |
| --------------------------------------------- | ------------------------------------ | ---------------------------------- |
| Error that needs immediate attention          | `role="alert"` (implies assertive)   | Interrupts and is read at once     |
| Non-urgent update (count, "saved", progress)  | `role="status"` (implies polite)     | Read after the current utterance   |
| A region you update repeatedly, finer control | `aria-live="polite"` / `"assertive"` | Explicit politeness on a container |

Reserve `alert`/`assertive` for things the user must act on now — overusing it is as unhelpful as
no announcement at all.

## Worked example: a custom live region

Render the live-region container **before** the content changes (empty is fine). Updating the text
of an element that is already a live region is what gets announced; inserting a brand-new live
region at the same time as its content is less reliable.

```tsx
import React, { useState } from "react"
import { Button } from "@cloudoperators/juno-ui-components"

declare function runSearch(): Promise<number>

function SearchStatus() {
  const [message, setMessage] = useState("")

  async function onSearch() {
    setMessage("Searching…")
    const count = await runSearch()
    setMessage(`${count} results found`)
  }

  return (
    <div>
      <Button label="Search" onClick={() => void onSearch()} />
      {/* live region is always present; only its text changes */}
      <p role="status" aria-live="polite">
        {message}
      </p>
    </div>
  )
}
```

Every action that triggers a process must be acknowledged, loading included
(`docs/ux/interaction-guidelines.md`, "Feedback"). Announcing the start ("Searching…") and the
outcome ("12 results found") makes the process perceivable without sight of the screen.

## Loading and progress specifically

Juno's `Spinner` and `LoadingIndicator` render `role="progressbar"`. Wrapping a region that is being
replaced with `aria-busy={true}` while it loads lets assistive tech know the content is in flux. Do
not replace a whole page with a bare spinner — scope the busy/loading indication to the region that
is actually changing (`docs/ux/interaction-guidelines.md`, "Feedback").
