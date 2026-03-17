[← Back to Contents Overview](0_contents.md)

# Appendix: Glossary

Key terms used throughout the Juno UX documentation.

---

**AppShell**
The core Juno component for bootstrapping new applications. Provides layout structure, styles, CSS variables, and context providers out of the box. Includes slots for the page header, side navigation, and page footer.

**Busy State**
The state of a UI element or view while an operation is in progress. Atomic components (buttons, selects) have built-in busy states; larger UI sections use a spinner or progress indicator.

**Content Area**
The main scrollable region of a page, below the page header and to the right of the side navigation.

**Destructive Action**
An action that permanently deletes or irrevocably modifies data. Styled with a red primary-danger button to signal risk to the user.

**Embedded App / Embedded Mode**
A Juno application rendered inside a host/shell application. In embedded mode, the child app's page header is suppressed — the host renders its own. The child app retains its own navigation.

**Empty State**
The state of a view or component when it contains no data. Should communicate why the content is empty and suggest a next action where appropriate.

**Error Boundary**
A component-level mechanism for catching and containing rendering or runtime errors, so that a failure in one part of the UI does not crash the entire application.

**Host App / Shell App**
An application that embeds one or more Juno child applications. Responsible for rendering the top-level page header and, optionally, an app-switching navigation.

**Inline Validation**
Validation feedback displayed directly next to the relevant input field, rather than in a summary or dialog. Prevents form submission until errors are resolved.

**Juno Layout**
The standard, full-page Juno application layout. Consists of a page header, a main content area with optional side navigation, and a page footer.

**Legacy Application Layout**
A deprecated layout variant using horizontal header-based navigation. Non-compliant with current Juno standards; applications using it should migrate to the Juno Layout.

**Loading State**
The state of a view or component while data is being fetched. Should communicate what is loading and, where possible, allow the user to cancel.

**Micro-Frontend**
An architectural pattern where a UI is composed of independently developed and deployed frontend applications. Juno supports micro-frontend architectures.

**Modal**
A dialog overlay that interrupts the current workflow to focus the user's attention on a specific task or confirmation. Requires explicit user dismissal.

**Overflow Menu**
A contextual menu triggered by a three-dot icon (⋮), used to surface additional actions for a specific item when displaying them inline would cause clutter.

**Page Footer**
The optional bottom region of a Juno application layout. Available as a slot in AppShell.

**Page Header**
The mandatory top region of a Juno application layout. Contains the app logo and may include a UI mode switch, user menu, settings, and sign-in/out controls. Not rendered in embedded mode.

**Popup Menu**
A small overlay menu triggered by user interaction, used to present a set of contextual actions or options. See also: Overflow Menu.

**Primary Action**
The single most important action in a given context (e.g. in a modal or form). Each view or dialog should have at most one primary action button.

**Progress Bar**
A component indicating progress toward a known or estimated target. Use for batch operations where a percentage of completion can be meaningfully shown.

**Semantic Variant**
A named value (`info`, `success`, `warning`, `error`, `danger`) accepted by several Juno components to communicate meaning through visual appearance. Must be chosen based on intent, not aesthetics.

**Side Navigation**
The primary navigation element in Juno applications, rendered vertically on the left side of the content area. Supports flat, grouped, or hierarchical structures up to three levels deep.

**Spinner**
A loading indicator for situations where progress cannot be numerically represented, space is limited, or showing gradual progress is not desirable.

**Themeability**
Juno's support for visual customization via CSS variables. Full theming support is planned but not yet fully implemented.

**Transient State**
A temporary UI state reflecting an in-progress operation — such as a busy button, a loading section, or an in-progress batch job. Distinct from persistent error or empty states.

**Wizard Pattern**
A multi-step interaction pattern that guides users through a complex task by breaking it into discrete, sequential steps.
