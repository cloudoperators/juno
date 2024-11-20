/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { PopupMenu } from "./"
import { Button } from "../Button/"
import { KnownIconsEnum } from "../Icon/Icon.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"

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
    children: {
      control: false,
    },
    icon: {
      options: ["moreVert", ...Object.keys(KnownIconsEnum)],
      control: { type: "select" },
    },
    menu: {
      control: false,
    },
    toggle: {
      control: false,
    },
  },
  decorators: [(story: StoryDefinition) => <PortalProvider>{story()}</PortalProvider>],
}

export const Default = {
  args: {
    menu: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    ),
  },
}

export const Open = {
  args: {
    open: true,
    menu: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    ),
  },
}

export const WithCustomIcon = {
  args: {
    icon: "warning",
    menu: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    ),
  },
}

export const Small = {
  args: {
    size: "small",
    menu: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    ),
  },
}

export const WithPopupMenuToggleAsProp = {
  args: {
    toggle: <PopupMenu.Toggle>PopupMenu.Toggle</PopupMenu.Toggle>,
    menu: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    ),
  },
}

export const WithPlainButtonToggleAsProp = {
  args: {
    toggle: <button>Toggle Menu</button>,
    menu: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    ),
  },
}

export const WithNonButtonToggleAsProp = {
  parameters: {
    docs: {
      description: {
        story:
          "When passign a random, plain html element such as a `<div` as a toggle, it will be wrapped in a `<button>` element.",
      },
    },
  },
  args: {
    toggle: <div>This is just a div</div>,
    menu: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    ),
  },
}

export const WithButtonComponentToggleAsProp = {
  args: {
    toggle: <Button label="Button Component Toggle" />,
    menu: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    ),
  },
}

export const WithSection = {
  args: {
    menu: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Section>
          <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
        </PopupMenu.Section>
      </PopupMenu.Menu>
    ),
  },
}

export const WithSectionWithTitle = {
  args: {
    menu: (
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Section title="Section Title">
          <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
        </PopupMenu.Section>
      </PopupMenu.Menu>
    ),
  },
}

export const WithNonPopupMenuMenu = {
  parameters: {
    docs: {
      description: {
        story: "If necessary, elements other than `PopupMenu.Menu` can be passed as `menu`, too.",
      },
    },
  },
  args: {
    menu: <div>I can be a menu, too!</div>,
  },
}

export const WIPWithMenuChild = {
  parameters: {
    docs: {
      description: {
        story:
          "Work in Progress: We currently do not accept toggle or menu as children. This story outlines passing a menu as a child, rendering with a default toggle.",
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

export const WIPWithPopupMenuToggleAndMenuChildren = {
  parameters: {
    docs: {
      description: {
        story:
          "Work in Progress: We currently do not accept toggle or menu as children. This story outlines passing both a `<PopupMenu.Toggle>` and a `<PopupMenu.Menu>` as children.",
      },
    },
  },
  args: {
    children: [
      <PopupMenu.Toggle key="1">Popup Menu</PopupMenu.Toggle>,
      <PopupMenu.Menu key="2">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>,
    ],
  },
}

export const WIPWithPlainButtonToggleAndMenuAsChildren = {
  parameters: {
    docs: {
      description: {
        story:
          "Work in Progress: We currently do not accept toggle or menu as children. This story outlines passing both a toggle – as a plain `<button>` element – and a `<PopupMenu.Menu>` as children.",
      },
    },
  },
  args: {
    children: [
      <button key="1">Toggle Me</button>,
      <PopupMenu.Menu key="2">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>,
    ],
  },
}

export const WIPWithButtonComponentToggleAndMenuAsChildren = {
  parameters: {
    docs: {
      description: {
        story:
          "Work in Progress: We currently do not accept toggle or menu as children. This story outlines passing both a toggle – as a Juno `<Button>` component – and a `<PopupMenu.Menu>` as children.",
      },
    },
  },
  args: {
    children: [
      <Button label="Toggle Component" key="1" />,
      <PopupMenu.Menu key="2">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>,
    ],
  },
}

export const WIPWithRandomChild = {
  parameters: {
    docs: {
      description: {
        story:
          "Work in Progress: We currently do not accept toggle or menu as children. This story outlines passing a random `<div>` as a single child. We need to determine what to do with children that can not be associated as toggle or menu.",
      },
    },
  },
  args: {
    children: <div>Some Child</div>,
  },
}
