/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { KnownIconsEnum } from "../Icon/Icon.component"
import { Badge } from "./"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  // Opt non-interactive stories out of the global `argTypesRegex` action injection
  // (see .storybook/preview.js). Without this, an injected `onClick` spy makes every
  // badge interactive, rendering it as a `<button>` with a pointer cursor.
  args: {
    onClick: undefined,
  },
  argTypes: {
    icon: {
      options: ["default", ...Object.values(KnownIconsEnum)],
      control: { type: "select" },
    },
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const WithDefaultIcon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Pass `icon={true}` to show the icon that matches the current variant. The default variant uses the `default` icon.",
      },
    },
  },
  args: {
    text: "With Icon",
    icon: true,
  },
}

export const WithChildren: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Render arbitrary content inside the badge using `children`. Children take precedence over the `text` prop.",
      },
    },
  },
  args: {
    children: "Children content",
  },
}

export const WithAnyIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: "Pass any icon name from `KnownIcons` to show a custom icon, independent of the variant.",
      },
    },
  },
  args: {
    text: "Deleted",
    icon: "deleteForever",
  },
}

export const Info: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use the `info` variant to highlight informational states or properties.",
      },
    },
  },
  args: {
    variant: "info",
    text: "Info",
  },
}

export const InfoWithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: "Info variant with a matching icon. The icon is colored to match the variant.",
      },
    },
  },
  args: {
    variant: "info",
    text: "Info",
    icon: true,
  },
}

export const Success: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use the `success` variant to indicate a positive or completed state.",
      },
    },
  },
  args: {
    variant: "success",
    text: "Success",
  },
}

export const SuccessWithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: "Success variant with a matching icon.",
      },
    },
  },
  args: {
    variant: "success",
    text: "Success",
    icon: true,
  },
}

export const Warning: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use the `warning` variant to flag states that require attention but are not critical.",
      },
    },
  },
  args: {
    variant: "warning",
    text: "Warning",
  },
}

export const WarningWithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: "Warning variant with a matching icon.",
      },
    },
  },
  args: {
    variant: "warning",
    text: "Warning",
    icon: true,
  },
}

export const Danger: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use the `danger` variant to indicate a destructive or high-risk state.",
      },
    },
  },
  args: {
    variant: "danger",
    text: "Danger",
  },
}

export const DangerWithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: "Danger variant with a matching icon.",
      },
    },
  },
  args: {
    variant: "danger",
    text: "Danger",
    icon: true,
  },
}

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use the `error` variant to label a failed or invalid state.",
      },
    },
  },
  args: {
    variant: "error",
    text: "Error",
  },
}

export const ErrorWithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: "Error variant with a matching icon.",
      },
    },
  },
  args: {
    variant: "error",
    text: "Error",
    icon: true,
  },
}

// Interactive stories

export const AsButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "Renders the badge as a `<button>` element. Pass `onClick` to make a badge interactive.",
      },
    },
  },
  args: {
    text: "Clickable",
    onClick: () => {},
  },
}

export const AsButtonDisabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "A disabled button badge. The button is inert and visually dimmed.",
      },
    },
  },
  args: {
    text: "Disabled",
    onClick: () => {},
    disabled: true,
  },
}

export const AsLink: Story = {
  parameters: {
    docs: {
      description: {
        story: "Renders the badge as an `<a>` element. Pass `href` to make a badge a navigable link.",
      },
    },
  },
  args: {
    text: "Link",
    href: "#",
  },
}

export const AsLinkDisabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A disabled anchor badge. The `href` is stripped, `aria-disabled` and `tabIndex={-1}` are applied, and `role="link"` is preserved so screen readers still announce it as a link.',
      },
    },
  },
  args: {
    text: "Disabled Link",
    href: "#",
    disabled: true,
  },
}

export const AsButtonInfo: Story = {
  args: {
    variant: "info",
    text: "Info",
    onClick: () => {},
  },
}

export const AsButtonSuccess: Story = {
  args: {
    variant: "success",
    text: "Success",
    onClick: () => {},
  },
}

export const AsButtonWarning: Story = {
  args: {
    variant: "warning",
    text: "Warning",
    onClick: () => {},
  },
}

export const AsButtonDanger: Story = {
  args: {
    variant: "danger",
    text: "Danger",
    onClick: () => {},
  },
}

export const AsButtonError: Story = {
  args: {
    variant: "error",
    text: "Error",
    onClick: () => {},
  },
}

export const AsLinkInfo: Story = {
  args: {
    variant: "info",
    text: "Info",
    href: "#",
  },
}

export const AsLinkDanger: Story = {
  args: {
    variant: "danger",
    text: "Danger",
    href: "#",
  },
}

export const AsButtonWithIcon: Story = {
  args: {
    text: "Clickable",
    icon: true,
    onClick: () => {},
  },
}
