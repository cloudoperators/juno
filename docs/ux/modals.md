# Modals

A Modal is a focused UI element that interrupts user flow and prevents interaction with the underlying page or view until it is completed or dismissed.

Best used for short, self-contained tasks or decisions that require user focus. Tasks in a Modal require completion or dismissal before the user can continue interacting with the current page or view.

## When to Use a Modal

Use a Modal when the contained task…

- needs immediate attention or a decision
- requires confirmation or acknowledgement, especially (but not exclusively) when the task is destructive
- cannot be completed inline in the current page or view, **or**
- requires user focus and is better completed when the surrounding page or view can be ignored for the duration of the task
- is too complex or critical for a pop-up or inline completion and represents a task, action, or event that is too singular in nature to be suitably represented in a Panel or on a full Page

**If a task fits most of the above criteria but is multi-step, the Wizard pattern may be the best fit.**

## When Not to Use a Modal

A Modal is likely not the most suitable solution if the task…

- is not urgent or immediate
- can easily be completed at any time inline in the natural flow of the current page or view
- contains excessively large or long content that would be better handled on a separate page or view
- is triggered by a parent task that already runs in a Modal (never stack Modals)
- is not a task but a simple, non-essential notification or message — use Message or Notification (TBD) instead
- requires many different action buttons at the bottom. Consider using a menu of options and then using a Modal only to confirm the selected action.

## Modal Anatomy

A Modal consists of a backdrop and the Modal itself:

The **backdrop** dims the underlying page or view, helping the user focus and preventing interaction with the underlying content.

The **Modal** contains a Header with a title and a Close button, a content area, and an area that holds the buttons used to confirm or cancel the action.

## Modal Actions, Behaviour, and Interaction

### No Modals Without Previous Interaction

Do not show Modals without user interaction. A Modal must be triggered by a prior user action — for example, clicking a button or choosing an option from a menu.

### One Primary Action

A Modal should have only one primary action. This is the action triggered when the user presses the **Enter** key while the Modal is open.

### Redundant Cancel/Close

A Modal has a Close (“X”) button in the top right, and a Cancel/Close button at the bottom. Both should close the Modal without changing the state of the application, effectively cancelling any pending actions.

### Destructive Actions and Confirmation of Destructive Actions

Modals may be used for destructive tasks, such as deleting an entity, or for confirming such tasks when triggered inline. In this case, the primary button should be styled as `primary-danger`.

### No Sign-In Modals

Do not use Modals for Sign-In. We have dedicated full-page Sign-In patterns.

### Multiple-Action Modals

Some Modals may allow the user to cancel/close or choose from multiple actions. If one action is the most likely or recommended action, it should be represented by a `primary` button.

## Modal Content and Title

Keep Modal content short, descriptive, and concise. Modals are not a good place for long texts.

Each Modal should have a title that clearly reflects the task or action, ideally referencing the affected object(s) or entity in a way that conveys the expected outcome when the user confirms the action. Avoid unnecessary alarmism, use title case for the title, and stick to our [UX Writing and Content Design guidelines](ux-writing-content-design.md).

### Don't

Avoid titles that are vague, alarmist, overly generic, or that fail to indicate what will happen:

- "Danger!"
- "Delete"
- "Are you sure?"
- "Action Required"
- "Please confirm"
- "Attention!"
- "This can't be undone!"

### Do

Use titles that clearly state the action and the affected object or entity:

- "Delete Object 12aB9"
- "Remove User 'ArnoldS' from Project"
- "Add Organization 'frontend-devs' to Project"
- "Revoke API Key 'dev-key-03'"

## Modal Accessibility

Modals should trap keyboard focus so it cycles within the focusable elements inside the Modal, and never leaves until the Modal is closed. A Modal should generally have `role="dialog"` assigned.
