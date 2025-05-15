"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">UI Library</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/docs"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/docs" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Documentation
            </Link>
            <Link
              href="/components"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/components") ? "text-foreground" : "text-foreground/60"
              )}
            >
              Components
            </Link>
            <Link
              href="/examples"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/examples") ? "text-foreground" : "text-foreground/60"
              )}
            >
              Examples
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 text-lg font-medium">
                  <Link href="/docs" className="hover:text-foreground/80">
                    Documentation
                  </Link>
                  <Link href="/components" className="hover:text-foreground/80">
                    Components
                  </Link>
                  <Link href="/examples" className="hover:text-foreground/80">
                    Examples
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
