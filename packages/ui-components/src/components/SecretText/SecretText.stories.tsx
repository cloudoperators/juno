/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { SecretText } from "./SecretText.component"

const meta: Meta<typeof SecretText> = {
  title: "Forms/SecretText",
  component: SecretText,
  argTypes: {
    onBlur: {
      control: false,
    },
    onChange: {
      control: false,
    },
    onClear: {
      control: false,
    },
    onCopy: {
      control: false,
    },
    onFocus: {
      control: false,
    },
    onHide: {
      control: false,
    },
    onPaste: {
      control: false,
    },
    onReveal: {
      control: false,
    },
    onToggle: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithValue: Story = {
  args: {
    value:
      "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",
  },
}

export const RevealWithValue: Story = {
  args: {
    reveal: true,
    value:
      "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Set `reveal` to `true` to show the SecretText's content. When `reveal` is set to true, the SecretText can be edited unless et to `readOnly`.",
      },
    },
  },
}

export const WithLabel: Story = {
  args: {
    label: "Secret things",
  },
}

export const WithValueWithLabel: Story = {
  args: {
    label: "Secret things",
    value:
      "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",
  },
}

export const RequiredWithLabel: Story = {
  args: {
    required: true,
    label: "Secret things",
  },
}

export const NoClearNoToggleNoPaste: Story = {
  args: {
    value: "It's a secret.",
    clear: false,
    toggle: false,
    paste: false,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const ReadOnly: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Pass `readOnly` in order to make sure users can not edit the SecretText content by typing into the field when it is revealed.",
      },
    },
  },
  args: {
    readOnly: true,
    disablePaste: true,
    label: "Read Only Secret",
    value:
      "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",
    helptext: "This secret text can not be edited.",
  },
}
