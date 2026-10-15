# Button label wording rules

Read this when writing or reviewing the text on a button, including confirming buttons in modals.
The rules come from `docs/ux/ux-writing-content-design.md`.

## Core rules

- Keep labels **short** and use the **infinitive form of a verb**: "Create", "Delete", "Save",
  "Edit", "Stop", "Confirm".
- Do **not** prefix with "Click to …". The button already implies the click.
- **Title case** applies (see below). **Never use ALL-CAPS, ever.**
- No trailing punctuation. An ellipsis ("…", a single glyph) is allowed to indicate another step
  follows — e.g. a button that opens a modal with further options.
- Use "OK" only when the click means acknowledgement, or when nothing else really fits.

## Title case

Capitalize the first and last word always, plus nouns, verbs, pronouns, adjectives, adverbs,
numbers, and subordinating conjunctions (Although, Because, If, When). Do **not** capitalize (unless
first or last word): articles (a, an, the), short prepositions (max 5 letters: at, by, for, in, of,
on, to, up …), short coordinating conjunctions (and, but, or, nor, so, yet), and "to" in an
infinitive.

- Do: "Sign in", "How to Use This Guide", "Confirm to Terminate an Action".
- Don't: "Sign In", "Confirm To Terminate An Action".

## "Sign in", not "Log in"

Always use "Sign in" (matching SAP Fiori guidance), consistently across the app.

## Consistency with surrounding copy

Use the same verb in the button, the dialog title, and the body copy. If "Terminate Instance" is
the modal title, use "terminate" in the copy and the button. If the term would appear too many
times, fall back to a generic "OK" or "Confirm". Never use different words for the same action
("terminate" vs. "stop" vs. "kill" reads as three different operations).

## Confirming buttons in modals

For the primary confirming button in a modal, prefer appending the object type to the verb when the
object type is a single short word — "Delete Image" communicates intent more clearly than a bare
"Delete". If the object type is more than one word or has an unusually high syllable count, use the
verb alone.

- Do (short object): "Delete Image", "Revoke Key", "Stop Instance".
- Fall back to the verb alone: "Delete" (not "Delete Kubernetes Node Pool"), "Stop" (not "Stop
  Hyperscaler Infrastructure").

Apply this consistently within one application — do not use "Delete Image" in one modal and bare
"Delete" in another for the same action type.

## Never use "Please" or "Thanks"

An app is not an individual. Be polite by respecting the user's time, not with pleasantries.
