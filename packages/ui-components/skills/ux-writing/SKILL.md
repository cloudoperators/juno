---
name: ux-writing
description: >
  Use when writing any user-facing text in a Juno UI built with @cloudoperators/juno-ui-components:
  button and confirm-action labels, Modal titles and copy, Status/Message titles and bodies,
  headings and DataGrid column headers, error and empty-state wording, and rendering missing or
  unknown field values. Covers active-voice phrasing, title-case rules, the "no please/thanks",
  "no exclamation marks", "Sign in not Log in" rules, and the "- -" / fall-back-to-ID conventions,
  so copy stays consistent across the app. For the DataGrid empty/loading/error structure itself
  see the datagrid skill; this skill governs the words that go in it.
metadata:
  purpose: >
    Teaches developers to write and label Juno UI text that follows the project's UX Writing and
    Content Design guidelines — active impersonal voice, title case, concise verb-based button
    labels, professional non-alarmist error copy, and the project-specific empty-value conventions
    (render "- -", fall back to the ID for name-like fields) — grounded in the real Button, Status,
    Message, Modal, and DescriptionList component props so the examples type-check.
  type: core
  library: "@cloudoperators/juno-ui-components"
  library_version: "9.6.0"
sources:
  - cloudoperators/juno:packages/ui-components/src/components/Button/Button.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Button/Button.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Status/Status.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Message/Message.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Modal/Modal.component.tsx
  - cloudoperators/juno:docs/ux/ux-writing-content-design.md
  - cloudoperators/juno:docs/ux/application-design-guidelines.md
---

# Write user-facing text for a Juno UI

