/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryFn, StoryObj } from "@storybook/react"
import CustomLogoLandscape from "./custom-logo-placeholders/custom-logo-landscape.svg"
import CustomLogoPortrait from "./custom-logo-placeholders/custom-logo-portrait.svg"
import CustomLogoSquare from "./custom-logo-placeholders/custom-logo-square.svg"
import CustomLogoLandscapePNG from "./custom-logo-placeholders/custom-logo-landscape.png"
import CustomLogoPortraitPNG from "./custom-logo-placeholders/custom-logo-portrait.png"
import CustomLogoSquarePNG from "./custom-logo-placeholders/custom-logo-square.png"
import { PageHeader, PageHeaderProps } from "./index"

const CustomLogoImagePNGSquare = () => <img src={CustomLogoSquarePNG} alt="Custom Logo Square" />
const CustomLogoImagePNGLandscape = () => <img src={CustomLogoLandscapePNG} alt="Custom Logo Landscape" />
const CustomLogoImagePNGPortrait = () => <img src={CustomLogoPortraitPNG} alt="Custom Logo Portrait" />

type Story = StoryObj<PageHeaderProps>

const meta: Meta<PageHeaderProps> = {
  title: "Layout/PageHeader",
  component: PageHeader,
  argTypes: {
    children: {
      control: false,
    },
    heading: {
      control: "text", // You can use "text", "object", or "null" depending on your use case
    },
    logo: { control: "boolean" }, // Control type for `logo`
  },
}
export default meta

const Template: StoryFn<PageHeaderProps> = (args) => <PageHeader {...args} />

export const Default = Template.bind({
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "The PageHeader component renders a header at the top of the website. Place as first child of AppBody.",
      },
    },
  },

  args: {
    heading: "My App",
    logo: true,
  },
})

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

export const NoLogo: Story = {
  args: {
    logo: false,
    heading: "My Awesome App",
  },
}

export const WithCustomLogoSquareInline: Story = {
  args: {
    logo: <CustomLogoSquare alt={""} />,
    heading: "My Awesome App",
  },
}

export const WithCustomLogoLandscapeInline: Story = {
  args: {
    logo: <CustomLogoLandscape alt={""} />,
    heading: "My Awesome App",
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
  },
}

export const WithCustomLogoPNGLandscape: Story = {
  args: {
    logo: <CustomLogoImagePNGLandscape />,
    heading: "My Awesome App",
  },
}

export const WithCustomLogoPNGPortrait: Story = {
  args: {
    logo: <CustomLogoImagePNGPortrait />,
    heading: "My Awesome App",
  },
}
