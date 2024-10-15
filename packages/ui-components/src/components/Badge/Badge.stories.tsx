/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { KnownIconsEnum } from "../Icon/Icon.component"
import { Badge } from "./"

export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    text: "default",
  },
  argTypes: {
    icon: {
      options: ["default", ...Object.values(KnownIconsEnum)],
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
    icon: true, // Default icon based on variant
  },
}

export const WithAnyIcon = {
  args: {
    text: "Deleted",
    icon: "deleteForever",
  },
}

export const Info = {
  args: {
    variant: "info",
    text: "Info",
  },
}
export const InfoWithIcon = {
  args: {
    variant: "info",
    text: "Info",
    icon: true,
  },
}

export const Success = {
  args: {
    variant: "success",
    text: "Success",
  },
}
export const SuccessWithIcon = {
  args: {
    variant: "success",
    text: "Success",
    icon: true,
  },
}

export const Warning = {
  args: {
    variant: "warning",
    text: "Warning",
  },
}
export const WarningWithIcon = {
  args: {
    variant: "warning",
    text: "Warning",
    icon: true,
  },
}

export const Danger = {
  args: {
    variant: "danger",
    text: "Danger",
  },
}
export const DangerWithIcon = {
  args: {
    variant: "danger",
    text: "Danger",
    icon: true,
  },
}

export const Error = {
  args: {
    variant: "error",
    text: "Error",
  },
}
export const ErrorWithIcon = {
  args: {
    variant: "error",
    text: "Error",
    icon: true,
  },
}
