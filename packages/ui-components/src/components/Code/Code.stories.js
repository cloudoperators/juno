/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Code } from "./index.js"

export default {
  title: "Components/Code",
  component: Code,
  argTypes: {
    children: {
      control: false,
    },
  },
}

export const Default = {
  parameters: {
    docs: {
      description: {
        story: "Default inline code",
      },
    },
  },

  args: {
    content: "<span>Some code passed as content prop.</span>",
  },
}

export const WithChildren = {
  parameters: {
    docs: {
      description: {
        story: "Inline code with children",
      },
    },
  },

  args: {
    children: "<Code>Some code with children</Code>",
  },
}
