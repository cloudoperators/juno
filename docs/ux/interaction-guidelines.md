[← Back to Contents Overview](0_contents.md)

# Interaction Guidelines

Interactions in Juno applications should feel predictable, efficient, and respectful of the user's expertise and time. These guidelines define the general standards all Juno applications should follow.

## Clarity and Predictability

Users should be able to discover interactive elements easily: Rely on established visual conventions – buttons should look like buttons, links should look like links. Do not invent affordances users have to learn.

Users should be able to anticipate the outcome of any action before they take it: Labels, icons, and context should make the result self-evident. If a consequence extends beyond what is immediately visible — a cascading change, a non-obvious scope — try to make it explicit upfront.

Avoid surprise. An interaction that does something unexpected erodes trust in the application as a whole.

## Feedback

Every action that triggers a process or a state change must be acknowledged by the UI. Do not leave users guessing whether their action was registered.

- Indicate loading or processing states visually — see [Transient States And Progress](transient-states-and-progress.md)
- On success, reflect the updated state immediately; if the result is not visible in the current view, use a toast notification — see [Messages and Notifications](messages-and-notifications.md)
- On failure, surface a clear, actionable error message — see [Error Handling, Loading And Empty States](error-handling-loading-empty-states.md)

## Confirmation of Consequential Actions

Not every action requires confirmation — unnecessary confirmation dialogs create friction without benefit.

Reserve confirmation for:

- Destructive or irreversible actions (deleting, terminating, revoking)
- Actions with consequences the user may not have fully anticipated

Do not ask users to confirm routine actions that are self-explanatory or 100% predictable and obvious, such as navigating, filtering, sorting, or selecting.

For guidance on confirmation patterns and severity levels for destructive actions, see [Modals — Destructive Actions](modals.md#destructive-actions-and-confirmation-of-destructive-actions).

## Reversibility

Prefer reversible workflows where feasible. Where an action cannot be undone, design accordingly: make the irreversibility explicit in labels, copy, or confirmation dialogs before the user commits — not after.

## Efficiency

Minimize the number of steps required to complete common tasks. Smart defaults, sensible pre-selections, and inline patterns all reduce unnecessary effort — see [Inline Adding, Editing, and Deleting Items](inline-adding-editing-and-deleting.md).

Do not add steps, confirmations, or UI elements that do not serve a clear purpose for the user.

## Consistency

Use consistent interaction patterns for the same type of action across the application. If opening a form to create a resource uses a Modal in one place, use a Modal everywhere in the same application for the same type of action.

Do not introduce new interaction patterns where an established Juno pattern covers the need.

Never improve a pattern in one place while leaving other instances of the same pattern unchanged. The inconsistency introduced will almost always outweigh the gain of the local optimization. If it is worth changing, change it everywhere. If you can't change it everywhere now, don't change it in a single place — schedule the consistent change for a later iteration instead. Never sacrifice in-app consistency for gains on other fronts.

## Disabled States

Use disabled states sparingly and purposefully. If an element is disabled, users should be able to understand why — from context or from a tooltip.

For guidance on when to disable, when to omit, and when to render fully functional elements, see [UI Elements for Non-Authorized Users](ui-for-unauthorized-users.md).

## Keyboard and Focus

All interactive elements must be reachable and operable via keyboard. Focus order must follow a logical, predictable path through the interface.

Do not trap focus except in Modals and overlay patterns where intentional focus containment is required. For broader keyboard and focus guidance, see [Accessibility](accessibility.md).
