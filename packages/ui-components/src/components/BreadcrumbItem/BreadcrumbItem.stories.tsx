/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { KnownIconsEnum } from "../Icon/Icon.component"
import { BreadcrumbItem, BreadcrumbItemProps } from "./BreadcrumbItem.component"

const Template: React.FC<BreadcrumbItemProps> = (args) => {
  return <BreadcrumbItem {...args} />
}

const iconOptions = Object.keys(KnownIconsEnum)

export default {
  title: "Components/Breadcrumb/BreadcrumbItem",
  component: BreadcrumbItem,
  argTypes: {
    icon: {
      options: iconOptions,
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
        story: "A default breadcrumb item without navigation or interaction.",
      },
    },
  },

  args: {
    label: "Breadcrumb Item",
    onClick: undefined,
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
    onClick: undefined,
  },
}

export const Active = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "An active item represents the current page, rendered as a non-interactive span with aria-current.",
      },
    },
  },

  args: {
    label: "Active Breadcrumb Item",
    active: true,
    onClick: undefined,
  },
}

export const Disabled = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "A disabled breadcrumb item, non-interactive with aria-disabled.",
      },
    },
  },

  args: {
    label: "Disabled Breadcrumb Item",
    disabled: true,
    onClick: undefined,
  },
}

export const Link = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "A breadcrumb item rendered as a <a> with provided href",
      },
    },
  },

  args: {
    label: "Breadcrumb Link Item",
    href: "#",
    onClick: undefined,
  },
}

export const Button = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "A breadcrumb item rendered as a <button> using onClick for interaction.",
      },
    },
  },

  args: {
    label: "Breadcrumb Button Item",
    onClick: () => undefined,
  },
}

export const Home = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Typically the first item in a breadcrumb with a home icon.",
      },
    },
  },

  args: {
    label: "",
    icon: "home",
    onClick: undefined,
  },
}
