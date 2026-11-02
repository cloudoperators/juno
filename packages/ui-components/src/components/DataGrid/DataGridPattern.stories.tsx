/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataGrid } from "./DataGrid.component"
import { DataGridRow } from "../DataGridRow"
import { DataGridCell } from "../DataGridCell"
import { DataGridHeadCell } from "../DataGridHeadCell"
import { DataGridToolbar } from "../DataGridToolbar"
import { Stack } from "../Stack"
import { Button } from "../Button"
import { Checkbox } from "../Checkbox"
import { Select } from "../Select"
import { SelectOption } from "../SelectOption"
import { SortButton } from "../SortButton"
import { PopupMenu, PopupMenuOptions, PopupMenuItem, PopupMenuToggle } from "../PopupMenu"
import { InputGroup } from "../InputGroup"
import { ComboBox } from "../ComboBox"
import { ComboBoxOption } from "../ComboBoxOption"
import { SearchInput } from "../SearchInput"
import { Pill } from "../Pill"
import { PortalProvider } from "../PortalProvider"
import { TabBar } from "../TabBar"
import { TabBarItem } from "../TabBarItem"

const meta: Meta = {
  title: "Patterns/DataGrid/DataGrid Pattern",
  decorators: [
    (Story) => (
      <PortalProvider>
        <Story />
      </PortalProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **DataGrid pattern** is the complete composition: the \`DataGrid\` component for displaying the data, with the DataGrid Header composition above it for everything users need to interact with and configure the dataset.

The header and the grid are wrapped together in a single outer vertical \`Stack\` (\`juno-pattern-datagrid-outer\`); the header zones are wrapped in their own vertical \`Stack\` (\`juno-pattern-datagrid-header\`) inside it.

This page documents the two working together. For the individual pieces, see the [DataGrid component](?path=/docs/components-datagrid-datagrid--docs) and the [DataGrid Header](?path=/docs/patterns-datagrid-datagrid-header--docs) composition. Every header zone and element is optional — include only what the specific DataGrid needs.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const servers = [
  { id: "1", name: "node-prod-01", region: "eu-west-1", status: "Running", az: "AZ-1" },
  { id: "2", name: "node-prod-02", region: "eu-west-1", status: "Stopped", az: "AZ-2" },
  { id: "3", name: "node-staging-01", region: "us-east-1", status: "Running", az: "AZ-1" },
  { id: "4", name: "node-dev-01", region: "ap-south-1", status: "Error", az: "AZ-3" },
]

export const Default: Story = {
  render: () => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
    const [selected, setSelected] = useState<Record<string, boolean>>({})
    const [activeFilter, setActiveFilter] = useState<React.ReactNode>("All")

    return (
      <Stack direction="vertical" className="juno-pattern-datagrid-outer">
        <Stack direction="vertical" className="juno-pattern-datagrid-header">
          {/* Zone 1: Predefined filter tabs (left) + sorting and primary action (right) — bare Stack, no background */}
          <Stack distribution="between" alignment="center" gap="2" className="jn:pb-2">
            <TabBar appearance="buttons" activeItem={activeFilter} onActiveItemChange={setActiveFilter}>
              <TabBarItem label="All" />
              <TabBarItem label="Running" />
              <TabBarItem label="Stopped" />
              <TabBarItem label="Error" />
            </TabBar>
            <Stack gap="2">
              <Stack gap="0.5">
                <Select width="auto" label="Sort by" className="jn:min-w-40">
                  <SelectOption value="name" label="Name" />
                  <SelectOption value="status" label="Status" />
                  <SelectOption value="region" label="Region" />
                </Select>
                <SortButton order={sortOrder} onChange={setSortOrder} />
              </Stack>
              <Stack gap="0.5">
                <PopupMenu>
                  <PopupMenuToggle as={React.Fragment}>
                    <Button icon="moreVert" title="More actions" />
                  </PopupMenuToggle>
                  <PopupMenuOptions>
                    <PopupMenuItem label="Export CSV" />
                    <PopupMenuItem label="Refresh all" />
                  </PopupMenuOptions>
                </PopupMenu>
                <Button label="Create Server" variant="primary" className="jn:whitespace-nowrap" />
              </Stack>
            </Stack>
          </Stack>

          {/* Zone 2 — DataGridToolbar provides background and spacing */}
          <DataGridToolbar>
            <Stack direction="vertical" gap="2">
              {/* Zone 2: Filters + Search */}
              <Stack distribution="between" alignment="center">
                <InputGroup>
                  <Select width="auto" label="Filter by" className="jn:min-w-44">
                    <SelectOption value="status" label="Status" />
                    <SelectOption value="region" label="Region" />
                    <SelectOption value="az" label="Availability Zone" />
                  </Select>
                  <ComboBox>
                    <ComboBoxOption value="running" label="Running" />
                    <ComboBoxOption value="stopped" label="Stopped" />
                    <ComboBoxOption value="error" label="Error" />
                  </ComboBox>
                </InputGroup>
                <SearchInput placeholder="Search servers…" />
              </Stack>

              {/* Zone 2 cont: Active filter pills */}
              <Stack gap="2" wrap>
                <Pill pillKey="Status" pillValue="Running" closeable />
                <Button label="Clear filters" size="xs" />
              </Stack>
            </Stack>
          </DataGridToolbar>
          <DataGridToolbar>
            {/* Zone 3: Bulk actions + item count + refresh */}
            <Stack distribution="between" alignment="center" className="jn:text-sm">
              <Stack gap="2" alignment="center">
                <Checkbox aria-label="Select all items" />
                <PopupMenu className="jn:flex jn:items-center">
                  <PopupMenuToggle as={React.Fragment}>
                    <Button size="xs" icon="moreVert" label="Actions" />
                  </PopupMenuToggle>
                  <PopupMenuOptions>
                    <PopupMenuItem label="Download" />
                    <PopupMenuItem label="Delete" />
                  </PopupMenuOptions>
                </PopupMenu>
              </Stack>
              <span className="jn:theme-color-text-light">Showing 2 of 4 servers</span>
              <Stack gap="2" alignment="center">
                <span>Last update: 20.05.2026 @09:41</span>
                <Button label="Update" size="xs" />
              </Stack>
            </Stack>
          </DataGridToolbar>
        </Stack>

        <DataGrid columns={6} minContentColumns={[0, 5]}>
          <DataGridRow>
            <DataGridHeadCell />
            <DataGridHeadCell>Name</DataGridHeadCell>
            <DataGridHeadCell>Region</DataGridHeadCell>
            <DataGridHeadCell>Status</DataGridHeadCell>
            <DataGridHeadCell>Availability Zone</DataGridHeadCell>
            <DataGridHeadCell />
          </DataGridRow>
          {servers.map((s) => (
            <DataGridRow key={s.id}>
              <DataGridCell verticalAlignment="center">
                <Checkbox
                  aria-label={`Select ${s.name}`}
                  checked={!!selected[s.id]}
                  onChange={(e) => setSelected((prev) => ({ ...prev, [s.id]: e.target.checked }))}
                />
              </DataGridCell>
              <DataGridCell>{s.name}</DataGridCell>
              <DataGridCell>{s.region}</DataGridCell>
              <DataGridCell>{s.status}</DataGridCell>
              <DataGridCell>{s.az}</DataGridCell>
              <DataGridCell>
                <PopupMenu>
                  <PopupMenuOptions>
                    <PopupMenuItem label="Edit" />
                    <PopupMenuItem label="Download" />
                    <PopupMenuItem label="Delete" />
                  </PopupMenuOptions>
                </PopupMenu>
              </DataGridCell>
            </DataGridRow>
          ))}
        </DataGrid>
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "The complete DataGrid pattern: a fully featured header (all three zones) composed above an actual `DataGrid`. The header composition and the `DataGrid` are wrapped together in an outer vertical `Stack`. Every header zone and element is optional — this example shows all of them for reference.",
      },
      // Keep this source.code in sync with the render function above
      source: {
        code: `
<Stack direction="vertical" className="juno-pattern-datagrid-outer">
  <Stack direction="vertical" className="juno-pattern-datagrid-header">
    {/* Zone 1 — bare Stack, no background */}
    <Stack distribution="between" alignment="center" gap="2" className="pb-2">
      <TabBar appearance="buttons" activeItem={activeFilter} onActiveItemChange={setActiveFilter}>
        <TabBarItem label="All" />
        <TabBarItem label="Running" />
        <TabBarItem label="Stopped" />
        <TabBarItem label="Error" />
      </TabBar>
      <Stack gap="2">
        <Stack gap="0.5">
          <Select width="auto" label="Sort by" className="min-w-40">
            <SelectOption value="name" label="Name" />
            <SelectOption value="status" label="Status" />
            <SelectOption value="region" label="Region" />
          </Select>
          <SortButton order={sortOrder} onChange={setSortOrder} />
        </Stack>
        <Stack gap="0.5">
          <PopupMenu>
            <PopupMenuToggle as={React.Fragment}>
              <Button icon="moreVert" title="More actions" />
            </PopupMenuToggle>
            <PopupMenuOptions>
              <PopupMenuItem label="Export CSV" />
              <PopupMenuItem label="Refresh all" />
            </PopupMenuOptions>
          </PopupMenu>
          <Button label="Create Server" variant="primary" className="whitespace-nowrap" />
        </Stack>
      </Stack>
    </Stack>

    {/* Zone 2 — DataGridToolbar provides background and spacing */}
    <DataGridToolbar>
      <Stack direction="vertical" gap="2">
        <Stack distribution="between" alignment="center">
          <InputGroup>
            <Select width="auto" label="Filter by" className="min-w-44">
              <SelectOption value="status" label="Status" />
              <SelectOption value="region" label="Region" />
              <SelectOption value="az" label="Availability Zone" />
            </Select>
            <ComboBox>
              <ComboBoxOption value="running" label="Running" />
              <ComboBoxOption value="stopped" label="Stopped" />
              <ComboBoxOption value="error" label="Error" />
            </ComboBox>
          </InputGroup>
          <SearchInput placeholder="Search servers…" />
        </Stack>
        <Stack gap="2" wrap>
          <Pill pillKey="Status" pillValue="Running" closeable />
          <Button label="Clear filters" size="xs" />
        </Stack>
      </Stack>
    </DataGridToolbar>

    {/* Zone 3 — separate DataGridToolbar */}
    <DataGridToolbar>
      <Stack distribution="between" alignment="center" className="text-sm">
        <Stack gap="2" alignment="center">
          <Checkbox aria-label="Select all items" />
          <PopupMenu className="flex items-center">
            <PopupMenuToggle as={React.Fragment}>
              <Button size="xs" icon="moreVert" label="Actions" />
            </PopupMenuToggle>
            <PopupMenuOptions>
              <PopupMenuItem label="Download" />
              <PopupMenuItem label="Delete" />
            </PopupMenuOptions>
          </PopupMenu>
        </Stack>
        <span className="theme-color-text-light">Showing 2 of 4 servers</span>
        <Stack gap="2" alignment="center">
          <span>Last update: 20.05.2026 @09:41</span>
          <Button label="Update" size="xs" />
        </Stack>
      </Stack>
    </DataGridToolbar>
  </Stack>

  <DataGrid columns={6} minContentColumns={[0, 5]}>
    <DataGridRow>
      <DataGridHeadCell />
      <DataGridHeadCell>Name</DataGridHeadCell>
      <DataGridHeadCell>Region</DataGridHeadCell>
      <DataGridHeadCell>Status</DataGridHeadCell>
      <DataGridHeadCell>Availability Zone</DataGridHeadCell>
      <DataGridHeadCell />
    </DataGridRow>
    {servers.map((s) => (
      <DataGridRow key={s.id}>
        <DataGridCell verticalAlignment="center">
          <Checkbox
            aria-label={\`Select \${s.name}\`}
            checked={!!selected[s.id]}
            onChange={(e) => setSelected((prev) => ({ ...prev, [s.id]: e.target.checked }))}
          />
        </DataGridCell>
        <DataGridCell>{s.name}</DataGridCell>
        <DataGridCell>{s.region}</DataGridCell>
        <DataGridCell>{s.status}</DataGridCell>
        <DataGridCell>{s.az}</DataGridCell>
        <DataGridCell>
          <PopupMenu>
            <PopupMenuOptions>
              <PopupMenuItem label="Edit" />
              <PopupMenuItem label="Download" />
              <PopupMenuItem label="Delete" />
            </PopupMenuOptions>
          </PopupMenu>
        </DataGridCell>
      </DataGridRow>
    ))}
  </DataGrid>
</Stack>
        `.trim(),
      },
    },
  },
}
