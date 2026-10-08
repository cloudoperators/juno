[← Back to Contents Overview](0_contents.md)

# Juno UX Writing / Content Design

## Scope, Intended Audience and Tone

Juno UI Components are designed to build technical applications for professional users in the context of working with SAP ConvergedCloud. Our tone should match and respect that audience.
Taking our users seriously and respecting their time and expertise is the underlying principle of our UX Writing guidelines.

## Active or Passive Voice?

Active voice is generally considered to be shorter, more precise, and more friendly, personal, and humane in tone, while passive voice is considered to be longer, more vague, more formal and more "distant" feeling, so it is generally not recommended in UX Writing and Content Design.

In the technical context of our apps however, this is a fine line to walk: We want to be precise and friendly, but at the same time reflect the technical character of our apps, and respect our users as peers with a high level of professionalism and expertise.

In the context of our apps we recommend to use active voice where possible, but avoid sounding personal or like an individual.

A good rule of thumb is to use active voice as long as we can avoid introducing "We", "Us", or similar. If this is impossible, using passive voice is ok. In any event, finding a way to put a message in active tone but impersonal will be the best course forward in most cases.

### Do

"An error occurred while processing your request."

(active, impersonal)

### Don't

"We encountered an error processing your request."

(active, but personal "we". Avoid.)

"Your request could not be processed because of an error."

(passive voice where not necessary, overly verbose.)

## Avoid Substantiations

Substantiations often feel very formal and unwelcoming, also they are much more common in German than in English, where users will perceive this somewhat negative connotation even more. Avoid, and if you can: use a verb.

“Creating an instance may take up to …” is better than “The creation of an instance may take up to …”.

## Take Professional Users Seriously

Our users conduct serious and responsible work, thus we should treat them accordingly. Refrain from using overly colloquial language that may seem adequate in a hip, b2c app built by a start-up, it may be way off in the context we are dealing with.

### Do

“An unknown error occurred. Try again.”

### Don't

“We kinda goofed this up, we just don’t know what we’re doing sometimes really. Wanna try again?”

## Be Precise, Use just Enough Jargon

We speak to technically minded, professional users, and the very subject of applications built with Juno is very technical. This allows and even requires us to speak in a precise, technical manner. Rule of thumb: We are humans speaking to humans, so do not use technical or social jargon where not necessary. We are professionals speaking to professionals and we mutually respect each other accordingly, so we never sound patronizing. When writing, imagine you’re speaking to a capable peer.
However, if a certain term that may be regarded as jargon is established lingo in our field of expertise, or in the context of underlying products and solutions, such as Kubernetes, etc., by all means use it to communicate as clearly and non-ambiguously as possible.
In any event, precison over verbosity.

## "You" vs. "Me"

When directly addressing users, e.g. in notification or error messages we use "You" (see examples above).

When labeling elements of our UI, we avoid possesive pronouns where possible:

### Do

"User Account"

### Don't

"My Account"
"Your Account"

If at all necessary, use "Me"/"My" when labeling UI elements that users may perceive as extensions of their personality, such as user profiles or other representations of personal data. If you can avoid it without losing clarity though, avoid.

## Title Case

Capitalize all words in titles and headings in:

- Text / body copy
- Modals
- Panels
- DataGrid
- Lists
- Buttons
- Message / Notification titles

Specificaly capitalize:

- First and last word of the title
- Nouns
- Verbs
- Pronouns
- Adjectives
- Adverbs
- Numbers
- Subordinating conjunctions(_Although, Because, If, When_)

Do not capitalize unless first or last word:

- articles (_a, an, the_)
- short (max 5 letters) prepositions (_at, by, for, in, of, off, on, out, over, to, under, up …_)
- short, coordinating conjunctions (_and, but, for, or, nor, so, yet_)
- "to" as part of an infinitive form

The first and last word of a heading or title is always capitalized.

Written numerals such as "One", "Nine", "Thousands" are capitalized. For compound numerals only the first part is capitalized: "Twenty-one".

**Never use All-caps, ever.**

Do not use punctuations unless they are required to convey actual meaning.

### Do

"There was an Error"
"Sign in"
"How to Use This Guide"
"Confirm to Terminate an Action"

### Don't

"There Was An Error"
"Sign In"
"Confirm To Terminate An Action"

