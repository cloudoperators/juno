/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataGridToolbar } from "./index"
import { DataGrid } from "../DataGrid"
import { DataGridRow } from "../DataGridRow"
import { DataGridCell } from "../DataGridCell"
import { DataGridHeadCell } from "../DataGridHeadCell"
import { Stack } from "../Stack"
import { Button } from "../Button"
import { Checkbox } from "../Checkbox"
import { Select } from "../Select"
import { SelectOption } from "../SelectOption"
import { SortButton } from "../SortButton"
import { PopupMenu, PopupMenuOptions, PopupMenuItem } from "../PopupMenu"
import { InputGroup } from "../InputGroup"
import { ComboBox } from "../ComboBox"
import { ComboBoxOption } from "../ComboBoxOption"
import { SearchInput } from "../SearchInput"
import { Pill } from "../Pill"
import { PortalProvider } from "../PortalProvider"

const meta: Meta<typeof DataGridToolbar> = {
  title: "Components/DataGrid/DataGridToolbar",
  component: DataGridToolbar,
  argTypes: {
    children: {
      control: false,
      table: { type: { summary: "ReactNode" } },
    },
    className: {
      control: "text",
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

export const MinimalToolbar: Story = {
    decorators: [
    (Story) => (
      <PortalProvider>
        <Story />
      </PortalProvider>
    ),
  ],
  render: () => (
      <Stack distribution="end" className="jn:pb-2">
        <Button label="Create Server" variant="primary" />
      </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The simplest real-world toolbar: a single primary action. Use this when no filtering, sorting, or bulk actions are needed.",
      },
    },
  },
}

export const WithFiltersSearchAndState: Story = {
  decorators: [
    (Story) => (
      <PortalProvider>
        <Story />
      </PortalProvider>
    ),
  ],
  render: () => (
    <Stack direction="vertical">
    {/* Zone 1: Actions — no background */}
    <Stack distribution="end" className="jn:pb-2">
      <Button label="Create Server" variant="primary" />
    </Stack>
    <DataGridToolbar className="jn:bg-theme-background-lvl-1">
      <Stack direction="vertical" gap="2">
        {/* Zone 2: Filters + Search */}
        <Stack distribution="between" alignment="center">
          <InputGroup>
            <Select>
              <SelectOption value="region" label="Region" />
              <SelectOption value="status" label="Status" />
              <SelectOption value="az" label="Availability Zone" />
            </Select>
            <ComboBox>
              <ComboBoxOption value="eu-west-1" label="eu-west-1" />
              <ComboBoxOption value="us-east-1" label="us-east-1" />
              <ComboBoxOption value="ap-south-1" label="ap-south-1" />
            </ComboBox>
          </InputGroup>
          <SearchInput placeholder="Search servers…" />
        </Stack>

        {/* Zone 2 cont: Active filter pills */}
        <Stack gap="2" wrap>
          <Pill pillKey="Region" pillValue="eu-west-1" closeable />
          <Pill pillKey="Status" pillValue="Running" closeable />
          <Button label="Clear filters" variant="subdued" size="xs" />
        </Stack>

        {/* Zone 3: Item count + Refresh */}
        <Stack distribution="between" alignment="center">
          <span>Showing 2 of 4 servers</span>
          <Stack gap="2" alignment="center">
            <span>Last update: 19.05.2026 @09:41</span>
            <Button label="Update" size="small" />
          </Stack>
        </Stack>
      </Stack>
    </DataGridToolbar>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toolbar covering Zones 2 and 3: filter controls, active filter pills, search, item count, and a refresh button. The background is applied via `className`. Zone 1 is not needed here — no bulk actions or primary action are required for this view.",
      },
    },
  },
}

export const FullToolbar: Story = {
  decorators: [
    (Story) => (
      <PortalProvider>
        <Story />
      </PortalProvider>
    ),
  ],
  render: () => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

    return (
      <>
        <Stack direction="vertical">
          {/* Zone 1: Actions — no background */}
          <Stack distribution="between" alignment="center" className="jn:pb-2">
              <Stack gap="2" alignment="center">
                <Checkbox label="Select all" />
                <PopupMenu>
                  <PopupMenuOptions>
                    <PopupMenuItem label="Download" />
                    <PopupMenuItem label="Delete" />
                  </PopupMenuOptions>
                </PopupMenu>
              </Stack>
              <Stack gap="2" alignment="center">
                <Select>
                  <SelectOption value="name" label="Name" />
                  <SelectOption value="status" label="Status" />
                  <SelectOption value="region" label="Region" />
                </Select>
                <SortButton order={sortOrder} onChange={setSortOrder} />
                <PopupMenu>
                  <PopupMenuOptions>
                    <PopupMenuItem label="Export CSV" />
                    <PopupMenuItem label="Refresh all" />
                  </PopupMenuOptions>
                </PopupMenu>
                <Button label="Create Server" variant="primary" className="jn:whitespace-nowrap" />
              </Stack>
            </Stack>

          {/* Zones 2+3: View config — background via className */}
          <DataGridToolbar className="jn:bg-theme-background-lvl-1">
            <Stack direction="vertical" gap="2">
              {/* Zone 2: Filters + Search */}
              <Stack distribution="between" alignment="center">
                <InputGroup>
                  <Select>
                    <SelectOption value="region" label="Region" />
                    <SelectOption value="status" label="Status" />
                    <SelectOption value="az" label="Availability Zone" />
                  </Select>
                  <ComboBox>
                    <ComboBoxOption value="eu-west-1" label="eu-west-1" />
                    <ComboBoxOption value="us-east-1" label="us-east-1" />
                    <ComboBoxOption value="ap-south-1" label="ap-south-1" />
                  </ComboBox>
                </InputGroup>
                <SearchInput placeholder="Search servers…" />
              </Stack>

              {/* Zone 2 cont: Active filter pills */}
              <Stack gap="2" wrap>
                <Pill pillKey="Region" pillValue="eu-west-1" closeable />
                <Pill pillKey="Status" pillValue="Running" closeable />
                <Button label="Clear filters" variant="subdued" size="xs" />
              </Stack>

              {/* Zone 3: Item count + Refresh */}
              <Stack distribution="between" alignment="center">
                <span>Showing 2 of 4 servers</span>
                <Stack gap="2" alignment="center">
                  <span>Last update: 19.05.2026 @09:41</span>
                  <Button label="Update" size="small" />
                </Stack>
              </Stack>
            </Stack>
          </DataGridToolbar>
        </Stack>

        <DataGrid columns={4}>
          <DataGridRow>
            <DataGridHeadCell>Name</DataGridHeadCell>
            <DataGridHeadCell>Region</DataGridHeadCell>
            <DataGridHeadCell>Status</DataGridHeadCell>
            <DataGridHeadCell>Availability Zone</DataGridHeadCell>
          </DataGridRow>
          {servers.map((s) => (
            <DataGridRow key={s.id}>
              <DataGridCell>{s.name}</DataGridCell>
              <DataGridCell>{s.region}</DataGridCell>
              <DataGridCell>{s.status}</DataGridCell>
              <DataGridCell>{s.az}</DataGridCell>
            </DataGridRow>
          ))}
        </DataGrid>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fully featured toolbar with all three zones and a DataGrid below — the golden-path reference. Zone 1 (no background): bulk action controls left, sort + overflow + primary action right. Zones 2+3 (with background): filters, active filter pills, search, item count, and refresh. Each zone and every element within it is optional — include only what the specific DataGrid needs.",
      },
    },
  },
}
