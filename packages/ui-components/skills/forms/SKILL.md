---
name: forms
description: >
  Use when building forms with Juno inputs in @cloudoperators/juno-ui-components: text fields,
  textareas, selects, native selects, combo boxes, checkboxes, radios, switches, toggle buttons,
  secret/date fields, grouping with Form/FormRow/FormSection, labels and hints, validation state
  and timing (helptext/errortext/successtext, invalid/valid), and the dedicated SignInForm. For a
  data table and its filter toolbar, see the datagrid skill; for Status-based page states, see the
  feedback skill.
metadata:
  purpose: >
    Teaches developers to compose the Juno form primitives into accessible, UX-compliant forms:
    picking the right input for the data, labelling and hinting fields the Juno way (the `label`
    prop, not a standalone Label), driving validation state through invalid/valid plus
    errortext/successtext, choosing when to validate, and the sign-in form's deliberately
    different (no-validation) rules the library does not enforce for you.
  type: core
  library: "@cloudoperators/juno-ui-components"
  library_version: "9.6.0"
sources:
  - cloudoperators/juno:packages/ui-components/src/components/Form/Form.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/FormRow/FormRow.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/FormSection/FormSection.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/FormHint/FormHint.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Label/Label.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/TextInput/TextInput.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/TextInput/TextInput.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Textarea/Textarea.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/SearchInput/SearchInput.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/SecretText/SecretText.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Checkbox/Checkbox.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Radio/Radio.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/RadioGroup/RadioGroup.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/RadioGroup/RadioGroup.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Switch/Switch.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ToggleButton/ToggleButton.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Select/Select.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Select/Select.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/SelectOption/SelectOption.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/SelectDivider/SelectDivider.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/NativeSelect/NativeSelect.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/NativeSelectOption/NativeSelectOption.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/NativeSelectOptionGroup/NativeSelectOptionGroup.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ComboBox/ComboBox.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ComboBoxOption/ComboBoxOption.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/InputGroup/InputGroup.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/InputGroup/InputGroup.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/DateTimePicker/DateTimePicker.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/SignInForm/SignInForm.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/SignInForm/SignInForm.stories.tsx
  - cloudoperators/juno:docs/ux/forms.md
  - cloudoperators/juno:docs/ux/sign-in.md
  - cloudoperators/juno:docs/ux/authentication-and-access.md
  - cloudoperators/juno:docs/ux/semantic-variants.md
---

# Build a form with Juno inputs

Juno form controls are mostly self-contained: each input renders its own label, help/error/success
text, and validation styling from props — you rarely assemble those pieces by hand. The structural
components (`Form`, `FormSection`, `FormRow`) only add spacing and headings; the inputs do the
labelling and validation display. The two patterns that trip people up are **labelling** (use the
`label` prop, not a standalone `Label`) and **validation state** (drive it with `invalid`/`valid`
plus `errortext`/`successtext`), both covered below.

## Setup

```tsx
import { Form, FormSection, FormRow, TextInput, Select, SelectOption, Button } from "@cloudoperators/juno-ui-components"

declare function createProject(data: { name: string; region: string }): void

function CreateProjectForm() {
  return (
    <Form title="Create project">
      <FormSection title="Details">
        <FormRow>
          <TextInput name="name" label="Project name" required />
        </FormRow>
        <FormRow>
          <Select name="region" label="Region" required>
            <SelectOption value="eu-de-1">EU (Germany)</SelectOption>
            <SelectOption value="us-east-1">US (East)</SelectOption>
          </Select>
        </FormRow>
      </FormSection>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  )
}
```

`Form` renders a `<form>` with an optional `title` heading; `FormSection` groups related fields
under a `title`; `FormRow` wraps one field (or a tightly-related pair) and supplies vertical
spacing. One field per `FormRow` is the single-column default the UX guide recommends
(`docs/ux/forms.md`, "Single-Column vs. Two-Column Layouts"). Styling requires the app to be wrapped
in `AppShellProvider` — see the fundamentals skill if styles are missing.

## Core patterns

### Label every field with the `label` prop

Most Juno controls accept a `label` prop that renders a visible, correctly-associated label and
auto-generates an `id` when you pass none. Prefer it over placing a standalone `Label` next to the
input (`docs/ux/forms.md`, "Labels and IDs"):