(Don't capitalize articles, numerals,etc. as by the rules above)

"There was an error"
(Capitalize words as outlined)

"There was an Error." (No punctuation marks)

"There was an Error!"
(No punctuation, no exclamation marks)

"There was an Error!!!"
(No double or triple punctuation marks. Note an ellipsis ("…") is regarded as a single character/glyph and may be useful in some cases.)

## Be Ready For Internationalization

Currently, most apps built with Juno UI are in English only, but that may change at some point. Keep that in mind when writing content, don’t use metaphors or figures of speech that are language-specific and presumably hard or impossible to translate.

## Consistency

Keep your language consistent across our UIs.

When using “Terminate Instance” in a Modal title, use “terminate” in any content copy and respective buttons. If that feels overkill or the term seems to appear just too many times, resort to generic terms in a button such as “OK” or “Confirm”.

Do not use different terms for the exact same thing or action. This leaves users in doubt or may raise second thoughts, e.g. "terminating" an instance is not the same as "pausing it", and using "stop" for either of those actions is not 100% clear in terms of what the expected action and the result is.

### Do

Modal Title: “Terminate Instance”
Modal Copy: “Select an instance to terminate and click “Terminate Instance””
Modal Button: “Terminate Instance”

#### Or

Modal Title: “Terminate Instance”
Modal Copy: “Select an instance and click “Confirm” to terminate the selected instance”
Modal Button: “Confirm”

### Don’t

Modal Title: “Terminate Instance”
Modal Copy: “Select an instance you want to stop.”
Modal Button: “Kill Instance”

## Button Labels

Keep these short, use infitive form of a Verb. Don’t add “Click to \[…]” to the button label. Title case rules apply.

Confirm
Delete
Create
Edit
Save
Stop
OK (Use when clicking a button means acknowledgement, otherwise only if nothing else really works)

You may use an ellipsis to indicate another step will be needed to complete an action, such as a modal with options will open.

When referring to a button label in copy, use quotation marks and the exact case as in the label:

“Click “Terminate Instance” to proceed.”

### Confirming Buttons in Modals

For the primary confirming button in a Modal, prefer appending the object type to the verb when the object type is a single, short word: “Delete Image” communicates intent more clearly than a bare “Delete”. If the object type is more than one word or has an unusually high number of syllables, fall back to the verb alone.

Application authors have some flexibility in applying this, but must be consistent within their application — do not use “Delete Image” in one Modal and “Delete” in another for the same type of action.

#### Do

- “Delete Image”
- “Revoke Key”
- “Stop Instance”

#### Fall Back to the Verb Alone

- “Delete” (not “Delete Kubernetes Node Pool”)
- “Stop” (not “Stop Hyperscaler Infrastructure”)

## Use “Sign in” over “Log in”, and Be Consistent

Use “Sign in”, just as recommended by SAP Fiori content guidelines. Make sure to use "sign in" consistently.

## Rendering Empty or Unknown Values

When a field or data point has no value — because it was not set, is not available, or is unknown — **render two hyphens separated by a space as a visual placeholder: `- -`**

**Do not** use an en dash (–) or em dash (—). Many code and text editors apply "smart" typography automatically, substituting `--` with an en dash as you type. The space between the hyphens prevents this substitution.

### Do

`- -`

### Don't

`–` or `—` (en/em dash — visually similar, but semantically wrong and easily introduced by tooling)

`--` (adjacent hyphens — may be silently transformed by formatters)

`N/A` or `n/a` (avoid unless firmly established convention in the given context)

### Names as Identifiers: Fall Back to the ID

For fields that serve as a human-readable, human-assigned name for an item — the **Name column** in a DataGrid, a **detail view page title**, and **breadcrumb segments** — do not render `- -` when the name is missing or not set. Instead, display the item's **ID**.

The ID is the next best thing to identify, reference, or communicate about an item: it remains unique, stable, and actionable even when a human-readable name is absent. Rendering `- -` in these positions is ambiguous and prevents the user from distinguishing between items or sharing a link meaningfully.

Apply this wherever a human-readable name is the primary means of identifying an item:

- **Name column in a DataGrid** — show the ID in place of the name, unless the DataGrid already has a dedicated ID column visible. If an ID column is already present, use `- -` instead — the item is already identifiable, and repeating the ID in the name column would be redundant and confusing.
- **Detail view page title** — use the ID as the title
- **Breadcrumb segment** — use the ID as the segment label

Display the ID as-is, without additional decoration beyond what would normally apply to a name in that position.

**Exception: verbatim metadata display.** When rendering an item's raw metadata fields — for example, in a definition list (`<dl>`) that shows all properties of an item as-is — do **not** substitute the ID for the name. Use `- -` as per the rule above. The purpose of verbatim metadata display is to accurately reflect what is stored: substituting the ID would misrepresent the data by implying a name exists when it does not.

## Errors and Error Messages

No exclamation marks. We're talking to professionals, there is no reason to be alarmistic about anything. Never use double or triple punctuations.

## Never Use “Please” or "Thanks"

We’re polite by respecting the time and professionalism of our users, but as an app/ system, we do not pretend to be a human individual, so no “please” or “thanks”.

## If in Doubt, Ask Us : )

When you’re in doubt how to speak/write/sound in a given context, feel free to reach out to us at the design team. We will do our best to support you and our users, and we may learn something along the way, too, that may inform our work and these guidelines going forward.

## References

https://www.sap.com/design-system/fiori-design-web/v1-136/foundations/writing-and-wording/ux-writing/ui-text-guidelines-for-sap-fiori?external
https://fluent2.microsoft.design/content-design
