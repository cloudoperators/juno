"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const showcaseComponents = [
  {
    id: "button",
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
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "A set of layered sections of content that display one panel at a time.",
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="password">Password settings</TabsContent>
    </Tabs>
  )
}`,
    preview: (
      <div className="flex items-center justify-center p-8">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4">
            Account settings
          </TabsContent>
          <TabsContent value="password" className="p-4">
            Password settings
          </TabsContent>
        </Tabs>
      </div>
    ),
  },
]

export function ComponentShowcase() {
  const [activeComponent, setActiveComponent] = useState(showcaseComponents[0])
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-5xl rounded-lg border bg-card text-card-foreground shadow">
      <div className="flex flex-col md:flex-row">
        <div className="w-full border-r md:w-1/3">
          <div className="flex flex-col">
            {showcaseComponents.map((component) => (
              <button
                key={component.id}
                onClick={() => setActiveComponent(component)}
                className={cn(
                  "flex items-start gap-2 border-b p-4 text-left transition-colors hover:bg-muted/50",
                  activeComponent.id === component.id && "bg-muted",
                )}
              >
                <div>
                  <h3 className="font-medium">{component.name}</h3>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col md:w-2/3">
          <div className="flex-1 border-b">
            <div className="p-4">
              <h3 className="text-lg font-medium">{activeComponent.name}</h3>
              <p className="text-sm text-muted-foreground">{activeComponent.description}</p>
            </div>
            <div className="border-t bg-muted/50">{activeComponent.preview}</div>
          </div>
          <div className="relative">
            <pre className="max-h-[350px] overflow-auto rounded-md bg-muted p-4 text-sm">
              <code>{activeComponent.code}</code>
            </pre>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => copyToClipboard(activeComponent.code)}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">Copy code</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
