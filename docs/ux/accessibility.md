[← Back to Contents Overview](0_contents.md)

# Accessibility

Juno applications should be usable by everyone, including users who rely on assistive technologies such as screen readers, keyboard navigation, or other input devices.

## Semantic HTML as the Foundation

The single most effective accessibility measure is writing correct, semantic HTML. Using the right element for the right purpose — `<button>` for actions, `<a>` for navigation, `<nav>`, `<main>`, `<header>`, `<footer>` for landmark regions, heading elements in the correct order — gives assistive technologies the structural information they need to present and navigate content correctly. Most accessibility problems originate from non-semantic markup, and using semantic HTML eliminates a large class of issues before they can arise.

Do not use `<div>` or `<span>` for interactive elements unless there is a clear, unavoidable reason. When non-semantic elements must be made interactive, all required ARIA roles, states, and keyboard behaviour must be added manually.

## Labels and Accessible Names

Every interactive element must have an accessible name — a human-readable label that assistive technologies can announce.

- **Form inputs** must have a visible `<label>` element explicitly associated with the input via matching `for`/`id` attributes. Do not use `placeholder` text as a substitute for a label.
- **Icon-only buttons and controls** that have no visible text label must carry an `aria-label` describing the action (e.g. `aria-label="Close"`, `aria-label="Delete item"`), or a `title` attribute where `aria-label` is not applicable.
- **Groups of related inputs** (e.g. radio groups, checkbox groups) should be wrapped in a `<fieldset>` with a `<legend>`, or in a container with `role="group"` and `aria-labelledby` referencing a visible heading.
- **Sections and regions** that need to be distinguishable in the accessibility tree — such as repeated landmark regions — should be differentiated using `aria-label` or `aria-labelledby`.

When there is a visible label or heading available, always prefer `aria-labelledby` referencing that element over a separate `aria-label` — it avoids duplication and keeps visible and announced labels in sync.

## Descriptive and Help Text

When inputs have associated help text, hints, or error messages, link them to the input using `aria-describedby`. This ensures screen readers announce the additional text in context. Juno form components handle this automatically when help text and error messages are provided through the component API — use them rather than implementing custom adjacent text.

## Keyboard Navigation and Focus

All interactive elements must be reachable and operable via keyboard alone. Tab order should follow the visual reading order of the page. Disabled elements should be removed from the tab order.

Visible focus indicators must never be suppressed. Juno UI Components provide focus ring styles; do not override or hide them.

Dialogs, modals, and overlays must trap focus while open and return focus to the triggering element when closed. Juno's Modal component handles this automatically.

## Colour and Contrast

Do not rely on colour alone to convey information — always pair colour with a text label, icon, or other non-colour indicator. This applies to status indicators, validation states, and any other use of colour as a signal.

Ensure sufficient colour contrast between text and its background.

## Dynamic Content

Content that updates dynamically — notifications, status messages, loading states, errors appearing after form submission — must be communicated to screen reader users. Use `aria-live` regions or the appropriate ARIA roles (`role="alert"` for urgent messages, `role="status"` for non-urgent updates) to ensure dynamic changes are announced. Juno's notification and message components handle this where applicable; custom dynamic content in application code must be handled explicitly.
