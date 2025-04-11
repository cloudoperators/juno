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

  const openStyles = `
    jn:bg-theme-accent
    jn:text-theme-highest
  `

  return (
    <Button
      ref={ref}
      className={`toggle-button ${isOpen ? `${openStyles} toggle-button-open` : "toggle-button-closed"} ${className || ""}`}
      //style={isOpen ? { "background-color": "green" } : {}}
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
          "When no `<PopupMenu.Menu>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenu.Menu is passed.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: (
      <PopupMenu.Menu>
        <p>Menu goes here.</p>
      </PopupMenu.Menu>
    ),
  },
}

export const NoMenu = {
  parameters: {
    docs: {
      description: {
        story:
          "This story has no `PopupMenu.Menu` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
  },
}

export const DisabledDefaultToggle = {
  parameters: {
    args: {
      description: {
        story: "Disable the default toggle.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    disabled: true,
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

export const WitchChildrenAsLinks = {
  parameters: {
    docs: {
      description: {
        story: "Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenu.Item elements as links.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: (
      <PopupMenu.Menu>
        <PopupMenu.Item as="a" href="https://github.com/cloudoperators/juno" label="Go to Juno on Github" />
        <PopupMenu.Item as="a" href="https://www.sap.com" label="Got to sap.com" target="_blank" icon="openInNew" />
      </PopupMenu.Menu>
    ),
  },
}

export const WithMenuWithRandomContent = {
  parameters: {
    docs: {
      description: {
        story:
          "`PopupMenu.Item` elements may contain random elements other than `PopupMenu.Item`. In such cases you may consume the PupupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed.",
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
          "In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: (
      <PopupMenu.Menu>
        <PopupMenu.Section>
          <PopupMenu.SectionHeading>Section 1</PopupMenu.SectionHeading>
          <PopupMenu.Item label="Menu Item 1" />
          <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        </PopupMenu.Section>
        <PopupMenu.SectionSeparator />
        <PopupMenu.Section>
          <PopupMenu.SectionHeading label="Section 2" />
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

export const WithToggleAndMenuChildren = {
  parameters: {
    docs: {
      description: {
        story:
          "In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children.",
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

export const WithToggleAsButtonComponent = {
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
  parameters: {
    docs: {
      description: {
        story:
          "A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle.",
      },
    },
  },
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

export const WithCustomButtonComponentAsChild = {
  parameters: {
    docs: {
      description: {
        story:
          "By default, `PopupMenu.Toggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenu.Toggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [
      <PopupMenu.Toggle as={React.Fragment} key="t">
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
