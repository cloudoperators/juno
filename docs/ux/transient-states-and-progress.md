[← Back to Contents Overview](0_contents.md)

# Transient States and Progress

> [!NOTE]
> The ProgressBar component is currently in design/development.
> Until it is available, use Spinner.

## Busy UI Elements

UI elements can be busy at different scales:

**Atomic elements** — Buttons, Selects, ComboBoxes, and similar components have built-in busy states. Use them. A busy atomic element is also disabled for the duration of the operation.

**Views and larger UI sections** — DataGrids, panels, or whole views use a Spinner to communicate they are loading. Some components have a custom loading state built in; use it if available.

Never leave an element in a silent, non-responding state. Without feedback, users will assume something is broken.

For full application views, custom loading states with animations or additional context may be appropriate.

For broader guidance on loading and empty states, see [Error And Empty/Loading/Busy State Handling Strategies](error-handling-loading-empty-states.md).

## Busy Entities

UI elements sometimes represent entities that are busy — for example, a row in a DataGrid representing an instance that is starting up. In these cases, a Spinner is usually sufficient. Use a ProgressBar only if the operation is a batch affecting multiple entities and progress can be expressed numerically (see below).

## Spinner

A rotating indicator for operations where progress cannot be quantified or where a percentage would feel inappropriate.

### Use a Spinner when:

- A UI section is loading and no custom loading state exists
- An element is transitioning between two distinct states (e.g. starting or stopping an instance)
- Progress cannot be expressed as a number or percentage
- A numerical progress indicator would not match the user's mental model of the operation
- Space is too limited for a ProgressBar
- In doubt — Spinner is a safe fallback

## Progress Bar

A visual indicator of progress toward a known or estimated target. Also available in an indefinite variant for operations where the target is unknown.

### Use a Progress Bar when:

- The operation is a batch affecting multiple entities
- Progress can be expressed as a percentage or a current/target value

### Use an Indefinite Progress Bar when:

- The operation affects multiple entities, but the total count is not yet known (e.g. collecting or counting items)

When in doubt, consult the design team.
