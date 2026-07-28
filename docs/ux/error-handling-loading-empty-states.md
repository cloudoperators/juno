[← Back to Contents Overview](0_contents.md)

# Error And Empty/Loading/Busy State Handling Strategies

# Error State Handling

Patterns and rules for handling errors consistently across our applications.

## "BIG" Errors – Server, App, And Routing Errors

### Examples

- Internal errors (500)
- Faulty routes / URLs (404)
- App crash

### What To Do

- Render a dedicated error page
- Render PageHeader (and, if possible, show main / top-level navigation as open if parent route exists), if not possible show at least navigation, otherwise provide at least link to "home"

**See the [HTTP Error Code Reference](#http-error-code-reference) for specific codes, titles, and messages.**

## Authentication/Authorization Errors

### Unauthenticated (not logged in, 401)

The user is trying to access a route or URL which requires authentication without being logged in at the time.

#### What To Do

Redirect to the Sign In page, remember where the user wanted to go, and redirect once authenticated. Show an authentication error message on the Sign In page.

**See the [HTTP Error Code Reference](#http-error-code-reference) for specific codes, titles, and messages.**

### (Page level) Unauthorized (Forbidden, 403)

The user is authenticated and trying to see a page they are not authorized to see.

#### What To Do

Show an error page where breadcrumb and page title reflect the current route/URL, include the SideNav if applicable, and display an informational Message (see [HTTP Error Code Reference](#http-error-code-reference)) explaining the user is not authorized to access this resource.

**See the [HTTP Error Code Reference](#http-error-code-reference) for specific codes, titles, and messages.**

### Authorized content, unauthorized action

The user is logged in and authorized to see the content they are looking at, and we have rendered functional UI elements for that action/feature, but they do not have permission for an action they tried to initiate.
If we know that the user does not have the correct permissions to initiate an action, refer to [UI Elements for Non-Authorized Users](ui-for-unauthorized-users.md) for guidance and a decision matrix.

#### What To Do

Treat as Operation/Action/CRUD error (see below) with corresponding clear communication of lacking permission

## Component/Rendering/API Errors

A single component fails to render and/or does not receive the expected API data.

### What To Do

- Render as much of the page/view as possible,
- Give feedback in the scope/context of the affected component.

**See the [HTTP Error Code Reference](#http-error-code-reference) for specific codes, titles, and messages.**

> **TODO:** Identify components prone to such errors, design and implement loading, empty, error states. (A good and most urgent candidate is DataGrid.)

> **TODO:** Identify and design error and empty states for affected components.

## Operation/Action/CRUD errors

A user has initiated an action, such as creating, updating, or deleting an item or entity, and the operation fails immediately or with some delay.

### What To Do

- Render as much as possible, keep app as a whole functional and responsive.
- Give user feedback with as much detail as possible using Messages or Notifications.
- Do not interfere with or block other, potentially later initiated user actions.
- Provide shortcuts/links to retry where and if possible.

> **TODO:** Resolve open question: avoid blocking UI elements such as modals waiting for async action to complete, vs. keeping modal open with entered data when creation fails.

> **TODO:** If async/transient state persists, show busy state ("Creating"). If too long, timeout, or positive result not to expect, change to static error state.

## Validation Errors

### Examples

- Required fields missing
- wrong formatting of input (email, number, date) where applicable
- business rule violation (e.g. validity of input in one field depending on input of another one, etc)

### What To Do

- Use/show inline error messages as provided by Juno Ui mechanism if possible and error can be pinpointed to a specific field, otherwise use message on top of form
- Prevent submission of form until errors are resolved
- Clearly communicate not only what the error is, but what the user’s options are (Think: “As a user, what would I need to know in order to do ‘the right thing’)
- DON’T: invalidate/show errors on required but empty fields even if the user never input anything in the first place – only validate on submit or blur on very long forms
- for business rule violation/error caused by input in multiple fields: If inline messages can not be used, use a `FormSection` and show a message in the section, clearly explaining the problem and the way forward towards successful validation/submission

## Network And Connectivity Errors

### Examples

- network outage or flaky network

### What To Do

- Clear messaging - Show offline or timeout state

> **TODO:** Design offline/timeout state (prioritize!)

- Provide manual retry option

**See the [HTTP Error Code Reference](#http-error-code-reference) for specific codes, titles, and messages.**

## General Error Handling Rules

### Use Tight Error Boundaries

Keep errors confined to the smallest possible scope, keep as much of the app functional as possible

### Render as much as possible

Avoid blank screens, don’t block, keep app as functional and responsive as possible

### Communicate possible course(s) of actions

Explain what happened (or didn’t happen) in a way the user understands. Point to possible ways out, retry possibilities, documentation,

### Accessible Errors

Make sure errors can be perceived by all users

### Handle Errors Consistently

Stick to these outlines as much as possible, use patterns as provided by Juno UI components, ensure in-app consistency

## HTTP Error Code Reference

The table below maps common HTTP error codes to their recommended title, message, and handling strategy. Handling references correspond to the error categories described above.

| Code | Title                   | Message                                                                                           | Handling                                                                                     |
| ---- | ----------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 400  | Bad Request             | The request could not be processed due to invalid syntax. Try again.                              | Handle individually; see Component/Rendering/API Errors or Operation/Action/CRUD Errors      |
| 401  | Authentication Required | Authentication failed. Verify your credentials and try again.                                     | See Unauthenticated — redirect to Sign In with auth error message                            |
| 403  | Access Denied           | You do not have the required permissions to access this resource.                                 | See Unauthorized — breadcrumb, page title, side navigation (if applicable), and info Message |
| 404  | Page Not Found          | The requested URL does not exist or may have moved. Check the URL or return to the [home page](). | See "BIG" Errors — numeric error page with title and description                             |
| 408  | Request Timeout         | The request did not return a complete result in time. Check your connection and try again.        | Handle individually; see Component/Rendering/API Errors or Network and Connectivity Errors   |
| 409  | Conflict                | —                                                                                                 | Handle individually in the context where it occurred                                         |
| 429  | Too Many Requests       | —                                                                                                 | Handle individually in the context where it occurred                                         |
| 500  | Internal Server Error   | An internal error occurred. Try again.                                                            | See "BIG" Errors — numeric error page with title and description                             |
| 502  | Bad Gateway             | The server returned an invalid response. Try again.                                               | See "BIG" Errors — numeric error page with title and description                             |
| 503  | Service Unavailable     | The service is temporarily unavailable. Try again later.                                          | See "BIG" Errors — numeric error page with title and description                             |
| 504  | Gateway Timeout         | A server did not respond in time. Check your connection and try again.                            | See "BIG" Errors — numeric error page with title and description                             |
| XXX  | Unknown Error           | An unexpected error occurred. Try again.                                                          | See "BIG" Errors — generic error page                                                        |

# Diagram

> **TODO:** Create a diagram of error types and handling strategies and patterns, once hierarchy is reviewed.

# Loading / Busy States

## Empty State

### No Entities/Data exist(s)

Many components may be rendered, but do not have any content to show, such as DataGrids, lists, etc. This may be due to no data/entitites being present, a filter or search not returning any results, or users having deleted/cleared all data or entities themselves.

### What To Do

- Render empty state as designed (if exists, there may be Design Todos here), or otherwise communicate empty state, do not just render nothing
- Hint towards possibly too strict filters
- Where applicable, suggest next action (Create an item, reset a filter, try a new search, etc.). This may be less important and feel somewhat off in technical b2b apps such as the ones that we build, so use with care.

## Loading / Busy States

Components or views may be busy rendering or fetching data, or a piece of UI needs to reflect being busy due to an action initiated by the user. If you can, communicate the UI is busy, and with exactly what (Don’t overdo it, users will expect the UI to be busy once they have triggered an action)

> **TODO:** Don’t show multiple spinners in parallel if one spinner in a higher context could work as well.

### What To Do

- Show something is happening using the built-in states and mechanisms
- Use LoadingIndicator
- Block what needs blocking: If some elements are not usable when the ui is busy, disable them
- For longer processes, allow canceling where feasible/possible
- Timeout, prevent endless loading or being busy

## General Empty/Loading/Busy State Rules

The overall ideas guiding handling of empty, loading, and busy states are similar to how we handle errors: Communicate, block as little as possible, be consistent, and be accessible.

For more and in-depth guidance on handling loading and in-progress states, see [Transient States and Progress](transient-states-and-progress.md).

### Communicate Clearly

Explain the state – why is something empty? Don’t overdo it for busy states if initiated by the user: in these cases users have clicked a button, a busy indicator is enough to show something is happening (except when the action fails or times out, see error handling).
Also communicate clearly whether a component or view is actually busy or empty, or if there is a problem loading data or an action has timed out (see Error Handling).

### Suggest Possible Courses Of Action

Whenever any of these states may leave the user unsure what to do or where to go, provide guidance.

### Stay Consistent

Use Juno design system pattern and components where they exist, such as busy/loading states on buttons, etc. Don’t reinvent the wheel and check the docs!

### Use Sensible Boundaries And Scopes

Block only what needs blocking, not more. For example a DataGrid fetching data should not block the user from being able to navigate somehere else using the main navigation. In such a case show the DataGrid is busy, not the app as a whole. Only show individual items being busy if this is valuable information for the user (e.g. items being created).

### Keep States Accessible

Make sure all users can perceive and differentiate between the respective states.

### Don’t overdo it

Especially in Loading and Busy states, use the boundary of the tightest scope of everything that is busy, not the smallest: Too many elements moving or being busy create a chaotic, unsettling effect. If a Datagrid is busy loading data, show it once on the DataGrid, don’t show individual items individually loading.
