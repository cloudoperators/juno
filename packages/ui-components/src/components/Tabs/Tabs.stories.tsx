/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tabs } from "./index"
import { Tab, TabProps } from "../Tab/Tab.component"
import { TabList } from "../TabList/index"
import { TabPanel } from "../TabPanel/index"
import { TabPanelProps } from "../TabPanel/TabPanel.component"

interface TabsStoryProps {
  variant?: "content" | "main"
  children?: React.ReactNode
  selectedIndex?: number
  // eslint-disable-next-line no-unused-vars
  onSelect?: (index: number) => void
  tabs?: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]
  tabpanels?: React.ReactElement<TabPanelProps> | React.ReactElement<TabPanelProps>[]
}

const meta: Meta<TabsStoryProps> = {
  title: "Layout/Tabs/Tabs",
  component: Tabs,
  argTypes: {
    variant: {
      options: ["content", "main"],
      control: {
        type: "radio",
      },
    },
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
    tabpanels: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ tabs, tabpanels, ...args }) => (
    <Tabs {...args}>
      <TabList>{tabs}</TabList>
      {tabpanels}
    </Tabs>
  ),
}

export default meta
type Story = StoryObj<TabsStoryProps>

export const Default: Story = {
  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [
      <TabPanel key="tp-1">Content 1</TabPanel>,
      <TabPanel key="tp-2">Content 2</TabPanel>,
      <TabPanel key="tp-3">Content 3</TabPanel>,
    ],
  },
}

export const TabsWithIcons: Story = {
  args: {
    tabs: [
      <Tab key="t-1" icon="warning">
        Warning
      </Tab>,
      <Tab key="t-2" icon="danger">
        Danger
      </Tab>,
      <Tab key="t-3" icon="info">
        Info
      </Tab>,
    ],
    tabpanels: [
      <TabPanel key="tp-1">Warning Content</TabPanel>,
      <TabPanel key="tp-2">Danger Content</TabPanel>,
      <TabPanel key="tp-3">Info Content</TabPanel>,
    ],
  },
}

export const ControlledTabs: Story = {
  render: ({ selectedIndex, onSelect, tabs, tabpanels, ...args }) => {
    const [i, setI] = useState<number | undefined>(selectedIndex || 0)

    useEffect(() => {
      setI(selectedIndex)
    }, [selectedIndex])

    const handleSelect = (idx: number) => {
      setI(idx)
      onSelect && onSelect(idx)
    }

    return (
      <Tabs {...args} selectedIndex={i} onSelect={handleSelect}>
        <TabList>{tabs}</TabList>
        {tabpanels}
      </Tabs>
    )
  },
  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [
      <TabPanel key="tp-1">Content 1</TabPanel>,
      <TabPanel key="tp-2">Content 2</TabPanel>,
      <TabPanel key="tp-3">Content 3</TabPanel>,
    ],
    selectedIndex: 1,
    onSelect: () => {},
  },
}
