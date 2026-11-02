/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
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
  title: "Patterns/DataGrid/DataGrid Header",
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

- **Zone 1 — Actions:** Sorting controls, an optional overflow menu for global actions, and the primary action (e.g. "Create"). This zone has no background — it is a plain \`Stack\` with no wrapper component.
- **Zone 2 — Filters and Search:** One or more filter inputs (typically a \`Select\` + \`ComboBox\` in an \`InputGroup\`), a \`SearchInput\`, and active filter pills with a "Clear filters" button.
- **Zone 3 — DataGrid State:** Bulk actions (select-all checkbox + action menu) on the left, item count in the middle (total, or "X of Y" when filters are active), and last update timestamp with a refresh button on the right.

Zones 2 and 3 each use their own \`DataGridToolbar\`, which provides the background, padding, and separation from the grid.

Every zone and every element within a zone is optional. Only include what the specific DataGrid needs. If none of the above is needed, reconsider whether a DataGrid is the right pattern at all.

These stories document the header composition on its own. For the header composed together with an actual \`DataGrid\`, see the [DataGrid Pattern](?path=/docs/patterns-datagrid-datagrid-pattern--docs).
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

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

export const WithPredefinedFilters: Story = {
  render: () => {
    const [activeFilter, setActiveFilter] = useState<React.ReactNode>("All")

    return (
      <Stack direction="vertical">
        {/* Zone 1: Predefined filter tabs on the far left, primary action on the far right */}
        <Stack distribution="between" alignment="center" className="jn:pb-2">
          <TabBar appearance="buttons" activeItem={activeFilter} onActiveItemChange={setActiveFilter}>
            <TabBarItem label="All" />
            <TabBarItem label="Running" />
            <TabBarItem label="Stopped" />
            <TabBarItem label="Error" />
          </TabBar>
          <Button label="Create Server" variant="primary" />
        </Stack>

        {/* Zone 2: The same filters, recreatable by hand via filter inputs + search */}
        <DataGridToolbar>
          <Stack distribution="between" alignment="center">
            <InputGroup>
              <Select width="auto" label="Filter by" className="jn:min-w-44">
                <SelectOption value="status" label="Status" />
              </Select>
              <ComboBox>
                <ComboBoxOption value="running" label="Running" />
                <ComboBoxOption value="stopped" label="Stopped" />
                <ComboBoxOption value="error" label="Error" />
              </ComboBox>
            </InputGroup>
            <SearchInput placeholder="Search servers…" />
          </Stack>
        </DataGridToolbar>
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Predefined filter tabs in Zone 1. Use a `TabBar` with `appearance="buttons"` placed on the far left to offer a fixed set of pre-configured filters — each tab a meaningful subset of the same data set (here, servers by status). They save users from repeatedly configuring the same filters for frequently accessed subsets. Zone 1 is a bare `Stack` with no background; other Zone 1 content such as the primary action sits on the far right. Predefined filter tabs must always operate on the same entities, just filtered differently — never use them as navigation tabs for unrelated data sets. If the tabs would switch between entirely different entities, use page-level tabs with an independent DataGrid per tab instead. Each predefined filter must always be reproducible by hand through the Zone 2 filter controls — here, selecting "Status" and a status value recreates the corresponding tab. The tabs are a shortcut for frequent subsets, never a filter that cannot otherwise be configured manually.',
      },
      source: { type: "dynamic" },
    },
  },
}

export const WithFiltersSearchAndState: Story = {
  render: () => (
    <Stack direction="vertical">
      <DataGridToolbar>
        <Stack direction="vertical" gap="2">
          {/* Zone 2: Filters + Search */}
          <Stack distribution="between" alignment="center">
            <InputGroup>
              <Select width="auto" className="jn:min-w-44">
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
            <Button label="Clear filters" size="xs" />
          </Stack>
        </Stack>
      </DataGridToolbar>
      <DataGridToolbar>
        {/* Zone 3: Item count + Refresh */}
        <Stack distribution="between" alignment="center" className="jn:text-sm">
          <span>Showing 2 of 4 servers</span>
          <Stack gap="2" alignment="center">
            <span>Last update: 20.05.2026 @09:41</span>
            <Button label="Update" size="xs" />
          </Stack>
        </Stack>
      </DataGridToolbar>
    </Stack>
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
    <Stack direction="vertical">
      <DataGridToolbar>
        <Stack distribution="end" alignment="center">
          <SearchInput placeholder="Search servers…" />
        </Stack>
      </DataGridToolbar>
      <DataGridToolbar>
        {/* Zone 3: Item count only */}
        <Stack distribution="center" alignment="center" className="jn:text-sm">
          <span>Showing 4 servers</span>
        </Stack>
      </DataGridToolbar>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Zone 2 with search only — no filter controls needed. Zone 3 shows item count only, centered.",
      },
      source: { type: "dynamic" },
    },
  },
}

export const FullyFeatured: Story = {
  render: () => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
    const [activeFilter, setActiveFilter] = useState<React.ReactNode>("All")

    return (
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
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fully featured DataGrid header, showing all three zones on their own (no grid). Zone 1 (predefined filter tabs, sort, overflow menu, primary action) is a bare `Stack` — no background, no `DataGridToolbar`. Zones 2 and 3 each get their own `DataGridToolbar`. Zone 3 carries bulk actions (checkbox + action menu) on the left, item count in the middle, and last update + refresh on the right. Every zone and every element within it is optional. All header zones are wrapped in a single vertical `Stack`. For the header composed together with an actual `DataGrid`, see the [DataGrid Pattern](?path=/docs/patterns-datagrid-datagrid-pattern--docs).",
      },
      // Keep this source.code in sync with the render function above
      source: {
        code: `
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
        `.trim(),
      },
    },
  },
}
