[← Back to Contents Overview](0_contents.md)

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

A Modal should have only one primary action. This is the action triggered when the user presses the **Enter** key while the Modal is open. The button that triggers the primary action is always the rightmost button, and it is a button of the `primary` variant, regardless of whether the Modal has only this one button or multiple buttons.

### Redundant Cancel/Close

A Modal has a Close (“X”) button in the top right, and a Cancel/Close button at the bottom. In most cases, these two will do the same thing: Cancel the Modal and close it.
However, there may be situations where they don't: The Cancel button will actually cancel an ongoing (background) action or process (as in terminating it), while the close-X in the top right will only close the Modal, without the actual process being affected. In order to allow the Modal component to work in these cases as well, the component does not automatically sync the states of the two buttons, e.g. users will have to make sure to disable both buttons individually when needed.

Both should close the Modal without changing the state of the application, effectively cancelling any pending actions.

When the user has to make a decision and the action can't be just cancelled or the modal closed, both the closing "X"-button and any "Cancel"/"Close"-buttons should be disabled, provided they represent the exact same action.

### General Confirmation Modals

General Confirmation Modals that only confrim acknowledgement of a fact or state shpuld only have one button labelled "Close", "OK", or some similar generic wording.

The title should represent the action or fact that is to be cofirmed, ideally and if possible with refrence to the name or other idientifying property of the affected entity.

Confirmation Modals should not carry an addiotnal Message element in the body.

When the action affects mutliple items or entities, the number and type of the items should be reflected.

### Destructive Actions and Confirmation of Destructive Actions

Modals may be used for destructive tasks, such as deleting an entity, or for confirming such tasks when triggered inline. In this case, the primary button must be styled as `primary-danger` (red).

As in modals confirming non-destructive actions, the Modal title should reflect the action and identify the affected item to re-assure users they are not going to destroy or delete items they didn't mean to delete. If multiple items are affected, the action, number, and type of items should be stated in the Modal header.

Modals confirming destructive Actions should NOT have a Danger Message in the Modal body.

For confirming destructive actions there are several levels of severity that require increasing user input in order to confirm potentially destructive and dangerous actions.
Very low risk actions don't require a Confirmation Modal at all.

| Severity | Means of Confirmation                             | Notes                                                                      |
| -------- | ------------------------------------------------- | -------------------------------------------------------------------------- |
| Very Low | none, no Modfal needed                            | see below as to whether to show a toast notification                       |
| Low      | Modal Button                                      | Confirming Modal Button is always enabled                                  |
| Mid      | Checkbox, then Confirmation Button                | Confirming Modal Button is enabled once user has checked the checkbox      |
| High     | Type a specified phrase, then Confirmation Button | Confirming Modal Button is enabled once user has entered a matching phrase |

For all destructive actions there should be a Toast Notification confirming the respective entitiy was actually deleted, unless the action is very low risk, it is obvious from the context, or many identical actions are expected resultingin a flood of notifications that are more annoying than reassuring.

### No Sign-In Modals

Do not use Modals for Sign-In. We have dedicated full-page Sign-In patterns.

### Multiple-Action Modals

Some Modals may allow the user to cancel/close or choose from multiple actions. If one action is the most likely or recommended action, it should be represented by a `primary` button, and be positioned as the rightmost button.

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

## Messages in Modals, Modal Semantics

It is usually not necessary to use `Message` inside a Modal just to convey contextual information to users. When using a semantic `Message` inside a Modal, make sure to align the semantics with the primary action button: `info`-semantics for the blue primary action button, `danger` when the action is potentially destructive, and the primary action button of the Modal is `primary-danger` (red). The overall goal is to not have different, i.e. conflicting semantic colors in the same Modal, as this will be perceived as highly confusing by users.

## Modal Accessibility

Modals should trap keyboard focus so it cycles within the focusable elements inside the Modal, and never leaves until the Modal is closed. A Modal should generally have `role="dialog"` assigned.

## Form Validation Specifics in Modals

In many instances, Modals will present some kind of form to the user to fill in order to proceed with the respective action represented by the Modal. Some or all of the fields will be mandatory to fill and/or require their value(s) to comply with specific validation rules. As long as any required field in the Modal does not have a value or a validation on any field in the Modal fails, the primary action/ confirming button must be disabled. Ideally, re-evaluate the fields (and thus the resulting state of the button) via `onChange` for a smooth and responsive feel.

## Never Lock Users in Modals

As a user should always be triggered by a user, it should also always be possible for the user to close a Modal by clicking the closing X-button and/or a Cancel button.
