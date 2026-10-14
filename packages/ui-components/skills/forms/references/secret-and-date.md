# Secret and date fields

Read this when adding a `SecretText` (reveal/copy/paste a secret such as an SSH key or token) or a
`DateTimePicker` (date, time, range, or min/max constraints). Grounded in
`SecretText.component.tsx` and `DateTimePicker.component.tsx`.

## SecretText

`SecretText` holds a secret in a textarea that can be concealed, revealed, copied, pasted, and
cleared. Each affordance is toggled by a boolean (`toggle`, `copy`, `paste`, `clear`) and can be
individually disabled (`disableToggle`, `disableCopy`, `disablePaste`, `disableClear`). It carries
the same validation props as other inputs (`invalid`/`valid`, `errortext`/`successtext`,
`helptext`, `required`, `label`).

```tsx
import { useState } from "react"
import { SecretText } from "@cloudoperators/juno-ui-components"

function SshKeyField() {
  const [key, setKey] = useState("")
  return (
    <SecretText
      name="ssh_key"
      label="SSH public key"
      value={key}
      onChange={(e) => setKey(e.target.value)}
      toggle
      copy
      paste
      clear
      helptext="Paste your public key. It stays hidden until you reveal it."
    />
  )
}
```

Key handlers (all optional): `onChange`, `onReveal`, `onHide`, `onToggle`, `onCopy(value)`,
`onPaste(value)`, `onClear`, `onBlur`, `onFocus`. Use `reveal` to control visibility and
`copyConfirmtext` to customise the brief "copied" confirmation.

## DateTimePicker

`DateTimePicker` wraps Flatpickr. By default it is a date picker; opt into time with `enableTime`,
drop the calendar for a pure time picker with `noCalendar`, and switch selection mode with
`mode="single" | "multiple" | "range"`. `onChange` is a Flatpickr-style handler receiving the
selected dates and the formatted string, not a DOM change event. It shares the validation props
(`invalid`/`valid`, `errortext`/`successtext`, `helptext`, `required`, `label`).

### Date only

```tsx
import { DateTimePicker } from "@cloudoperators/juno-ui-components"

function StartDateField() {
  return (
    <DateTimePicker
      name="start"
      label="Start date"
      onChange={(dates, dateStr) => console.log(dateStr, dates)}
    />
  )
}
```

### Date and time, with min/max bounds

```tsx
import { DateTimePicker } from "@cloudoperators/juno-ui-components"

function WindowStartField() {
  return (
    <DateTimePicker
      name="window_start"
      label="Maintenance window start"
      enableTime
      time_24hr
      minDate="today"
      helptext="Must be today or later."
    />
  )
}
```

### Date range

```tsx
import { DateTimePicker } from "@cloudoperators/juno-ui-components"

function BookingRangeField() {
  return <DateTimePicker name="booking" label="Booking range" mode="range" />
}
```

## Notes

- `DateTimePicker` accepts flexible value inputs — `Date` objects, timestamps, ISO strings,
  `YYYY-MM-DD HH:MM` strings (matching the current `dateFormat`), and the shortcut `"today"` — via
  `value` / `defaultValue` / `defaultDate`. If both `value` and `defaultDate` are passed, `value`
  wins.
- Set `allowInput` to let users type a date directly; leave it off (default) for calendar-only
  selection.
- `enableSeconds`, `hourIncrement`, and `minuteIncrement` only take effect when `enableTime` is on.
- `dateFormat` uses Flatpickr tokens (https://flatpickr.js.org/formatting/); when omitted the
  component picks a sensible default based on whether time/seconds/calendar are enabled.
