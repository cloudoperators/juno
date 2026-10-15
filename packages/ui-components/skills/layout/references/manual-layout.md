# Manual layout primitives (without AppShell)

> Use `AppShell` whenever you can. Assembling the frame by hand is "significantly more effort" and
> the documented way to end up with an app that does not render correctly
> (`docs/ux/page-layout-elements.md`, "Using AppShell"; `docs/ux/the-appshell.md` warning). This
> page is for the rare case where you genuinely cannot use `AppShell`.

Even in manual mode, the outermost `AppShellProvider` is still **mandatory** — it supplies theme,
CSS variables, portals, and the shadow root. Only the frame changes.

## The nesting order

`AppShell` internally composes these primitives. If you replicate it by hand, use the same order:

```
AppBody                     // flex column, full height; the <div class="juno-body">
  HeaderContainer           // sticky top bar — holds PageHeader (+ TopNavigation)
  MainContainer             // <main>, grows to fill
    MainContainerInner      // width constraint (or fullWidth) wrapper
      <SideNavigation/>     // optional, left of content
      ContentContainer      // the content-area background wrapper
        {your content}
  PageFooter                // sticky bottom footer
```

## What each primitive does

- `AppBody` — top-level body container (`className` + standard HTML div attrs).
- `HeaderContainer` — sticky, shadowed top container. `fullWidth?: boolean` (default `false`)
  toggles between a constrained (centered at the 2xl breakpoint) and full-width header.
- `MainContainer` — the `<main>` element that grows to fill remaining height.
- `MainContainerInner` — inner wrapper; `fullWidth?: boolean` (default `false`) applies the same
  width constraint vs. full-width choice as `HeaderContainer`.
- `ContentContainer` — the content-area background/wrapper the page content sits in.

All five take `className` and `children` only (plus standard HTML attributes); none of them render a
header or footer for you — that is why `AppShell` is preferred.

## Example

```tsx
import {
  AppShellProvider,
  AppBody,
  HeaderContainer,
  PageHeader,
  MainContainer,
  MainContainerInner,
  ContentContainer,
  PageFooter,
  Container,
  ContentHeading,
} from "@cloudoperators/juno-ui-components"

function ManualApp() {
  return (
    <AppShellProvider>
      <AppBody>
        <HeaderContainer>
          <PageHeader applicationName="My App" href="/" />
        </HeaderContainer>
        <MainContainer>
          <MainContainerInner>
            <ContentContainer>
              <Container py>
                <ContentHeading>Dashboard</ContentHeading>
                <p>Content goes here.</p>
              </Container>
            </ContentContainer>
          </MainContainerInner>
        </MainContainer>
        <PageFooter copyright="© 2026 ACME" />
      </AppBody>
    </AppShellProvider>
  )
}
```

This reproduces, by hand, exactly what `<AppShell pageHeader="My App">…</AppShell>` would have given
you. Keep the Page Header and Page Footer present (both are mandatory in a standard app per
`docs/ux/layout-fundamentals.md`), and set `fullWidth` consistently on `HeaderContainer` and
`MainContainerInner` so the header and content align.
