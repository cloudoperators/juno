[← Back to Contents Overview](0_contents.md)

# Sign-In

> [!NOTE]  
> The below mentioned sign-in form templates have not yet been implemented and are not yet available.

There is a dedicated `SignInForm`component to be used when implementing sign-in forms and pages.

Always use a dedicated sign-in page, do not use modals to display sign-in forms.

There are several designs for sign-in pages which can be found as re-usable templates in storybook.

## Sign-In Form Validation

We do not implement any specific validation on the Sign-In form. Even if technically both username/email and password fields are required, we do not mark them as such, as the context and existing conventions make that perfectly clear, and we do not prevent submitting before values have been entered. We also do not disable the "Sign In"-button. For users it is possible to click the button and submit even if none of the fields has a value, and we will show an error message.

For any additional fields users may pass to the sign in form we would recommend to follow the same practice, at least as long as it seems sensible.

## Failed Sign-In

When signing-in a user failed, the respective messaging should **never** give away any exact information about the failed sign-in that would give an attacker information they did not have before. For example, the messaging must not state whether an account exists with the user name or email that was attempted to sign in with.

The same goes for when a user tried to reset a password: The message should never state whether an account for the email or user name the password was attempted to reset for actually exists or not.
