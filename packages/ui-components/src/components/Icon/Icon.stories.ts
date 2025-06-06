/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Icon } from "./index.ts"
import { fn } from "storybook/test" // Import the fn function for mocking handlers
import type { Meta, StoryObj } from "@storybook/react-vite" // Import Storybook types

// Define the proper type for the default export
const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  // Add explicit spy functions for all callback props
  args: {
    onClick: fn(),
  },
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          "A generic icon component. Accepts text color classes for color. Please note that the 'jn-' prefix for tailwind classes is only necessary within the juno ui design system itself. When using icons in your own applications use the normal tailwing-generated text color classes starting with 'text-'",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    icon: "help",
    color: "jn-global-text",
  },
}

export const Info_Colored: Story = {
  args: {
    icon: "info",
    color: "jn-text-theme-info",
  },
}

export const Danger_Colored: Story = {
  args: {
    icon: "danger",
    color: "jn-text-theme-danger",
  },
}

export const Success_Colored: Story = {
  args: {
    icon: "success",
    color: "jn-text-theme-success",
  },
}

export const Warning_Colored: Story = {
  args: {
    icon: "warning",
    color: "jn-text-theme-warning",
  },
}

export const ThemeColor: Story = {
  args: {
    icon: "help",
    color: "jn-global-text",
  },
}

export const Smaller: Story = {
  args: {
    ...Default.args,
    icon: "help",
    size: "18",
  },
}

export const Larger: Story = {
  args: {
    ...Default.args,
    icon: "help",
    size: "64",
  },
}

export const IconAsLink: Story = {
  args: {
    ...Default.args,
    href: "#",
    title: "The Icon is a link",
  },
}

export const IconAsButton: Story = {
  args: {
    ...Default.args,
    title: "The Icon is a button",
    onClick: () => {
      console.log("click")
    },
  },
}

export const Account_Circle: Story = {
  args: {
    ...Default.args,
    icon: "accountCircle",
  },
}

export const Add_Circle: Story = {
  args: {
    ...Default.args,
    icon: "addCircle",
  },
}

export const Auto_Awesome_Mosaic: Story = {
  args: {
    ...Default.args,
    icon: "autoAwesomeMosaic",
  },
}

export const Auto_Awesome_Motion: Story = {
  args: {
    ...Default.args,
    icon: "autoAwesomeMotion",
  },
}

export const Bolt: Story = {
  args: {
    ...Default.args,
    icon: "bolt",
  },
}

export const Cancel: Story = {
  args: {
    ...Default.args,
    icon: "cancel",
  },
}

export const Check: Story = {
  args: {
    icon: "check",
  },
}

export const CheckCircle: Story = {
  args: {
    icon: "checkCircle",
  },
}

export const ChevronLeft: Story = {
  args: {
    icon: "chevronLeft",
  },
}

export const ChevronRight: Story = {
  args: {
    icon: "chevronRight",
  },
}

export const Close: Story = {
  args: {
    icon: "close",
  },
}

export const Comment: Story = {
  args: {
    ...Default.args,
    icon: "comment",
  },
}

export const ContentCopy: Story = {
  args: {
    icon: "contentCopy",
  },
}

export const Danger: Story = {
  args: {
    ...Default.args,
    icon: "danger",
  },
}

export const Dangerous: Story = {
  args: {
    icon: "dangerous",
  },
}

export const DeleteForever: Story = {
  args: {
    icon: "deleteForever",
  },
}

export const Description: Story = {
  args: {
    ...Default.args,
    icon: "description",
  },
}

export const DNS: Story = {
  args: {
    ...Default.args,
    icon: "dns",
  },
}

export const Download: Story = {
  args: {
    icon: "download",
  },
}

export const Edit: Story = {
  args: {
    ...Default.args,
    icon: "edit",
  },
}

export const Error: Story = {
  args: {
    ...Default.args,
    icon: "dangerous",
  },
}

export const Error_Outline: Story = {
  args: {
    ...Default.args,
    icon: "errorOutline",
  },
}

export const Exit_To_App: Story = {
  args: {
    ...Default.args,
    icon: "exitToApp",
  },
}

export const Expand_Less: Story = {
  args: {
    ...Default.args,
    icon: "expandLess",
  },
}

export const Expand_More: Story = {
  args: {
    ...Default.args,
    icon: "expandMore",
  },
}

export const Filter_Alt: Story = {
  args: {
    ...Default.args,
    icon: "filterAlt",
  },
}

export const Forum: Story = {
  args: {
    ...Default.args,
    icon: "forum",
  },
}

export const Help: Story = {
  args: {
    ...Default.args,
    icon: "help",
  },
}

export const Home: Story = {
  args: {
    ...Default.args,
    icon: "home",
  },
}

export const Info: Story = {
  args: {
    ...Default.args,
    icon: "info",
  },
}

export const Manage_Accounts: Story = {
  args: {
    ...Default.args,
    icon: "manageAccounts",
  },
}

export const Monitor_Heart: Story = {
  args: {
    ...Default.args,
    icon: "monitorHeart",
  },
}

export const More_Vert: Story = {
  args: {
    ...Default.args,
    icon: "moreVert",
  },
}

export const Nights_Stay: Story = {
  args: {
    ...Default.args,
    icon: "nightsStay",
  },
}

export const Notifications_Off: Story = {
  args: {
    ...Default.args,
    icon: "notificationsOff",
  },
}

export const Open_In_Browser: Story = {
  args: {
    ...Default.args,
    icon: "openInBrowser",
  },
}

export const Open_In_New: Story = {
  args: {
    ...Default.args,
    icon: "openInNew",
  },
}

export const Place: Story = {
  args: {
    ...Default.args,
    icon: "place",
  },
}

export const Search: Story = {
  args: {
    ...Default.args,
    icon: "search",
  },
}

export const SeverityLow: Story = {
  args: {
    ...Default.args,
    icon: "severityLow",
  },
}

export const SeverityMedium: Story = {
  args: {
    ...Default.args,
    icon: "severityMedium",
  },
}

export const SeverityHigh: Story = {
  args: {
    ...Default.args,
    icon: "severityHigh",
  },
}

export const SeverityCritical: Story = {
  args: {
    ...Default.args,
    icon: "severityCritical",
  },
}

export const Success: Story = {
  args: {
    ...Default.args,
    icon: "success",
  },
}

export const Upload: Story = {
  args: {
    ...Default.args,
    icon: "upload",
  },
}

export const Warning: Story = {
  args: {
    ...Default.args,
    icon: "warning",
  },
}

export const WBSunny: Story = {
  args: {
    ...Default.args,
    icon: "wbSunny",
  },
}

export const Widgets: Story = {
  args: {
    ...Default.args,
    icon: "widgets",
  },
}
