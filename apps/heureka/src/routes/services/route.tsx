import React from "react"
import { createFileRoute, Outlet } from "@tanstack/react-router"
import { LoaderWithCrumb } from "../__root"

export const Route = createFileRoute("/services")({
  loader: (): LoaderWithCrumb => ({
    crumb: {
      label: "Services",
      icon: "home",
    },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  )
}