```tsx
import { TextInput } from "@cloudoperators/juno-ui-components"

function EmailField() {
  return <TextInput name="email" type="email" label="Email address" autoComplete="email" required />
}
```

`SearchInput` and `NativeSelect` are the exceptions — they have no `label` prop and do **not**
auto-generate an `id`. If you need a visible label there, pass an explicit `id` and associate a
standalone `Label` via `htmlFor`:

```tsx
import { Label, NativeSelect, NativeSelectOption } from "@cloudoperators/juno-ui-components"

function RegionField() {
  return (
    <>
      <Label text="Region" htmlFor="region" />
      <NativeSelect id="region" name="region">
        <NativeSelectOption value="eu-de-1" label="EU (Germany)" />
        <NativeSelectOption value="us-east-1" label="US (East)" />
      </NativeSelect>
    </>
  )
}
```

### Pick the right input type

Set the `type` on `TextInput` so the browser enables the right keyboard, spellcheck, and format
hints (`docs/ux/forms.md`, "Input Types"). `TextInput` disables autocomplete by default
(`autoComplete="off"`); turn it back on explicitly for email/name/address/password fields:

```tsx
import { FormRow, TextInput } from "@cloudoperators/juno-ui-components"

function ContactFields() {
  return (
    <>
      <FormRow>
        <TextInput name="email" type="email" label="Email" autoComplete="email" />
      </FormRow>
      <FormRow>
        <TextInput name="phone" type="tel" label="Phone" />
      </FormRow>
      <FormRow>
        <TextInput name="website" type="url" label="Website" placeholder="https://example.com" />
      </FormRow>
    </>
  )
}
```

Which component for which data: single line → `TextInput`; multi-line → `Textarea`; a secret the
user reveals/copies (SSH key, token) → `SecretText`; one of a known list → `Select` (styled,
searchable-feeling, multi-select capable) or `NativeSelect` (native `<select>`, best on mobile); a
list where the user also types to filter → `ComboBox`; a date/time → `DateTimePicker`. See
[choosing selects](references/selects.md) for the full `Select` vs `NativeSelect` vs `ComboBox`
decision and multi-select wiring.

### Communicate expectations with `helptext`

Describe constraints before the user hits an error. Every major input takes a `helptext` prop; list
multi-part requirements (e.g. password rules) upfront rather than revealing them one failure at a
time (`docs/ux/forms.md`, "Communicating Expectations"):

```tsx
import { TextInput } from "@cloudoperators/juno-ui-components"

function PasswordField() {
  return (
    <TextInput
      name="password"
      type="password"
      label="Password"
      autoComplete="new-password"
      helptext="At least 12 characters, including a number and a symbol."
    />
  )
}
```

The `helptext` prop is typed `ReactNode`, so richer content such as a link goes straight into it —
no separate hint element needed:

```tsx
import { TextInput } from "@cloudoperators/juno-ui-components"

function FilterField() {
  return (
    <TextInput
      name="filter"
      label="Filter"
      placeholder="prod-*"
      helptext={
        <>
          Supports wildcards — see the <a href="/docs/filtering">filtering guide</a>.
        </>
      }
    />
  )
}
```

Drive validation text the same way through the input's own `errortext`/`successtext` (also
`ReactNode`); don't reach for a standalone hint component — hint rendering is an internal detail of
each input, not part of the public API.

### Show validation state

Validation is driven by two paired props on each input: a boolean state (`invalid` / `valid`) and
the matching message (`errortext` / `successtext`). Passing `errortext` renders the message in the
error style; also set `invalid` so the field border and the control's state reflect the error:

```tsx
import { useState } from "react"
import { Form, FormRow, TextInput, Button } from "@cloudoperators/juno-ui-components"

function NameForm() {
  const [name, setName] = useState("")
  const [error, setError] = useState<string>()

  const validate = () => setError(name.trim() === "" ? "Name is required." : undefined)

  return (
    <Form title="Rename">
      <FormRow>
        <TextInput
          name="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validate}
          invalid={Boolean(error)}
          errortext={error}
        />
      </FormRow>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  )
}
```

Validate **on blur** as the safe default, and always re-validate **on submit**; reserve as-you-type
for strict formats, and never flag a required-but-untouched field before interaction or submit
(`docs/ux/forms.md`, "When to Validate"). For cross-field rules (e.g. password confirmation) put the
error on the dependent field. See [validation timing and errors](references/validation.md) for
inline-vs-summary errors, submit-time handling, and server-error placement.

