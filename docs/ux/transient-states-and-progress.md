[← Back to Contents Overview](0_contents.md)

# Transient States and Progress

> [!NOTE]  
> The ProgressBar component as referenced below is currently in design/development.
> As long as it is unavailable, use Spinner.

## Loading, In-Progress and Busy UI Elements
Loading and busy UI elements can be atomic elements, such as Buttons, Selects, ComboBoxes, etc, or larger parts of the User Interfaces that are loading or changing state.

### Busy Atomic UI Elements
„Atomic“ UI elements, such as Buttons, Selects, ComboBoxes, etc. do have in-built states showing they are currently busy, either loading content such as menus, or as a result of the user using the element to trigger an action that takes some time, rendering the element unusable (disabled) while the action is ongoing but not finished.

### Busy Views and Larger Portions of UIs
Larger Portions of the UI, such as DataGrids loading their content, or portions of or whole views, may display that they are currently loading using a Spinner element. Some UI parts may have a specific in-progress or loading state built-in, if that is the case, use it. 

When such an element needs to be built and no in-progress state is defined, consult a designer to help. As a stop-gap measure, using a Spinner to signify an element or a group of elements is busy is, even if not ideal, almost never completely wrong. Locking an element or putting it in a non-responding state without any communication to the user normally is not a good idea, as the element(s) in question will most likely appear broken to users rather than busy.

For full application views loading, there may be custom loading states containing animations or additional information.

For more general guidance on how to handle waiting, loading, and in-progress states, see [Error And Empty/Loading/Busy State Handling Strategies](error-handling-loading-empty-states.md)

## Busy and In-Progress Entities
In many cases, elements of the UI are not busy themselves and as such, but do represent entities that are busy or in the process of changing state, such as individual elements in a DataGrid. In these cases, the decision whether to use a Spinner or a ProgressBar depends on a variety of factors: available space, the nature of the process, and the users mental model of the operation in question. A Spinner in most cases is enough to signify an element is busy, especially when the amount of time for the operation to complete is not very long, and/or the process progress simply can not be expressed in numerical terms, and/or simply switches between two distinct states.

## In-Progress Batch Operations
When a part of the User Interface is supposed to display that an operation is executed on multiple items or entities, using a ProgressBar is hardly ever wrong. When the target number of items the operation was completed for is known exactly at any point in time while the operation is ongoing, a standard ProgressBar with an exact percentage of completed items in relation to the number of all items is the best choice. If only the total number of items is known the operation is to be performed at, but we are waiting for an API to report completion while we have no indication of the number of completed items during the process, the default animation/95%-ProgressBar can be used. If the target number of items is unknown, as in operations that need to count or collect items, the indefinite ProgressBar is the right choice.
If none of these apply, or when the impression of a numerical nature of the process in terms of the number of items or percentage of completion feels off, is not necessary or desired, or does not represent the users’ mental model of the process in question, a Spinner seems the better choice.

## Spinner

A generic, all purpose component to display something is going on using a rotating circle segment. Can be customised in terms of size and color. 

### Use a Spinner when:
* Parts of an UI are loading or being set-up, and if no custom „loading“ state exists
* An operation or process changes between two distinct states of an element or entity, and is expected to take an amount of time long enough to warrant displaying the in-progress state to the user (e.g. starting or stopping an instance, fetching data from an API, etc.)
* It is impossible or undesirable to give users the implication of gradual progress towards a quantifiable target state.
* The notion of a percentage of completion does not match the users’ mental model of the operation in progress.
* space constraints disallow using a ProgressBar
* as a fallback when you’re not sure

## Progress Bar

An element to visualize current progress towards a finite or infinite goal. Consists of a visual container representing a numerical entity, and a bar that appears to fill the container that represents the current degree of completion of that goal. There is an „indefinite“ version of the Progress Bar that indicates progress to a numerical goal of unknown size or that is currently being established.

### Use a Progress Bar when:
* the operation in progress is a Batch operation (affects multiple entities or elements)
* the operation in progress can be represented numerically in terms of target value and current value
* the operation could be represented numerically in terms of % completed, even though the current valuer is unknown, but the target value is (default animation to N %, then wait)

### Use an Indefinite Progress Bar when:
* The operation does affect multiple entities, but the target value is not known (such a counting elements, etc. )

When in doubt, consult the design team for a recommendation.