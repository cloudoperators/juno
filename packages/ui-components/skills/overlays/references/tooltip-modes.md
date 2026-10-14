# Tooltip modes and variants

Read this before using a controlled Tooltip or picking a semantic variant/placement. Source:
`packages/ui-components/src/components/Tooltip/Tooltip.component.tsx`,
`TooltipTrigger.component.tsx`, `TooltipContent.component.tsx`, and `Tooltip.stories.tsx`.

A Tooltip is always three nested components under one `Tooltip` wrapper that owns the shared state:
`TooltipTrigger` (the anchor) and `TooltipContent` (the floating bubble). `TooltipContent` renders
nothing while closed or when the Tooltip is `disabled`.

## Uncontrolled: hover vs. click

Uncontrolled is the common case — the Tooltip manages its own open state. Pick the trigger event:

- `triggerEvent="hover"` — passive hint, opens on pointer hover. Use for help text and labels.
- `triggerEvent="click"` (default) — opens on click, for content the user deliberately reveals.

```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@cloudoperators/juno-ui-components"

function Hint() {
  return (
    <Tooltip triggerEvent="hover" placement="right">
      <TooltipTrigger>
        <span>Peering status</span>
      </TooltipTrigger>
      <TooltipContent>Shows whether both ends of the peering are active.</TooltipContent>
    </Tooltip>
  )
}
```

Pass `initialOpen` to render it open on first mount (uncontrolled only). `placement` accepts the
twelve floating-ui values (`top`, `top-start`, `right`, `bottom-end`, `left`, …); the default is
`top`.

## `asChild`: use an existing element as the trigger

By default `TooltipTrigger` renders its own `<button>`. Pass `asChild` to project the trigger
behavior onto the single child element instead — use this for an `Icon` or `Button` so you do not nest
a button inside a button:

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, Icon } from "@cloudoperators/juno-ui-components"

function IconHint() {
  return (
    <Tooltip triggerEvent="hover">
      <TooltipTrigger asChild>
        <Icon icon="info" />
      </TooltipTrigger>
      <TooltipContent>Read-only field, managed by the controller.</TooltipContent>
    </Tooltip>
  )
}
```

## Semantic variants

Pass `variant` to add a leading icon and themed color to the content bubble. Allowed values:
`info`, `warning`, `danger`, `error`, `success` (`ToolTip.types.ts`). `error` renders the
`dangerous` icon; the others render the icon of the same name.

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, Icon } from "@cloudoperators/juno-ui-components"

function WarningHint() {
  return (
    <Tooltip variant="warning" triggerEvent="hover">
      <TooltipTrigger asChild>
        <Icon icon="warning" />
      </TooltipTrigger>
      <TooltipContent>This resource is scheduled for decommissioning.</TooltipContent>
    </Tooltip>
  )
}
```

## Controlled mode

Pass `open` to take control. The Tooltip then ignores `triggerEvent` and you drive opening/closing
yourself — e.g. to show a tooltip in response to validation state rather than hover. Provide an
accessible way to toggle it.

```tsx
import { useState } from "react"
import { Tooltip, TooltipTrigger, TooltipContent, Button } from "@cloudoperators/juno-ui-components"

function ControlledTooltip() {
  const [open, setOpen] = useState(false)
  return (
    <Tooltip open={open}>
      <TooltipTrigger asChild>
        <Button label="Toggle hint" onClick={() => setOpen((v) => !v)} />
      </TooltipTrigger>
      <TooltipContent>Shown while the controlled state is open.</TooltipContent>
    </Tooltip>
  )
}
```

`disabled` short-circuits everything: an uncontrolled Tooltip can no longer open, the trigger shows
the default cursor instead of a pointer, and `TooltipContent` returns `null`.
