/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { PageHeader } from "./index.js"
import CustomLogoLandscape from "./custom-logo-placeholders/custom-logo-landscape.svg"
import CustomLogoPortrait from "./custom-logo-placeholders/custom-logo-portrait.svg"
import CustomLogoSquare from "./custom-logo-placeholders/custom-logo-square.svg"
import CustomLogoLandscapePNG from "./custom-logo-placeholders/custom-logo-landscape.png"
import CustomLogoPortraitPNG from "./custom-logo-placeholders/custom-logo-portrait.png"
import CustomLogoSquarePNG from "./custom-logo-placeholders/custom-logo-square.png"

export default {
  title: "Layout/PageHeader",
  component: PageHeader,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const CustomLogoImagePNGSquare = () => <img src={CustomLogoSquarePNG} />
const CustomLogoImagePNGLandscape = () => <img src={CustomLogoLandscapePNG} />
const CustomLogoImagePNGPortrait = () => <img src={CustomLogoPortraitPNG} />

const Template = (args) => <PageHeader {...args}></PageHeader>

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "The page header component renders a header at the top of the website. Place as first child of AppBody.",
      },
    },
  },

  args: {},
}

export const WithHeading = {
  render: Template,

  parameters: {
    docs: {
      description: { story: "PageHeader with Heading." },
    },
  },

  args: {
    heading: "My Awesome App",
  },
}

export const NoLogo = {
  render: Template,
  args: {
    logo: false,
    heading: "My Awesome App",
  },
}

export const WithCustomLogoSquareInline = {
  render: Template,
  args: {
    logo: <CustomLogoSquare />,
    heading: "My Awesome App",
  },
}

export const WithCustomLogoLandscapeInline = {
  render: Template,
  args: {
    logo: <CustomLogoLandscape />,
    heading: "My Awesome App",
  },
}

export const WithCustomLogoPortraitInline = {
  render: Template,
  args: {
    logo: <CustomLogoPortrait />,
    heading: "My Awesome App",
  },
}

export const WithCustomLogoPNGSquare = {
  render: Template,
  args: {
    logo: <CustomLogoImagePNGSquare />,
    heading: "My Awesome App",
  },
}

export const WithCustomLogoPNGLandscape = {
  render: Template,
  args: {
    logo: <CustomLogoImagePNGLandscape />,
    heading: "My Awesome App",
  },
}

export const WithCustomLogoPNGPortrait = {
  render: Template,
  args: {
    logo: <CustomLogoImagePNGPortrait />,
    heading: "My Awesome App",
  },
}
