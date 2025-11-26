[← Back to Contents Overview](0_contents.md)

# Embedded Applications

Any Juno application can potentially be rendered in a Host / Shell app that hosts one or multiple “child” applications. When rendered into a host Shell app, we call the child apps “embedded apps” or apps in “embedded mode”.

When rendered as an embedded app, the page header of the embedded child app will not render. Embedded applications retain their own original navigations though.

In case a host app renders multiple embedded apps, the host app may render a simple navigation-like element that allows the user to switch between the child apps. This Navigation has a distinct style in order to differentiate it from in-app top level navigations.