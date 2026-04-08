import { createFileRoute } from "@tanstack/react-router"
import { ExposedServices } from "../../components/admin/ExposedServices"
import { extractFilterSettingsFromSearchParams } from "../../components/admin/utils"

export const Route = createFileRoute("/admin/exposed-services")({
  component: ExposedServices,
  loaderDeps: (search) => ({
    ...search,
  }),
  loader: ({ deps: { search } }) => ({
    crumb: {
      label: "Exposed Services",
      icon: "home",
    },
    filterSettings: extractFilterSettingsFromSearchParams(search),
  }),
})
