[← Back to UX Patterns](ux-patterns.md) | [← Back to Contents Overview](0_contents.md)

# Page and User Flow

This page describes the generally recommended application flow for Juno applications. Individual applications may deviate where their specific context requires it.

## Sign In

Applications that require authentication start with a Sign In page. If authentication fails, the user remains on the Sign In page and an error message is shown in the context of the sign-in form. See [Sign In](sign-in.md) for guidance.

## Home Page

After signing in, users typically land on a home page. This page gives users an overview of the entities they own or have access to — for example, a list of projects, accounts, or resources; or a scope of functionality. It orients the user and serves as the starting point for navigating into the application.

## Navigating Into Scope

From the home page, users navigate into a specific entity or scope — for example, selecting a project to work in. This may involve one or more levels of navigation depending on the depth of the application's data model. Use the [Side Navigation](navigation-side-navigation.md) to represent the top-level structure within a scope.

## List Views

Within a scope, the primary view for a given type of entity is typically a list view. Use a [DataGrid](datagrid.md) as the standard pattern for list views.

## Detail Views

Each item in a list view should by default have a dedicated detail page. Detail pages are deep-linkable — every detail view must have a stable, shareable URL. A Panel may be used as an alternative when keeping the user in the context of the list is important, but Panels are more complex to implement and manage correctly — a dedicated detail page is the recommended default, and the better solution in the majority of cases.

Users must always be able to return to the list view from a detail page via:

- A **breadcrumb** reflecting the navigational path
- A **back button** that navigates to the previous list view

Do not rely on the browser's back button alone — always provide explicit in-page navigation controls.

## Page Headings

Every page should have a heading that describes what is on it. A list of servers should be headed "Servers", a list of images "Images", ideally further specifying scope, context, and / or ownership. Omit the heading only when it would be genuinely redundant — for example, a Dashboard page where the context is already obvious from the navigation and the page itself does not need a "Dashboard" heading.
