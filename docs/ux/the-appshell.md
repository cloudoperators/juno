[← Back to Contents Overview](0_contents.md)

# The AppShell

The AppShell is a core component of Juno UI Components, aimed at making bootstrapping and building Juno-based applications as easy as possible.

Out of the box, AppShell provides application authors and developers with the necessary layout mechanisms, styles, CSS-variables, and context providers needed to build fully functional, compliant Juno applications.

Using AppShell as the starting point for new applications is highly recommended.

Not using AppShell to begin building a new application is possible, but comes at a relatively high price since application developers will have to include layout components, styles, context providers for styling, UI themes, portals, etc. themselves.

> [!WARNING]  
> Starting from scratch without AppShell and not adding these building blocks manually may result in the application or individual components not working at all, or not rendering or working as expected.

AppShell comes with slots for a page header, a side navigation, and a page footer. Use these to make sure the respective components are rendered exactly where they should end up in the markup, and to ensure they function as expected.

[illustration]
