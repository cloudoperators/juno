/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LoadingIndicator } from "./index.js"

export default {
  title: "Components/LoadingIndicator",
  component: LoadingIndicator,
}

export const Default = {
  args: {},
}

export const SizedLoadingIndicator = {
  args: {
    size: "300",
  },
}

export const ColoredLoadingIndicator = {
  args: {
    color: "jn-text-theme-info",
  },
}
