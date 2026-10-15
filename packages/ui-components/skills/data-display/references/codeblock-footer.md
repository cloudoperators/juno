# CodeBlock footer actions

`CodeBlock` always renders a `CodeBlockFooter` when either `copy` is truthy (the default) or
`codeBlockFooter` is provided. The `codeBlockFooter` prop injects content **into** the footer bar, to
the left of the Copy button.

## Breaking change (do not reintroduce the old pattern)

Previously `codeBlockFooter` accepted a full replacement element that replaced the entire footer.
It now injects content _into_ the always-rendered footer wrapper. If you are migrating older code
that passed a complete footer element expecting it to replace the bar, drop the wrapper and pass only
the action node; use `copy={false}` when you want to hide the built-in Copy button
(`CodeBlock.component.tsx`, `codeBlockFooter` JSDoc).

## Combinations

- `copy` default `true`, no `codeBlockFooter` → Copy button only.
- `copy` default `true` + `codeBlockFooter={node}` → your action **and** the Copy button, in one bar.
- `copy={false}` + `codeBlockFooter={node}` → only your action, no Copy button.
- `copy={false}`, no `codeBlockFooter` → no footer rendered at all.

```
<CodeBlock
  content={code}
  copy={false}
  codeBlockFooter={<Icon icon="download" onClick={handleDownload} />}
/>
```

## CodeBlockFooter standalone

`CodeBlockFooter` can be used directly (`CodeBlockFooter.component.tsx`). Its props:

- `onCopy: () => void` — required; invoked when the Copy button is clicked. (React's `onCopy`
  clipboard handler is deliberately omitted from the inherited HTML attributes to avoid a type
  clash.)
- `isCopied: boolean` — drives the "Copied!" tooltip above the Copy button.
- `copy: boolean` — whether to render the Copy button.
- `children` — rendered to the left of the Copy button.

A fully wired example toggles `isCopied` for one second (`CodeBlockFooter.stories.tsx`, "Interactive"):

```
const [isCopied, setIsCopied] = useState(false)
const handleCopy = () => {
  setIsCopied(true)
  setTimeout(() => setIsCopied(false), 1000)
}

<CodeBlockFooter onCopy={handleCopy} isCopied={isCopied} copy={true} />
```

When `CodeBlock` manages the footer for you it wires `onCopy`/`isCopied` itself; you rarely construct
`CodeBlockFooter` by hand unless you are composing a custom block.
