/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { MainTabs } from "./index.js"
import { Tab } from "../Tab/index.js"
import { TabList } from "../TabList/index.js"
import { TabPanel } from "../TabPanel/index.js"

export default {
  title: "Layout/Tabs/MainTabs",
  component: MainTabs,
  argTypes: {
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

const Template = ({ tabs, tabpanels, ...args }) => (
  <MainTabs {...args}>
    <TabList>{tabs}</TabList>
    {tabpanels}
  </MainTabs>
)

Template.propTypes = {
  tabs: PropTypes.node,
  tabpanels: PropTypes.node,
}

const ControlledTemplate = ({
  onSelect,
  selectedIndex,
  tabs,
  tabpanels,
  ...args
}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(selectedIndex)
  }, [selectedIndex])

  const handleSelect = (idx) => {
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

// prop types for ControlledTemplate
ControlledTemplate.propTypes = {
  tabs: PropTypes.node,
  tabpanels: PropTypes.node,
  selectedIndex: PropTypes.number,
  onSelect: PropTypes.func,
}

export const Default = {
  render: Template,

  args: {
    tabs: [
      <Tab key="t-1">MainTab 1</Tab>,
      <Tab key="t-2">MainTab 2</Tab>,
      <Tab key="t-3">MainTab 3</Tab>,
    ],
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
    defaultIndex: null,
  },
}
