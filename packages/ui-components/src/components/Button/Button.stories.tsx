/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Button } from "./index"
import { Icon } from "../Icon/index"
import { fn } from "@storybook/test" // Import the fn function for mocking handlers
import type { Meta, StoryObj } from "@storybook/react" // Import Meta and StoryObj types

// Define proper types for the component
type ButtonProps = React.ComponentProps<typeof Button>
type ButtonStory = StoryObj<ButtonProps>

// Fix the export default with proper typing
const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  // Add explicit spy functions for all callback props
  component: Button,
  args: {
    onClick: fn(),
  },
  argTypes: {
    icon: {
      options: ["default"],
      control: { type: "select" },
    },
    variant: {
      options: ["default", "primary", "primary-danger", "subdued"],
      control: { type: "select" },
    },
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

export default meta

export const Default: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "The default button is a neutral button that can be used multiple times on a page",
      },
    },
  },

  args: {
    label: "Default",
  },
}

export const Subdued: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story:
          "A subdued button variant, mostly used to create contrast to an primary button concerning the same usage context, or when multiple default buttons would be too much.",
      },
    },
  },

  args: {
    variant: "subdued",
    label: "Subdued",
  },
}

export const Primary: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Only use the primary button **maximum once per page** for the preferred user action",
      },
    },
  },

  args: {
    variant: "primary",
    label: "Primary",
  },
}

export const PrimaryDanger: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Use this button sparingly and only for dangerous or destructive actions",
      },
    },
  },

  args: {
    variant: "primary-danger",
    label: "Primary Danger",
  },
}

export const DefaultSize: ButtonStory = {
  args: {
    label: "Default",
  },
}

export const Small: ButtonStory = {
  args: {
    size: "small",
    label: "Small",
  },
}

export const Disabled: ButtonStory = {
  parameters: {
    docs: {
      description: { story: "Disable any button by adding `disabled` to it." },
    },
  },

  args: {
    ...Default.args,
    label: "Default Disabled",
    disabled: true,
  },
}

export const SubduedDisabled: ButtonStory = {
  parameters: {
    docs: {
      description: { story: "Disable any button by adding `disabled` to it." },
    },
  },

  args: {
    ...Subdued.args,
    label: "Subdued Disabled",
    disabled: true,
  },
}

export const PrimaryDisabled: ButtonStory = {
  parameters: {
    docs: {
      description: { story: "Disable any button by adding `disabled` to it." },
    },
  },

  args: {
    ...Primary.args,
    label: "Primary Disabled",
    disabled: true,
  },
}

export const PrimaryDangerDisabled: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Disable a Primary Danger button by adding `disabled` to it.",
      },
    },
  },

  args: {
    ...PrimaryDanger.args,
    disabled: true,
  },
}

export const DefaultWithIcon: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Default Button with icon",
      },
    },
  },

  args: {
    ...Default.args,
    label: "Default with Icon",
    icon: "warning",
  },
}

export const SubduedWithIcon: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Subdued Button with Icon",
      },
    },
  },

  args: {
    ...Subdued.args,
    icon: "warning",
    label: "Subdued with Icon",
  },
}

export const SmallWithIcon: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Small Button with Icon",
      },
    },
  },

  args: {
    ...Small.args,
    icon: "warning",
  },
}

export const IconOnlyButton: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "A button with a Icon but no label. The icon name can be passed as a prop.",
      },
    },
  },
  args: {
    icon: "warning",
  },
}

export const IconOnlyAsChild: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story:
          "A button with a Icon but no label, an Icon can also be passed as a child. Hover, active, etc. states of the icon ave to be handled manually when passing an icon as a child though.",
      },
    },
  },
  args: {
    children: <Icon />,
  },
}

export const LinkAsButton: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story:
          'If you want to render a link that looks like a button pass an "href" to the Button. All other props work the same as for regular buttons',
      },
    },
  },

  args: {
    ...Primary.args,
    label: "Link as button",
    href: "#link",
  },
}

export const LinkAsButtonWithIcon: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Link styled as a button including an icon.",
      },
    },
  },

  args: {
    ...Primary.args,
    icon: "warning",
    label: "Link as button with Icon",
    href: "#",
  },
}

export const DefaultButtonInProgress: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Default Button with an action in progress",
      },
    },
  },

  args: {
    ...Default.args,
    progress: true,
  },
}

export const IconButtonInProgress: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Icon Button with an action in progress",
      },
    },
  },

  args: {
    ...Default.args,
    label: "Default with Icon",
    icon: "warning",
    progress: true,
  },
}

export const DefaultButtonInProgressWithProgressLabel: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Default Button with an action in oprogress and an alternate label while in progress",
      },
    },
  },

  args: {
    ...Default.args,
    label: "Default with Icon",
    icon: "warning",
    progress: true,
    progressLabel: "In Progress…",
  },
}

export const SubduedButtonInProgress: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Subdued Button with an action in progress",
      },
    },
  },

  args: {
    ...Subdued.args,
    progress: true,
    progressLabel: "Subdued Button in Progress…",
  },
}

export const PrimaryButtonWithIconInProgress: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Primary Button with action in progress",
      },
    },
  },

  args: {
    ...Primary.args,
    progress: true,
    progressLabel: "Primary Button in Progress…",
  },
}

export const PrimaryDangerButtonInProgress: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Primary Danger Button with action in progress",
      },
    },
  },

  args: {
    ...PrimaryDanger.args,
    progress: true,
    progressLabel: "Primary Danger Button in Progress…",
  },
}

export const LinkAsButtonInProgress: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Link as button with action in progress. Should hardly ever be used, just to check consistent styling.",
      },
    },
  },

  args: {
    ...LinkAsButton.args,
    progress: true,
    progressLabel: "Link as button in Progress…",
  },
}

export const LinkAsButtonWithIconInProgress: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story:
          "Link as button with an icon and action in progress. Should hardly ever be used, just to check consistent styling.",
      },
    },
  },

  args: {
    ...LinkAsButtonWithIcon.args,
    progress: true,
    progressLabel: "Link as button with Icon in Progress…",
  },
}

export const DisabledInProgress: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Disabled Default Button in Progress",
      },
    },
  },

  args: {
    ...Disabled.args,
    progress: true,
  },
}

export const PrimaryDisabledInProgress: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Disabled Primnary Button with action in progress",
      },
    },
  },

  args: {
    ...PrimaryDisabled.args,
    progress: true,
    progressLabel: "Disabled Primary Button in Progress…",
  },
}

export const PrimaryDangerDisabledInProgress: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Disabled Primary Danger Button in Progress…",
      },
    },
  },

  args: {
    ...PrimaryDangerDisabled.args,
    progress: true,
    progressLabel: "Disabled Primary Danger Button in Progress…",
  },
}

export const SmallInProgress: ButtonStory = {
  parameters: {
    docs: {
      description: {
        story: "Small Button in Progress",
      },
    },
  },

  args: {
    ...Small.args,
    progress: true,
    progressLabel: "Small in Progress…",
  },
}
