/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { BreadcrumbItem } from "./index"
import { knownIcons } from "../Icon/Icon.component.js"

const Template = (args) => {
  return <BreadcrumbItem {...args} />
}

export default {
  title: "Components/Breadcrumb/BreadcrumbItem",
  component: BreadcrumbItem,
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

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "A default breadcrumb item",
      },
    },
  },

  args: {
    label: "Breadcrumb Item",
  },
}

export const WithIcon = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Pass any available icon name to render an additional icon for the item.",
      },
    },
  },

  args: {
    icon: "place",
    label: "Breadcrumb Item with Icon",
  },
}

export const Active = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "An active item represents the current page.",
      },
    },
  },

  args: {
    label: "Active Breadcrumb Item",
    active: true,
  },
}

export const Disabled = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "A disabled breadcrumb item.",
      },
    },
  },

  args: {
    label: "Disabled Breadcrumb Item",
    disabled: true,
  },
}

export const Home = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Typically the first item in a breadcrumb.",
      },
    },
  },

  args: {
    label: "",
    icon: "home",
  },
}
