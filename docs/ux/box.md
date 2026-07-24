[← Back to Contents Overview](0_contents.md)

# Box

`Box` is a lightweight container component with a subtle border and background. It is intended for annotations, supplementary explanations, and contextual remarks — situations where content needs to be visually set apart from the surrounding layout without the stronger semantic weight of a `Message`.

## When to Use Box

Use `Box` to:

- Present supplementary or contextual information that is related to nearby content but secondary to the main flow
- Group and visually separate a block of content without implying urgency or status
- Annotate a section of the UI with a note, hint, or explanation
- Add subtle emphasis to a short block of text

Do not use `Box` for system-generated feedback — operation results, errors, or status changes. Use `Message` for those cases.

## Semantic Variants

`Box` supports semantic variants (`info`, `success`, `warning`, `error`, `danger`) via the `variant` prop. Variants adjust the border and background color to communicate the nature of the content. Use them when the content of the Box carries a clear semantic meaning — for example, a caution note (`warning`) or a confirmation (`success`).

When no variant is specified, `Box` renders in its default neutral style.

Always choose the variant based on the meaning of the content, not for visual effect. See [Semantic Variants](semantic-variants.md) for guidance on which variant to use in a given situation.

## Inline Action Box

The **Inline Action Box** is a pattern built on `Box` for situations where a contextual message or notice needs to offer the user one or more follow-up actions — without interrupting the current flow with a Modal.

### When to Use

Use the Inline Action Box pattern when:

- The user needs to be informed of a condition or state **and** offered a direct way to act on it, in context
- The action is optional or secondary — the user should be able to ignore it and continue
- The situation does not warrant the interruption and focus-lock of a Modal

Do not use this pattern as a replacement for a Modal when the action requires user focus or a deliberate decision. If the action is destructive or requires confirmation, use a Modal instead.

### Anatomy

An Inline Action Box consists of:

1. **Content area** — a short description of the condition or context. Keep it concise.
2. **Divider** — visually separates the content from the actions below.
3. **Action area** — one or two buttons, right-aligned. Prefer a single action. If two are present, one should be a secondary or tertiary option (e.g. "Learn more" or "Dismiss").

### Variant

Choose a semantic variant that matches the nature of the message in the content area. If the notice is purely informational, the default (no variant) or `info` is appropriate.

### Example Structure

```tsx
<Box variant="warning">
  <p>The current configuration has not been saved.</p>
  <Divider />
  <Stack distribution="end">
    <Button variant="primary">Save Configuration</Button>
  </Stack>
</Box>
```

### Do

- Keep the content area brief — one or two sentences at most
- Use a single primary action where possible
- Align actions to the right

### Don't

- Do not use more than two action buttons
- Do not use the Inline Action Box for destructive actions that require confirmation — use a Modal
- Do not nest Inline Action Boxes
