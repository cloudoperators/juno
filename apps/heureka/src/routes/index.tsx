import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  loader: () => redirect({ to: "/services" }), // redirect to the default /services page
})
