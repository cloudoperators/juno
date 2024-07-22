/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "./index.js"

export default {
  title: "Components/Message",
  component: Message,
  argTypes: {
    children: {
      control: false,
    },
  },
}

export const Default = {
  args: {
    text: "Default Message.",
  },
}

export const WithTitle = {
  args: {
    title: "Message",
    text: "Message with title.",
  },
}

export const Warning = {
  args: {
    variant: "warning",
    text: "Warning Message.",
  },
}

export const Error = {
  args: {
    variant: "error",
    text: "Error Message.",
  },
}

export const Danger = {
  args: {
    variant: "danger",
    text: "Danger Message.",
  },
}

export const Success = {
  args: {
    variant: "success",
    text: "Success Message",
  },
}

export const Dismissible = {
  args: {
    text: "Dismissible Message.",
    dismissible: true,
  },
}
