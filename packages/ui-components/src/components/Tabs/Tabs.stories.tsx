/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import { Tabs } from "./index"
import { Tab, TabProps } from "../Tab/Tab.component"
import { TabList } from "../TabList/index"
import { TabPanel } from "../TabPanel/index"
import { TabPanelProps } from "../TabPanel/TabPanel.component"

export default {
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
  <Tabs {...args}>
    <TabList>{tabs}</TabList>
    {tabpanels}
  </Tabs>
)

interface TemplateProps {
  tabs?: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]
  tabpanels?: React.ReactElement<TabPanelProps> | React.ReactElement<TabPanelProps>[]
}

const ControlledTemplate = ({ selectedIndex, onSelect, tabs, tabpanels, ...args }: ControlledTemplateProps) => {
  const [i, setI] = useState<number | undefined>(0)

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
}

// eslint-disable-next-line no-unused-vars
type OnSelectHandler = (value: number) => void

interface ControlledTemplateProps {
  selectedIndex?: number
  onSelect?: OnSelectHandler
  tabs?: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]
  tabpanels?: React.ReactElement<TabPanelProps> | React.ReactElement<TabPanelProps>[]
}

export const Default = {
  render: Template,

  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [
      <TabPanel key="tp-1">Content 1</TabPanel>,
      <TabPanel key="tp-2">Content 2</TabPanel>,
      <TabPanel key="tp-3">Content 3</TabPanel>,
    ],
  },
}

export const TabsWithIcons = {
  render: Template,

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
      <TabPanel key="tp-1">Danger Content</TabPanel>,
      <TabPanel key="tp-1">Info Content</TabPanel>,
    ],
  },
}

export const ControlledTabs = {
  render: ControlledTemplate,

  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [
      <TabPanel key="tp-1">Content 1</TabPanel>,
      <TabPanel key="tp-2">Content 2</TabPanel>,
      <TabPanel key="tp-3">Content 3</TabPanel>,
    ],
    selectedIndex: 1,
    defaultIndex: null,
    onSelect: () => {},
  },
}
