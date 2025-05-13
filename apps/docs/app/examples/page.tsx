import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const examples = [
  {
    title: "Dashboard",
    description: "A dashboard layout with sidebar navigation and stats cards.",
    href: "/examples/dashboard",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Authentication",
    description: "Sign in, sign up, and forgot password forms.",
    href: "/examples/authentication",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "E-commerce",
    description: "Product listings, cart, and checkout flow.",
    href: "/examples/ecommerce",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Blog",
    description: "Blog layout with posts, categories, and comments.",
    href: "/examples/blog",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Forms",
    description: "Various form layouts and validation examples.",
    href: "/examples/forms",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Landing Page",
    description: "A marketing landing page with hero, features, and CTA sections.",
    href: "/examples/landing",
    image: "/placeholder.svg?height=300&width=600",
  },
]

export default function ExamplesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Examples</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Explore example implementations and patterns using the components.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {examples.map((example) => (
              <Card key={example.title} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={example.image || "/placeholder.svg"}
                    alt={example.title}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{example.title}</CardTitle>
                  <CardDescription>{example.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={example.href}>
                      View Example
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
