import Link from "next/link"
import { Calendar, CreditCard, Settings, Smile, User, FileText, BarChart, Bell, Layers, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const components = [
  {
    name: "Button",
    description: "Trigger actions with a click or tap.",
    icon: <CreditCard className="h-10 w-10" />,
    href: "/components/button",
  },
  {
    name: "Card",
    description: "Display content in a container with a header and footer.",
    icon: <FileText className="h-10 w-10" />,
    href: "/components/card",
  },
  {
    name: "Calendar",
    description: "A date picker with range and multiple selection.",
    icon: <Calendar className="h-10 w-10" />,
    href: "/components/calendar",
  },
  {
    name: "Avatar",
    description: "An image element with a fallback for representing the user.",
    icon: <User className="h-10 w-10" />,
    href: "/components/avatar",
  },
  {
    name: "Dialog",
    description: "A modal dialog that interrupts the user with important content.",
    icon: <Layers className="h-10 w-10" />,
    href: "/components/dialog",
  },
  {
    name: "Dropdown Menu",
    description: "Displays a menu to the user triggered by a button.",
    icon: <Settings className="h-10 w-10" />,
    href: "/components/dropdown-menu",
  },
  {
    name: "Tooltip",
    description: "A popup that displays information when hovering over an element.",
    icon: <Smile className="h-10 w-10" />,
    href: "/components/tooltip",
  },
  {
    name: "Charts",
    description: "Beautiful data visualization components.",
    icon: <BarChart className="h-10 w-10" />,
    href: "/components/charts",
  },
  {
    name: "Toast",
    description: "A succinct message that notifies the user of an event.",
    icon: <Bell className="h-10 w-10" />,
    href: "/components/toast",
  },
  // Add more components as needed
]

export default function ComponentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Components</h1>
              <p className="text-muted-foreground">
                A collection of beautifully designed components built with Tailwind CSS and React.
              </p>
            </div>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search components..."
                className="w-full pl-8 md:w-[200px] lg:w-[300px]"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {components.map((component) => (
              <Link key={component.name} href={component.href} className="group">
                <Card className="h-full overflow-hidden transition-all hover:border-primary hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="text-muted-foreground">{component.icon}</div>
                    <CardTitle className="text-xl">{component.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{component.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
