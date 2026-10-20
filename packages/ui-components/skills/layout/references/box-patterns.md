# Box patterns

`Box`, `IntroBox`, and the Inline Action Box pattern set content apart from the surrounding layout.

## Box

A lightweight bordered container for annotations, supplementary explanations, and contextual
remarks — not for system feedback (`docs/ux/box.md`, "When to Use Box"). For operation results,
errors, and status changes use `Message` instead.

Props:

- `title?: string` — optional bold label above the content. Do not add one by default; most Boxes
  are self-explanatory in context (`docs/ux/box.md`, "Title").
- `variant?: "info" | "success" | "warning" | "error" | "danger"` — a semantic variant that adjusts
  border and background color. Choose it by the **meaning** of the content, never for visual effect.
  Omit it for a neutral Box.
- `unpad?: boolean` — remove the default padding (`default false`).

```tsx
import { Box } from "@cloudoperators/juno-ui-components"

function Notes() {
  return (
    <>
      <Box>Instances are billed hourly.</Box>
      <Box title="Note" variant="info">
        Changes take a few minutes to propagate.
      </Box>
    </>
  )
}
```

## IntroBox

A more prominent block that introduces the contents, purpose, or state of a page or view.

Props:

- `title?: string` and `text?: string` — the heading and body text. `children` take precedence over
  `text`.
- `variant?: "default" | "hero"` — `"hero"` renders a larger font and more padding.
- `heroImage?: string` — a CSS background-image string for the hero variant (import svg images with
  the `?url` query param, per `IntroBox.stories.tsx`).

```tsx
import { IntroBox } from "@cloudoperators/juno-ui-components"

function PageIntro() {
  return (
    <IntroBox
      variant="hero"
      title="Welcome to the Console"
      text="Manage instances, networks, and storage from one place."
    />
  )
}
```

## Inline Action Box

A pattern built on `Box` for a contextual notice that also offers one or two follow-up actions,
without the focus-lock of a Modal (`docs/ux/box.md`, "Inline Action Box"). Compose it from a `Box`
(with a matching semantic `variant`), a `Divider`, and a right-aligned `Stack` of actions.

Rules from the UX doc:

- Keep the content area brief — one or two sentences.
- Prefer a single primary action; at most two buttons, the second a secondary/tertiary option.
- Align actions to the right.
- Do **not** use it for destructive actions that require confirmation — use a Modal.
- Do not nest Inline Action Boxes.

```tsx
import { Box, Divider, Stack, Button } from "@cloudoperators/juno-ui-components"

declare function dismiss(): void
declare function openDocs(): void

function QuotaNotice() {
  return (
    <Box variant="info" title="Approaching quota">
      <p>You have used 85% of your instance quota.</p>
      <Divider spacing="2" />
      <Stack direction="horizontal" gap="2" distribution="end">
        <Button variant="subdued" label="Dismiss" onClick={dismiss} />
        <Button variant="primary" label="Learn more" onClick={openDocs} />
      </Stack>
    </Box>
  )
}
```

## Divider

A 1px horizontal separator. `spacing` adjusts the vertical space around it (same Tailwind token set
as `Stack`'s `gap`, default `"1"`); `color` overrides the line color with a Tailwind `border-color`
class (e.g. `jn:border-juno-blue-3`).

```tsx
import { Divider } from "@cloudoperators/juno-ui-components"

function Separated() {
  return (
    <>
      <p>Section one</p>
      <Divider spacing="6" />
      <p>Section two</p>
    </>
  )
}
```
