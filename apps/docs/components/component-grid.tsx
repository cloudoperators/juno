import Link from "next/link"
import { Calendar, CreditCard, Settings, Smile, User, FileText, BarChart, Bell, Layers } from "lucide-react"

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
]

export function ComponentGrid() {
  return (
    <>
      {components.map((component) => (
        <Link key={component.name} href={component.href} className="group">
          <Card className="h-full overflow-hidden transition-all hover:border-primary hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="text-muted-foreground">{component.icon}</div>
              <CardTitle className="text-xl">{component.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="h-10">{component.description}</CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  )
}
