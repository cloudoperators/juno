/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LoadingIndicator } from "./index.js"

export default {
  title: "Components/LoadingIndicator",
  component: LoadingIndicator,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          "A specific, CCloud-branded loading indicator. Use this to show a full page or a significant portion of a page, a panel, etc. is loading. For more generic use cases, individual comoponents and micro-interactions use Spinner instead.",
      },
    },
  },
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
