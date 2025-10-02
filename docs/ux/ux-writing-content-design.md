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

Sustantiations often feel very formal and unwelcoming, also they are much more common in German than in English, where users will perceive this somewhat negative connotation even more. Avoid, and if you can: use a verb.

“Creating an instance may take up to …” is better than “The creation of an instance may take up to …”.

## Take Professional Users Seriously

Our users conduct serious and responsible work, thus we should treat them accordingly. Refrain from using overly colloqial language that may seem adequate in a hip, b2c app built by a start-up, it may be way off in the context we are dealing with.

### Do

“An unknown error occurred. Try again.”

### Don't

“We kinda goofed this up, we just don’t know what we’re doing sometimes really. Wanna try again?”

## Be Precise, Use just Enough Jargon

We speak to technically minded, professional users, and the very subject of applications built with Juno is very technical. This allows and even requires us to speak in a precise, technical manner. Rule of thumb: We are humans speaking to humans, so do not use technical or social jargon where not necessary. We are professionalks speaking to professionals and we mutually respect each other accrdingly, so we never sound patronizing. When writing, imagine you’re speaking to a capable peer.
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

If at all necessary, use "Me"/"My" when labeling UI elements that users may perceive as extensions of their personality, such as user profiles or other representations of personal data. If you can avoid it without loosing clarity though, avoid.

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

Numerals such as "One", "Nine", "Thousands" are capitalized. For compound numerals only the first part is capitalized: "Twenty-one".

Never use All-caps, ever.

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

(Don't capitalize artciles, numerals,etc. as by the rules above)

"There was an error"
(Capitalize words as outlined)

"There was an Error." (No punctuation marks)

"There was an Error!"
(No punctuation, no exclamation marks)

"There was an Error!!!"
(No double or triple punctuation marks. Note an ellipsis ("…") is regarded as a single character/glyph and may be useful in some cases.)

## Be Ready For Internationalization

Currently, most apps built with Juno UI are in English only, but that may change at some point. Keep that in mind when writing content, don’t use metaphors or figures of speach that are language-specific and presumably hard or impossible to translate.

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

You may use an elipsis to indicate another step will be needed to complete an action, such as a modal with options will open.

When referring to a button label in copy, use quotation marks and the exact case as in the label:

"Click "Terminate Instance" to proceed."

## Use “Sign in” over “Log in”, and Be Consistent

Use “Sign in”, just as recommended by SAP Fiori content guidelines. Make sure to use "sign in" consistently.

## Errors and Error Messages

No exclamation marks. We're talking to professionals, there is no reason to be alarmistic about anything. Never use double or triple punctuations.

## Never Use “Please” or "Thanks"

We’re polite by respecting the time and professionalism of our users, but as an app/ system, we do not pretend to be a human individual, so no “please” or “thanks”.

## If in Doubt, Ask Us : )

When you’re in doubt how to speak/write/sound in a given context, please feel free to reach out to us at the design team. We will do our best to support you and our users, and we may learn something along the way, too, that may inform our work and these guidelins going forward.

## References

https://www.sap.com/design-system/fiori-design-web/v1-136/foundations/writing-and-wording/ux-writing/ui-text-guidelines-for-sap-fiori?external
https://fluent2.microsoft.design/content-design
