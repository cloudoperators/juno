# Choosing disable / hide / error for unauthorized controls

Read this when a control is gated by permissions and you must decide how to render it for a user who
may not be authorized. Source: `docs/ux/ui-for-unauthorized-users.md` and
`docs/ux/interaction-guidelines.md` ("Disabled States").

The decision depends on three things: the sensitivity/criticality of the action, how broadly the
feature is available, and whether you can know the user's authorization _before_ they act.

## Decision tree

1. **Do you know the user's authorization up front?**
   - **No** → there is no good UI-side choice. Render the control **fully functional** and rely on
     the API/system response, then show a "not authorized" error message. This is the least
     desirable option — only build it when it is impossible to learn authorization beforehand.
   - **Yes** → continue.
2. **Is the feature available to all/most/many users, with this user just not (yet) meeting a
   requirement?**
   - **Yes** → **render it disabled**, and communicate _why_ (tooltip on the button, or a message /
     info block next to it). A disabled element the user cannot explain is a dead end.
3. **Is the feature only for a privileged few, or does it touch very sensitive, business-critical
   data?**
   - **Yes** → **do not render it at all**. The probability this user will ever use it is very low,
     so showing it only adds noise.

## Disabled-with-reason: wrap the trigger

A disabled Juno `Button` sets the native `disabled` attribute (`Button.component.tsx`), which
suppresses pointer events — so a tooltip bound directly to the button never opens. Wrap the button
in a focusable/hoverable element and point `TooltipTrigger asChild` at that wrapper.

```tsx
import { Button, Tooltip, TooltipTrigger, TooltipContent } from "@cloudoperators/juno-ui-components"

function GatedAction({ allowed, reason }: { allowed: boolean; reason: string }) {
  if (allowed) {
    return <Button variant="primary" label="Terminate instance" />
  }
  return (
    <Tooltip triggerEvent="hover">
      <TooltipTrigger asChild>
        <span tabIndex={0}>
          <Button variant="primary" label="Terminate instance" disabled />
        </span>
      </TooltipTrigger>
      <TooltipContent>{reason}</TooltipContent>
    </Tooltip>
  )
}
```

## Functional + error (option 3)

When you cannot know authorization, let the action run and surface the server's refusal in place with
a `Message`. Keep the user's input intact so they are not forced to redo work.

```tsx
import { useState } from "react"
import { Button, Message } from "@cloudoperators/juno-ui-components"

declare function doAction(): Promise<void>

function OptimisticAction() {
  const [error, setError] = useState<string | null>(null)
  const run = async () => {
    setError(null)
    try {
      await doAction()
    } catch {
      setError("You are not authorized to perform this action.")
    }
  }
  return (
    <>
      <Button variant="primary" label="Run" onClick={run} />
      {error && <Message variant="error" title="Not authorized" text={error} />}
    </>
  )
}
```

## Notes

- Whatever you choose, be **consistent across the app**: do not disable the create button on one
  page and hide it on another (`docs/ux/interaction-guidelines.md`, "Consistency").
- "Partially known" permissions (you know some scopes, not others) usually resolve to option 1 for
  the known-denied cases and option 3 only for the genuinely unknown ones — do not blanket-apply
  option 3 just because one scope is uncertain.
