/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { MainTabs } from "./index"
import { Tab } from "../Tab/index"
import { TabList } from "../TabList/index"
import { TabPanel } from "../TabPanel/index"
import { TabPanelProps } from "../TabPanel/TabPanel.component"
import { TabProps } from "../Tab/Tab.component"
import { MainTabsProps } from "./MainTabs.component"

interface MainTabsStoryProps extends MainTabsProps {
  tabs: React.ReactElement<TabProps>[]
  tabpanels: React.ReactElement<TabPanelProps>[]
}

const meta: Meta<MainTabsStoryProps> = {
  title: "Layout/Tabs/MainTabs",
  component: MainTabs,
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
    tabpanels: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ tabs, tabpanels, ...args }) => (
    <MainTabs {...args}>
      <TabList>{tabs}</TabList>
      {tabpanels}
    </MainTabs>
  ),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [<Tab key="t-1">MainTab 1</Tab>, <Tab key="t-2">MainTab 2</Tab>, <Tab key="t-3">MainTab 3</Tab>],
    tabpanels: [
      <TabPanel key="tp-1">TabPanel 1</TabPanel>,
      <TabPanel key="tp-2">TabPanel 2</TabPanel>,
      <TabPanel key="tp-3">TabPanel 3</TabPanel>,
    ],
  },
}

export const Controlled: Story = {
  render: ({ onSelect, selectedIndex, tabs, tabpanels, ...args }) => {
    const [index, setIndex] = useState<number | undefined | null>(0)

    useEffect(() => {
      setIndex(selectedIndex)
    }, [selectedIndex])

    const handleSelect = (idx: number) => {
      setIndex(idx)
      onSelect && onSelect(idx)
    }

    return (
      <MainTabs {...args} selectedIndex={index} onSelect={handleSelect}>
        <TabList>{tabs}</TabList>
        {tabpanels}
      </MainTabs>
    )
  },
  args: {
    tabs: [
      <Tab key="t-1">Controlled MainTab 1</Tab>,
      <Tab key="t-2">Controlled MainTab 2</Tab>,
      <Tab key="t-3">Controlled MainTab 3</Tab>,
    ],
    tabpanels: [
      <TabPanel key="tp-1">TabPanel 1</TabPanel>,
      <TabPanel key="tp-2">TabPanel 2</TabPanel>,
      <TabPanel key="tp-3">TabPanel 3</TabPanel>,
    ],
    selectedIndex: 1,
  },
}
