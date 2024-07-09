/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { SecretText } from "./SecretText.component";

export default {
  title: "WIP/SecretText",
  component: SecretText,
  argTypes: {},
};

const Template = ({ ...args }) => {
  return <SecretText {...args} />;
};

export const Default = {
  render: Template,
  args: {},
};

export const withValue = {
  render: Template,
  args: {
    value:
      "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",
  },
};

export const revealWithValue = {
  render: Template,
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
};

export const WithLabel = {
  render: Template,
  args: {
    label: "Secret things",
  },
};

export const WithValueWithLabel = {
  render: Template,
  args: {
    label: "Secret things",
    value:
      "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",
  },
};

export const RequiredWithLabel = {
  render: Template,
  args: {
    required: true,
    label: "Secret things",
  },
};

export const NoClearNoToggleNoPaste = {
  render: Template,
  args: {
    value: "It's a secret.",
    clear: false,
    toggle: false,
    paste: false,
  },
};

export const Disabled = {
  render: Template,
  args: {
    disabled: true,
  },
};

export const ReadOnly = {
  parameters: {
    docs: {
      description: {
        story:
          "Pass `readOnly` in order to make sure users can not edit the SecretText content by typing into the field when it is revealed.",
      },
    },
  },
  render: Template,
  args: {
    readOnly: true,
    disablePaste: true,
    label: "Read Only Secret",
    value:
      "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",
    helptext: "This secret text can not be edited.",
  },
};
