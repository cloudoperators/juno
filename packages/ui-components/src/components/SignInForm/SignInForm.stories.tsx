/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryObj } from "@storybook/react-vite"

import { SignInForm } from "./SignInForm.component"
import { TextInput } from "../TextInput"
import { Button } from "../Button"
import { Checkbox } from "../Checkbox"
import { SelectOption } from "../SelectOption"
import { Select } from "../Select"
import { PortalProvider } from "../PortalProvider"

const meta: Meta<typeof SignInForm> = {
  title: "Forms/SignInForm",
  component: SignInForm,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  decorators: [
    (Story) => (
      <PortalProvider>
        <Story />
      </PortalProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

const commonFormChildren = (additionalInputs?: React.ReactNode) => [
  <>
    <TextInput key="email" label="Email address" id="email" required />
    <TextInput key="password" label="Password" id="password" type="password" required />
    {additionalInputs}
    <Checkbox key="remember" label="Remember me" id="remember" />
  </>,
  <Button key="submit" variant="primary" type="submit" className="jn:mt-4 jn:w-full">
    Sign In
  </Button>,
]

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Not the default behaviour of the SignIn form, but a typical component configuration with username/email field, password input, remember me checkbox, and password reset link.",
      },
    },
  },
  args: {
    title: "Sign In",
    resetPwUrl: "#",
    children: commonFormChildren(),
  },
}

export const AdditionalInputs: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Sign-in form with custom title and additional inputs like region selection. Demonstrates customizable configurations for platform-specific requirements.",
      },
    },
  },
  args: {
    title: "Sign In to Your Account",
    resetPwUrl: "#",
    children: commonFormChildren(
      <Select key="region" placeholder="Select Region" id="region">
        <SelectOption value="us" key="r-1">
          United States
        </SelectOption>
        <SelectOption value="eu" key="r-2">
          Europe
        </SelectOption>
        <SelectOption value="asia" key="r-3">
          Asia Pacific
        </SelectOption>
      </Select>
    ),
  },
}
