/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryObj } from "@storybook/react-vite"

import { SignInForm } from "./SignInForm.component"
import { TextInput } from "../TextInput/TextInput.component"
import { NativeSelect } from "../NativeSelect/NativeSelect.component"
import { NativeSelectOption } from "../NativeSelectOption/NativeSelectOption.component"
import { Label } from "../Label/Label.component"
import { Button } from "../Button/Button.component"
import { Checkbox } from "../Checkbox/Checkbox.component"
import { Stack } from "../Stack/Stack.component"

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
  // Should I write decoratators for container-width?
}

export default meta
type Story = StoryObj<typeof meta>

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
    children: [
      <Stack key="inputs" direction="vertical" gap="2" className="jn:my-2">
        <TextInput key="email" label="Email address" id="email" required />
        <TextInput key="password" label="Password" id="password" type="password" required />
      </Stack>,
      <Checkbox key="remember" label="Remember me" id="remember" />,
      <Button key="submit" variant="primary" type="submit" className="jn:mt-4">
        Sign In
      </Button>,
    ],
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
    error: true,
    resetPwUrl: "#",
    children: [
      <Stack key="inputs" direction="vertical" gap="2" className="jn:mb-2">
        <TextInput key="username" label="Username" id="username" required />
        <TextInput key="password" label="Password" id="password" type="password" required />
        <Stack key="region" direction="vertical" gap="2">
          {/* Replace NativeSelect with Select? Or this is an example so it doesn't matter */}
          <Label text="Select Region" htmlFor="region" />
          <NativeSelect id="region">
            <NativeSelectOption value="" label="-- Choose a region --" />
            <NativeSelectOption value="us" label="United States" />
            <NativeSelectOption value="eu" label="Europe" />
            <NativeSelectOption value="asia" label="Asia Pacific" />
          </NativeSelect>
        </Stack>
      </Stack>,
      <Checkbox key="remember" label="Remember me" id="remember" />,
      <Button key="submit" variant="primary" type="submit" className="jn:mt-4">
        Sign In
      </Button>,
    ],
  },
}

export const ExternalAuthentication: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Minimal sign-in form for external authentication flows. No title, no password reset link, proceed button only. Ideal for SSO or third-party auth scenarios where the form is a simple trigger for an external process.",
      },
    },
  },
  args: {
    title: false,
    // Did you mean it like this? Or no children entirely? As it's much easier to handle like passing button as child props. I think if there's no props to pass to the SignInForm component, it's better to consumers to simply just use ternary like (X && Y && Z ? <Sign x={X} y={Y} z={Z} /> : <Button>Proceed</Button>) I am asking as I am not quite sure I understood you correctly with this no children line) or Did you mean when someone using <SignInForm /> => it's rendering as <Button>Proceed</Button>?
    children: [
      <Button key="proceed" variant="primary" type="submit">
        Proceed
      </Button>,
    ],
  },
}
