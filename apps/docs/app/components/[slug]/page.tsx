"use client"

import { useParams } from "next/navigation"
import { ArrowLeft, Copy, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"

// This is a simplified example - in a real app, you would fetch this data from an API or CMS
const componentsData = {
  button: {
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    code: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <Button variant="default">
      Button
    </Button>
  )
}`,
    preview: (
      <div className="flex items-center justify-center p-8">
        <Button>Button</Button>
      </div>
    ),
    usage: `
## Installation

\`\`\`bash
npx shadcn@latest add button
\`\`\`

## Usage

\`\`\`tsx
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <Button variant="outline">Button</Button>
  )
}
\`\`\`

## Examples

### Primary

\`\`\`tsx
<Button>Primary</Button>
\`\`\`

### Secondary

\`\`\`tsx
<Button variant="secondary">Secondary</Button>
\`\`\`

### Destructive

\`\`\`tsx
<Button variant="destructive">Destructive</Button>
\`\`\`

### Outline

\`\`\`tsx
<Button variant="outline">Outline</Button>
\`\`\`

### Ghost

\`\`\`tsx
<Button variant="ghost">Ghost</Button>
\`\`\`

### Link

\`\`\`tsx
<Button variant="link">Link</Button>
\`\`\`

### Icon

\`\`\`tsx
<Button size="icon">
  <PlusIcon className="h-4 w-4" />
</Button>
\`\`\`

### With Icon

\`\`\`tsx
<Button>
  <PlusIcon className="mr-2 h-4 w-4" /> New
</Button>
\`\`\`

### Loading

\`\`\`tsx
<Button disabled>
  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>
\`\`\`

### As Child

\`\`\`tsx
<Button asChild>
  <Link href="/login">Login</Link>
</Button>
\`\`\`
`,
  },
  // Add more components as needed
}

export default function ComponentPage() {
  const params = useParams()
  const slug = params?.slug as string
  const component = componentsData[slug as keyof typeof componentsData]
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!component) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="container flex-1 py-12">
          <h1 className="text-3xl font-bold">Component not found</h1>
          <p className="mt-4">The component you are looking for does not exist.</p>
          <Button asChild className="mt-8">
            <Link href="/components">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to components
            </Link>
          </Button>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="container flex-1 py-12">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm">
            <Link href="/components">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to components
            </Link>
          </Button>
        </div>

        <div className="grid gap-12 md:grid-cols-[1fr_250px]">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold">{component.name}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{component.description}</p>
            </div>

            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="preview"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium data-[state=active]:border-b-primary"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium data-[state=active]:border-b-primary"
                >
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="rounded-md border p-6">
                {component.preview}
              </TabsContent>
              <TabsContent value="code" className="relative">
                <pre className="max-h-[350px] overflow-auto rounded-md bg-muted p-4 text-sm">
                  <code>{component.code}</code>
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4"
                  onClick={() => copyToClipboard(component.code)}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span className="sr-only">Copy code</span>
                </Button>
              </TabsContent>
            </Tabs>

            <div className="prose prose-gray max-w-none dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: component.usage }} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Installation</h3>
              <div className="relative">
                <pre className="overflow-x-auto rounded bg-muted p-2 text-sm">
                  <code>{`npx shadcn@latest add ${slug}`}</code>
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2"
                  onClick={() => copyToClipboard(`npx shadcn@latest add ${slug}`)}
                >
                  {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  <span className="sr-only">Copy code</span>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Related</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/components/button" className="text-sm text-muted-foreground hover:text-foreground">
                    Button
                  </Link>
                </li>
                <li>
                  <Link href="/components/card" className="text-sm text-muted-foreground hover:text-foreground">
                    Card
                  </Link>
                </li>
                <li>
                  <Link href="/components/dialog" className="text-sm text-muted-foreground hover:text-foreground">
                    Dialog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
