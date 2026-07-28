/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Box } from "./index"
import { Divider } from "../Divider"
import { ButtonRow } from "../ButtonRow"
import { Button } from "../Button"

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "info", "success", "warning", "error", "danger"],
      mapping: { default: undefined },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Some content in a Box.",
  },
}

export const WithoutPadding: Story = {
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

export const WithTitle: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use the `title` prop to render a bold label above the content.",
      },
    },
  },
  args: {
    title: "Box Title",
    children: "Some content in a Box with a title.",
  },
}

export const InfoBox: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Pass `variant="info"` to render an Info Box.',
      },
    },
  },
  args: {
    variant: "info",
    children: "This is an Info Box.",
  },
}

export const WarningBox: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Pass `variant="warning"` to render a Warning Box.',
      },
    },
  },
  args: {
    variant: "warning",
    children: "This is a Warning Box.",
  },
}

export const SuccessBox: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Pass `variant="success"` to render a Success Box.',
      },
    },
  },
  args: {
    variant: "success",
    children: "This is a Success Box.",
  },
}

export const ErrorBox: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Pass `variant="error"` to render an Error Box.',
      },
    },
  },
  args: {
    variant: "error",
    children: "This is an Error Box.",
  },
}

export const DangerBox: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Pass `variant="danger"` to render a Danger Box.',
      },
    },
  },
  args: {
    variant: "danger",
    children: "This is a Danger Box.",
  },
}

export const InlineActionBox: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "An Inline Action Box to offer one or more actions in the current context without interrupting the flow or implying urgency.",
      },
    },
  },
  render: (args) => (
    <Box title="This is an Inline Action Box" {...args}>
      <p>
        Use it to offer one or more actions in the current context without interrupting the flow or implying urgency.
      </p>
      <Divider color="jn:border-theme-higher" />
      <ButtonRow>
        <Button size="small">Click me</Button>
      </ButtonRow>
    </Box>
  ),
}

export const InlineInfoActionBox: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "An Inline Action Box to offer one or more actions in the current context without interrupting the flow or implying urgency.",
      },
    },
  },
  args: {
    variant: "info",
  },
  render: (args) => (
    <Box title="This is an Inline Info Action Box" {...args}>
      <p>
        Use it to offer one or more actions in the current context without interrupting the flow or implying urgency.
      </p>
      <Divider color="jn:border-theme-higher" />
      <ButtonRow>
        <Button size="small">Click me</Button>
        <Button size="small" variant="primary">
          Click me
        </Button>
      </ButtonRow>
    </Box>
  ),
}
