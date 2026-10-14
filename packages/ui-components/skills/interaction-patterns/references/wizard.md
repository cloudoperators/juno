# Wizard composition

Read this before composing a multi-step wizard. Source: `docs/ux/wizard.md` and, for validation and
submission feedback, `docs/ux/forms.md`.

> The dedicated step-indicator component and the Modal wizard variant are still in
> design/development (`docs/ux/wizard.md`, note). Until they ship, compose the behavior from `Modal`
> and `Button` as shown here. When the official components land, migrate to them.

## When a wizard is the right choice

Use a wizard only when the task:

- consists of multiple distinct steps that must be completed in order,
- is too complex or long for a single Modal or form,
- has decisions in earlier steps that affect what later steps show.

If the task is short and self-contained, use a single Modal with a form instead
(`docs/ux/wizard.md`, "When to Use a Wizard").

## Contexts

- **In a Modal** — focused, self-contained tasks that do not warrant leaving the page. Keep the step
  count low.
- **On a standalone page** — significant tasks with many steps or long/complex step content.

## Anatomy and navigation rules

- A **step indicator** showing position, with completed / current / upcoming steps differentiated.
- A **content area** for the current step's fields.
- **Navigation actions**: a **Back** button on every step except the first (returns without losing
  input), a **Next** button **disabled while required fields in the current step are missing or
  invalid**, and on the last step a **Submit** button labeled to reflect the final action
  ("Create" / "Finish").
- Always provide **Cancel**; cancelling must not persist partial state unless the wizard explicitly
  supports saving progress.
- **Validate each step before advancing**; never validate a future step before the user reaches it.
- **Preserve input** when moving Back and Next. Completed steps in the indicator may be made directly
  clickable **only when steps are independent** — if later steps depend on earlier ones, require
  sequential navigation.
- Each step has a single clear purpose; do not bundle unrelated fields. Indicator labels are short
  (one to three words).

## Worked example (Modal-hosted, three steps)

```tsx
import { useState } from "react"
import { Button, ButtonRow, Modal, ModalFooter, TextInput } from "@cloudoperators/juno-ui-components"

type Draft = { name: string; region: string; confirmed: boolean }
declare function createCluster(draft: Draft): Promise<void>

const STEP_LABELS = ["Name", "Region", "Review"]

function CreateClusterWizard({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState<Draft>({ name: "", region: "", confirmed: false })
  const [busy, setBusy] = useState(false)

  // Validate only the current step; never a step the user has not reached.
  const stepValid = step === 0 ? draft.name.trim() !== "" : step === 1 ? draft.region !== "" : true
  const isLast = step === STEP_LABELS.length - 1

  const submit = async () => {
    setBusy(true)
    await createCluster(draft)
    setBusy(false)
    onClose()
  }

  const footer = (
    <ModalFooter>
      <ButtonRow>
        <Button variant="subdued" label="Cancel" disabled={busy} onClick={onClose} />
        {step > 0 && (
          <Button label="Back" disabled={busy} onClick={() => setStep((s) => s - 1)} />
        )}
        {isLast ? (
          <Button
            variant="primary"
            label="Create"
            progress={busy}
            progressLabel="Creating…"
            disabled={busy}
            onClick={submit}
          />
        ) : (
          <Button
            variant="primary"
            label="Next"
            disabled={!stepValid}
            onClick={() => setStep((s) => s + 1)}
          />
        )}
      </ButtonRow>
    </ModalFooter>
  )

  return (
    <Modal open={open} title={`Create cluster — ${STEP_LABELS[step]}`} modalFooter={footer} onCancel={onClose}>
      {step === 0 && (
        <TextInput
          label="Cluster name"
          value={draft.name}
          onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
        />
      )}
      {step === 1 && (
        <TextInput
          label="Region"
          value={draft.region}
          onChange={(e) => setDraft((d) => ({ ...d, region: e.target.value }))}
        />
      )}
      {step === 2 && (
        <div>
          Create cluster <strong>{draft.name}</strong> in <strong>{draft.region}</strong>?
        </div>
      )}
    </Modal>
  )
}
```

## Notes

- The `draft` state lives above the step index, so moving Back and Next never loses input — this is
  what satisfies the "preserve input" rule.
- `Next` is gated on `stepValid` for the current step only; the Review step is always valid because
  its inputs were validated earlier.
- Passing a custom `modalFooter` replaces the Modal's default Confirm/Cancel buttons, which is how
  you get Back / Next / Submit in one row.
- For submission feedback (success toast, inline error on failure) follow the forms skill and
  `docs/ux/forms.md` ("Submission Feedback").
