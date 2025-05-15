import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Beautiful UI components <br className="hidden sm:inline" />
        for your next project
      </h1>
      <p className="max-w-[42rem] text-muted-foreground sm:text-xl">
        A collection of beautifully designed, accessible, and customizable UI components built with Tailwind CSS and
        React.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/docs">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg">
          <Link href="/components">Browse Components</Link>
        </Button>
      </div>
    </section>
  )
}
