/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataGridToolbar, DataGridToolbarProps } from "./index"
import { Pill } from "../Pill"
import { Stack } from "../Stack"
import { SearchInput } from "../SearchInput"
import { ComboBox } from "../ComboBox"
import { ComboBoxOption } from "../ComboBoxOption"
import { Button } from "../Button"
import { NativeSelectOption } from "../NativeSelectOption"
import { NativeSelect } from "../NativeSelect"
import { InputGroup } from "../InputGroup"

const meta: Meta<typeof DataGridToolbar> = {
  title: "Components/DataGrid/DataGridToolbar",
  component: DataGridToolbar,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: DataGridToolbarProps) => (
    <DataGridToolbar {...args}>
      <Stack gap="4">
        <SearchInput placeholder="Search items..." />
        <Button label="Create" />
      </Stack>
    </DataGridToolbar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates a simple toolbar layout with children right-aligned by default. Use ButtonRow for multiple buttons.",
      },
    },
  },
}

export const ComplexCustomLayout: Story = {
  render: (args: DataGridToolbarProps) => (
    <DataGridToolbar {...args}>
      <Stack direction="horizontal" distribution="between">
        <Stack direction="vertical" gap="4">
          <Stack alignment="center" gap="4">
            <InputGroup>
              <NativeSelect name="Filter" value="category">
                <NativeSelectOption value="category" label="Category" />
                <NativeSelectOption value="status" label="Status" />
                <NativeSelectOption value="priority" label="Priority" />
              </NativeSelect>
              <ComboBox>
                <ComboBoxOption value="electronics" />
                <ComboBoxOption value="clothing" />
                <ComboBoxOption value="furniture" />
              </ComboBox>
            </InputGroup>
            <Button label="Clear all" variant="subdued" />
          </Stack>
          <Stack gap="2" wrap>
            <Pill pillKey="category" pillValue="electronics" closeable />
            <Pill pillKey="status" pillValue="active" closeable />
            <Pill pillKey="priority" pillValue="high" closeable />
          </Stack>
        </Stack>
        <SearchInput placeholder="Search items..." />
      </Stack>
    </DataGridToolbar>
  ),
  args: {
    alignRight: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates a complex toolbar layout with custom styling - children aligned left and search aligned right.",
      },
    },
  },
}
