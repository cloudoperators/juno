[← Back to Contents Overview](0_contents.md)

# Page Header

The Page Header appears at the top of every page, including error pages, so users can always navigate back home.

## What Goes in the Header

The Page Header has two areas:

**Left side — logo and application name**

The logo and application name on the left identifies the current application. The Juno logo is displayed by default. A custom logo can be provided as a React element, the logo can be hidden if not needed. Hiding both logo and application is strongly discouraged, as doing so will result in a lack of orientation for users.

The logo and application name area can be made interactive as a link or with a click handler. When made interactive, clicking them should take the users to the application home page or the closest equivalent thereof.

**Right side — options area**

On the right side we display options that are global to the current application and should be easily accessible regardless of where users currently are in the application. They should not change while users navigate through the application. Typical options depend on whether the user is signed in.

For users who are not signed in, and if the application does not forward users who are not signed in to a Sign In page anyway, a link to sign in should be shown.

For signed-in users, the application Page Header typically will contain a theme/mode toggle, and a user menu with a link to sign out. The user menu may contain more user-specific application options and settings, or display additional user-related data that may be relevant at any point during a users' journey through the application.
