/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { PopupMenu } from "./"
import { KnownIconsEnum } from "../Icon/Icon.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"
import { Button } from "../Button/"

type StoryDefinition = () => React.ReactNode

export default {
  title: "WiP/PopupMenu",
  component: PopupMenu,
  subcomponents: {
    "PopupMenu.Toggle": PopupMenu.Toggle,
    "PopupMenu.Menu": PopupMenu.Menu,
    "PopupMenu.Item": PopupMenu.Item,
  },
  argTypes: {
    children: { control: false },
    icon: { options: ["moreVert", ...Object.keys(KnownIconsEnum)], control: { type: "select" } },
  },
  decorators: [(story: StoryDefinition) => <PortalProvider>{story()}</PortalProvider>],
}

// Type the custom ToggleButton component
type ToggleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string // Explicitly type `className` as a string
}

// Define a custom ToggleButton component
const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(({ className, ...props }, ref) => (
  <Button ref={ref} className={`my-custom-toggle ${className}`} {...props}>
    Custom Toggle
  </Button>
))
ToggleButton.displayName = "ToggleButton"

export const Default = {
  parameters: {
    docs: {
      description: {
        story: "When no `<PopupMenu.Menu>` child is passed, the component will render but do nothing.",
      },
    },
  },
  args: {},
}

export const WithMenuChild = {
  parameters: {
    docs: {
      description: {
        story:
          "Pass at least a `<PopupMenu.Menu>` component with `<PopupMenu.Item>` elements inside to render a functional menu. A default toggle element will be rendered.",
      },
    },
  },
  args: {
    children: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    ),
  },
}

export const WithIcon = {
  parameters: {
    docs: {
      description: {
        story: "A default toggle can be rendered with a custom icon.",
      },
    },
  },
  args: {
    icon: "warning",
    children: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    ),
  },
}

export const WIPWithToggleAndMenuChildren = {
  parameters: {
    docs: {
      description: {
        story: "WIP: Pass a <PopupMenu.Toggle> element (Styling TODO)",
      },
    },
  },
  args: {
    children: [
      <PopupMenu.Toggle key="t">The Toggle</PopupMenu.Toggle>,
      <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>,
    ],
  },
}

export const WIPWithToggleAsButtonComponent = {
  parameters: {
    docs: {
      description: {
        story:
          "Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenu.Toggle>` to use our own `<Button>` component, in this case we would need a different example component here.",
      },
    },
  },
  args: {
    children: [
      <PopupMenu.Toggle as={ToggleButton} key="t" />,
      <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>,
    ],
  },
}

export const WIPOpenWithMenuChild = {
  parameters: {
    docs: {
      description: {
        story:
          "WIP: Passing an `open` prop does not work yet, as it would require using our own state at the cost of loosing some of headless-ui menu's built-in functionality, such as closing the menu when clicking outside. We would have to re-implement such functionality and first discuss whether this is worth it.",
      },
    },
  },
  args: {
    open: true,
    children: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    ),
  },
}
