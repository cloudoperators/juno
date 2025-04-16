/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import { MainTabs } from "./index"
import { Tab } from "../Tab/index"
import { TabList } from "../TabList/index"
import { TabPanel } from "../TabPanel/index"
import { TabPanelProps } from "../TabPanel/TabPanel.component"
import { TabProps } from "../Tab/Tab.component"

export default {
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
}

const Template = ({ tabs, tabpanels, ...args }: TemplateProps) => (
  <MainTabs {...args}>
    <TabList>{tabs}</TabList>
    {tabpanels}
  </MainTabs>
)

interface TemplateProps {
  tabs: React.ReactElement<TabProps>[]
  tabpanels: React.ReactElement<TabPanelProps>[]
}

const ControlledTemplate = ({ onSelect, selectedIndex, tabs, tabpanels, ...args }: ControlledTemplateProps) => {
  const [index, setIndex] = useState<number | undefined>(0)

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
}

// eslint-disable-next-line no-unused-vars
type OnSelectHandler = (value: number) => void

// prop types for ControlledTemplate
interface ControlledTemplateProps {
  tabs?: React.ReactElement<TabProps>[]
  tabpanels?: React.ReactElement<TabPanelProps>[]
  selectedIndex?: number
  onSelect?: OnSelectHandler
}

export const Default = {
  render: Template,

  args: {
    tabs: [<Tab key="t-1">MainTab 1</Tab>, <Tab key="t-2">MainTab 2</Tab>, <Tab key="t-3">MainTab 3</Tab>],
    tabpanels: [
      <TabPanel key="tp-1">TabPanel 1</TabPanel>,
      <TabPanel key="tp-2">TabPanel 2</TabPanel>,
      <TabPanel key="tp-3">TabPanel 3</TabPanel>,
    ],
  },
}

export const Controlled = {
  render: ControlledTemplate,

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
