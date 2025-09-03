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
