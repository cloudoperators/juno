import { KnownIcons } from "@cloudoperators/juno-ui-components/index"
import { AppProps } from "../App"

export type RouteContext = {
  appProps: AppProps
}

type Crumb = {
  label: string
  icon?: KnownIcons
}

export type LoaderWithCrumb = {
  crumb: Crumb
}
