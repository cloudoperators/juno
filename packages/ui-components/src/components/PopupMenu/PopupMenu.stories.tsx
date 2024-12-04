/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { actions } from "@storybook/addon-actions"
import { PopupMenu, usePopupMenuContext } from "./"
import { KnownIconsEnum } from "../Icon/Icon.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"
import { Button, ButtonProps } from "../Button/"

type StoryDefinition = () => React.ReactNode

export default {
  title: "WiP/PopupMenu",
  component: PopupMenu,
  subcomponents: {
    "PopupMenu.Toggle": PopupMenu.Toggle,
    "PopupMenu.Menu": PopupMenu.Menu,
    "PopupMenu.Item": PopupMenu.Item,
    "PopupMenu.Section": PopupMenu.Section,
  },
  argTypes: {
    children: { control: false },
    icon: { options: ["moreVert", ...Object.keys(KnownIconsEnum)], control: { type: "select" } },
  },
  decorators: [(story: StoryDefinition) => <PortalProvider>{story()}</PortalProvider>],
}

// ----- Helper Components -----

// Define a custom ToggleButton component. Make sure to forward refs, otherwise a custom toggle is not going to work properly.
const ToggleButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", onClick = undefined, ...props }, ref) => (
    <Button ref={ref} className={`my-custom-toggle ${className}`} onClick={onClick} {...props}>
      Custom Toggle
    </Button>
  )
)
ToggleButton.displayName = "ToggleButton"

// Toggle button to use in a story as a popup menu toggle, also to illustrate how to use the the context to apply state-specific styling:
const StyledToggleButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { isOpen } = usePopupMenuContext()
  const { className, ...rest } = props

  return (
    <Button
      ref={ref}
      className={`toggle-button ${isOpen ? "toggle-button-open" : "toggle-button-closed"} ${className || ""}`}
      {...rest} // Forward all other props like onClick, aria-expanded, etc.
    >
      {props.children || "Toggle Me!"}
    </Button>
  )
})

StyledToggleButton.displayName = "StyledToggleButton"

// Close button to pass to menu as child element that can close the menu when clicked:
const CloseButton: React.FC<ButtonProps> = (props) => {
  const { close } = usePopupMenuContext()
  return <Button onClick={close} {...props} />
}

// ----- Stories -----

export const Default = {
  parameters: {
    docs: {
      description: {
        story:
          "When no `<PopupMenu.Menu>` child is passed, the component will render but there will be no visible menu unless passed.OnOpen and onCliose handlers will be run though.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
  },
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
    ...actions("onOpen", "onClose"),
    children: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    ),
  },
}

export const WithMenuWithRandomContent = {
  parameters: {
    docs: {
      description: {
        story: "If needed, the Popup menu may contain random elements other than PopupMenu.Item.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: (
      <PopupMenu.Menu>
        <p>Some content goes here.</p>
        <CloseButton variant="primary">Yay!</CloseButton>
      </PopupMenu.Menu>
    ),
  },
}

export const WithMenuChildWithSection = {
  parameters: {
    docs: {
      description: {
        story:
          "In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: (
      <PopupMenu.Menu>
        <PopupMenu.Section title="Some Options">
          <PopupMenu.Item label="Menu Item 1" />
          <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        </PopupMenu.Section>
        <PopupMenu.Section title="Some Other Options">
          <PopupMenu.Item label="Menu Item 3" />
          <PopupMenu.Item label="Menu Item 4 Disabled" disabled />
        </PopupMenu.Section>
      </PopupMenu.Menu>
    ),
  },
}

export const WithIcon = {
  parameters: {
    docs: {
      description: {
        story: "A default toggle can be rendered with a custom icon without having to pass a custom toggle element.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    icon: "warning",
    children: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
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
    ...actions("onOpen", "onClose"),
    children: [
      <PopupMenu.Toggle key="t">The Toggle</PopupMenu.Toggle>,
      <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
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
    ...actions("onOpen", "onClose"),
    children: [
      <PopupMenu.Toggle as={ToggleButton} key="t" />,
      <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>,
    ],
  },
}

export const WithToggleAsButtonStyledByState = {
  args: {
    ...actions("onOpen", "onClose"),
    children: [
      <PopupMenu.Toggle as={StyledToggleButton} key="t" />,
      <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>,
    ],
  },
}

export const WIPWithCustomButtonComponentAsChild = {
  args: {
    ...actions("onOpen", "onClose"),
    children: [
      <PopupMenu.Toggle key="t">
        <ToggleButton />
      </PopupMenu.Toggle>,
      <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>,
    ],
  },
}
