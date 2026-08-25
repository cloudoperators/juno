[← Back to Contents Overview](0_contents.md)

# Page Layout Elements

Every Juno application page is composed of three structural elements: a Page Header at the top, a Page Content Area in the middle, and a Page Footer at the bottom. Together they provide a consistent frame users can rely on regardless of which part of the application they are in.

1.  [Page Header](page-header.md)
2.  [Page Content Area](page-content-area.md)
3.  [Page Footer](page-footer.md)

## Using AppShell

The recommended way to access these building blocks is through the [AppShell](the-appshell.md) component. AppShell provides dedicated slots for the Page Header, Side Navigation, Page Content Area, and Page Footer, ensuring each element is rendered in the correct position in the markup. It also bundles the styles, CSS variables, theme context, and other providers that the layout elements depend on — so everything works correctly out of the box without additional setup. Using AppShell is not strictly required, but assembling layout, styles, and context providers manually is significantly more effort.
