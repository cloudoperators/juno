/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { StyleProvider } from "./index"
import { StyleProviderProps } from "./StyleProvider.component"

const meta: Meta<typeof StyleProvider> = {
  title: "Layout/StyleProvider",
  component: StyleProvider,
  argTypes: {
    stylesWrapper: {
      options: ["head", "inline", "shadowRoot"],
      control: {
        type: "radio",
      },
    },
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: StyleProviderProps) => (
  <StyleProvider {...args}>{args.children || args.stylesWrapper || "undefined"}</StyleProvider>
)

export const AddStylesToHead: Story = {
  render: Template,
  args: {
    stylesWrapper: "head",
  },
}

export const AddInlineStyles: Story = {
  render: Template,
  args: {
    stylesWrapper: "inline",
  },
}

export const AddStylesToShadowRoot: Story = {
  render: Template,
  args: {
    stylesWrapper: "shadowRoot",
  },
}

export const WithLightTheme: Story = {
  render: Template,
  args: {
    stylesWrapper: "shadowRoot",
    theme: "theme-light",
    children: "Light Theme",
  },
}