The Juno component library gives you the containers for text — a `Button`'s `label`, a `Status`'s
`title`/`body`, a `Modal`'s `title`, a `Message`'s `text` — but it does **not** enforce what the
text says. The wording is yours, and it has to follow the project's UX Writing rules so copy reads
consistently across every app. These rules exist because Juno apps are built for technical,
professional users working with SAP ConvergedCloud: respect their time and expertise, be precise,
and never sound like a chatty consumer app (`docs/ux/ux-writing-content-design.md`, "Scope,
Intended Audience and Tone").

This is a content skill, not a component API. Every example below targets a real component so it
type-checks, but the point is the string, not the markup.

## Setup

There is nothing to install beyond the component library. You write text as plain props:

```tsx
import { Button, Status } from "@cloudoperators/juno-ui-components"

function Example() {
  return (
    <>
      <Button variant="primary" label="Create Image" onClick={() => {}} />
      <Status status="error" title="Could Not Load Images" body="An error occurred. Try again." />
    </>
  )
}
```

Note the capitalization and the full stop only on the body sentence. The rest of this skill is the
set of rules that produce strings like these.

## Core patterns

### Use active, impersonal voice

Prefer active voice, but avoid "We"/"Us" — the system is not a person. If staying active forces a
"we", rephrase impersonally rather than slipping into passive (`docs/ux/ux-writing-content-design.md`,
"Active or Passive Voice?").

```tsx
import { Status } from "@cloudoperators/juno-ui-components"

// Do: active, impersonal
const ok = <Status status="error" title="There Was an Error" body="An error occurred while processing your request." />

// Don't: personal "we" — avoid
const bad = <Status status="error" title="There Was an Error" body="We encountered an error processing your request." />
```

Avoid nominalizations (substantiations): "Creating an instance may take up to a minute." reads
better than "The creation of an instance may take up to a minute." Use a verb
(`docs/ux/ux-writing-content-design.md`, "Avoid Substantiations").

### Apply title case to titles, headings, and labels

Capitalize titles and headings everywhere they appear — body copy, Modals, Panels, DataGrid headers,
lists, buttons, and Message/Notification titles. Capitalize the first and last word, plus nouns,
verbs, pronouns, adjectives, adverbs, numbers, and subordinating conjunctions. Do **not** capitalize
articles (a/an/the), prepositions of five letters or fewer, short coordinating conjunctions
(and/but/or/nor/so/yet), or the "to" of an infinitive — unless it is the first or last word
(`docs/ux/ux-writing-content-design.md`, "Title Case").

```tsx
import { DataGrid, DataGridRow, DataGridHeadCell, ContentHeading } from "@cloudoperators/juno-ui-components"

function Headings() {
  return (
    <>
      {/* Do: "How to Use This Guide" — "to"/"This" cased per the rules */}
      <ContentHeading heading="How to Use This Guide" />
      <DataGrid columns={2}>
        <DataGridRow>
          {/* Do: nouns capitalized, article lowercased mid-title */}
          <DataGridHeadCell>Name of the Instance</DataGridHeadCell>
          <DataGridHeadCell>Created At</DataGridHeadCell>
        </DataGridRow>
      </DataGrid>
    </>
  )
}
```

**Never use ALL-CAPS.** Do not add punctuation to titles unless it carries meaning — no trailing
full stop, no exclamation mark. An ellipsis ("…") counts as a single glyph and is allowed where it
signals a follow-up step.

### Write button labels as short verbs

Button labels use the infinitive form of a verb, kept short, with title case. Do not prefix
"Click to …". Pass the text as `label` (or as `children`) on `Button`
(`docs/ux/ux-writing-content-design.md`, "Button Labels").

```tsx
import { Button } from "@cloudoperators/juno-ui-components"

function Actions() {
  return (
    <>
      <Button label="Save" onClick={() => {}} />
      <Button label="Delete" variant="primary-danger" onClick={() => {}} />
      {/* Ellipsis signals a further step (e.g. a Modal opens) */}
      <Button label="Export…" onClick={() => {}} />
    </>
  )
}
```

For a Modal's **primary confirming** button, append the object type to the verb when the object is a
single short word — "Delete Image" is clearer than a bare "Delete". If the object type is long or
multi-word, fall back to the verb alone ("Delete", not "Delete Kubernetes Node Pool"). Be
consistent within an app (`docs/ux/ux-writing-content-design.md`, "Confirming Buttons in Modals").

```tsx
import { Modal } from "@cloudoperators/juno-ui-components"

function DeleteModal({ open }: { open: boolean }) {
  return (
    <Modal
      open={open}
      title="Delete Image"
      confirmButtonLabel="Delete Image"
      cancelButtonLabel="Cancel"
      onConfirm={() => {}}
    >
      Select an image and click &quot;Delete Image&quot; to delete the selected image.
    </Modal>
  )
}
```

### Keep terminology consistent

Use one verb for one action across title, copy, and button. If "Terminate Instance" is the Modal
title, use "terminate" in the body and on the button — or fall back to a generic "Confirm"/"OK" if
the exact term would repeat too often. Never swap in a synonym ("stop", "kill", "pause") that
changes or blurs the meaning (`docs/ux/ux-writing-content-design.md`, "Consistency").

Use **"Sign in"**, never "Log in", and apply it consistently
(`docs/ux/ux-writing-content-design.md`, 'Use "Sign in" over "Log in"').

### Write professional, non-alarmist error copy

Address the user as "You"; label UI chrome without possessives ("User Account", not "My Account" or
"Your Account"). Keep error copy calm and factual — the shipped `Status` and `Message` defaults
model the tone ("Something Went Wrong", "An error occurred. Try again.")
(`docs/ux/ux-writing-content-design.md`, "Errors and Error Messages").

```tsx
import { Message } from "@cloudoperators/juno-ui-components"

const errorMessage = (
  <Message
    variant="error"
    title="Access Denied"
    text="You do not have the required permissions to access this resource."
  />
)
```

**No exclamation marks** and never double/triple punctuation. **Never write "Please" or "Thanks"** —
the system is polite by respecting the user's time, not by imitating a person
(`docs/ux/ux-writing-content-design.md`, 'Never Use "Please" or "Thanks"').

### Render missing values as "- -" (with the ID fall-back)

When a field has no value, render **two hyphens separated by a space: `- -`**. The space stops
editors from "smart"-substituting `--` into an en dash. Do not use `–`, `—`, `--`, or `N/A`
(`docs/ux/ux-writing-content-design.md`, "Rendering Empty or Unknown Values").

```tsx
import { DescriptionList, DescriptionTerm, DescriptionDefinition } from "@cloudoperators/juno-ui-components"

const EMPTY_VALUE = "- -"

function Metadata({ region }: { region?: string }) {
  return (
    <DescriptionList>
      <DescriptionTerm>Region</DescriptionTerm>
      {/* Verbatim metadata: show "- -", never substitute an ID here */}
      <DescriptionDefinition>{region ?? EMPTY_VALUE}</DescriptionDefinition>
    </DescriptionList>
  )
}
```

There is one important exception: for a **name-like identifier** — the Name column of a DataGrid, a
detail-page title, a breadcrumb segment — fall back to the item's **ID** instead of `- -`, so the
item stays identifiable and linkable. Read
[empty values and the ID fall-back](references/empty-values.md) before implementing name columns,
detail titles, or breadcrumbs — it has the full decision (including when a visible ID column flips
the rule back to `- -`, and the verbatim-metadata exception).

## Common mistakes

- **CRITICAL — "Please"/"Thanks" or exclamation marks in copy.** `<Status title="Error!" body="Please try again." />`
  violates two rules at once. Drop the courtesy words and the "!": "An error occurred. Try again."
  (`docs/ux/ux-writing-content-design.md`, 'Never Use "Please" or "Thanks"' and "Errors and Error Messages".)
- **CRITICAL — Rendering `- -` for a missing name in a Name column, detail title, or breadcrumb.**
  This makes items indistinguishable and unlinkable. Fall back to the ID in those positions; use
  `- -` only for ordinary fields. (`docs/ux/ux-writing-content-design.md`, "Names as Identifiers".)
- **HIGH — ALL-CAPS or Title-Casing Every Word.** "SIGN IN" and "There Was An Error" are both wrong.
  Never all-caps; lowercase articles/short prepositions/short conjunctions mid-title: "There was an
  Error", "Sign in". (`docs/ux/ux-writing-content-design.md`, "Title Case".)
- **HIGH — En/em dash or `N/A` for empty values.** `–`, `—`, bare `--`, and `N/A` are all rejected.
  Render exactly `- -`. (`docs/ux/ux-writing-content-design.md`, "Rendering Empty or Unknown Values".)
- **HIGH — "Log in" / inconsistent sign-in wording.** Use "Sign in" everywhere.
  (`docs/ux/ux-writing-content-design.md`, 'Use "Sign in" over "Log in"'.)
- **MEDIUM — Personal "we" or passive voice in messages.** "We hit an error" / "Your request could
  not be processed" → "An error occurred while processing your request." (active, impersonal).
  (`docs/ux/ux-writing-content-design.md`, "Active or Passive Voice?".)
- **MEDIUM — Synonym drift for one action.** Title says "Terminate Instance" but the button says
  "Kill Instance". Keep one verb, or fall back to "Confirm". (`docs/ux/ux-writing-content-design.md`,
  "Consistency".)
- **MEDIUM — "Click to …" / overlong button labels.** Use the bare infinitive verb ("Delete",
  "Save", "Export…"). (`docs/ux/ux-writing-content-design.md`, "Button Labels".)

## Completion

Verify, for every user-facing string you added or changed:

1. Titles, headings, DataGrid headers, and button labels use title case (no ALL-CAPS, no
   over-capitalized articles/prepositions), with no trailing punctuation unless meaningful.
2. No "Please", no "Thanks", no exclamation marks, no doubled punctuation anywhere.
3. Error/info copy is active and impersonal (no "we"); the user is addressed as "You"; UI labels
   avoid "My"/"Your".
4. Button labels are short infinitive verbs; a Modal's primary confirm button follows the
   verb-or-verb+object rule consistently across the app.
5. Sign-in wording is "Sign in" everywhere.
6. Missing values render exactly `- -`, except name-column/detail-title/breadcrumb positions, which
   fall back to the ID per [empty values and the ID fall-back](references/empty-values.md).
7. Run `npm exec --no -- intent validate packages/ui-components/skills` and fix any errors.

If a string is produced by server defaults or a shared util you cannot see, flag it as unverified
rather than assuming it complies.

## References

- [title case rules and examples](references/title-case.md) — read when you are unsure whether a
  specific word in a heading or label should be capitalized.
- [empty values and the ID fall-back](references/empty-values.md) — read before rendering missing
  values in Name columns, detail-view titles, breadcrumbs, or verbatim metadata lists.
