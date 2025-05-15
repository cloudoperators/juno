import Link from "next/link"
import { ArrowRight, BookOpen, Code, FileText, Layers } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12">
          <div className="mx-auto max-w-[800px]">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Documentation</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Learn how to use our component library to build beautiful interfaces.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <BookOpen className="h-6 w-6 text-muted-foreground" />
                  <CardTitle className="mt-2">Getting Started</CardTitle>
                  <CardDescription>
                    Learn how to install and set up the component library in your project.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/docs/getting-started">
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="h-6 w-6 text-muted-foreground" />
                  <CardTitle className="mt-2">Components</CardTitle>
                  <CardDescription>Explore the full range of components available in the library.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/components">
                      Browse Components
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Layers className="h-6 w-6 text-muted-foreground" />
                  <CardTitle className="mt-2">Theming</CardTitle>
                  <CardDescription>Learn how to customize the look and feel of the components.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/docs/theming">
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-6 w-6 text-muted-foreground" />
                  <CardTitle className="mt-2">Examples</CardTitle>
                  <CardDescription>View example implementations and patterns using the components.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/examples">
                      View Examples
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold">Installation</h2>
              <p className="mt-2 text-muted-foreground">
                Install the component library using your package manager of choice.
              </p>

              <div className="mt-4 rounded-md bg-muted p-4">
                <pre className="text-sm">
                  <code>npm install @ui-library/react</code>
                </pre>
              </div>

              <h2 className="mt-8 text-2xl font-bold">Usage</h2>
              <p className="mt-2 text-muted-foreground">
                Import components from the library and use them in your application.
              </p>

              <div className="mt-4 rounded-md bg-muted p-4">
                <pre className="text-sm">
                  <code>{`import { Button } from "@ui-library/react"

export default function App() {
  return (
    <Button>Click me</Button>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
