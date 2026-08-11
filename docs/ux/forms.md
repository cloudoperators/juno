[← Back to UX Patterns](ux-patterns.md) | [← Back to Contents Overview](0_contents.md)

# Forms

## When to Use a Form

Forms are the standard pattern for collecting structured input from users.

**Inline form** — use when the form is a natural, primary part of the current view and the user is expected to interact with it as part of their normal flow. Inline forms work well for simple, focused tasks.

**Modal form** — use when the form represents a discrete, self-contained task that benefits from focused attention but does not warrant leaving the current page. Modal forms are best kept short. See [Modals](modals.md) for guidance specific to forms inside a modal, including form validation rules.

**Dedicated form page** — use when the form is complex, long, or represents a significant task in its own right — such as an onboarding flow or creating an entity with many attributes.

## Form Layout

### Field Ordering

Group related fields together. Present fields in a logical sequence that reflects the user's mental model of the task, not the underlying data model. Where a natural order exists — for example, name before contact details before address — follow it.

### Required vs. Optional Fields

Mark required fields clearly. Do not rely on colour alone to communicate required state — always use a visible text indicator or label.

### Single-Column vs. Two-Column Layouts

Single-column is the recommended default. A two-column layout may be appropriate when fields are short and closely related — for example, a "First Name" / "Last Name" pair.

## Validation

### When to Validate

There is no single right answer — the appropriate moment depends on the type of field and the consequence of the error.

- **On blur** — validate when the user leaves a field. This is the safest default: it avoids flagging errors before the user has finished typing, while still providing early feedback.
- **On submit** — validate all fields when the user attempts to submit the form. Always validate on submit regardless of whether earlier validation was already applied.
- **As-you-type** — use sparingly. Appropriate for fields with strict format requirements (e.g. a slug or an API key pattern) where immediate feedback is genuinely helpful. Avoid for fields where partial input is always temporarily invalid, such as a number field being typed character by character.

Never show validation errors on required but untouched fields before the user has interacted with them or attempted to submit.

### Inline Field Errors vs. Summary Errors

Display errors inline, directly below the field they relate to, whenever the error can be attributed to a specific field. Inline errors are easier to act on because they are co-located with the field that needs correction.

Use a summary error at the top of the form — or at the top of the affected section — when an error cannot be attributed to a single field (for example, a cross-field business rule violation), or when submit-time validation fails and multiple fields are affected. Make the summary message specific: explain what went wrong and what the user should do.

Do not use both an inline error and a summary error for the same problem — pick the one that is closer to where the user needs to act.

See [Error Handling, Loading and Empty States](error-handling-loading-empty-states.md) for guidance on error message wording.

### Cross-Field Validation

When a validation rule spans multiple fields — for example, a password confirmation field — show the error on the dependent field (the one whose value is the problem), not on the field that was filled in first. If the relationship is ambiguous, show the error at section level.

## Conditional and Dependent Fields

When fields are shown or hidden based on other field values, make the change predictable and avoid erasing user input unexpectedly.

- Clearly indicate what triggers additional fields.
- Avoid clearing a field’s value when it is temporarily hidden; restore it if the field reappears unless clearing is required for correctness and communicated to the user.

## Submit and Cancel Actions

### Button Placement and Order

Place the primary submit action and any cancel action at the bottom of the form, left-aligned with the form content. The primary action is always the rightmost button. A cancel action, if present, sits to its left.

### Disabling Submit Until Valid

Disabling the submit button until the form is valid can prevent errors, but it can also leave users with no feedback as to why they cannot proceed — particularly if validation errors are not yet visible. Use this pattern only when the form is simple enough that the invalid state is always obvious to the user, or when combined with real-time inline validation that makes the issue immediately apparent.

For longer or more complex forms, prefer keeping the submit button enabled and triggering full validation on submit, surfacing all errors at that point.

### Destructive Submit Actions

When the submit action is destructive — for example, deleting or permanently modifying an entity — the submit button should use the `primary-danger` variant. For guidance on when and how additional confirmation is required for a destructive action, see [Modals — Destructive Actions](modals.md#destructive-actions-and-confirmation-of-destructive-actions).

See [UX Writing / Content Guidelines](ux-writing-content-design.md) for button label conventions.

## Submission Feedback

### In-Progress State

Once the user submits a form, show a loading or busy state on the submit button immediately to communicate that the action is being processed. Disable the button and any cancel action for the duration to prevent duplicate submissions. See [Transient States and Progress](transient-states-and-progress.md) for loading indicator guidance.

### Success

On successful submission, do one of the following depending on context:

- **Navigate away** — if the form created or edited an entity that has its own detail view, navigate to that view. This makes the result of the action immediately visible.
- **Close and confirm** — if the form was in a modal, close the modal and show a toast notification confirming the action was completed.
- **Inline confirmation** — if the form is embedded in a page and navigation is not appropriate, replace or update the form area with a confirmation message.

For actions that complete asynchronously, use a toast notification to confirm the outcome once it is known. Never combine a toast notification with an in-page confirmation message for the same action.

### Failure

Distinguish between validation errors and server-side errors:

- **Validation errors** — the user's input is invalid. Surface these inline as described in the Validation section above. Do not navigate away or close the form.
- **Server-side errors** — the request failed for a reason outside the user's input (e.g. a network error, a conflict, or a server fault). Show an error message at the top of the form or, for modal forms, inside the modal. The message should explain what went wrong and, where possible, what the user can do — for example, whether retrying is likely to help.

See [Messages & Notifications](messages-and-notifications.md) for guidance on which component to use for submission feedback.
