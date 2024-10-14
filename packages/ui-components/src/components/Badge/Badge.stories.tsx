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

//Default variants
export const Default = {
  args: {
    text: "Default",
  },
}

export const WithDefaultIcon = {
  args: {
    text: "Default",
    icon: true, // default icon based on variant
  },
}

export const WithAnyIcon = {
  args: {
    text: "deleted",
    icon: "deleteForever", // passed icon
  },
}

// Info variants
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

// Success variants
export const Success = {
  args: {
    variant: "success",
    text: "success",
  },
}
export const SuccessWithIcon = {
  args: {
    variant: "success",
    text: "success",
    icon: true,
  },
}

// Warning variants
export const Warning = {
  args: {
    variant: "warning",
    text: "warning",
  },
}
export const WarningWithIcon = {
  args: {
    variant: "warning",
    text: "warning",
    icon: true,
  },
}

// Danger variants
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

// Error variants
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
