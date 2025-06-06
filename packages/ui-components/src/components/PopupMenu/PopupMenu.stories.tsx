/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { actions } from "storybook/actions"
import {
  PopupMenu,
  PopupMenuOptions,
  PopupMenuToggle,
  PopupMenuItem,
  PopupMenuSection,
  PopupMenuSectionHeading,
  PopupMenuSectionSeparator,
  usePopupMenuContext,
} from "./"
import { KnownIconsEnum } from "../Icon/Icon.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"
import { Button, ButtonProps } from "../Button/"

type StoryDefinition = () => React.ReactNode

export default {
  title: "WiP/PopupMenu",
  component: PopupMenu,
  subcomponents: {
    PopupMenuToggle,
    PopupMenuOptions,
    PopupMenuItem,
    PopupMenuSection,
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
    jn-bg-theme-accent
    jn-text-theme-highest
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
          "When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: (
      <PopupMenuOptions>
        <p>Menu goes here.</p>
      </PopupMenuOptions>
    ),
  },
}

export const NoMenu = {
  parameters: {
    docs: {
      description: {
        story:
          "This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless.",
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
          "Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: (
      <PopupMenuOptions>
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>
    ),
  },
}

export const WithChildrenAsLinks = {
  parameters: {
    docs: {
      description: {
        story: "Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: (
      <PopupMenuOptions>
        <PopupMenuItem as="a" href="https://github.com/cloudoperators/juno" label="Go to Juno on Github" />
        <PopupMenuItem as="a" href="https://www.sap.com" label="Go to sap.com" target="_blank" icon="openInNew" />
      </PopupMenuOptions>
    ),
  },
}

export const WithMenuWithRandomContent = {
  parameters: {
    docs: {
      description: {
        story:
          "`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: (
      <PopupMenuOptions>
        <p>Some content goes here.</p>
        <CloseButton variant="primary">Yay!</CloseButton>
      </PopupMenuOptions>
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
      <PopupMenuOptions>
        <PopupMenuSection>
          <PopupMenuSectionHeading>Section 1</PopupMenuSectionHeading>
          <PopupMenuItem label="Menu Item 1" />
          <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        </PopupMenuSection>
        <PopupMenuSectionSeparator />
        <PopupMenuSection>
          <PopupMenuSectionHeading label="Section 2" />
          <PopupMenuItem label="Menu Item 3" />
          <PopupMenuItem label="Menu Item 4 Disabled" disabled />
        </PopupMenuSection>
      </PopupMenuOptions>
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
      <PopupMenuOptions>
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>
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
      <PopupMenuToggle key="t">The Toggle</PopupMenuToggle>,
      <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>,
    ],
  },
}

export const WithToggleAsButtonComponent = {
  parameters: {
    docs: {
      description: {
        story:
          "Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [
      <PopupMenuToggle as={ToggleButton} key="t" />,
      <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>,
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
      <PopupMenuToggle as={StyledToggleButton} key="t" />,
      <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>,
    ],
  },
}

export const WithCustomButtonComponentAsChild = {
  parameters: {
    docs: {
      description: {
        story:
          "By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly.",
      },
    },
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [
      <PopupMenuToggle as={React.Fragment} key="t">
        <ToggleButton />
      </PopupMenuToggle>,
      <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>,
    ],
  },
}
