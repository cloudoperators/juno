/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"

import { IntroBox } from "./index"
import heroImage from "../../img/app_bg_example.svg"

const meta: Meta<typeof IntroBox> = {
  title: "Components/IntroBox",
  component: IntroBox,
  argTypes: {
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: "Default IntroBox.",
  },
}

export const WithTitle: Story = {
  args: {
    title: "IntroBox",
    text: "IntroBox with title.",
  },
}

export const Hero: Story = {
  args: {
    title: "IntroBox",
    text: "Hero IntroBox has a larger font size and more padding",
    variant: "hero",
  },
}

export const HeroWithBGImage: Story = {
  args: {
    title: "IntroBox",
    text: "Hero IntroBox with background image. Background image must be referenced as a css bg image string. Import svg images with query param ?url.",
    variant: "hero",
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    heroImage: `url(${heroImage}?url)`,
  },
}
