/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toast } from "./index"

const meta: Meta<typeof Toast> = {
  title: "WiP/Toast",
  component: Toast,
  argTypes: {
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: "Default Message.",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    text: "Warning Message.",
  },
}

export const Error: Story = {
  args: {
    variant: "error",
    text: "Error Message.",
  },
}

export const Danger: Story = {
  args: {
    variant: "danger",
    text: "Danger Message.",
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    text: "Success Message",
  },
}

export const ToastWithLongText: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
}

export const AutoDismiss: Story = {
  args: {
    text: "AutoDismiss in 10 sec.",
    autoDismiss: true,
  },
}
