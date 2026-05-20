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
import { PopupMenu, PopupMenuOptions, PopupMenuItem } from "../PopupMenu"
import { InputGroup } from "../InputGroup"
import { ComboBox } from "../ComboBox"
import { ComboBoxOption } from "../ComboBoxOption"
import { SearchInput } from "../SearchInput"
import { Pill } from "../Pill"
import { PortalProvider } from "../PortalProvider"

const meta: Meta = {
  title: "Components/DataGrid/DataGrid Header",
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
The DataGrid header is a composition pattern, not a single component. It sits above the column headers and holds everything users need to interact with and configure the dataset.

The header is structured in up to three zones:

- **Zone 1 — Actions:** Bulk actions (select-all checkbox + action menu), sorting controls, an optional overflow menu for global actions, and the primary action (e.g. "Create"). This zone has no background — it is a plain \`Stack\` with no wrapper component.
- **Zone 2 — Filters and Search:** One or more filter inputs (typically a \`Select\` + \`ComboBox\` in an \`InputGroup\`), a \`SearchInput\`, and active filter pills with a "Clear filters" button.
- **Zone 3 — DataGrid State:** Item count (total, or "X of Y" when filters are active), last update timestamp, and a refresh button.

Zones 2 and 3 share a background and are wrapped together in a single \`DataGridToolbar\`, which provides the background color, padding, and separation from the grid below.

Every zone and every element within a zone is optional. Only include what the specific DataGrid needs. If none of the above is needed, reconsider whether a DataGrid is the right pattern at all.
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

export const WithPrimaryAction: Story = {
  render: () => (
    <Stack distribution="end" className="jn:pb-2">
      <Button label="Create Server" variant="primary" />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The simplest DataGrid header: a single primary action. No `DataGridToolbar` needed — Zone 1 content sits directly in a `Stack`.",
      },
      source: { type: "dynamic" },
    },
  },
}

export const WithFiltersSearchAndState: Story = {
  render: () => (
    <DataGridToolbar>
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
            <span>Last update: 20.05.2026 @09:41</span>
            <Button label="Update" size="small" />
          </Stack>
        </Stack>
      </Stack>
    </DataGridToolbar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Zones 2 and 3: filter controls, active filter pills, search, item count, and a refresh button. `DataGridToolbar` provides the background and spacing. Zone 1 is not needed here — no bulk actions or primary action required for this view.",
      },
      source: { type: "dynamic" },
    },
  },
}

export const WithSearchOnly: Story = {
  render: () => (
    <DataGridToolbar>
      <Stack distribution="end" alignment="center">
        <SearchInput placeholder="Search servers…" />
      </Stack>
    </DataGridToolbar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Zone 2 with search only — no filter controls needed. Use this when the dataset doesn't require structured filtering.",
      },
      source: { type: "dynamic" },
    },
  },
}

export const FullyFeatured: Story = {
  render: () => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

    return (
      <>
        <Stack direction="vertical">
          {/* Zone 1: Actions — no DataGridToolbar needed, no background */}
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

          {/* Zones 2+3 — DataGridToolbar provides background and spacing */}
          <DataGridToolbar>
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
                  <span>Last update: 20.05.2026 @09:41</span>
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
          "Fully featured DataGrid header. Zone 1 (bulk actions, sort, primary action) is a bare `Stack` with no wrapper — no background, no `DataGridToolbar`. Zones 2+3 (filters, active filter pills, search, item count, refresh) are wrapped in `DataGridToolbar` which provides the background and spacing. Every zone and every element within it is optional.",
      },
      // Keep this source.code in sync with the render function above
      source: {
        code: `
<Stack direction="vertical">
  {/* Zone 1 — bare Stack, no wrapper, no background */}
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

  {/* Zones 2+3 — DataGridToolbar provides background and spacing */}
  <DataGridToolbar>
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
          <span>Last update: 20.05.2026 @09:41</span>
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
        `.trim(),
      },
    },
  },
}
