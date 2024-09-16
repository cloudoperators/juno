/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Navigation, NavigationProps } from "./index"
import { NavigationItem } from "../NavigationItem/index"

export default {
  title: "Internal/Navigation",
  component: Navigation,
  argTypes: {
    children: {
      control: false,
    },
    role: {
      options: ["TabNavigation", "TopNavigation", "SideNavigation"],
      control: { type: "select" },
    },
  },
}

const Template = ({ children, ...props }: NavigationProps) => <Navigation {...props}>{children}</Navigation>
Template.propTypes = {
  children: PropTypes.node,
}

export const DefaultWithChildren = {
  render: Template,
  args: {
    activeItem: "Item 1",
    children: [
      <NavigationItem key="i-1">Item 1</NavigationItem>,
      <NavigationItem key="i-2">Item 2</NavigationItem>,
      <NavigationItem key="i-3">Item 3</NavigationItem>,
      <NavigationItem key="i-4" disabled>
        Item 4
      </NavigationItem>,
    ],
  },
}

export const WithValuesAndLabels = {
  render: Template,
  args: {
    children: [
      <NavigationItem key="i-1" value="i-1" label="Item 1" />,
      <NavigationItem key="i-2" value="i-2" label="Item 2" />,
      <NavigationItem key="i-3" value="i-3" label="Item 3" />,
    ],
  },
}

export const WithValuesLabelsAndChildren = {
  render: Template,
  args: {
    children: [
      <NavigationItem key="i-1" value="i-1" label="Item 1 Label">
        Item 1
      </NavigationItem>,
      <NavigationItem key="i-2" value="i-2" label="Item 2 Label">
        Item 2
      </NavigationItem>,
      <NavigationItem key="i-3" value="i-3" label="Item 3 Label">
        Item 3
      </NavigationItem>,
    ],
  },
}

export const ValuesOnly = {
  render: Template,
  args: {
    children: [
      <NavigationItem key="i-1" value="Item 1" />,
      <NavigationItem key="i-2" value="Item 2" active />,
      <NavigationItem key="i-3" value="Item 3" />,
    ],
  },
}

export const WithActiveItemByValue = {
  render: Template,
  args: {
    activeItem: "item-2",
    children: [
      <NavigationItem key="i-1" value="item-1" label="Item 1" />,
      <NavigationItem key="i-2" value="item-2" label="Item 2" />,
      <NavigationItem key="i-3" value="item-3" label="Item 3" />,
    ],
  },
}

// TODO:
export const WithActiveItemByLabel = {
  render: Template,
  args: {
    activeItem: "Item 2",
    children: [
      <NavigationItem key="i-1" value="item-1" label="Item 1" />,
      <NavigationItem key="i-2" value="item-2" label="Item 2" />,
      <NavigationItem key="i-3" value="item-3" label="Item 3" />,
    ],
  },
}

// TODO:
export const WithActiveItemByChild = {
  render: Template,
  args: {
    activeItem: "Item 2",
    children: [
      <NavigationItem key="i-1" value="itm-1">
        Item 1
      </NavigationItem>,
      <NavigationItem key="i-2" value="itm-2">
        Item 2
      </NavigationItem>,
      <NavigationItem key="i-3" value="itm-3">
        Item 3
      </NavigationItem>,
    ],
  },
}

export const Disabled = {
  render: Template,
  args: {
    disabled: true,
    children: [
      <NavigationItem key="i-1">Item 1</NavigationItem>,
      <NavigationItem key="i-2" active>
        Item 2
      </NavigationItem>,
      <NavigationItem key="i-3">Item 3</NavigationItem>,
    ],
  },
}

export const ItemsAsLinks = {
  render: Template,
  args: {
    children: [
      <NavigationItem href="https://www.sap.com" key="i-1">
        Link 1
      </NavigationItem>,
      <NavigationItem href="https://www.sap.com" key="i-2">
        Link 2
      </NavigationItem>,
      <NavigationItem href="https://www.sap.com" key="i-3">
        Link 3
      </NavigationItem>,
    ],
  },
}
