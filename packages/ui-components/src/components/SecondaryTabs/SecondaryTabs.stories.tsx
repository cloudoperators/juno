/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryObj } from "@storybook/react-vite"
import { SecondaryTabs } from "./SecondaryTabs.component"
import { SecondaryTab } from "./SecondaryTab.component"
import { SecondaryTabPanel } from "./SecondaryTabPanel.component"

const meta: Meta<typeof SecondaryTabs> = {
  title: "WIP/SecondaryTabs/SecondaryTabs",
  component: SecondaryTabs,
  argTypes: {
    activeTab: { control: "text" },
    defaultTab: { control: "text" },
    disabled: { control: "boolean" },
    onTabChange: { action: "onTabChange" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A segmented-control tab strip for hierarchical navigation. Sits below the primary `TabNavigation`. Uses native ARIA (`role=tablist/tab/tabpanel`).",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Basic tab strip with three tabs and corresponding panels.",
      },
    },
  },
  render: (args) => (
    <SecondaryTabs defaultTab="overview" {...args}>
      <SecondaryTab value="overview">Overview</SecondaryTab>
      <SecondaryTab value="details">Details</SecondaryTab>
      <SecondaryTab value="logs">Logs</SecondaryTab>
      <SecondaryTabPanel value="overview">
        <div className="jn:p-4 jn:text-sm">Overview content</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="details">
        <div className="jn:p-4 jn:text-sm">Details content</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="logs">
        <div className="jn:p-4 jn:text-sm">Logs content</div>
      </SecondaryTabPanel>
    </SecondaryTabs>
  ),
}

export const WithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: "Tabs with icons rendered to the left of each label.",
      },
    },
  },
  render: (args) => (
    <SecondaryTabs defaultTab="compute" {...args}>
      <SecondaryTab value="compute" iconLeft="openInNew">
        Compute
      </SecondaryTab>
      <SecondaryTab value="storage" iconLeft="info">
        Storage
      </SecondaryTab>
      <SecondaryTab value="network" iconLeft="warning">
        Network
      </SecondaryTab>
      <SecondaryTabPanel value="compute">
        <div className="jn:p-4 jn:text-sm">Compute content</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="storage">
        <div className="jn:p-4 jn:text-sm">Storage content</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="network">
        <div className="jn:p-4 jn:text-sm">Network content</div>
      </SecondaryTabPanel>
    </SecondaryTabs>
  ),
}

export const AllDisabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "All tabs disabled via the parent `disabled` prop.",
      },
    },
  },
  render: (args) => (
    <SecondaryTabs defaultTab="overview" disabled {...args}>
      <SecondaryTab value="overview">Overview</SecondaryTab>
      <SecondaryTab value="details">Details</SecondaryTab>
      <SecondaryTab value="logs">Logs</SecondaryTab>
    </SecondaryTabs>
  ),
}

export const SingleTabDisabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "One tab disabled individually. Keyboard navigation skips it.",
      },
    },
  },
  render: (args) => (
    <SecondaryTabs defaultTab="overview" {...args}>
      <SecondaryTab value="overview">Overview</SecondaryTab>
      <SecondaryTab value="details" disabled>
        Details
      </SecondaryTab>
      <SecondaryTab value="logs">Logs</SecondaryTab>
      <SecondaryTabPanel value="overview">
        <div className="jn:p-4 jn:text-sm">Overview content</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="logs">
        <div className="jn:p-4 jn:text-sm">Logs content</div>
      </SecondaryTabPanel>
    </SecondaryTabs>
  ),
}

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: "Controlled mode: active tab driven by the `activeTab` prop.",
      },
    },
  },
  args: {
    activeTab: "details",
  },
  render: (args) => (
    <SecondaryTabs {...args}>
      <SecondaryTab value="overview">Overview</SecondaryTab>
      <SecondaryTab value="details">Details</SecondaryTab>
      <SecondaryTab value="logs">Logs</SecondaryTab>
      <SecondaryTabPanel value="overview">
        <div className="jn:p-4 jn:text-sm">Overview content</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="details">
        <div className="jn:p-4 jn:text-sm">Details content (controlled active)</div>
      </SecondaryTabPanel>
      <SecondaryTabPanel value="logs">
        <div className="jn:p-4 jn:text-sm">Logs content</div>
      </SecondaryTabPanel>
    </SecondaryTabs>
  ),
}