### Group radios and checkboxes

Wrap related radios in `RadioGroup` and related checkboxes in `CheckboxGroup`. The group owns the
shared `name`, selection state, and group-level `label`/`helptext`/`errortext`/`successtext`; the
children only carry `value` and `label`. `RadioGroup.onChange` and `CheckboxGroup.onChange` receive
the selected value, not a DOM event. Pass a `label` **and** an `aria-label` so the group has an
accessible name (`docs/ux/forms.md`, "Grouped Inputs"):

```tsx
import { RadioGroup, Radio } from "@cloudoperators/juno-ui-components"

function VisibilityField() {
  return (
    <RadioGroup
      label="Visibility"
      aria-label="Visibility"
      name="visibility"
      required
      helptext="Who can see this project."
    >
      <Radio value="private" label="Private" />
      <Radio value="internal" label="Internal" />
      <Radio value="public" label="Public" />
    </RadioGroup>
  )
}
```

```tsx
import { CheckboxGroup, Checkbox } from "@cloudoperators/juno-ui-components"

function NotificationsField() {
  return (
    <CheckboxGroup label="Notifications" aria-label="Notifications" name="notify" selected={["email"]}>
      <Checkbox value="email" label="Email" />
      <Checkbox value="sms" label="SMS" />
      <Checkbox value="push" label="Push" />
    </CheckboxGroup>
  )
}
```

### Switch vs. Checkbox

Use `Switch` only for a setting that takes effect **immediately** without a submit step; use
`Checkbox`/`CheckboxGroup` for choices that are submitted with the form. Do not put a `Switch` in a
form that has its own submit button (`docs/ux/forms.md`, "Switches and Checkboxes"):

```tsx
import { Switch } from "@cloudoperators/juno-ui-components"

declare function setMaintenanceMode(on: boolean): void

function MaintenanceToggle({ enabled }: { enabled: boolean }) {
  return <Switch label="Maintenance mode" on={enabled} onChange={() => setMaintenanceMode(!enabled)} />
}
```

`Switch` renders a `<button role="switch">`, so its `onChange` fires with a
`ChangeEvent<HTMLButtonElement>` on each toggle — there is no `event.target.checked` to read.
Track the on/off state yourself (here from the `enabled` prop) and flip it when the change fires.

For cycling through a small fixed set of modes (not a form value), `ToggleButton` takes an `options`
array and reports the picked value through `onChange(value)`:

```tsx
import { useState } from "react"
import { ToggleButton } from "@cloudoperators/juno-ui-components"

function DensityToggle() {
  const [density, setDensity] = useState("comfortable")
  return <ToggleButton options={["comfortable", "compact"]} value={density} onChange={(v) => setDensity(v)} />
}
```

### Join an input and a button with InputGroup

`InputGroup` visually joins adjacent controls (e.g. an input and its submit button, or a
`Select` + `TextInput`) and propagates a shared `variant`/`disabled` to its children:

```tsx
import { InputGroup, TextInput, Button } from "@cloudoperators/juno-ui-components"

function AddTagRow() {
  return (
    <InputGroup>
      <TextInput placeholder="New tag…" />
      <Button label="Add" />
    </InputGroup>
  )
}
```

### Submit, cancel, and submission feedback

