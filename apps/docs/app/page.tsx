import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ComponentGrid } from "@/components/component-grid"
import { ComponentShowcase } from "@/components/component-showcase"
import { HeroSection } from "@/components/hero-section"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Beautiful UI components
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl">
              A collection of beautifully designed components that you can copy and paste into your apps. Accessible.
              Customizable. Open Source.
            </p>
          </div>

          <div className="mx-auto mt-16 grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
            <ComponentGrid />
          </div>

          <div className="mt-16 flex justify-center">
            <Button asChild size="lg">
              <Link href="/docs/components">
                Browse all components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="container space-y-16 py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">Featured components</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl">
              Explore our most popular components. Each component is built with accessibility and customization in mind.
            </p>
          </div>

          <ComponentShowcase />
        </section>

        <section className="bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">Open Source</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl">
                Our components are open source and available on GitHub. You can use them in your projects for free.
              </p>
              <Button variant="outline" size="lg" className="mt-4">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js, Tailwind CSS and shadcn/ui.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/docs" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Documentation
            </Link>
            <Link href="/components" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Components
            </Link>
            <Link href="/examples" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Examples
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
