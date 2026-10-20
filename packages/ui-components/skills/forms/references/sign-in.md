# The sign-in form

Read this before building any sign-in or password-reset flow. Grounded in
`SignInForm.component.tsx`, `SignInForm.stories.tsx`, `docs/ux/sign-in.md`, and
`docs/ux/authentication-and-access.md`.

Sign-in deliberately breaks the normal form rules: fields are **not** marked required, the submit
button is **not** disabled, and there is **no** inline validation. Users may submit empty and get a
generic server error. This is intentional — the context makes the requirement obvious, and the
error must not leak account information (`docs/ux/sign-in.md`, "Sign-In Form Validation"). Always
use a dedicated page, never a modal.

## Props

`SignInForm` extends the native `<form>` attributes (minus `title`) and adds:

- `title?: string | false` — heading text. Omit for the default `"Sign In"`; pass `false` to hide
  the heading entirely.
- `error?: string | boolean` — pass `true` for the built-in generic message
  ("Authentication failed. Verify your credentials and try again."), a custom non-leaking string,
  or `false`/omit to hide.
- `resetPwUrl?: string | null` — a URL renders a "Reset password" link; `null` (default) or empty
  hides it.
- `children` — your inputs and submit button; `SignInForm` auto-spaces them in a vertical stack.

## Typical form

Mirrors the Storybook example: username/email, password, remember-me checkbox, full-width submit,
and a reset link. Note the absence of `required` on the fields and of `disabled` on the button.

```tsx
import { SignInForm, TextInput, Checkbox, Button } from "@cloudoperators/juno-ui-components"

function LoginPage({ failed }: { failed: boolean }) {
  return (
    <SignInForm title="Sign in" error={failed} resetPwUrl="/reset-password">
      <TextInput key="email" label="Email address" id="email" />
      <TextInput key="password" label="Password" id="password" type="password" />
      <Checkbox key="remember" label="Remember me" id="remember" />
      <Button key="submit" variant="primary" type="submit" className="jn:mt-4 jn:w-full">
        Sign In
      </Button>
    </SignInForm>
  )
}
```

Additional fields (e.g. a region `Select`) can be passed as children too; follow the same
no-validation, no-disabled practice as long as it is sensible (`docs/ux/sign-in.md`).

## Security-safe error copy

The failure message must never reveal whether an account exists for the entered identifier
(`docs/ux/sign-in.md`, "Failed Sign-In"). The same applies to password-reset responses — confirm
"If an account exists, we've sent reset instructions" rather than stating whether the address is
registered.

Safe:

```tsx
import { SignInForm, TextInput, Button } from "@cloudoperators/juno-ui-components"

function LoginForm({ failed }: { failed: boolean }) {
  return (
    <SignInForm error={failed ? "Authentication failed. Verify your credentials and try again." : false}>
      <TextInput label="Username" id="user" />
      <TextInput label="Password" id="pw" type="password" />
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </SignInForm>
  )
}
```

Unsafe (do not do this): `error="No account found for that email"` or
`error="Wrong password for this account"` — both confirm the identifier exists.

For broader guidance on rendering UI that unauthorized users may not use, see
`docs/ux/authentication-and-access.md` and its "UI for Unauthorized Users" link.