Place actions at the bottom of the form; the primary action is the rightmost button, with cancel to
its left. Show a busy state on the submit button while the request is in flight and disable both
buttons to prevent double submits (`docs/ux/forms.md`, "Submit and Cancel Actions" / "In-Progress
State"). For destructive submits use the `primary-danger` button variant. See
[validation timing and errors](references/validation.md) for the full submit lifecycle (success
navigation, server-error placement).

### Sign-in forms are different — use SignInForm

Build sign-in on a dedicated page (never a modal) with the `SignInForm` component. It renders the
heading, an optional error `Message`, auto-spaced children, and an optional reset-password link.
Deliberately, sign-in fields are **not** marked required, submit is **not** disabled, and no inline
validation runs — the server returns a generic error instead (`docs/ux/sign-in.md`):

```tsx
import { SignInForm, TextInput, Button } from "@cloudoperators/juno-ui-components"

function LoginPage({ failed }: { failed: boolean }) {
  return (
    <SignInForm title="Sign in" error={failed} resetPwUrl="/reset-password">
      <TextInput key="user" label="Username" id="user" />
      <TextInput key="pw" label="Password" id="pw" type="password" />
      <Button key="submit" variant="primary" type="submit" className="jn:w-full">
        Sign In
      </Button>
    </SignInForm>
  )
}
```

`error` accepts `true` (default generic message), a custom string, or `false`/omitted (hidden). The
message must never reveal whether an account exists for the entered identifier — the same rule
applies to password-reset responses (`docs/ux/sign-in.md`, "Failed Sign-In";
`docs/ux/authentication-and-access.md`). See [the sign-in form](references/sign-in.md) for the
full prop set and security-safe error copy.

## Common mistakes

- **CRITICAL — Leaking account existence on failed sign-in.** A message like "No account for that
  email" tells an attacker the address is (not) registered. Use `SignInForm`'s generic `error`
  (`true`) or an equally non-committal custom string, and apply the same rule to password-reset
  responses. (`docs/ux/sign-in.md`, "Failed Sign-In".)
- **HIGH — `errortext` without `invalid` (or `successtext` without `valid`).** The message renders
  but the field's border/state does not change, so the error is easy to miss. Always set the paired
  boolean. (`docs/ux/forms.md`, "Validation".)
- **HIGH — Validating required fields before interaction.** Showing "required" on untouched fields
  on first render punishes the user before they start. Validate on blur / on submit instead.
  (`docs/ux/forms.md`, "When to Validate".)
- **HIGH — Standalone `Label` where a `label` prop exists.** Hand-wiring a `Label` next to a
  `TextInput`/`Select` duplicates associations the `label` prop handles correctly. Use the prop;
  reserve standalone `Label` for `SearchInput`/`NativeSelect`. (`docs/ux/forms.md`, "Labels and
  IDs".)
- **HIGH — `Switch` inside a form with a submit button.** `Switch` means "takes effect now". For a
  value submitted with the form use `Checkbox`/`CheckboxGroup`. (`docs/ux/forms.md`, "Switches and
  Checkboxes".)
- **MEDIUM — Marking sign-in fields required / disabling the Sign In button.** Juno intentionally
  does neither; let the user submit and show a generic server error. (`docs/ux/sign-in.md`,
  "Sign-In Form Validation".)
- **MEDIUM — Instruction only in `placeholder`.** Placeholder text disappears on first keystroke.
  Put requirements in `helptext`; use `placeholder` only for example values alongside a
  visible label. (`docs/ux/forms.md`, "Communicating Expectations".)
- **MEDIUM — Both an inline field error and a form summary for the same problem.** Pick the one
  closer to where the user acts. (`docs/ux/forms.md`, "Inline Field Errors vs. Summary Errors".)
- **MEDIUM — Misusing the `error` prop for validation on Select/NativeSelect/ComboBox.** `error`
  signals an operational problem (e.g. options failed to load); negative validation is `invalid`
  with `errortext`. (`Select.component.tsx`, `error` vs `invalid` prop docs.)

## Completion

Verify:

1. Every field has an accessible label (the `label` prop, or an `id` + `Label htmlFor` for
   `SearchInput`/`NativeSelect`); grouped radios/checkboxes have a `label` and `aria-label`.
2. Validation state uses the paired props (`invalid`+`errortext`, `valid`+`successtext`) and fires
   on blur and on submit, never on untouched required fields.
3. `Switch` is used only for immediate-effect settings, not form values.
4. Sign-in uses `SignInForm` with a generic, non-leaking error and no required markers / disabled
   submit.
5. Run `npm exec --no -- intent validate packages/ui-components/skills` and fix any errors.

If a validation or submission path cannot be exercised in your test harness, report it as
unverified rather than assuming it renders.

## References

- [choosing selects](references/selects.md) — read when deciding between `Select`, `NativeSelect`,
  and `ComboBox`, or wiring multi-select, option groups, dividers, or loading/error states.
- [validation timing and errors](references/validation.md) — read when deciding when to validate,
  inline vs. summary errors, cross-field rules, or submit/success/server-error handling.
- [the sign-in form](references/sign-in.md) — read before building any sign-in or password-reset
  flow, for the full `SignInForm` props and security-safe error copy.
- [secret and date fields](references/secret-and-date.md) — read when adding a `SecretText`
  (reveal/copy/paste) or a `DateTimePicker` (date, time, range, min/max).
