/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

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
