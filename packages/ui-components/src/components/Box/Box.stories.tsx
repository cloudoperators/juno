/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box } from "./index"

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {},
}

export const Default = {
  args: {
    children: "Some content in a Box.",
  },
}

export const BoxWithoutPadding = {
  parameters: {
    docs: {
      description: {
        story: "To remove padding, set the `unpad` prop.",
      },
    },
  },

  args: {
    children: "A Box without padding",
    unpad: true,
  },
}
