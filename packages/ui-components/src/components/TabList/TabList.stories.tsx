/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { TabList } from "./TabList.component"
import { Tab, TabProps } from "../Tab/Tab.component"

export default {
  title: "Layout/Tabs/TabList",
  component: TabList,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    tabs: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = ({ children, ...args }: TemplateProps) => <TabList {...args}>{children}</TabList>

interface TemplateProps {
  children?: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]
}

export const Default = {
  render: Template,

  args: {
    children: [
      <Tab key="t-1" label="Tab 1" />,
      <Tab key="t-2" label="Tab 2" selected />,
      <Tab key="t-3" label="Tab 3" />,
      <Tab key="t-4" label="Disabled Tab" disabled />,
    ],
  },
}

export const MainTabList = {
  render: Template,

  args: {
    variant: "main",
    children: [
      <Tab key="t-1" label="Tab 1" />,
      <Tab key="t-2" label="Tab 2" selected />,
      <Tab key="t-3" label="Tab 3" />,
      <Tab key="t-4" label="Disabled Tab" disabled />,
    ],
  },
}
