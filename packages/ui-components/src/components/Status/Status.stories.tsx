/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Status } from "./index"
import { Button } from "../Button/Button.component"
import { DataGrid } from "../DataGrid/DataGrid.component"
import { DataGridRow } from "../DataGridRow/DataGridRow.component"
import { DataGridCell } from "../DataGridCell/DataGridCell.component"
import { DataGridHeadCell } from "../DataGridHeadCell/DataGridHeadCell.component"
import { DataGridToolbar } from "../DataGridToolbar/DataGridToolbar.component"
import { SearchInput } from "../SearchInput/SearchInput.component"
import { Stack } from "../Stack/Stack.component"

const meta: Meta<typeof Status> = {
  title: "Components/Status",
  component: Status,
  argTypes: {
    status: {
      control: "select",
      options: ["progress", "error", "empty", "no-matches"],
    },
    action: { control: false },
  },
  parameters: {
    docs: {
      description: {
        component:
          "`Status` is a general-purpose component for communicating non-data states: in progress, error, empty, and no matches. Use it as the default drop-in whenever a component, view, or data container has no local or specific way to handle these states — it covers application-, page-, and section-level states as well as error boundary fallbacks.\n\nWhen used inside a `DataGrid`, wrap `Status` in a `DataGridRow` and `DataGridCell` with the appropriate `colSpan` — `Status` renders a `<div>` only and has no table markup of its own.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Status>

const longStackTrace = `Error: Failed to fetch resource
  at fetchData (api.ts:42)
  at async loadServices (services.ts:17)
  at async ServiceList.componentDidMount (ServiceList.tsx:88)
  at async Promise.all (index 0)
  at async fetchAll (dataLoader.ts:130)
  at async DataLoader.load (dataLoader.ts:98)
  at async DataLoader.reload (dataLoader.ts:112)
  at async AppBootstrap.init (AppBootstrap.ts:54)
  at async AppBootstrap.run (AppBootstrap.ts:67)
  at async main (index.ts:12)
Caused by: NetworkError: net::ERR_CONNECTION_REFUSED
  at XMLHttpRequest.onload (http.ts:23)
  at XMLHttpRequest.dispatchEvent (xhr-polyfill.js:14)
  at EventTarget.dispatchEvent (event-target.js:88)
  at XMLHttpRequest.send (xhr.ts:201)
  at HttpClient.request (http-client.ts:77)
  at HttpClient.get (http-client.ts:92)
  at fetchData (api.ts:38)
  at retryWithBackoff (retry.ts:14)
  at retryWithBackoff (retry.ts:22)
  at retryWithBackoff (retry.ts:22)
  at async fetchWithRetry (fetchWithRetry.ts:9)
  at async ResourceStore.fetch (ResourceStore.ts:61)
  at async ResourceStore.refresh (ResourceStore.ts:74)
  at async ResourceStore.initialize (ResourceStore.ts:88)
  at async App.bootstrap (App.tsx:33)
  at async App.componentDidMount (App.tsx:44)
  at async renderWithHooks (react-dom.development.js:14985)
  at async commitLifeCycles (react-dom.development.js:20663)`

export const Default: Story = {
  args: {},
}

export const HttpError: Story = {
  args: { status: "error", code: 404 },
  parameters: {
    docs: {
      description: {
        story: "Page-level 404 error. Title and body are derived from the HTTP error code reference.",
      },
    },
  },
}

export const WithDetails: Story = {
  args: {
    status: "error",
    details: longStackTrace,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Pass a stack trace or server response via `details` to render it in a scrollable `<pre>` block below the message. Useful for technical users who need the full error context.",
      },
    },
  },
}

export const WithAction: Story = {
  args: { status: "error" },
  render: (args) => <Status {...args} action={<Button variant="primary">Retry</Button>} />,
  parameters: {
    docs: {
      description: {
        story: "Pass any element via the `action` slot — typically a `Button` or a button-styled anchor.",
      },
    },
  },
}

export const Loading: Story = {
  args: { status: "progress" },
  parameters: {
    docs: {
      description: {
        story: 'Use `status="progress"` at page or section level while data is being fetched.',
      },
    },
  },
}

export const DataGridLoading: Story = {
  args: { status: "progress", title: "Loading Servers …" },
  render: (args) => (
    <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
          <DataGridHeadCell>Last Updated</DataGridHeadCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell colSpan={4}>
            <Status {...args} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `status="progress"` inside a `DataGridRow` spanning all columns while data is being fetched. Use the title `title` prop to further qualify the kind of items currently being loaded if possible, otherwise the default title "Loading …" will be rendered.',
      },
    },
  },
}

export const DataGridError: Story = {
  args: { status: "error" },
  render: (args) => (
    <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
          <DataGridHeadCell>Last Updated</DataGridHeadCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell colSpan={4}>
            <Status {...args} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `status="error"` inside a `DataGridRow` spanning all columns when a data fetch or operation has failed.',
      },
    },
  },
}

export const DataGridEmpty: Story = {
  args: { status: "empty" },
  render: (args) => (
    <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
          <DataGridHeadCell>Last Updated</DataGridHeadCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell colSpan={4}>
            <Status {...args} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `status="empty"` inside a `DataGridRow` spanning all columns when the data source contains no items.',
      },
    },
  },
}

export const DataGridNoMatches: Story = {
  args: { status: "no-matches" },
  render: (args) => (
    <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
          <DataGridHeadCell>Last Updated</DataGridHeadCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell colSpan={4}>
            <Status {...args} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `status="no-matches"` inside a `DataGridRow` spanning all columns when items exist but none match the currently applied filters.',
      },
    },
  },
}

export const DataGridErrorWithDetails: Story = {
  args: {
    status: "error",
    details: longStackTrace,
  },
  render: (args) => (
    <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
          <DataGridHeadCell>Last Updated</DataGridHeadCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell colSpan={4}>
            <Status {...args} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "DataGrid error state with a stack trace passed via `details`.",
      },
    },
  },
}
