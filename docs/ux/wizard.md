[← Back to Contents Overview](0_contents.md)

# Wizard

> [!NOTE]
> The Wizard pattern is not yet fully implemented. The step indicator component and the Modal variant of the Wizard are currently in design/development. We will remove this note once implementation is complete.

A Wizard guides users through a complex or sequential task by breaking it into discrete, ordered steps. Use it when a task is too complex or long for a single form but has a clear linear sequence.

## When to Use a Wizard

Use the Wizard pattern when the task…

- consists of multiple distinct steps that must be completed in order
- is too complex or long for a single Modal or form
- involves decisions in earlier steps that affect what is shown in later steps

**If the task is short and self-contained, a single Modal with a form is likely a better fit.** See [Modals](modals.md).

## Wizard Contexts

**In a Modal** — for focused, self-contained tasks that do not warrant leaving the current page. Keep the number of steps low.

**On a standalone page** — for significant tasks where the number of steps is large or step content is too long or complex for a modal.

## Wizard Anatomy

A Wizard consists of:

- A **step indicator** showing the user's position in the overall flow, with completed, current, and upcoming steps visually differentiated.
- A **content area** with the fields or inputs for the current step.
- **Navigation actions** to move between steps and submit.

## Navigation and Actions

Each step has a **Back** button (all steps except the first) and a **Next** button. Back returns to the previous step without losing input. Next is disabled while required fields in the current step are missing or invalid.

The last step replaces **Next** with a **Submit** button — labelled to reflect the final action, e.g. "Create" or "Finish".

Always provide a way to cancel. Cancelling must not persist partial state unless the Wizard explicitly supports saving progress.

## Step Validation

Validate each step before allowing the user to advance. Never validate a future step before the user reaches it. See [Forms — Validation](forms.md#validation) for guidance.

## Revisiting Previous Steps

Input must be preserved when navigating back and forward. Completed steps in the indicator may be made directly clickable only when steps are independent — if later steps depend on earlier ones, require sequential navigation.

## Submission Feedback

Follow the same feedback patterns as for forms. See [Forms — Submission Feedback](forms.md#submission-feedback).

## Step Content and Labels

Each step should have a single clear purpose. Do not bundle unrelated fields into one step. Step labels in the indicator should be short — one to three words — describing what the step is about.
