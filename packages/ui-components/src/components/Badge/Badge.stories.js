/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Badge } from "./index"
import { knownIcons } from "../../deprecated_js/Icon/Icon.component.js"

export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    text: "default",
  },
  argTypes: {
    icon: {
      options: ["default", ...knownIcons],
      control: { type: "select" },
    },
    children: {
      control: false,
    },
  },
}

export const WithDefaultIcon = {
  args: {
    text: "With Icon",
    icon: true,
  },
}

export const Info = {
  args: {
    variant: "info",
    text: "info",
  },
}
export const InfoWithIcon = {
  args: {
    variant: "info",
    text: "info",
    icon: true,
  },
}

export const Success = {
  args: {
    variant: "success",
    text: "success",
  },
}

export const SuccessWithIcon = {
  args: { variant: "success", text: "success", icon: true },
}

export const Warning = { args: { variant: "warning", text: "warning" } }

export const WarningWithIcon = {
  args: {
    variant: "warning",
    text: "warning",
    icon: true,
  },
}

export const Danger = {
  args: {
    variant: "danger",
    text: "danger",
  },
}

export const DangerWithIcon = {
  args: {
    variant: "danger",
    text: "danger",
    icon: true,
  },
}

export const Error = {
  args: {
    variant: "error",
    text: "error",
  },
}

export const ErrorWithIcon = {
  args: {
    variant: "error",
    text: "error",
    icon: true,
  },
}

export const DefaultWithAnyIcon = {
  args: {
    text: "deleted",
    icon: "deleteForever",
  },
}
