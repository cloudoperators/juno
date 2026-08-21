[← Back to Contents Overview](0_contents.md)

# Inline Adding, Editing, and Deleting Items

The inline pattern allows users to add, edit, and delete items directly within a list, without leaving the current view or opening a Modal. It works best for simple, low-complexity items where in-place interaction is faster and more immediate than a dedicated form or dialog.

## When to Use This Pattern

Use the inline pattern when…

- items in the list are simple enough to be edited with a small number of fields
- the task is low-stakes and does not require focused attention away from the list
- adding or editing inline feels natural given the structure of the content

For complex items with many fields, or when the action is high-criticality, consider a Modal or a dedicated page instead.

This pattern is primarily intended for standalone lists. DataGrids typically use a Modal for adding items, though the patterns can be combined where appropriate.

## Inline Editing

When a user initiates an edit, the list item transforms in place: its display values are replaced by editable fields. The surrounding list remains visible and unchanged.

Provide a way to confirm the edit (e.g. a Save button) and a way to cancel it. Cancelling must restore the item to its previous state without saving any changes.

## Inline Adding

Provide a clearly visible action to add a new item — typically a button at or near the top of the list. The new item is added at the bottom of the list. If the new item is not visible in the current viewport, scroll to bring it into view so users can interact with it immediately.

The new item should appear in its editable state, ready for input.

## Inline Deleting

Where items can be deleted and the user has the necessary permissions, a delete action — typically an icon button — can be placed on each item. On activation, the item is removed.

Use the inline delete pattern only for low-criticality deletions where the consequences of accidental deletion are minimal. For higher-criticality actions, add a confirmation step — see [Modals — Destructive Actions](modals.md#destructive-actions-and-confirmation-of-destructive-actions) for guidance on choosing the appropriate confirmation level based on severity.
