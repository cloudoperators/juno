# Validation timing, errors, and submission

Read this when deciding when to validate, how to place errors (inline vs. summary), handling
cross-field rules, or wiring the submit → success/failure lifecycle. Grounded in
`docs/ux/forms.md` ("Validation", "Submit and Cancel Actions", "Submission Feedback") and the
input `invalid`/`valid`/`errortext`/`successtext` props.

## When to validate

- **On blur** — the safe default. Validate when the field loses focus, so you don't flag errors
  mid-typing but still give early feedback.
- **On submit** — always validate everything on submit, even if blur validation already ran.
- **As-you-type** — only for strict formats (slug, API-key pattern) where immediate feedback helps.
  Avoid it for fields that are temporarily invalid while being typed (e.g. a number field).

Never show a validation error on a required-but-untouched field before interaction or a submit
attempt.

## Inline vs. summary errors

- **Inline** (field's own `errortext` + `invalid`) — whenever the error belongs to one field. It
  sits next to the control the user must fix.
- **Summary** (one message at the top of the form or section) — for errors that cannot be pinned to
  a single field (a cross-field business rule), or when a submit flags several fields at once. Make
  it specific: say what went wrong and what to do.

Do not use both inline and summary for the **same** problem.

## Cross-field rules

Put the error on the **dependent** field — the one whose value is the problem — not the field filled
in first. Password confirmation is the canonical case:

```tsx
import { useState } from "react"
import { Form, FormRow, TextInput, Button } from "@cloudoperators/juno-ui-components"

function SetPasswordForm() {
  const [pw, setPw] = useState("")
  const [confirm, setConfirm] = useState("")
  const mismatch = confirm !== "" && confirm !== pw

  return (
    <Form title="Set password">
      <FormRow>
        <TextInput
          name="password"
          type="password"
          label="Password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          name="confirm"
          type="password"
          label="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          invalid={mismatch}
          errortext={mismatch ? "Passwords do not match." : undefined}
        />
      </FormRow>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  )
}
```

If the relationship is ambiguous, show the error at section level instead.

## Submit lifecycle

Show a busy state on the submit button the moment the user submits, and disable both the submit and
cancel buttons for the duration to prevent duplicate submissions. On success do one of: navigate to
the created/edited entity's detail view; close a modal and show a confirming toast; or replace the
form area with an inline confirmation. Never pair a toast with an in-page confirmation for the same
action.

```tsx
import { useState } from "react"
import { Form, FormRow, TextInput, Message, Button } from "@cloudoperators/juno-ui-components"

declare function saveProject(name: string): Promise<void>
declare function navigate(to: string): void

function SaveProjectForm() {
  const [name, setName] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string>()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setServerError(undefined)
    try {
      await saveProject(name)
      navigate("/projects")
    } catch {
      setServerError("Could not save the project. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form title="New project" onSubmit={onSubmit}>
      {serverError && <Message variant="error" text={serverError} className="jn:mb-4" />}
      <FormRow>
        <TextInput name="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </FormRow>
      <Button variant="primary" type="submit" disabled={submitting} progress={submitting}>
        {submitting ? "Saving…" : "Save"}
      </Button>
    </Form>
  )
}
```

## Validation errors vs. server errors

- **Validation errors** (bad input) — surface inline per the rules above; do not navigate away or
  close the form.
- **Server-side errors** (network/conflict/fault, outside the user's input) — show a `Message` at
  the top of the form (or inside the modal), explaining what happened and whether retrying helps.
  Use the `error` semantic variant for a failure; reserve `danger` for destructive-action
  confirmations (`docs/ux/semantic-variants.md`, "`error` vs. `danger`").

## Disabling submit until valid

Only disable the submit button when the invalid state is always obvious to the user (short forms),
or when paired with real-time inline validation. For longer forms, keep submit enabled and surface
all errors on submit. Modal forms are the exception: disable the primary action while required
fields are missing/invalid.
