# Legacy Tabs / TabList / TabPanel / MainTabs (deprecated)

Read this only when maintaining existing code that uses `Tabs`, `TabList`, `Tab`, `TabPanel`, or
`MainTabs`. **All of these are deprecated** and may be removed in a future major release — see the
`@deprecated` JSDoc on each component. For new in-page tabbed content, use `react-tabs` directly, or
a `TabBar` wired to your own router/state for the headers. Sources: `Tabs.component.tsx`,
`Tab.component.tsx`, `TabList.component.tsx`, `TabPanel.component.tsx`, `MainTabs.component.tsx`.

## Structure

A `Tabs` wraps exactly one `TabList` (holding the `Tab` headers) followed by one `TabPanel` per tab,
in the same order. The Nth `Tab` corresponds to the Nth `TabPanel` by position — there is no id
linking them, so the counts and order must match.

```tsx
import { Tabs, TabList, Tab, TabPanel } from "@cloudoperators/juno-ui-components"

function Deprecated() {
  return (
    <Tabs>
      <TabList>
        <Tab>Overview</Tab>
        <Tab icon="warning">Alerts</Tab>
      </TabList>
      <TabPanel>Overview content</TabPanel>
      <TabPanel>Alerts content</TabPanel>
    </Tabs>
  )
}
```

## Variant

`Tabs` takes `variant`: `"content"` (default, tabs inside a content area), `"main"` (main-level tab
styling), or `"codeblocks"`. `MainTabs` is simply `Tabs` with `variant="main"` preset — it exposes
`children`, `defaultIndex`, `selectedIndex`, `onSelect`, and `className`, and is likewise deprecated.

## Uncontrolled vs. controlled

- **Uncontrolled (default):** pass `defaultIndex` for the initially selected tab and let `Tabs`
  manage selection internally. Do not also pass `selectedIndex`.
- **Controlled:** pass `selectedIndex` _and_ `onSelect`. `onSelect` receives the newly selected index
  as a `number`; store it and feed it back as `selectedIndex`.

```tsx
import { useState } from "react"
import { Tabs, TabList, Tab, TabPanel } from "@cloudoperators/juno-ui-components"

function Controlled() {
  const [index, setIndex] = useState(0)
  return (
    <Tabs selectedIndex={index} onSelect={(i) => setIndex(i)}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPanel>First panel</TabPanel>
      <TabPanel>Second panel</TabPanel>
    </Tabs>
  )
}
```

## Tab props

A `Tab` renders its `children`, or its `label` string if no children are given, plus an optional
`icon` (a Juno `KnownIcons` name). `disabled` greys it out and makes it non-selectable. A `TabList`
also accepts its own `variant`, but inside a `Tabs` the parent's variant (via context) takes
precedence.

## Migration note

Because these wrap `react-tabs`, the cleanest migration is to use `react-tabs` directly (same
`Tabs`/`TabList`/`Tab`/`TabPanel` roles) and style it yourself, or — when you only need tab-shaped
navigation headers that run handlers or hrefs rather than toggling local panels — switch to
`TabBar` + `TabBarItem` (see the second-level-bars reference) and render the panel content yourself
based on the active item.
