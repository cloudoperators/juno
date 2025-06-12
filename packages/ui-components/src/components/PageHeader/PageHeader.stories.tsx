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

const CustomLogoImagePNGSquare = () => <img src={CustomLogoSquarePNG} alt="Custom Logo Square" />
const CustomLogoImagePNGLandscape = () => <img src={CustomLogoLandscapePNG} alt="Custom Logo Landscape" />
const CustomLogoImagePNGPortrait = () => <img src={CustomLogoPortraitPNG} alt="Custom Logo Portrait" />
const HeaderOptions = () => {
  const userNameStyles = { marginRight: "1rem" }
  return (
    <>
      <span style={userNameStyles}>Jane Doe</span>
      <Button size="small">Log Out</Button>
    </>
  )
}

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
    heading: {
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
    heading: "My App",
    logo: true,
  },
}

export const WithHeading: Story = {
  parameters: {
    docs: {
      description: { story: "PageHeader with Heading." },
    },
  },
  args: {
    heading: "My Awesome App",
  },
}

export const WithHeadingAndChildren: Story = {
  args: {
    heading: "My Awesome App",
    children: <HeaderOptions />,
  },
}

export const NoHeadingWithChildren: Story = {
  args: {
    children: <HeaderOptions />,
  },
}

export const NoLogo: Story = {
  args: {
    logo: false,
    heading: "My Awesome App",
    children: <HeaderOptions />,
  },
}

export const WithCustomLogoSquareInline: Story = {
  args: {
    logo: <CustomLogoSquare alt={""} />,
    heading: "My Awesome App",
    children: <HeaderOptions />,
  },
}

export const WithCustomLogoLandscapeInline: Story = {
  args: {
    logo: <CustomLogoLandscape alt={""} />,
    heading: "My Awesome App",
    children: <HeaderOptions />,
  },
}

export const WithCustomLogoPortraitInline: Story = {
  args: {
    logo: <CustomLogoPortrait alt={""} />,
    heading: "My Awesome App",
  },
}

export const WithCustomLogoPNGSquare: Story = {
  args: {
    logo: <CustomLogoImagePNGSquare />,
    heading: "My Awesome App",
    children: <HeaderOptions />,
  },
}

export const WithCustomLogoPNGLandscape: Story = {
  args: {
    logo: <CustomLogoImagePNGLandscape />,
    heading: "My Awesome App",
    children: <HeaderOptions />,
  },
}

export const WithCustomLogoPNGPortrait: Story = {
  args: {
    logo: <CustomLogoImagePNGPortrait />,
    heading: "My Awesome App",
    children: <HeaderOptions />,
  },
}
