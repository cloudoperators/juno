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
    search: {
      control: false,
      table: {
        type: { summary: "ReactElement" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: DataGridToolbarProps) => (
    <DataGridToolbar {...args}>
      <button>Add</button>
    </DataGridToolbar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Optional toolbar for use in DataGrid. Use ButtonRow for multiple buttons",
      },
    },
  },
  args: {},
}

export const ComplexLayout: Story = {
  render: (args: DataGridToolbarProps) => (
    <DataGridToolbar {...args}>
      <Stack direction="vertical" gap="4" className="w-full">
        <Stack alignment="center" gap="8">
          <NativeSelect>
            <NativeSelectOption key={0} value="o-1" label="Option 1" />,
            <NativeSelectOption key={1} value="o-2" label="Option 2" />,
            <NativeSelectOption key={2} value="o-3" label="Option 3" />,
            <ComboBox>
              <ComboBoxOption value="electronics" />
              <ComboBoxOption value="clothing" />
              <ComboBoxOption value="furniture" />
            </ComboBox>
          </NativeSelect>
          <Button label="Clear all" variant="subdued" />
          <SearchInput placeholder="Search items..." className="ml-auto" />
        </Stack>
        <Stack gap="2" wrap>
          <Pill pillKey="category" pillValue="electronics" closeable />
          <Pill pillKey="status" pillValue="active" closeable />
          <Pill pillKey="priority" pillValue="high" closeable />
        </Stack>
      </Stack>
    </DataGridToolbar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a complex toolbar layout with elements aligned right, by default.",
      },
    },
  },
}

export const ComplexLayoutAlignLeft: Story = {
  render: (args: DataGridToolbarProps) => (
    <DataGridToolbar {...args}>
      <Stack direction="vertical" gap="4" className="w-full">
        <Stack alignment="center" gap="8">
          <NativeSelect>
            <NativeSelectOption key={0} value="o-1" label="Option 1" />,
            <NativeSelectOption key={1} value="o-2" label="Option 2" />,
            <NativeSelectOption key={2} value="o-3" label="Option 3" />,
            <ComboBox>
              <ComboBoxOption value="electronics" />
              <ComboBoxOption value="clothing" />
              <ComboBoxOption value="furniture" />
            </ComboBox>
          </NativeSelect>
          <Button label="Clear all" variant="subdued" />
          <SearchInput placeholder="Search items..." className="ml-auto" />
        </Stack>
        <Stack gap="2" wrap>
          <Pill pillKey="category" pillValue="electronics" closeable />
          <Pill pillKey="status" pillValue="active" closeable />
          <Pill pillKey="priority" pillValue="high" closeable />
        </Stack>
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
          "Demonstrates a complex toolbar layout with elements aligned left or center and search input on the right.",
      },
    },
  },
}
