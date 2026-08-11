/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import CustomLogoLandscape from "./custom-logo-placeholders/custom-logo-landscape.svg"
import CustomLogoPortrait from "./custom-logo-placeholders/custom-logo-portrait.svg"
import CustomLogoSquare from "./custom-logo-placeholders/custom-logo-square.svg"
import CustomLogoLandscapePNG from "./custom-logo-placeholders/custom-logo-landscape.png"
import CustomLogoPortraitPNG from "./custom-logo-placeholders/custom-logo-portrait.png"
import CustomLogoSquarePNG from "./custom-logo-placeholders/custom-logo-square.png"
import { PageHeader } from "./index"
import { Button } from "../Button/"
import { ThemeToggle } from "../ThemeToggle/"
import { PopupMenu, PopupMenuOptions, PopupMenuItem } from "../PopupMenu/"

type Story = StoryObj<typeof meta>

const meta: Meta<typeof PageHeader> = {
  title: "Layout/PageHeader",
  component: PageHeader,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    applicationName: {
      control: "text",
      table: {
        type: { summary: "string | ReactElement" },
      },
    },
    logo: {
      control: "boolean",
      table: {
        type: { summary: "boolean | ReactElement" },
      },
    },
  },
}
export default meta

export const Default: Story = {
  args: {
    applicationName: "My App",
    onClick: undefined,
  },
}

export const WithapplicationName: Story = {
  args: {
    applicationName: "My Awesome App",
  },
}

export const WithapplicationNameAndChildren: Story = {
  args: {
    applicationName: "My Awesome App",
    children: (
      <>
        <span>Jane Doe</span>
        <Button size="small">Log Out</Button>
      </>
    ),
  },
}

export const NoapplicationNameWithChildren: Story = {
  args: {
    children: (
      <>
        <span>Jane Doe</span>
        <Button size="small">Log Out</Button>
      </>
    ),
  },
}

export const NoLogo: Story = {
  args: {
    logo: false,
    applicationName: "My Awesome App",
    children: (
      <>
        <span>Jane Doe</span>
        <Button size="small">Log Out</Button>
      </>
    ),
  },
}

export const WithCustomLogoSquareInline: Story = {
  args: {
    logo: <CustomLogoSquare alt={""} />,
    applicationName: "My Awesome App",
    children: (
      <>
        <span>Jane Doe</span>
        <Button size="small">Log Out</Button>
      </>
    ),
  },
}

export const WithCustomLogoLandscapeInline: Story = {
  args: {
    logo: <CustomLogoLandscape alt={""} />,
    applicationName: "My Awesome App",
    children: (
      <>
        <span>Jane Doe</span>
        <Button size="small">Log Out</Button>
      </>
    ),
  },
}

export const WithCustomLogoPortraitInline: Story = {
  args: {
    logo: <CustomLogoPortrait alt={""} />,
    applicationName: "My Awesome App",
  },
}

export const WithCustomLogoPNGSquare: Story = {
  args: {
    logo: <img src={CustomLogoSquarePNG} alt="Custom Logo Square" />,
    applicationName: "My Awesome App",
    children: (
      <>
        <span>Jane Doe</span>
        <Button size="small">Log Out</Button>
      </>
    ),
  },
}

export const WithCustomLogoPNGLandscape: Story = {
  args: {
    logo: <img src={CustomLogoLandscapePNG} alt="Custom Logo Landscape" />,
    applicationName: "My Awesome App",
    children: (
      <>
        <span>Jane Doe</span>
        <Button size="small">Log Out</Button>
      </>
    ),
  },
}

export const WithCustomLogoPNGPortrait: Story = {
  args: {
    logo: <img src={CustomLogoPortraitPNG} alt="Custom Logo Portrait" />,
    applicationName: "My Awesome App",
    children: (
      <>
        <span>Jane Doe</span>
        <Button size="small">Log Out</Button>
      </>
    ),
  },
}

export const WithWrappedLogo: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A 'wrapped' logo is a logo element nested inside a parent (e.g. an `<a>` link, or any other container) rather than passed directly. The size constraints applied by `PageHeader` propagate to descendants, so the inner logo is sized correctly within the fixed-height header regardless of how deeply it is nested.",
      },
    },
  },
  args: {
    logo: (
      <a href="https://example.com" aria-label="Go to homepage">
        <CustomLogoLandscape alt="" />
      </a>
    ),
    applicationName: "My Awesome App",
    children: (
      <>
        <span>Jane Doe</span>
        <Button size="small">Log Out</Button>
      </>
    ),
  },
}

export const WithThemeToggleAndUserMenu: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Visual test for icon alignment: a `ThemeToggle` next to a `PopupMenu` (default icon toggle using `accountCircle`) inside a flex container with `align-items: center`. Both icons should appear vertically centered with no extra space below the user-menu icon.",
      },
    },
  },
  args: {
    applicationName: "My Awesome App",
    children: (
      <div className="jn:flex jn:items-center jn:gap-2">
        <ThemeToggle />
        <PopupMenu icon="accountCircle">
          <PopupMenuOptions>
            <PopupMenuItem label="Profile" icon="manageAccounts" />
            <PopupMenuItem label="Settings" icon="edit" />
            <PopupMenuItem label="Log Out" icon="exitToApp" />
          </PopupMenuOptions>
        </PopupMenu>
      </div>
    ),
  },
}
