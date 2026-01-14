[← Back to Contents Overview](0_contents.md)

# Juno Layout

A Juno application is structured using a predictable, stable layout that ensures clarity of navigation and consistency in terms of user experience across all products and platforms using Juno.

## Standard Layout

Generally, the layout of a Juno application consists of at least three building blocks:

### Page Header

The primary, global anchor of an application. As a minimum, the Page Header should contain the name of the platform, application, or product it represents. It provides vital orientation for the user and is a fundamental element of any kind of brand and platform identity, and thus is a mandatory element.
In all but the most simplistic applications, in addition to the name of the application or platform, the header may also house the following elements:

- Application or company logo (left)
- UI Mode Switch
- User Menu
- Application Settings
- Sign-In/Out option

Any additional option as per above will be contained in a compact block on the right side of the header. User-related options such a settings, Sign Out, etc. may be concentrated into a Popup Menu to avoid visual clutter.

### Main Content Area

The global container for all application content. It also houses the primary navigation as a Side Navigation. New application should always use a Side Navigation adjacent to the left of the actual content as their primary navigation.

[More information on Navigation Fundamentals can be found here](navigation-fundamentals.md)

### Page Footer

The Page Footer is an equally important, global element that concludes the page. It may contain legal and copyright information, clarify the authorship or association of an application to a group, author, or company. Also additional, secondary content that may not seem fit in the primary navigation while having global scope, such as required legal documents, may be placed here.

## Single Page Layout

For smaller, single page applications the standard layout rules apply, however these will not need a Side Navigation, and, depending on their content, may restrict their contents width. Page Header and Page Footer are still mandatory elements.

## Other Layout Variants

### Embedded Application Layout

Any application built with Juno may run as an embedded application, some special rules apply in this case.

[More information about the layout of embedded applications can be found here.](embedded-application-layout.md)

### Legacy Application Layout

Older application built with previous versions of Juno may use different layouts or not fully comply with the layout rules outlined here.

[More information about legacy application layout can be found here](legacy-application-layout.md).
